<?php namespace Experiensa\Plugin\Models\Taxonomy;

class Region{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy'), 0 );
    }
    public static function addTaxonomy(){
        $labels = array(
            'name'                       => _x( 'World Regions', 'Taxonomy General Name', 'experiensa' ),
            'singular_name'              => _x( 'World Region', 'Taxonomy Singular Name', 'experiensa' ),
            'menu_name'                  => __( 'World Regions', 'experiensa' ),
            'all_items'                  => __( 'All Regions', 'experiensa' ),
            'parent_item'                => __( 'Parent Region', 'experiensa' ),
            'parent_item_colon'          => __( 'Parent Region:', 'experiensa' ),
            'new_item_name'              => __( 'New Region Name', 'experiensa' ),
            'add_new_item'               => __( 'Add New Region', 'experiensa' ),
            'edit_item'                  => __( 'Edit Region', 'experiensa' ),
            'update_item'                => __( 'Update Region', 'experiensa' ),
            'view_item'                  => __( 'View Region', 'experiensa' ),
            'separate_items_with_commas' => __( 'Separate Regions with commas', 'experiensa' ),
            'add_or_remove_items'        => __( 'Add or remove Regions', 'experiensa' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
            'popular_items'              => __( 'Popular Regions', 'experiensa' ),
            'search_items'               => __( 'Search Regions', 'experiensa' ),
            'not_found'                  => __( 'Not Found', 'experiensa' ),
            'items_list'                 => __( 'Regions list', 'experiensa' ),
            'items_list_navigation'      => __( 'Regions list navigation', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                       => 'exp_region',
            'with_front'                 => true,
            'hierarchical'               => false,
        );
        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => true,
            'public'                     => true,
            'show_ui'                    => true,
            'show_admin_column'          => true,
            'show_in_nav_menus'          => true,
            'show_tagcloud'              => true,
            'show_in_rest'               => true,
            'rewrite'                    => $rewrite,
        );
        register_taxonomy( 'exp_region', array( 'exp_voyage' ), $args );
    }
}    