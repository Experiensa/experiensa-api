<?php namespace Experiensa\Plugin\Models\PostType;

class Feedback{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){
        $labels = array(
            'name'                  => _x( 'Feedbacks', 'Post Type General Name', 'experiensa' ),
            'singular_name'         => _x( 'Feedback', 'Post Type Singular Name', 'experiensa' ),
            'menu_name'             => __( 'Feedback', 'experiensa' ),
            'name_admin_bar'        => __( 'Feedbacks', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Feedback:', 'experiensa' ),
            'all_items'             => __( 'All Feedbacks', 'experiensa' ),
            'add_new_item'          => __( 'Add New Feedback', 'experiensa' ),
            'add_new'               => __( 'Add New', 'experiensa' ),
            'new_item'              => __( 'New Feedback', 'experiensa' ),
            'edit_item'             => __( 'Edit Feedback', 'experiensa' ),
            'update_item'           => __( 'Update Feedback', 'experiensa' ),
            'view_item'             => __( 'View Feedback', 'experiensa' ),
            'search_items'          => __( 'Search Feedback', 'experiensa' ),
            'not_found'             => __( 'Not found', 'experiensa' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa' ),
            'items_list'            => __( 'Feedback list', 'experiensa' ),
            'items_list_navigation' => __( 'Feedback list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Feedback list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_feedback',
            'with_front'            => true,
            'pages'                 => true,
            'feeds'                 => true,
        );
        $options = array(
            'label'                 => __( 'Feedback', 'experiensa' ),
            'description'           => __( 'List of feedback / comments given by client regarding services', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'excerpt', ),
            'taxonomies'            => array( 'category', 'post_tag' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 25,
            'menu_icon'             => 'dashicons-nametag',
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
        register_post_type( 'exp_feedback', $options );
    }
}