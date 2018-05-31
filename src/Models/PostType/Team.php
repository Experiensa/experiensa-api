<?php
//
//if ( ! function_exists('team_post_type') ) {
//
//    function team_post_type($post_types){
//        $labels = array(
//            'name'                  => _x( 'Team', 'Post Type General Name', 'experiensa'),
//            'singular_name'         => _x( 'Team Member', 'Post Type Singular Name', 'experiensa'),
//            'menu_name'             => __( 'Team', 'experiensa'),
//            'name_admin_bar'        => __( 'Team', 'experiensa' ),
//            'parent_item_colon'     => __( 'Parent Team:', 'experiensa'),
//            'all_items'             => __( 'All Team Members', 'experiensa'),
//            'add_new_item'          => __( 'Add New Team Member', 'experiensa'),
//            'add_new'               => __( 'Add New', 'experiensa'),
//            'new_item'              => __( 'New Member', 'experiensa' ),
//            'edit_item'             => __( 'Edit Member', 'experiensa'),
//            'update_item'           => __( 'Update Member', 'experiensa'),
//            'view_item'             => __( 'View Member', 'experiensa'),
//            'search_items'          => __( 'Search Member', 'experiensa'),
//            'not_found'             => __( 'Not found', 'experiensa'),
//            'not_found_in_trash'    => __( 'Not found in Trash', 'experiensa'),
//            'items_list'            => __( 'Team Member list', 'experiensa' ),
//            'items_list_navigation' => __( 'Team Member list navigation', 'experiensa' ),
//            'filter_items_list'     => __( 'Filter Team Member list', 'experiensa' ),
//        );
//        $rewrite = array(
//            'slug'                  => 'team',
//            'with_front'            => true,
//            'pages'                 => true,
//            'feeds'                 => true,
//        );
//
//        $post_types['team'] = array(
//            'label'                 => __( 'Team', 'experiensa' ),
//            'description'           => __( 'List of Team Members', 'experiensa' ),
//            'labels'                => $labels,
//            'supports'              => array('title', 'thumbnail', 'editor','excerpt'),
//            'taxonomies'            => array( 'category', 'post_tag', 'country'),
//            'hierarchical'          => false,
//            'public'                => true,
//            'show_ui'               => true,
//            'show_in_menu'          => true,
//            'menu_position'         => 7,
//            'menu_icon'             => 'dashicons-groups',
//            'show_in_admin_bar'     => true,
//            'show_in_nav_menus'     => true,
//            'show_in_rest'          => true,
//            'can_export'            => true,
//            'has_archive'           => true,
//            'exclude_from_search'   => false,
//            'publicly_queryable'    => true,
//            'rewrite'               => $rewrite,
//            'capability_type'       => 'post',
//        );
//        return $post_types;
//    }
//    add_filter('piklist_post_types', 'team_post_type');
//}
//
///* Flush rewrite rules for custom post types. */
//add_action( 'after_switch_theme', 'flush_rewrite_rules' );

?>
