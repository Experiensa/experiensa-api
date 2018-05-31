<?php namespace Experiensa\Plugin\Models\Taxonomy;

class Included{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy'), 0 );
//        add_action( 'after_switch_theme', 'flush_rewrite_rules' );
    }
    public static function addTaxonomy(){

        $labels = array(
            'name'                       => _x( 'Included', 'Taxonomy General Name', 'experiensa' ),
            'singular_name'              => _x( 'Included', 'Taxonomy Singular Name', 'experiensa' ),
            'menu_name'                  => __( 'Included', 'experiensa' ),
            'all_items'                  => __( 'All Included', 'experiensa' ),
            'parent_item'                => __( 'Parent Included', 'experiensa' ),
            'parent_item_colon'          => __( 'Parent Included:', 'experiensa' ),
            'new_item_name'              => __( 'New Included Name', 'experiensa' ),
            'add_new_item'               => __( 'Add New Included', 'experiensa' ),
            'edit_item'                  => __( 'Edit Included', 'experiensa' ),
            'update_item'                => __( 'Update Included', 'experiensa' ),
            'view_item'                  => __( 'View Included', 'experiensa' ),
            'separate_items_with_commas' => __( 'Separate Included with commas', 'experiensa' ),
            'add_or_remove_items'        => __( 'Add or remove Included', 'experiensa' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
            'popular_items'              => __( 'Popular Included', 'experiensa' ),
            'search_items'               => __( 'Search Included', 'experiensa' ),
            'not_found'                  => __( 'Not Found', 'experiensa' ),
            'items_list'                 => __( 'Included list', 'experiensa' ),
            'items_list_navigation'      => __( 'Included list navigation', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                       => 'exp_included',
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
        register_taxonomy( 'exp_included', array( 'post', 'exp_voyage', 'exp_estimate' ), $args );
    }
}