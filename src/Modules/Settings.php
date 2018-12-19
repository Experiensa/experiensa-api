<?php /*namespace Experiensa\Plugin\Modules;

use WP_Query;
use Experiensa\Plugin\Modules\Helpers;
use Experiensa\Plugin\Modules\QueryBuilder;
*/
/**
 * Define custom setting pages and methods to get setting values
 */
class Settings{   
    protected $qBuilder;
    protected $helper;

    public function __construct() { 
        $this->helper = new Helpers();
        $this->qBuilder = new QueryBuilder();
    }
    /*
    public  function addSettingPages(){
        add_filter('piklist_admin_pages', array( $this, 'defineDefaultSettingPage' ));
        add_filter('piklist_admin_pages', array( $this, 'defineTutorialSettingPage' ));
    }
    */
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
    public function defineDefaultSettingPage($pages){
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
    public function defineTutorialSettingPage($pages){
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
    public function getAllSettings(){
        return get_option('agency_settings');
    }
    public function getCurrency(){
        $settings = $this->getAllSettings();
        return (isset($settings['currency'])?$settings['currency']:'CHF');
    }
    public function getTimeZone(){
        $settings = $this->getAllSettings();
        return (isset($settings['timezone'])?$settings['timezone']:'America/Caracas');
    }
    /**
     * Get agency email
     * @return mixed
     */
    public function getEmail(){
        $agency_options = $this->getAllSettings();
        return $agency_options['agency_email'];
    }
    /**
     * Return the website use: travel agency, hotel or tourism office
     * @return bool
     */
    public function getWebsiteUse(){
        $use = false;
        $agency_options = $this->getAllSettings();
        if(isset($agency_options)) {
            $website_use = (isset($agency_options['website_use']) ? $agency_options['website_use'] : false);
            $use = $website_use;
        }
        return $use;
    }
    public function getActivePostTypesByUse(){
        $agency_options = $this->getAllSettings();
        $post_types = [];
        if(isset($agency_options)) {
            $website_use = (isset($agency_options['website_use'])?$agency_options['website_use']:null);
            if (isset($website_use)) {
                switch ($website_use) {
                    case 'travel':
                        $post_types = $agency_options['travel_agency_posttypes'];
                        break;
                    case 'hotel':
                        $post_types = $agency_options['hotel_posttypes'];
                        break;
                    default:
                        $post_types = $agency_options['tourist_office_posttypes'];
                        break;
                }
            }
        }
        return $post_types;
    }
    public function getWebsiteLogoID(){
        $agency_options = $this->getAllSettings();
        $agency_logo = (isset($agency_options['agency_logo'])?$agency_options['agency_logo']:[]);
        if(empty($agency_logo))
            return false;
        if(empty($agency_logo[0]))
            return false;
        return $agency_logo[0];
    }
    public function getWebsiteLogo(){
        $logo_id = $this->getWebsiteLogoID();
        return $this->helper->getAttachmentUrlByID($logo_id);
    }
    /**
     * Get Recaptcha keys added on WP-ADMIN -> Appearance -> Options -> Information
     * @return mixed
     */
    public  function getRecaptchaData(){
        $agency_options = $this->getAllSettings();
        $recaptcha['site_key'] = (isset($agency_options['recaptcha_site_key'])?$agency_options['recaptcha_site_key']:'6Leoqi8UAAAAAKOaMCaqkpSbxTzXpZI_Fpjqqrgx');
        $recaptcha['secret_key'] = (isset($agency_options['recaptcha_secret_key'])?$agency_options['recaptcha_secret_key']:'6Leoqi8UAAAAAB8OHEuUk_9sJJG8G8PrAYQLPJUe');
        return $recaptcha;
    }
    public function getGoogleAPIKey(){
        $agency_options = $this->getAllSettings();
        $api_key = (isset($agency_options['google_api_key'])?$agency_options['google_api_key']:'AIzaSyAZ03tMpSTSyRlG-6070zosF5a606k99qI');
        return $api_key;
    }
    public function getGoogleMapsAPIKey(){
        $agency_options = $this->getAllSettings();
        $api_key = (isset($agency_options['gmaps_api_key'])?$agency_options['gmaps_api_key']:'AIzaSyAxU6TfM2bDMh6NR9jVksCrNIT6nY8BeNo');
        return $api_key;
    }

    public function getSocialMedia(){
        $agency_options = $this->getAllSettings();
        $info = array();
        $info['facebook'] = (isset($agency_options['social_facebook'])?$agency_options['social_facebook']:"");
        $info['twitter'] = (isset($agency_options['social_twitter'])?$agency_options['social_twitter']:"");
        $info['instagram'] = (isset($agency_options['social_instagram'])?$agency_options['social_instagram']:"");
        $info['linkedin'] = (isset($agency_options['social_linkedin'])?$agency_options['social_linkedin']:"");
        $info['gplus'] = (isset($agency_options['social_gplus'])?$agency_options['social_gplus']:"");
        $info['skype'] = (isset($agency_options['social_skype'])?$agency_options['social_skype']:"");
        $info['pinterest'] = (isset($agency_options['social_pinterest'])?$agency_options['social_pinterest']:"");
        return $info;
    }
    public function getAgencyPartners(){
        $agency_options = $this->getAllSettings();
        $partners = array();
        if(isset($agency_options['agency_partners'])){
            foreach ($agency_options['agency_partners'] as $partner){
                $row['name'] = $partner['partner_name'];
                $row['url'] = $partner['partner_website'];
                $logo = (isset($partner['partner_logo'][0])?wp_get_attachment_url($partner['partner_logo'][0]):"");
                $row['logo'] = $logo;
                $partners[] = $row;
            }
        }
        return $partners;
    }
    public  function getSanitizedSettings(){
        $config_data = [];
        $settings = $this->getAllSettings();
        $config_data['currency'] = $this->getCurrency();
        $config_data['timezone'] = $this->getTimeZone();
        $config_data['use'] = $this->getWebsiteUse();
        $config_data['description'] = (isset($settings['description'])?$settings['description']:'');
        $config_data['address'] = (isset($settings['address'])?$settings['address']:'');
        $config_data['postal_code'] = (isset($settings['postal_code'])?$settings['postal_code']:'');
        $config_data['city'] = (isset($settings['city'])?$settings['city']:'');
        $config_data['country'] = (isset($settings['country'])?$settings['country']:'');
        $config_data['email'] = $this->getEmail();
        $config_data['phone'] = (isset($settings['phone'])?$settings['phone']:'');
        $config_data['fax'] = (isset($settings['fax'])?$settings['fax']:'');
        $config_data['schedule'] = (isset($settings['schedule'])?$settings['schedule']:'');
        $config_data['google_map'] = (isset($settings['google_map'])?$settings['google_map']:'');
        $config_data['insurance'] = (isset($settings['insurance'])?$settings['insurance']:[]);
        $config_data['captcha'] = $this->getRecaptchaData();        
        $config_data['logo'] = $this->getWebsiteLogo();
        $config_data['active_post_types'] = $this->getActivePostTypesByUse();
        $config_data['website_color'] = (get_theme_mod('website_color')?get_theme_mod('website_color'):'');
        $config_data['catalog_template'] = (get_theme_mod('agency_catalog_template')?get_theme_mod('agency_catalog_template'):'');
        $config_data['catalog_template'] = (!$config_data['catalog_template']?'cards':$config_data['catalog_template']);
        $config_data['social_media'] = $this->getSocialMedia();
        $config_data['partners'] = $this->getAgencyPartners();
        $config_data['wpml_lang'] = $this->helper->getActiveLanguageCode();
        $config_data['blog_language'] = $this->helper->getBlogLanguageSimple();
        $config_data['cpt'] = $this->qBuilder->getPostTypes();
        return $config_data;
    }
    public function getUnableDates(){
        $use = $this->getWebsiteUse();
        $dates = array();
        if($use == 'hotel'){
            $agency_options = $this->getAllSettings();
            if(isset($agency_options['unable_dates']) && !empty($agency_options['unable_dates'])){
                $unable_dates = $agency_options['unable_dates'];
                foreach ($unable_dates as $date){
                    if(!empty($date['unable_start_date'])){
                        $row['start_date'] = $date['unable_start_date'];
                        if(!empty($date['unable_end_date'])){
                            $row['end_date'] = $date['unable_end_date'];
                        }else{
                            $row['end_date'] = $date['unable_start_date'];
                        }
                        $dates[] = $row;
                        $row = array();
                    }
                }
            }
        }
        return $dates;
    }
    public  function getLowSeasonDates(){
        $settings = $this->getAllSettings();
        $low_season['low'] = [];
        if(isset($settings['seasons'])){
            $seasons = $settings['seasons'];
            if(isset($seasons['low_season_start_date']) && $seasons['low_season_start_date'] !== ''){
                $start = $seasons['low_season_start_date'];
                $end = $seasons['low_season_start_date'];
                if(isset($seasons['low_season_end_date']) && $seasons['low_season_end_date'] !== ''){
                    $end = $seasons['low_season_end_date'];
                }
                $low_season['low'] = [
                    'start' => $start,
                    'end'   => $end
                ];
            }
        }
        return $low_season;
    }
    public  function getHighSeasonDates(){
        $settings = $this->getAllSettings();
        $high_season['high'] = [];
        if(isset($settings['seasons'])){
            $seasons = $settings['seasons'];
            if(isset($seasons['high_season_start_date']) && $seasons['high_season_start_date'] !== ''){
                $start = $seasons['high_season_start_date'];
                $end = $seasons['high_season_start_date'];
                if(isset($seasons['high_season_end_date']) && $seasons['high_season_end_date'] !== ''){
                    $end = $seasons['high_season_end_date'];
                }
                $high_season['high'] = [
                    'start' => $start,
                    'end'   => $end
                ];
            }
        }
        return $high_season;
    }
    public  function getSeasonDates(){
        $seasons = [
            $this->getLowSeasonDates(),
            $this->getHighSeasonDates()
        ];
        return $seasons;
    }
}