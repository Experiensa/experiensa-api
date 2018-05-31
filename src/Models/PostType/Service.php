<?php namespace Experiensa\Plugin\Models\PostType;

class Service{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){
        $labels = array(
            'name'                  => _x( 'Services', 'Post Type General Name', 'experiensa' ),
            'singular_name'         => _x( 'Service', 'Post Type Singular Name', 'experiensa' ),
            'menu_name'             => __( 'Services', 'experiensa' ),
            'name_admin_bar'        => __( 'Services', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Service:', 'experiensa' ),
            'all_items'             => __( 'All Services', 'experiensa' ),
            'add_new_item'          => __( 'Add New Service', 'experiensa' ),
            'add_new'               => __( 'Add New', 'experiensa' ),
            'new_item'              => __( 'New Service', 'experiensa' ),
            'edit_item'             => __( 'Edit Service', 'experiensa' ),
            'update_item'           => __( 'Update Service', 'experiensa' ),
            'view_item'             => __( 'View Service', 'experiensa' ),
            'search_items'          => __( 'Search Service', 'experiensa' ),
            'not_found'             => __( 'Not found', 'experiensa' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa' ),
            'items_list'            => __( 'Services list', 'experiensa' ),
            'items_list_navigation' => __( 'Services list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Services list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_service',
            'with_front'            => true,
            'pages'                 => true,
            'feeds'                 => true,
        );
        $options = array(
            'label'                 => __( 'Service', 'experiensa' ),
            'description'           => __( 'List of services surrounding a trip', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'excerpt', 'thumbnail', ),
            'taxonomies'            => array( 'category', 'post_tag' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 7,
            'menu_icon'             => 'dashicons-exerpt-view',
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'show_in_rest'          => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'rewrite'               => $rewrite,
            'capability_type'       => 'page',
        );
        // Register post type
        register_post_type( 'exp_service', $options );
    }
}