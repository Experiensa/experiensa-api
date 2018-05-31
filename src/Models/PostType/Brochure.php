<?php namespace Experiensa\Plugin\Models\PostType;

class Brochure{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){

        $labels = array(
            'name'                  => _x( 'Brochures', 'Post Type General Name', 'experiensa' ),
            'singular_name'         => _x( 'Brochure', 'Post Type Singular Name', 'experiensa' ),
            'menu_name'             => __( 'Brochures', 'experiensa' ),
            'name_admin_bar'        => __( 'Brochures', 'experiensa' ),
            'archives'              => __( 'Brochures Archives', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Item:', 'experiensa' ),
            'all_items'             => __( 'All Brochures', 'experiensa' ),
            'add_new_item'          => __( 'Add New Brochure', 'experiensa' ),
            'add_new'               => __( 'Add New', 'experiensa' ),
            'new_item'              => __( 'New Brochure', 'experiensa' ),
            'edit_item'             => __( 'Edit Brochure', 'experiensa' ),
            'update_item'           => __( 'Update Brochure', 'experiensa' ),
            'view_item'             => __( 'View Brochure', 'experiensa' ),
            'search_items'          => __( 'Search Brochure', 'experiensa' ),
            'not_found'             => __( 'Not found', 'experiensa' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa' ),
            'featured_image'        => __( 'Featured Image', 'experiensa' ),
            'set_featured_image'    => __( 'Set featured image', 'experiensa' ),
            'remove_featured_image' => __( 'Remove featured image', 'experiensa' ),
            'use_featured_image'    => __( 'Use as featured image', 'experiensa' ),
            'insert_into_item'      => __( 'Insert into brochure', 'experiensa' ),
            'uploaded_to_this_item' => __( 'Uploaded to this brochure', 'experiensa' ),
            'items_list'            => __( 'Brochure list', 'experiensa' ),
            'items_list_navigation' => __( 'Brochures list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Brochures list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_brochure',
            'with_front'            => true,
            'pages'                 => true,
            'feeds'                 => true,
        );
        $options = array(
            'label'                 => __( 'Brochure', 'experiensa' ),
            'description'           => __( 'List of Brochures', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'thumbnail', 'revisions', ),
            'taxonomies'            => array( 'category', 'post_tag', 'country', 'theme' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 9,
            'menu_icon'             => 'dashicons-format-gallery',
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'rewrite'               => $rewrite,
            'capability_type'       => 'page',
        );
        // Register post type
        register_post_type( 'exp_brochure', $options );
    }
}