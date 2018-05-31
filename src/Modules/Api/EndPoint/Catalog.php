<?php namespace Experiensa\Plugin\Modules\Api\EndPoint;

use Experiensa\Plugin\Modules\Request\Catalog as CatalogRequest;
class Catalog {
    protected $version;
    protected $namespace;
    protected $name;
    protected $catalog;
    protected $location_filter;
    protected $theme_filter;

    public function __construct( ) {
        $this->version = '2';
        $this->namespace = 'wp/v' . $this->version;
        $this->name = 'catalog';
        $this->catalog = array();
        $this->register_end_point();
    }
    public function register_end_point(){
        add_action( 'rest_api_init', array($this,'register_routes'));
    }
    /**
     * Register all new routes:
     *      /catalog,
     *      /catalog/location,
     *      /catalog/themes,
     *      /catalog/country
     */
    public function register_routes() {
        register_rest_route($this->namespace, '/' . $this->name, array(
            array(
                'methods'         => \WP_REST_Server::READABLE,
                'callback'        => array( $this, 'response_catalog' ),
                'permission_callback' => array( $this, 'get_items_permissions_check' ),
                'args'            => array(
                    'per_page' => array(
                        'default' => 10,
                        'sanitize_callback' => 'absint',
                    ),
                    'page' => array(
                        'default' => 1,
                        'sanitize_callback' => 'absint',
                    ),
                ),
            ),
        ));
        register_rest_route($this->namespace, '/' . $this->name. '/countries', array(
            'methods'         => \WP_REST_Server::READABLE,
            'callback'        => array( $this, 'response_country_filter' ),
        ));
        register_rest_route($this->namespace, '/' . $this->name. '/locations', array(
            'methods'         => \WP_REST_Server::READABLE,
            'callback'        => array( $this, 'response_location_filter' ),
        ));
        register_rest_route($this->namespace, '/' . $this->name. '/themes', array(
            'methods'         => \WP_REST_Server::READABLE,
            'callback'        => array( $this, 'response_theme_filter' ),
        ));
        register_rest_route($this->namespace, '/' . $this->name. '/includes', array(
            'methods'         => \WP_REST_Server::READABLE,
            'callback'        => array( $this, 'response_included_filter' ),
        ));
        register_rest_route($this->namespace, '/' . $this->name. '/excludes', array(
            'methods'         => \WP_REST_Server::READABLE,
            'callback'        => array( $this, 'response_excluded_filter' ),
        ));
        register_rest_route($this->namespace, '/' . $this->name. '/categories', array(
            'methods'         => \WP_REST_Server::READABLE,
            'callback'        => array( $this, 'response_category_filter' ),
        ));
    }
    public function set_catalog() {
        $catalog = CatalogRequest::getCatalog();
        $this->catalog = $catalog;
    }
    public function getCatalog($new){
        if(!$new){
            $catalog = $this->catalog;
        }else{
            $this->set_catalog();
            $catalog = $this->catalog;
        }
        return $catalog;
    }
    private function get_unique_array_filter($filters){
        if(!empty($filters)) {
            $aux = [];
            $out = [];
            $i = 0;
            foreach ($filters as $item){
                if(!in_array($item['name'],$aux)){
                    $aux[] = $item['name'];
                    $item['id'] = $i;
                    $out[] = $item;
                    $i++;
                }
            }
            return $out;
        }
        return [];
    }
    private function createFilterObject($filter_name,$new = false){
        $catalog = $this->getCatalog($new);
        $filters = [];
        if(!empty($catalog)){
            $items = $catalog;
            foreach ($items as $item){
                $item_filters = isset($item[$filter_name]['array'])?$item[$filter_name]['array']:[];
                if(!empty($item_filters)){
                    $row = [];
                    foreach ($item_filters as $ifilter){
                        $row['name'] = $ifilter;
                        $row['active'] = false;
                        $filters[] = $row;
                    }
                }
            }
            $filters = $this->get_unique_array_filter($filters);
        }
        return $filters;
    }
    ////////////////////////////////
    //  Create API response section
    ////////////////////////////////
    public function response_catalog(){
        $data = [];
        $this->set_catalog();
        $catalog = $this->catalog;
        if(!empty($catalog)){
            $data['catalog'] = $catalog;
            $data['country_filter'] = $this->createFilterObject('country');
            $data['destination_filter'] = $this->createFilterObject('location');
            $data['theme_filter'] = $this->createFilterObject('theme');
            $data['included_filter'] = $this->createFilterObject('included');
            $data['excluded_filter'] = $this->createFilterObject('excluded');
            $data['category_filter'] = $this->createFilterObject('category');
        }
        return new \WP_REST_Response( $data, 200 );
    }
    public function response_country_filter($request){
        $data = $this->createFilterObject('country',true);
        return new \WP_REST_Response( $data, 200 );
    }
    public function response_location_filter($request){
        $data = $this->createFilterObject('location',true);
        return new \WP_REST_Response( $data, 200 );
    }
    public function response_theme_filter($request){
        $data = $this->createFilterObject('theme',true);
        return new \WP_REST_Response( $data, 200 );
    }
    public function response_included_filter($request){
        $data = $this->createFilterObject('included',true);
        return new \WP_REST_Response( $data, 200 );
    }
    public function response_excluded_filter($request){
        $data = $this->createFilterObject('excluded',true);
        return new \WP_REST_Response( $data, 200 );
    }
    public function response_category_filter($request){
        $data = $this->createFilterObject('category',true);
        return new \WP_REST_Response( $data, 200 );
    }
    /**
     * Check if a given request has access to get items
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|bool
     */
    public function get_items_permissions_check($request) {
        return true;
    }
}