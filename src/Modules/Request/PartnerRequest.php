<?php //namespace Experiensa\Plugin\Modules\Request;

//use Experiensa\Plugin\Modules\Request\Http;
class PartnerRequest
{
    protected $http;
    public function __construct(){
        $this->http = new Http();
    }
    public function getPartners(){
        $partner_api_url = EXPERIENSA_MAIN_API_URL.'/exp_partner';
        return $this->http->curlRequest($partner_api_url);
    }
    public function getPartnersApi(){
        $apis = [];
        $partners_response = $this->getPartners();
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