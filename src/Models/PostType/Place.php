<?php namespace Experiensa\Plugin\Models\PostType;

class Place{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){
        $labels = array(
            'name'                  => _x( 'Place', 'Post Type General Name', 'experiensa'),
            'singular_name'         => _x( 'Place', 'Post Type Singular Name', 'experiensa'),
            'menu_name'             => __( 'Places', 'experiensa'),
            'name_admin_bar'        => __( 'Places', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Place:', 'experiensa'),
            'all_items'             => __( 'All Places', 'experiensa'),
            'add_new_item'          => __( 'Add New Place', 'experiensa'),
            'add_new'               => __( 'Add New', 'experiensa'),
            'new_item'              => __( 'New Place', 'experiensa' ),
            'edit_item'             => __( 'Edit Place', 'experiensa'),
            'update_item'           => __( 'Update Place', 'experiensa'),
            'view_item'             => __( 'View Place', 'experiensa'),
            'search_items'          => __( 'Search Place', 'experiensa'),
            'not_found'             => __( 'Not found', 'experiensa'),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa'),
            'items_list'            => __( 'Place list', 'experiensa' ),
            'items_list_navigation' => __( 'Place list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Place list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_place',
            'with_front'            => true,
            'pages'                 => true,
            'feeds'                 => true,
        );
        $options = array(
            'label'                 => __( 'Places', 'experiensa' ),
            'description'           => __( 'List of places', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array('title', 'thumbnail', 'editor','excerpt', 'revisions'),
            'taxonomies'            => array( 'category', 'post_tag', 'country', 'location'),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 7,
            'menu_icon'             => 'dashicons-admin-site',
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'show_in_rest'          => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'rewrite'               => $rewrite,
            'capability_type'       => 'post',
        );
        // Register post type
        register_post_type( 'exp_place', $options );
    }
}