<?php namespace Experiensa\Plugin\Modules\Request;

use Experiensa\Plugin\Modules\Request\Partner;
use Experiensa\Plugin\Modules\Request\Http;

class Voyage
{
    public static function getVoyages($decode = false){
        $partner_api_url = EXPERIENSA_MAIN_API_URL.'/exp_voyage?&per_page=100';
//        return $partner_api_url;
        $response = Http::getApiResponse($partner_api_url,true);
//        return $response;
        if($decode && \is_string($response))
            return json_decode($response,true);
        return $response;
    }
    public static function getPartnersVoyages(){
        $partners = Partner::getPartnersApi();
        $voyages = [];
        foreach ($partners as $info){
            $partner_url = $info['url'] . 'wp-json/wp/v2/exp_voyage?&per_page=100';
            $partner_response = Http::getApiResponse($partner_url,true);
            if(!isset($partner_response['error'])) {
                $partner_response = json_decode($partner_response, true);
                $partner_response = self::createApiResponse($partner_response);
                $voyages = array_merge($voyages, $partner_response);
            }
        }
        return $voyages;
    }
    public static function createApiResponse($voyages){
        $response = [];
        if(!empty($voyages) && !isset($voyages['error'])){
            $i = 0;
            foreach ($voyages as $info){
                $row['index'] = $i;
                $row['id'] = $info['id'];
                $row['title'] = $info['title']['rendered'];
                $row['content'] = $info['content']['rendered'];
                $row['excerpt'] = $info['excerpt']['rendered'];
                $row['cover_image'] = $info['cover_image'];
                $row['currency'] = $info['currency'];
                $row['price'] = $info['price'];
                $row['offer_dates'] = $info['offer_dates'];
                $row['duration'] = $info['duration'];
                $row['country'] = (isset($info['country'])?$info['country']:'');
                $row['location'] = (isset($info['location'])?$info['location']:'');
                $row['theme'] = (isset($info['theme'])?$info['theme']:'');
                $row['included'] = (isset($info['included'])?$info['included']:'');
                $row['excluded'] = (isset($info['excluded'])?$info['excluded']:'');
                $row['category'] = $info['category'];
                $row['included'] = $info['included'];
                $row['api_link'] = $info['link'];
                $row['website'] = $info['website'];
                $row['website_name'] = $info['website_name'];
                $response[] = $row;
                $i++;
            }
        }
        return $response;
    }
    public static function createUniqueApiResponse($voyages){
        if(!empty($voyages)){
            for($i = 0; $i < count($voyages); $i++){
                $voyages[$i]['index'] = $i;
            }
        }
        return $voyages;
    }
}