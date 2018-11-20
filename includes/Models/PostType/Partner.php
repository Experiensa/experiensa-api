<?php namespace Experiensa\Plugin\Models\PostType;

class Partner{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){
        $labels = array(
            'name'                  => _x( 'Partners', 'Post Type General Name', 'experiensa' ),
            'singular_name'         => _x( 'Partner', 'Post Type Singular Name', 'experiensa' ),
            'menu_name'             => __( 'Partners', 'experiensa' ),
            'name_admin_bar'        => __( 'Partners', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Partner:', 'experiensa' ),
            'all_items'             => __( 'All Partners', 'experiensa' ),
            'add_new_item'          => __( 'Add New Partner', 'experiensa' ),
            'add_new'               => __( 'Add New', 'experiensa' ),
            'new_item'              => __( 'New Partner', 'experiensa' ),
            'edit_item'             => __( 'Edit Partner', 'experiensa' ),
            'update_item'           => __( 'Update Partner', 'experiensa' ),
            'view_item'             => __( 'View Partner', 'experiensa' ),
            'search_items'          => __( 'Search Partner', 'experiensa' ),
            'not_found'             => __( 'Not found', 'experiensa' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa' ),
            'items_list'            => __( 'Partners list', 'experiensa' ),
            'items_list_navigation' => __( 'Partners list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Partners list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_partner',
            'with_front'            => true,
            'pages'                 => true,
            'feeds'                 => true,
        );
        $options = array(
            'label'                 => __( 'Partner', 'experiensa' ),
            'description'           => __( 'List of travel agencies, tour operators and other services that belong to the listo group', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'excerpt', 'thumbnail', ),
            'taxonomies'            => array( 'category', 'post_tag' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 8,
            'menu_icon'             => 'dashicons-businessman',
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
        register_post_type( 'exp_partner', $options );
    }
}