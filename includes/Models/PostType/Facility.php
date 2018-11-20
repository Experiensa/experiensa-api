<?php namespace Experiensa\Plugin\Models\PostType;

class Facility{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){
        $labels = array(
            'name'                  => _x( 'Facility', 'Post Type General Name', 'experiensa'),
            'singular_name'         => _x( 'Facility', 'Post Type Singular Name', 'experiensa'),
            'menu_name'             => __( 'Facilities', 'experiensa'),
            'name_admin_bar'        => __( 'Facilities', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Facility:', 'experiensa'),
            'all_items'             => __( 'All Facilities', 'experiensa'),
            'add_new_item'          => __( 'Add New Facility', 'experiensa'),
            'add_new'               => __( 'Add New', 'experiensa'),
            'new_item'              => __( 'New Facility', 'experiensa' ),
            'edit_item'             => __( 'Edit Facility', 'experiensa'),
            'update_item'           => __( 'Update Facility', 'experiensa'),
            'view_item'             => __( 'View Facility', 'experiensa'),
            'search_items'          => __( 'Search Facility', 'experiensa'),
            'not_found'             => __( 'Not found', 'experiensa'),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa'),
            'items_list'            => __( 'Facility list', 'experiensa' ),
            'items_list_navigation' => __( 'Facility list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Facility list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_facility',
            'with_front'            => true,
            'pages'                 => true,
            'feeds'                 => true,
        );

        $options = array(
            'label'                 => __( 'Facilities', 'experiensa' ),
            'description'           => __( 'List of facilities in the establishment', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array('title', 'thumbnail','editor', 'excerpt', 'revisions'),
            'taxonomies'            => array( 'facility-type', 'category', 'post_tag'),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 7,
            'menu_icon'             => 'dashicons-welcome-view-site',
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
        register_post_type( 'exp_facility', $options );
    }
}