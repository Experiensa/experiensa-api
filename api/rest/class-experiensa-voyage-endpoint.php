<?php
/**
* Voyage endpoints.
* Tutorial : https://upnrunn.com/blog/2018/04/how-to-extend-wp-rest-api-from-your-custom-plugin-part-3/
*/
class Experiensa_Voyage_Endpoint extends WP_REST_Controller {
  /**
  * Constructor.
  */
  public function __construct() {
    $this->namespace = 'experiensa-rest-api/v1';
    $this->rest_base = 'voyages';
    $this->post_type = 'exp_voyage';
  }
  /**
  * Register the component routes.
  */
  public function register_routes() {
    register_rest_route(
      $this->namespace,
      $this->rest_base,
      [[
        'methods'             => WP_REST_Server::READABLE,
        'callback'            => array( $this, 'get_items' ),
        'permission_callback' => array( $this, 'get_items_permissions_check' ),
        'args'                => $this->get_collection_params(),
        ]]
      );
    }

    /**
    * Retrieve voyages.
    */
    public function get_items( $request ) {
      $args = array(
        'post_type'      => $this->post_type,
        'posts_per_page' => $request['per_page'],
        'page'           => $request['page'],
      );

      $voyages = get_posts( $args );
      $data = array();

      if ( empty( $voyages ) ) {
        return null;
      }

      if ( $voyages ) {
        foreach ( $voyages as $voyage ) :
          $itemdata = $this->prepare_item_for_response( $voyage, $request );
          $data[] = $this->prepare_response_for_collection( $itemdata );
        endforeach;
      }

      $data = rest_ensure_response( $data );
      return $data;
    }

    /**
    * Check if a given request has access to restaurant items.
    */
    public function get_items_permissions_check( $request ) {
      return true;
    }


    /**
    * Get the query params for collections
    */
    public function get_collection_params() {
      return array(
        'page'     => array(
          'description'       => 'Current page of the collection.',
          'type'              => 'integer',
          'default'           => 1,
          'sanitize_callback' => 'absint',
        ),
        'per_page' => array(
          'description'       => 'Maximum number of items to be returned in result set.',
          'type'              => 'integer',
          'default'           => 10,
          'sanitize_callback' => 'absint',
        ),
      );
    }

    /**
    * Prepares restaurant data for return as an object.
    */
    public function prepare_item_for_response( $voyage, $request ) {
      $gallery = [];
      $gallery_ids = get_post_meta($voyage->ID,'exp_voyage_gallery');
      foreach ($gallery_ids as $key => $value) { $gallery[] = wp_get_attachment_url($value);}

      $data = array(
        'id'                => $voyage->ID,
        'title'             => $voyage->post_title,
        'link'              => get_the_permalink( $voyage->ID ),
        'slug'              => $voyage->post_name,
        'status'            => $voyage->post_status,
        'price'             => $voyage->exp_voyage_price,
        'discount'          => $voyage->exp_voyage_discount,
        'slogan'            => $voyage->exp_voyage_slogan,
        'operator'          => get_bloginfo('name'),
        'start_date'        => $voyage->exp_voyage_start_date,
        'end_date'          => $voyage->exp_voyage_end_date,
        'number_of_days'    => $voyage->exp_voyage_number_days,
        'number_of_nights'  => $voyage->exp_voyage_number_nights,
        'original_source'   => $voyage->exp_voyage_original_source,
        'content'           => $voyage->post_content,
        'extra_info'        => $voyage->exp_voyage_information_conditions,

        // Media & attached Files
        'cover_image'       => get_the_post_thumbnail_url($voyage->ID),
        'flyer'             => wp_get_attachment_url($voyage->exp_voyage_flyer),
        'portrait_image'    => wp_get_attachment_url($voyage->exp_voyage_portrait_image),
        'panorama_image'    => wp_get_attachment_url($voyage->exp_voyage_panorama_image),
        'gallery'           => $gallery,

        // Relations & associations (Taxonomies)
        'categories'        => wp_get_post_terms( $voyage->ID, 'category', array("fields" => "names")),
        'tags'              => wp_get_post_terms( $voyage->ID, 'post_tag', array("fields" => "names")),
        'region'            => wp_get_post_terms( $voyage->ID, 'exp_region', array("fields" => "names")),
        'countries'         => wp_get_post_terms( $voyage->ID, 'exp_country', array("fields" => "names")),
        'locations'         => wp_get_post_terms( $voyage->ID, 'exp_location', array("fields" => "names")),
        'themes'            => wp_get_post_terms( $voyage->ID, 'exp_theme', array("fields" => "names")),
        'included'          => wp_get_post_terms( $voyage->ID, 'exp_included', array("fields" => "names")),
        'excluded'          => wp_get_post_terms( $voyage->ID, 'exp_excluded', array("fields" => "names")),
      );

      return $data;
    }

  }
