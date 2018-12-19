<?php 
/* Taxonomies */
/*
use Experiensa\Plugin\Models\Taxonomy\Country;
use Experiensa\Plugin\Models\Taxonomy\Region;
use Experiensa\Plugin\Models\Taxonomy\Excluded;
use Experiensa\Plugin\Models\Taxonomy\FacilityType;
use Experiensa\Plugin\Models\Taxonomy\Included;
use Experiensa\Plugin\Models\Taxonomy\Location;
use Experiensa\Plugin\Models\Taxonomy\ProductType;
use Experiensa\Plugin\Models\Taxonomy\Theme;
*/
/* Register custom post types and taxonomies */
class Register{
    public function __construct() {
        
    }
    public function init(){
        new Estimate();
        new Facility();
        new Feedback();
        new Host();
        new Partner();
        new Place();
        new Voyage();

        new Country();
        new Region();
        new Excluded();
        new FacilityType();
        new Included();
        new Location();
        new ProductType();
        new Theme();
    }
    /*public static function init(){
        echo "HOLAM UNDO";*/
        /**
         * Post types
         */
        // Brochure::addCustomPostType();
        /*
        Estimate::addCustomPostType();
        Facility::addCustomPostType();
        Feedback::addCustomPostType();
        Host::addCustomPostType();
        //Partner::addCustomPostType();
        Place::addCustomPostType();
        //Voyage::addCustomPostType();
        */
        /**
         * Taxonomies
         *//*
        Country::addTaxonomy();
        Region::addTaxonomy();
        Excluded::addTaxonomy();
        FacilityType::addTaxonomy();
        Included::addTaxonomy();
        Location::addTaxonomy();
        ProductType::addTaxonomy();
        Theme::addTaxonomy();*/
    //}
    /*
    public static function register_flush_rewrite_rules(){
        self::init();
        flush_rewrite_rules();
    }
    */
    public function register_flush_rewrite_rules(){
        $this->init();
        flush_rewrite_rules();
    }
}