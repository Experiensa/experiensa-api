<?php
/**
* sub_menu define where to put it in the admin menu (wordpress left sidebar), for more information please visit:
* https://codex.wordpress.org/Administration_Menus
* https://developer.wordpress.org/reference/functions/add_submenu_page/
* examples:
* Dashboard: ‘index.php’
* Posts: ‘edit.php’
* Media: ‘upload.php’
* Pages: ‘edit.php?post_type=page’
* Comments: ‘edit-comments.php’
* Custom Post Types: ‘edit.php?post_type=your_post_type’
* Appearance: ‘themes.php’
* Plugins: ‘plugins.php’
* Users: ‘users.php’
* Tools: ‘tools.php’
* Settings: ‘options-general.php’
* Network Settings: ‘settings.php’
**/
add_filter('piklist_admin_pages', 'default_experiensa_setting_pages');
function default_experiensa_setting_pages($pages){
    $pages[] = array(
        'page_title'    => __('Options','experiensa'),
        'menu_title'    => __('Options', 'experiensa'),
        'capability'    => 'manage_options',
        'sub_menu'      => 'themes.php',
        'menu_slug'     => 'experiensa-settings',
        'setting'       => 'agency_settings',
        'menu_icon'     => 'dashicons-editor-kitchensink',
        'page_icon'     => 'dashicons-editor-kitchensink',
        'single_line'   => false,
        'save_text'     => __('Save options','experiensa'),
    );
    return $pages;
}

/*
* This page concerns the service improvements tutorials
*/
add_filter('piklist_admin_pages', 'tutorials_setting_page');
function tutorials_setting_page($pages){
    $pages[] = array(
        'page_title'    => __('Trainning','experiensa'),
        'menu_title'    => __('Trainning', 'experiensa'),
        'sub_menu'      => 'index.php',
        'capability'    => 'manage_options',
        'menu_slug'     => 'experiensa-tutorials',
        'setting'       => 'experiensa_tutorials',
        'single_line'   => false,
        'save_text'     => __('Save Tutorials','experiensa'),
    );

    return $pages;
}