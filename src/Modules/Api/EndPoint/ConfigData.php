<?php namespace Experiensa\Plugin\Modules\Api\EndPoint;

use Experiensa\Plugin\Modules\Settings;

class ConfigData{
    protected $version;
    protected $namespace;
    protected $name;

    public function __construct( ) {
        $this->version = '2';
        $this->namespace = 'wp/v' . $this->version;
        $this->name = 'configdata';
        $this->register_end_point();
    }
    public function register_end_point(){
        add_action( 'rest_api_init', array($this,'register_routes'));
    }
    public function register_routes() {
        register_rest_route($this->namespace, '/' . $this->name, array(
            'methods'         => \WP_REST_Server::READABLE,
            'callback'        => array( $this, 'response_config_data' )
        ));
    }
    public function response_config_data(){
        $response = Settings::getSanitizedSettings();
        return new \WP_REST_Response( $response, 200 );
    }
}