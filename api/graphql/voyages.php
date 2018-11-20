<?php

//https://github.com/wp-graphql/wp-graphql/issues/344

add_action( 'graphql_init', function() {
  add_filter( 'graphql_voyage_fields', function( $fields ) {

    $fields['price'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_price', true );
      },
    ];
    $fields['discount'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_discount', true );
      },
    ];

    $fields['start_date'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_start_date', true );
      },
    ];

    $fields['end_date'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_end_date', true );
      },
    ];

    $fields['slogan'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_slogan', true );
      },
    ];

    $fields['original_source'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_original_source', true );
      },
    ];

    $fields['number_of_days'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_number_days', true );
      },
    ];

    $fields['number_of_nights'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_number_nights', true );
      },
    ];

    $fields['extra_info'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_post_meta( $post->ID, 'exp_voyage_information_conditions', true );
      },
    ];

    $fields['flyer'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        $flyer = get_post_meta( $post->ID, 'exp_voyage_flyer', true );
        return wp_get_attachment_url( $flyer );
      },
    ];

    $fields['cover_image'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        return get_the_post_thumbnail_url($post->ID);
      },
    ];

    $fields['operator'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( ) {
        return get_bloginfo('name');
      },
    ];

    $fields['portrait_image'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        $flyer = get_post_meta( $post->ID, 'exp_voyage_portrait_image', true );
        return wp_get_attachment_url( $flyer );
      },
    ];

    $fields['panorama_image'] = [
      'type' => \WPGraphQL\Types::string(),
      'resolve' => function( \WP_Post $post ) {
        $flyer = get_post_meta( $post->ID, 'exp_voyage_panorama_image', true );
        return wp_get_attachment_url( $flyer );
      },
    ];

    $fields['region'] = [
      'type' => \WPGraphQL\Types::list_of(\WPGraphQL\Types::string()),
      'resolve' => function( \WP_Post $post ) {
        return wp_get_post_terms( $post->ID, 'exp_region', array("fields" => "names"));
      },
    ];

    $fields['countries'] = [
      'type' => \WPGraphQL\Types::list_of(\WPGraphQL\Types::string()),
      'resolve' => function( \WP_Post $post ) {
        return wp_get_post_terms( $post->ID, 'exp_country', array("fields" => "names"));

      },
    ];

    $fields['locations'] = [
      'type' => \WPGraphQL\Types::list_of(\WPGraphQL\Types::string()),
      'resolve' => function( \WP_Post $post ) {
        return wp_get_post_terms( $post->ID, 'exp_location', array("fields" => "names"));

      },
    ];

    $fields['themes'] = [
      'type' => \WPGraphQL\Types::list_of(\WPGraphQL\Types::string()),
      'resolve' => function( \WP_Post $post ) {
        return wp_get_post_terms( $post->ID, 'exp_theme', array("fields" => "names"));
      },
    ];

    $fields['included'] = [
      'type' => \WPGraphQL\Types::list_of(\WPGraphQL\Types::string()),
      'resolve' => function( \WP_Post $post ) {
        return wp_get_post_terms( $post->ID, 'exp_included', array("fields" => "names"));

      },
    ];

    $fields['excluded'] = [
      'type' => \WPGraphQL\Types::list_of(\WPGraphQL\Types::string()),
      'resolve' => function( \WP_Post $post ) {
        return wp_get_post_terms( $post->ID, 'exp_excluded', array("fields" => "names"));

      },
    ];

    //https://github.com/wp-graphql/wp-graphql/issues/214
    $fields['gallery'] = [
      'type' => \WPGraphQL\Types::list_of(\WPGraphQL\Types::string()),
      'resolve' => function( \WP_Post $post ) {
        $gel = get_post_meta( $post->ID, 'exp_voyage_gallery' );
        $img = [];
        foreach ($gel as $key => $value) {
          $img[] = wp_get_attachment_url($value);
        }
        return $img;
      },
    ];

    return $fields;
  } );
} );


// {
//     voyages{
//         edges{
//             node{
//                 id
//                 title
//                 link
//                 slug
//                 status
//               	price
//               	discount
//               	slogan
//               	start_date
//               	end_date
//               	number_of_days
//               	number_of_nights
//               	themes
//               	region
//               	countries
//               	locations
//               	included
//               	excluded
//               	flyer
//               	operator
//               	cover_image
//               	portrait_image
//               	panorama_image
//               	original_source
//               	gallery
//               	content
//               	extra_info
//             }
//         }
//     }
// }
