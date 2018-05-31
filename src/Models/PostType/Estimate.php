<?php namespace Experiensa\Plugin\Models\PostType;

class Estimate{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){
        $labels = array(
            'name'                  => _x( 'Estimate', 'Post Type General Name', 'experiensa' ),
            'singular_name'         => _x( 'Estimate', 'Post Type Singular Name', 'experiensa' ),
            'menu_name'             => __( 'Estimates', 'experiensa' ),
            'name_admin_bar'        => __( 'Estimates', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Estimate:', 'experiensa' ),
            'all_items'             => __( 'All Estimates', 'experiensa' ),
            'add_new_item'          => __( 'Add New Estimate', 'experiensa' ),
            'add_new'               => __( 'Add New', 'experiensa' ),
            'new_item'              => __( 'New Estimate', 'experiensa' ),
            'edit_item'             => __( 'Edit Estimate', 'experiensa' ),
            'update_item'           => __( 'Update Estimate', 'experiensa' ),
            'view_item'             => __( 'View Estimate', 'experiensa' ),
            'search_items'          => __( 'Search Estimate', 'experiensa' ),
            'not_found'             => __( 'Not found', 'experiensa' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa' ),
            'items_list'            => __( 'Estimate list', 'experiensa' ),
            'items_list_navigation' => __( 'Estimate list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Estimate list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_estimate',
            'with_front'            => true,
            'pages'                 => true,
            'feeds'                 => true,
        );

        $options = array(
            'label'                 => __( 'Estimates', 'experiensa' ),
            'description'           => __( 'List of Estimates (quotes & estimation)', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'editor', 'author', 'comments', 'revisions', ),
            'taxonomies'            => array( 'category', 'post_tag', 'included', 'excluded' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 6,
            'menu_icon'             => 'dashicons-analytics',
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'show_in_rest'          => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'rewrite'               => $rewrite,
            'capability_type'       => 'page',
            'status' => array(
                'quoted'    => array( 'label' => __('requested','experiensa')),
                'quoted'    => array( 'label' => __('estimated','experiensa')),
                'modified'  => array( 'label' => __('Modified','experiensa')),
                'accepted'  => array( 'label' => __('Accepted','experiensa')),
                'payed'     => array( 'label' => __('Payed','experiensa')),
            )
        );
        // Register post type
        register_post_type( 'exp_estimate', $options );
    }
}