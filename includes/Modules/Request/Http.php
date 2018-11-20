<?php namespace Experiensa\Plugin\Modules\Request;

use Experiensa\Plugin\Modules\Helpers;

/**
 * Class Http
 * @package Experiensa\Plugin\Modules\Request
 */
class Http
{
    public static function getStandardApiResponse($apiUrl, $local = false){
        $options = array(
            'blocking'    => true,
            'timeout'     => 10,
            'redirection' => 3,
            'sslverify'   => false
        );
        $response = wp_remote_get($apiUrl, $options);
        if ( is_wp_error( $response ) ) {
            $response_code    = $response->get_error_code();
            $response_message = $response->get_error_message();
            return [
                'error' => true,
                'code'  => $response_code,
                'msg'   => $response_message
            ];
        }
        $response = wp_remote_retrieve_body( $response );
        return $response;
    }
    /**
     * Make a Http request to API with multiple validations
     * @param $apiUrl
     * @param bool $check_lang
     * @param string $lang_var_name
     * @return string
     */
    public static function getApiResponse($apiUrl,$check_lang = false, $lang_var_name = 'lang'){
        if ($check_lang) {
            $code = Helpers::getActiveLanguageCode();
            if ($code) {
                $apiUrl .= '&' . $lang_var_name . '=' . $code;
            }
        }
        return self::getStandardApiResponse($apiUrl);
    }

    /**
     * Return Headers vía cURL or PHP get_headers
     * @param $url
     * @return array
     */
    public static function getUrlHeaders($url){
        if (function_exists('curl_version')) {
            $curl = curl_init();
            curl_setopt_array( $curl, array(
                CURLOPT_HEADER => true,
                CURLOPT_NOBODY => true,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_URL => $url ) );
            $headers = explode( "\n", curl_exec( $curl ) );
            curl_close( $curl );
        }else{
            $headers = @get_headers($url);
        }
        return $headers;
    }

    /**
     * Make a cURL http request
     * @param $url
     * @return mixed|null
     */
    public static function curlRequest($url){
        $curl = curl_init( $url );
        curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $curl, CURLOPT_HEADER, 0 );
        curl_setopt( $curl, CURLOPT_USERAGENT, '' );
        curl_setopt( $curl, CURLOPT_TIMEOUT, 10 );
        $response = curl_exec( $curl );
        if( 0 !== curl_errno( $curl ) || 200 !== curl_getinfo( $curl, CURLINFO_HTTP_CODE ) ) {
            $response = null;
        }
        curl_close( $curl );
        return $response;
    }

    /**
     * Check if Page is not found
     * @param $url
     * @return bool
     */
    public static function isPage404($url){
        $is404 = true;
        if(ini_get('allow_url_fopen')) {
            $headers = @get_headers($url);
            if(!empty($headers) && strpos($headers[0],'OK')!==false)
                $is404 = false;
        }else{
            if (function_exists('curl_version')) {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_NOBODY, 1);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
                curl_setopt($ch, CURLOPT_CONNECTTIMEOUT ,0);
                curl_setopt($ch, CURLOPT_TIMEOUT, 8); //timeout in seconds
                curl_exec($ch);
                $is404 = curl_getinfo($ch, CURLINFO_HTTP_CODE) == 404;
                curl_close($ch);
            }
        }
        return $is404;
    }
}