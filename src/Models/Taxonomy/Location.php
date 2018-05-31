<?php namespace Experiensa\Plugin\Models\Taxonomy;

class Location{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy') );
//        add_action( 'after_switch_theme', 'flush_rewrite_rules' );
    }
    public static function addTaxonomy(){
		$labels = array(
			'name'                       => _x( 'Destinations', 'Taxonomy General Name', 'experiensa' ),
			'singular_name'              => _x( 'Destination', 'Taxonomy Singular Name', 'experiensa' ),
			'menu_name'                  => __( 'Destinations', 'experiensa' ),
			'all_items'                  => __( 'All Destinations', 'experiensa' ),
			'parent_item'                => __( 'Parent Destination', 'experiensa' ),
			'parent_item_colon'          => __( 'Parent Destination:', 'experiensa' ),
			'new_item_name'              => __( 'New Destination Name', 'experiensa' ),
			'add_new_item'               => __( 'Add New Destination', 'experiensa' ),
			'edit_item'                  => __( 'Edit Destination', 'experiensa' ),
			'update_item'                => __( 'Update Destination', 'experiensa' ),
			'view_item'                  => __( 'View Destination', 'experiensa' ),
			'separate_items_with_commas' => __( 'Separate Destinations with commas', 'experiensa' ),
			'add_or_remove_items'        => __( 'Add or remove Destinations', 'experiensa' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
			'popular_items'              => __( 'Popular Destinations', 'experiensa' ),
			'search_items'               => __( 'Search Destinations', 'experiensa' ),
			'not_found'                  => __( 'Not Found', 'experiensa' ),
			'items_list'                 => __( 'Destinations list', 'experiensa' ),
			'items_list_navigation'      => __( 'Destinations list navigation', 'experiensa' ),
		);
		$rewrite = array(
			'slug'                       => 'exp_location',
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
            'show_in_rest'               => true,
			'show_tagcloud'              => true,
            'query_var'                  => true,
			'rewrite'                    => $rewrite,
		);
		register_taxonomy( 'exp_location', array( 'post', 'attachment', 'exp_voyage', 'exp_estimate', 'exp_service', 'exp_host', 'exp_partner', 'exp_place' ), $args );
	}
	public static function getLocationTerms(){
        $args = array(
            'taxonomy'   => 'exp_location',
            'orderby'    => 'none',
            'hide_empty' => true,
        );
        $terms = get_terms($args);
        return $terms;
    }
}