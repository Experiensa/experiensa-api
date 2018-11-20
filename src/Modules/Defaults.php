<?php namespace Experiensa\Plugin\Modules;

use Experiensa\Plugin\Modules\Common;
use Experiensa\Plugin\Modules\Settings;
use Experiensa\Plugin\Modules\QueryBuilder;
use Experiensa\Plugin\Modules\Helpers;
/**
 * Define defaults actions and filters
 */
class Defaults
{
    public function __construct(){
        add_filter('upload_mimes', array($this,'cc_mime_types'));
        add_filter('body_class', array($this,'add_custom_body_class'));
        add_action('user_register', array($this,'set_default_admin_color_schema'));
        add_filter( 'query_vars', array($this,'add_query_vars_filter' ));
        add_filter( 'wp_mail_from_name', array($this,'email_sender_name' ));
        add_action( 'admin_menu', array($this,'hide_custom_post_types' ));
        add_filter('piklist_part_process_callback',array($this,'hide_hotel_settings_tab'), 10, 2);
        if ( class_exists( 'Jetpack' ) && \Jetpack::is_module_active( 'tiled-gallery' ) ){
            add_filter( 'tiled_gallery_content_width', array($this,'wpsites_custom_tiled_gallery_width' ));
        }
    }
    public function sar_custom_curl_timeout($handle){
        \curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, 30);
        \curl_setopt($handle, CURLOPT_TIMEOUT, 30);
    }
    public function sar_custom_http_request_timeout($timeout_value){
        return 30;
    }
    public function sar_custom_http_request_args($r){
        $r['timeout'] = 30;
        return $r;
    }
    /**
     *   Allow upload SVG files
     *   @param $mimes
     *   @return @mimes array
     */
    public function cc_mime_types($mimes) {
        $mimes['svg'] = 'image/svg+xml';
        $mimes['svgz'] = 'image/svg+xml';
        return $mimes;
    }
    /**
     * Check if admin bar is showing and add customs body class
     * @param $classes
     * @return array
     */
    function add_custom_body_class($classes){
        if(is_admin_bar_showing()){
            $classes[] = 'displayed-admin-bar';
        } else{
            $classes[] = 'not-displayed-admin-bar';
        }
        return $classes;
    }
    /**
     * Set Default user color schema when create new users, color schema defined by WP_DEBUG
     * @param $user_id
     */
    public function set_default_admin_color_schema($user_id) {
        if(!WP_DEBUG){
            $args = array(
                'ID' => $user_id,
                'admin_color' => 'sunrise'
            );
        }else{
            $args = array(
                'ID' => $user_id,
                'admin_color' => 'blue'
            );
        }

        wp_update_user( $args );
    }
    /**
     * Change email sender name to blog name
     * @param $email
     * @return mixed
     */
    public function email_sender_name( $email ){
        $blog_name = get_bloginfo('name');
        return $blog_name; // new email name from sender.
    }
    public function wpsites_custom_tiled_gallery_width($width){
        $tiled_gallery_content_width = $width;
        $width = 1200;
        return $width;
    }
    /**
     * Filter function to hide Hotel Settings tab on Options page
     * @param $part_data
     * @param $folder
     */
    public static function hide_hotel_settings_tab($part_data, $folder){
        if(isset($part_data['data']['flow']) && $part_data['data']['flow'][0] == 'options' && $part_data['data']['title'] == 'Hotel Settings') {
            $website_use = Settings::getWebsiteUse();
            if ($website_use == 'hotel')
                return $part_data;
            return;
        }else {
            return $part_data;
        }
    }
    /**
     * Hide custom post types from admin menu
     */
    public function hide_custom_post_types(){
        $agency_options = get_option('agency_settings');
        if(isset($agency_options)) {
            $website_use = (isset($agency_options['website_use'])?$agency_options['website_use']:null);
            $all_posttypes = Common::getExperiensCPT();
            $to_hide = array();
            if (isset($website_use)) {
                $posttypes = array();
                switch ($website_use) {
                    case 'travel':
                        $posttypes = $agency_options['travel_agency_posttypes'];
                        break;
                    case 'hotel':
                        $posttypes = $agency_options['hotel_posttypes'];
                        break;
                    default:
                        $posttypes = $agency_options['tourist_office_posttypes'];
                        break;
                }
                $to_hide = array_diff($all_posttypes, $posttypes);
            }
            foreach ($to_hide as $value) {
                if (post_type_exists($value))
                    remove_menu_page('edit.php?post_type=' . $value);
            }
        }
    }

    /**
     * Add new query_vars
     * @param $vars
     * @return array
     */
    public function add_query_vars_filter( $vars ){
        $vars[] = "cpt";
        $vars[] = "term";
        $vars[] = "tax";
        return $vars;
    }
}