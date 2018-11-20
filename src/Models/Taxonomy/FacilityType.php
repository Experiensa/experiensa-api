<?php namespace Experiensa\Plugin\Models\Taxonomy;

class FacilityType{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy'), 0 );
//        add_action( 'after_switch_theme', 'flush_rewrite_rules' );
    }
    public static function addTaxonomy(){

        $labels = array(
            'name'                       => _x( 'Facility Types', 'Taxonomy General Name', 'experiensa' ),
            'singular_name'              => _x( 'Facility Type', 'Taxonomy Singular Name', 'experiensa' ),
            'menu_name'                  => __( 'Facility Types', 'experiensa' ),
            'all_items'                  => __( 'All Facility Types', 'experiensa' ),
            'parent_item'                => __( 'Parent Facility Type', 'experiensa' ),
            'parent_item_colon'          => __( 'Parent Facility Type:', 'experiensa' ),
            'new_item_name'              => __( 'New Facility Type Name', 'experiensa' ),
            'add_new_item'               => __( 'Add New Facility Type', 'experiensa' ),
            'edit_item'                  => __( 'Edit Facility Type', 'experiensa' ),
            'update_item'                => __( 'Update Facility Type', 'experiensa' ),
            'view_item'                  => __( 'View Facility Type', 'experiensa' ),
            'separate_items_with_commas' => __( 'Separate facility types with commas', 'experiensa' ),
            'add_or_remove_items'        => __( 'Add or remove facility types', 'experiensa' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
            'popular_items'              => __( 'Popular facility types', 'experiensa' ),
            'search_items'               => __( 'Search Facility Types', 'experiensa' ),
            'not_found'                  => __( 'Not Found', 'experiensa' ),
            'items_list'                 => __( 'Facility Types list', 'experiensa' ),
            'items_list_navigation'      => __( 'Facility Types list navigation', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                       => 'exp_facility-type',
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
        register_taxonomy( 'exp_facility_type', array( 'post', 'exp_facility' ), $args );
    }
}
