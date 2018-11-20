<?php namespace Experiensa\Plugin\Models\Taxonomy;

class ProductType{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy'), 0 );
//        add_action( 'after_switch_theme', 'flush_rewrite_rules' );
    }
    public static function addTaxonomy(){

        $labels = array(
            'name'                       => _x( 'Product Types', 'Taxonomy General Name', 'experiensa' ),
            'singular_name'              => _x( 'Product Type', 'Taxonomy Singular Name', 'experiensa' ),
            'menu_name'                  => __( 'Product Types', 'experiensa' ),
            'all_items'                  => __( 'All Product Types', 'experiensa' ),
            'parent_item'                => __( 'Parent Product Type', 'experiensa' ),
            'parent_item_colon'          => __( 'Parent Product Type:', 'experiensa' ),
            'new_item_name'              => __( 'New Product Type Name', 'experiensa' ),
            'add_new_item'               => __( 'Add New Product Type', 'experiensa' ),
            'edit_item'                  => __( 'Edit Product Type', 'experiensa' ),
            'update_item'                => __( 'Update Product Type', 'experiensa' ),
            'view_item'                  => __( 'View Product Type', 'experiensa' ),
            'separate_items_with_commas' => __( 'Separate product types with commas', 'experiensa' ),
            'add_or_remove_items'        => __( 'Add or remove product types', 'experiensa' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
            'popular_items'              => __( 'Popular product types', 'experiensa' ),
            'search_items'               => __( 'Search Product Types', 'experiensa' ),
            'not_found'                  => __( 'Not Found', 'experiensa' ),
            'items_list'                 => __( 'Product Types list', 'experiensa' ),
            'items_list_navigation'      => __( 'Product Types list navigation', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                       => 'exp_product-type',
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
        register_taxonomy( 'exp_product_type', array( 'post', ' product', ' exp_voyage' ), $args );
    }
}