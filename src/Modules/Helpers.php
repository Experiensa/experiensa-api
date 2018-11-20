<?php namespace Experiensa\Plugin\Modules;


class Helpers
{
    public static function check_internet_connection(){
        $connected = @fsockopen("www.google.com", 80);
        //website, port  (try 80 or 443)
        if ($connected){
            $is_conn = true; //action when connected
            fclose($connected);
        }else{
            $is_conn = false; //action in connection failure
        }
        return $is_conn;
    }
    
    public static function checkWPMLactive(){
        return function_exists('icl_object_id');
    }
    public static function checkValidURL($url){
        return filter_var($url, FILTER_VALIDATE_URL);
    }
    /**
     * If WPML plugin is active get active language code
     * @return bool
     */
    public static function getActiveLanguageCode(){
        $code = false;
        //Check if WPML is installed
        if ( function_exists('icl_object_id') ) {
            //Active WPML language code
            $code = ICL_LANGUAGE_CODE;
        }
        return $code;
    }
    public static function getBlogLanguage(){
        return get_bloginfo("language");
    }
    public static function getBlogLanguageSimple(){
        $lang = self::getBlogLanguage();
        $lang = explode("-",$lang,2);
        return $lang[0];
    }
    public static function getSiteLanguageCode(){
        $lang = self::getActiveLanguageCode();
        $lang = (!$lang?strtolower(self::getBlogLanguageSimple()):strtolower($lang));
        return $lang;
    }
    public static function  hex2rgb($hex,$array=false) {
        $hex = str_replace("#", "", $hex);

        if(strlen($hex) == 3) {
            $r = hexdec(substr($hex,0,1).substr($hex,0,1));
            $g = hexdec(substr($hex,1,1).substr($hex,1,1));
            $b = hexdec(substr($hex,2,1).substr($hex,2,1));
        }else {
            $r = hexdec(substr($hex,0,2));
            $g = hexdec(substr($hex,2,2));
            $b = hexdec(substr($hex,4,2));
        }
        $rgb = array($r, $g, $b);
        if(!$array)
            return implode(",", $rgb); // returns the rgb values separated by commas
        return $rgb; // returns an array with the rgb values
    }
    public static function rgb2hex($rgb) {
        $hex = "#";
        $hex .= str_pad(dechex($rgb[0]), 2, "0", STR_PAD_LEFT);
        $hex .= str_pad(dechex($rgb[1]), 2, "0", STR_PAD_LEFT);
        $hex .= str_pad(dechex($rgb[2]), 2, "0", STR_PAD_LEFT);

        return $hex; // returns the hex value including the number sign (#)
    }
    public static function getAttachmentUrlByID($id){
        return ($id?wp_get_attachment_url($id):"");
    }    
    public static function normalizeChars($str){
        $unwanted_array = array(    'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
            'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U',
            'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
            'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
            'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y' );
        return strtr( $str, $unwanted_array );
    }
    //TODO: Delete unused Helpers methods
    public static function getPageTemplateNames(){
        $templates = get_page_templates();
        $templates_names = array();
        foreach ($templates as $key => $value){
            if($value !== 'landing.php' )
                $templates_names[$value] = $key;
        }
        return $templates_names;
    }
    public static function getTemplatePathByID($id){
        $template = get_post_meta( $id, '_wp_page_template', true );
        if($template == 'default')
            $template = 'index.php';
        return $template;
    }
    public static function getTemplatePath($template_name){
        $path = 'index.php';
        $templates = wp_get_theme()->get_page_templates();
        foreach ($templates as $key => $value){
            if($value == $template_name ) {
                $path = $value;
                break;
            }
        }
        return $path;
    }
    /**
     * @return array
     */
    public static function getPagesFromCurrentLanguage(){
        $page_ids=get_all_page_ids();
        $pages = array();
        foreach($page_ids as $id) {
            //Check if WPML is installed and activated
            if(function_exists('icl_object_id')) {
                //Get page id from de current language and translations
                $current_lang_page_id = icl_object_id($id, 'page', true,ICL_LANGUAGE_CODE);
                //Check if $current_lang_page_id is original page (not a tranlated page) and status publish
                if($id == $current_lang_page_id && get_post_status( $id ) == 'publish')
                    $pages[$id] = get_the_title($id);
            } else {
                $pages[$id] = get_the_title($id);
            }

        }
        return $pages;
    }

    /**
     * @param $template
     * @return array
     */
    public static function getPagesByTemplate($template){
        $pages = get_pages(array(
            'meta_key' => '_wp_page_template',
            'meta_value' => $template
        ));
        $page_list = array();
        foreach($pages as $page){
            $page_list[$page->ID] = $page->post_title;
        }
        return $page_list;
    }

