<?php //namespace Experiensa\Plugin\Modules\Request;

//use Experiensa\Plugin\Modules\Request\Voyage;
class CatalogRequest
{
    protected $voyage;
    public function __construct(){
        $this->voyage = new VoyageRequest();
    }
    public function getCatalog(){
        $local_voyages = $this->voyage->getVoyages(true);
        $local_voyages = $this->voyage->createApiResponse($local_voyages);
        // $local_voyages = [];
        $partners_voyages = $this->voyage->getPartnersVoyages();
        $catalog = $this->voyage->createUniqueApiResponse(array_merge($local_voyages,$partners_voyages));
        return $catalog;
    }
}