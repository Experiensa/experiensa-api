<?php namespace Experiensa\Plugin\Modules\Request;

use Experiensa\Plugin\Modules\Request\Http;
class Partner
{
    public static function getPartners(){
        $partner_api_url = EXPERIENSA_MAIN_API_URL.'/exp_partner';
        return Http::curlRequest($partner_api_url);
    }
    public static function getPartnersApi(){
        $apis = [];
        $partners_response = self::getPartners();
        if(is_string($partners_response) && !isset($partners_response['error'])){
            $partners = json_decode($partners_response,true);        
            if(is_array($partners)) {
                foreach ($partners as $partner) {
                    if ($partner['api']) {
                        $row['url'] = $partner['website'];
                        $row['name'] = $partner['title']['rendered'];
                        $row['email'] = $partner['email'];
                        $apis[] = $row;
                    }
                }
            }
        }
        return $apis;
    }
}