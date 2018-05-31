<?php namespace Experiensa\Plugin\Models\Taxonomy;

class Country{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy'), 0 );
    }
    public static function addTaxonomy(){
        $labels = array(
            'name'                       => _x( 'Countries', 'Taxonomy General Name', 'experiensa' ),
            'singular_name'              => _x( 'Country', 'Taxonomy Singular Name', 'experiensa' ),
            'menu_name'                  => __( 'Countries', 'experiensa' ),
            'all_items'                  => __( 'All Countries', 'experiensa' ),
            'parent_item'                => __( 'Parent Country', 'experiensa' ),
            'parent_item_colon'          => __( 'Parent Country:', 'experiensa' ),
            'new_item_name'              => __( 'New Country Name', 'experiensa' ),
            'add_new_item'               => __( 'Add New Country', 'experiensa' ),
            'edit_item'                  => __( 'Edit Country', 'experiensa' ),
            'update_item'                => __( 'Update Country', 'experiensa' ),
            'view_item'                  => __( 'View Country', 'experiensa' ),
            'separate_items_with_commas' => __( 'Separate Countries with commas', 'experiensa' ),
            'add_or_remove_items'        => __( 'Add or remove Countries', 'experiensa' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
            'popular_items'              => __( 'Popular Countries', 'experiensa' ),
            'search_items'               => __( 'Search Countries', 'experiensa' ),
            'not_found'                  => __( 'Not Found', 'experiensa' ),
            'items_list'                 => __( 'Countries list', 'experiensa' ),
            'items_list_navigation'      => __( 'Countries list navigation', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                       => 'exp_country',
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
        register_taxonomy( 'exp_country', array( 'post', 'attachment', 'exp_place', 'exp_voyage', 'exp_service', 'exp_host', 'exp_partner' ), $args );
    }
}    