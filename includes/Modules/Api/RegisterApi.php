<?php namespace Experiensa\Plugin\Modules\Api;

use Experiensa\Plugin\Modules\Api\Field\Posts;
use Experiensa\Plugin\Modules\Api\Field\Voyages;
use Experiensa\Plugin\Modules\Api\Field\Partner;
use Experiensa\Plugin\Modules\Api\EndPoint\Catalog;
use Experiensa\Plugin\Modules\Api\EndPoint\ConfigData;
/**
* Create and register custom end-point to the wp-rest api
**/
class RegisterApi{
    public function __construct(){
        new Posts();
        new Voyages();
        new Partner();
        new Catalog();
        new ConfigData();
    }
}
