<?php namespace Experiensa\Plugin\Modules\Request;

use Experiensa\Plugin\Modules\Request\Http;
class Media{
    public static function get_media_api_list($website='http://guanaima.ch',$posttype, $terms=null,$order=null){
        $list = array();
        if(substr($website, -1)!='/')
            $api = '/wp-json/wp/v2/'.$posttype;
        else
            $api = 'wp-json/wp/v2/'.$posttype;
        if($terms==null){
            $row['website'] = $website;
            $row['api'] = $api;
            $row['filter'] = '';
            $list[] = $row;
        }else{
            foreach($terms as $term){
                $row['website'] = $website;
                $row['api'] = $api;
                $filter = '?filter[taxonomy]='.$term['taxonomy'].'&filter[term]='.$term['term'];
                if($order)
                    $filter .= "&filter[orderby]=".$order;
                $row['filter'] = $filter;
                $list[] = $row;
            }
        }
        return $list;
    }

    public static function get_media_response($apis){
        $media_content = array();
        foreach($apis as $api){
            $api_url = $api['website'] . $api['api'] . $api['filter'];
            $media_response = Http::getApiResponse($api_url);
            if(isset($media_response['error'])){
                return [];
            }
            return self::createApiResponse($media_response,$api_url);
        }
        return $media_content;
    }
    public static function createApiResponse($media,$url){
        $response = [];
        if(!empty($media)){
            $i = 0;
            foreach ($media as $info){
                $row['index'] = $i;
                $row['id'] = $info['id'];
                $row['date'] = $info['date'];
                $row['title'] = $info['title']['rendered'];
                $row['link'] = $info['link'];
                $row['full_size'] = $info['media_details']['sizes']['full']['source_url'];
                $row['medium_size'] = $info['media_details']['sizes']['medium']['source_url'];
                $row['thumbnail_size'] = $info['media_details']['sizes']['thumbnail']['source_url'];
                $row['api_link'] = $url;
                $response[] = $row;
                $i++;
            }
        }
        return $response;
    }
    public static function get_media_request_api($posttype = 'media', $terms = null, $order = null){
        if($terms !=null){
            $apis = self::get_media_api_list('http://guanaima.ch',$posttype,$terms, $order);
        }else{
            $apis = self::get_media_api_list('http://guanaima.ch',$posttype);
        }
        $media_content = self::get_media_response($apis);
        return $media_content;
    }

    public static function get_media_request_local($posttype = 'media', $terms = null){
        if($terms !=null){
            $apis = self::get_media_api_list(get_site_url(),$posttype,$terms);
        }else{
            $apis = self::get_media_api_list(get_site_url(),$posttype);
        }
        $media_content = self::get_media_response($apis);
        return $media_content;
    }

    public static function get_media_request_both($posttype = 'media', $terms = null){
        $media_content = self::get_media_request_local($posttype,$terms);
        if(empty($media_content)){
            $media_content = self::get_media_request_api($posttype,$terms);
        }
        return $media_content;
    }
}