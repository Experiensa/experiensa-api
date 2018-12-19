<?php //namespace Experiensa\Plugin\Includes;
/*
use Experiensa\Plugin\Modules\Helpers;
use Experiensa\Plugin\Modules\Settings;
*/
//
/**
 * Class Assets
 * Load all custom javascript and CSS files on front-end and wp-admin
 */
final class Asset{
    protected $helper;
    protected $setting;

    public function __construct() {
        $this->helper = new Helpers();
        $this->setting = new Settings();
        //add_action( 'admin_enqueue_scripts', array( $this, 'load_admin_scripts' ) );
    }
    /**
*    Include scripts and style files on wordpress administrator side
    */
    public function load_admin_scripts($hook) {
        $cpt = (isset($_GET['post_type'])?$_GET['post_type']:false);
        $action = (isset($_GET['action'])?$_GET['action']:false);
        $agency_email = $this->setting->getEmail();
        $agency_email = (!empty($agency_email)?$agency_email:'gabriel@experiensa.com');
        $protocol = 'http';
        if ( is_ssl() ) {
            $protocol = 'https';
        }
        $recaptchaData = $this->setting->getRecaptchaData();
        $localized_array = array(
            'ajaxurl'               => admin_url('admin-ajax.php', $protocol),
            'siteurl'               => get_bloginfo('url'),
            'assets_url'            => EXPERIENSA_ASSETS_URL,
            'dist_url'              => EXPERIENSA_DIST_URL,
            'agency_email'          => $agency_email,
            'google_api_key'        => $this->setting->getGoogleAPIKey(),
            'currency'              => $this->setting->getCurrency(),
            'recaptcha_site_key'    => $recaptchaData['site_key'],
            'recaptcha_secret_key'  => $recaptchaData['secret_key']
        );
        wp_enqueue_script('experiensa/common_js', EXPERIENSA_URL . 'dist/common.bundle.js');
        wp_enqueue_script('experiensa/admin_js', EXPERIENSA_URL . 'dist/admin.bundle.js');
        wp_localize_script('experiensa/admin_js', 'experiensa_vars', $localized_array);
        /**
         * Load Google MAPS API
         */
        $api_key = $this->setting->getGoogleMapsAPIKey();
        $lang = $this->helper->getSiteLanguageCode();
        if($hook == 'post-new.php' && $cpt == 'exp_place'){
            wp_enqueue_script('gplace_api/js', 'https://maps.googleapis.com/maps/api/js?libraries=places&key='.$api_key.'&language='.$lang);
        }
        if($hook == 'post.php' && $cpt == 'exp_place' && $action == 'edit'){
            wp_enqueue_script('gplace_api/js', 'https://maps.googleapis.com/maps/api/js?libraries=places&key='.$api_key.'&language='.$lang);
        }
    }
}
