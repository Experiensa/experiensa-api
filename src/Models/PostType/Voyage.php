<?php namespace Experiensa\Plugin\Models\PostType;

class Voyage{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addCustomPostType'), 10, 1 );
    }
    public static function addCustomPostType(){
        $labels = array(
            'name'                  => _x( 'Voyage', 'Post Type General Name', 'experiensa'),
            'singular_name'         => _x( 'Voyage', 'Post Type Singular Name', 'experiensa'),
            'menu_name'             => __( 'Voyages', 'experiensa'),
            'name_admin_bar'        => __( 'Voyages', 'experiensa' ),
            'parent_item_colon'     => __( 'Parent Voyage:', 'experiensa'),
            'all_items'             => __( 'All Voyages', 'experiensa'),
            'add_new_item'          => __( 'Add New Voyage', 'experiensa'),
            'add_new'               => __( 'Add New', 'experiensa'),
            'new_item'              => __( 'New Voyage', 'experiensa' ),
            'edit_item'             => __( 'Edit Voyage', 'experiensa'),
            'update_item'           => __( 'Update Voyage', 'experiensa'),
            'view_item'             => __( 'View Voyage', 'experiensa'),
            'search_items'          => __( 'Search Voyage', 'experiensa'),
            'not_found'             => __( 'Not found', 'experiensa'),
            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa'),
            'items_list'            => __( 'Voyage list', 'experiensa' ),
            'items_list_navigation' => __( 'Voyage list navigation', 'experiensa' ),
            'filter_items_list'     => __( 'Filter Voyage list', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                  => 'exp_voyage',
            'with_front'            => true,
            'feeds'                 => true,
            'public'      => true,
        );

        $options = array(
            'label'                 => __( 'Voyages', 'experiensa' ),
            'description'           => __( 'List of travel offers (offers and packages)', 'experiensa' ),
            'labels'                => $labels,
            'supports'              => array('title', 'thumbnail', 'editor','excerpt', 'revisions'),
            'taxonomies'            => array( 'category', 'post_tag', 'exp_theme'),
            'hierarchical'          => false,
            'publicly_queryable'    => true,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 7,
            'menu_icon'             => 'dashicons-palmtree',
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
//        return $options;
        register_post_type( 'exp_voyage', $options );
    }
}