    public static function getComponentList(){
        $components = [
            'button'        => __('Buttons','experiensa'),
            'carousel'      => __('Carousel','experiensa'),
            'card'          => __('Cards','experiensa'),
            'flex-layout'   => __('Flex Layout','experiensa'),
            'circular_grid' => __('Circular Grid','experiensa'),
            'grid'          => __('Grid','experiensa'),
            'img-layout'    => __('Image layout','experiensa'),
            'masonry'       => __('Masonry','experiensa'),
            'pinterest'     => __('Pinterest','experiensa'),
            'slider'        => __('Photo Slider'),
            'carousel-testimonial'        => __('Testimonial Carousel'),
            'windows'       => __('Windows','experiensa'),
        ];
        return $components;
    }  
    
    
    public static function getHoverEffectList(){
        $effects = array(
            'imghvr-fade'                  => __('Fade', 'experiensa'),
            'imghvr-push-up'               => __('Push up', 'experiensa'),
            'imghvr-push-down'             => __('Push down', 'experiensa'),
            'imghvr-push-left'             => __('Push Left', 'experiensa'),
            'imghvr-push-right'            => __('Push Right', 'experiensa'),
            'imghvr-slide-up'              => __('Slide up', 'experiensa'),
            'imghvr-slide-down'            => __('Slide down', 'experiensa'),
            'imghvr-slide-left'            => __('Slide left', 'experiensa'),
            'imghvr-slide-right'           => __('Slide right', 'experiensa'),
            'imghvr-reveal-up'             => __('Reveal up', 'experiensa'),
            'imghvr-reveal-down'           => __('Reveral down', 'experiensa'),
            'imghvr-reveal-left'           => __('Reveal left', 'experiensa'),
            'imghvr-reveal-right'          => __('Reveal right', 'experiensa'),
            'imghvr-hinge-up'              => __('Hinge up', 'experiensa'),
            'imghvr-hinge-left'            => __('Hinge left', 'experiensa'),
            'imghvr-hinge-right'           => __('Hinge right', 'experiensa'),
            'imghvr-flip-horiz'            => __('Flip horizontal', 'experiensa'),
            'imghvr-flip-vert'             => __('Flip vertical', 'experiensa'),
            'imghvr-flip-diag-1'           => __('Flip 1', 'experiensa'),
            'imghvr-flip-diag-2'           => __('Flip 2', 'experiensa'),
            'imghvr-shutter-out-horiz'     => __('Shutter out horizontal', 'experiensa'),
            'imghvr-shutter-out-vert'      => __('Shutter out vertical', 'experiensa'),
            'imghvr-shutter-out-diag-1'    => __('Shutter out 1', 'experiensa'),
            'imghvr-shutter-out-diag-2'    => __('Shutter out 2', 'experiensa'),
            'imghvr-shutter-in-horiz'      => __('Shutter in horizontal', 'experiensa'),
            'imghvr-shutter-in-vert'       => __('Shutter in vertical', 'experiensa'),
            'imghvr-shutter-in-out-horiz'  => __('Shutter in out horizontal', 'experiensa'),
            'imghvr-shutter-in-out-vert'   => __('Shutter in out vertical', 'experiensa'),
            'imghvr-shutter-in-out-diag-1' => __('Shutter in out 1', 'experiensa'),
            'imghvr-shutter-in-out-diag-2' => __('Shutter in out 2', 'experiensa'),
            'imghvr-fold-up'               => __('Fold up', 'experiensa'),
            'imghvr-fold-down'             => __('Fold down', 'experiensa'),
            'imghvr-fold-left'             => __('Fold left', 'experiensa'),
            'imghvr-fold-right'            => __('Fold right', 'experiensa'),
            'imghvr-zoom-in'               => __('Zoom in', 'experiensa'),
            'imghvr-zoom-out'              => __('Zoom out', 'experiensa'),
            'imghvr-zoom-out-up'           => __('Zoom out up', 'experiensa'),
            'imghvr-zoom-out-down'         => __('Zoom out down', 'experiensa'),
            'imghvr-zoom-out-left'         => __('Zoom out left', 'experiensa'),
            'imghvr-zoom-out-right'        => __('Zoom out right', 'experiensa'),
            'imghvr-zoom-out-flip-horiz'   => __('Zoom out flip horizontal', 'experiensa'),
            'imghvr-zoom-out-flip-vert'    => __('Zoom out flip vertical', 'experiensa'),
            'imghvr-blur'                  => __('No', 'Blur')
        );
        return $effects;
    }    

    public static function arrayToString($array, $key){
        $string = '';
        if (isset($array[$key])) {
            $array = $array[$key];
            $string = implode(",", $array);
        }
        return $string;
    }
}