<?php namespace Experiensa\Plugin\Models\PostType;

class Host{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){
        $labels = array(
            'name'                  => _x( 'Hosts', 'Post Type General Name', 'experiensa' ),
            'singular_name'         => _x( 'Host', 'Post Type Singular Name', 'experiensa' ),
            'menu_name'             => __( 'Host', 'experiensa' ),
            'name_admin_bar'        => __( 'Hosts', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Host:', 'experiensa' ),
            'all_items'             => __( 'All Hosts', 'experiensa' ),
            'add_new_item'          => __( 'Add New Host', 'experiensa' ),
            'add_new'               => __( 'Add New', 'experiensa' ),
            'new_item'              => __( 'New Host', 'experiensa' ),
            'edit_item'             => __( 'Edit Host', 'experiensa' ),
            'update_item'           => __( 'Update Host', 'experiensa' ),
            'view_item'             => __( 'View Host', 'experiensa' ),
            'search_items'          => __( 'Search Host', 'experiensa' ),
            'not_found'             => __( 'Not found', 'experiensa' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa' ),
            'items_list'            => __( 'Hosts list', 'experiensa' ),
            'items_list_navigation' => __( 'Hosts list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Hosts list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_host',
            'with_front'            => true,
            'pages'                 => true,
            'feeds'                 => true,
        );
        $options = array(
            'label'                 => __( 'Host', 'experiensa' ),
            'description'           => __( 'List of hotels, hostels, appartments, etc', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', ),
            'taxonomies'            => array( 'category', 'post_tag' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 8,
            'menu_icon'             => 'dashicons-building',
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
        register_post_type( 'exp_host', $options );
    }
}