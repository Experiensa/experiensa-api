<?php namespace Experiensa\Plugin\Models\Taxonomy;

class Excluded{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy'), 0 );
//        add_action( 'after_switch_theme', 'flush_rewrite_rules' );
    }
    public static function addTaxonomy(){

		$labels = array(
			'name'                       => _x( 'Excluded', 'Taxonomy General Name', 'experiensa' ),
			'singular_name'              => _x( 'Excluded', 'Taxonomy Singular Name', 'experiensa' ),
			'menu_name'                  => __( 'Excluded', 'experiensa' ),
			'all_items'                  => __( 'All Excluded', 'experiensa' ),
			'parent_item'                => __( 'Parent Excluded', 'experiensa' ),
			'parent_item_colon'          => __( 'Parent Excluded:', 'experiensa' ),
			'new_item_name'              => __( 'New Excluded Name', 'experiensa' ),
			'add_new_item'               => __( 'Add New Excluded', 'experiensa' ),
			'edit_item'                  => __( 'Edit Excluded', 'experiensa' ),
			'update_item'                => __( 'Update Excluded', 'experiensa' ),
			'view_item'                  => __( 'View Excluded', 'experiensa' ),
			'separate_items_with_commas' => __( 'Separate Excluded with commas', 'experiensa' ),
			'add_or_remove_items'        => __( 'Add or remove Excluded', 'experiensa' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
			'popular_items'              => __( 'Popular Excluded', 'experiensa' ),
			'search_items'               => __( 'Search Excluded', 'experiensa' ),
			'not_found'                  => __( 'Not Found', 'experiensa' ),
			'items_list'                 => __( 'Excluded list', 'experiensa' ),
			'items_list_navigation'      => __( 'Excluded list navigation', 'experiensa' ),
		);
		$rewrite = array(
			'slug'                       => 'exp_excluded',
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
		register_taxonomy( 'exp_excluded', array( 'post', 'exp_voyage', 'exp_estimate' ), $args );
	}
}