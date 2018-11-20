<?php namespace Experiensa\Plugin\Modules\Request;

use Experiensa\Plugin\Modules\Request\Voyage;
class Catalog
{
    public static function getCatalog(){
        $local_voyages = Voyage::getVoyages(true);
        $local_voyages = Voyage::createApiResponse($local_voyages);
        // $local_voyages = [];
        $partners_voyages = Voyage::getPartnersVoyages();
        $catalog = Voyage::createUniqueApiResponse(array_merge($local_voyages,$partners_voyages));
        return $catalog;
    }
}