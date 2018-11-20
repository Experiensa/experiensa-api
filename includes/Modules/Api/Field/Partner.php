<?php namespace Experiensa\Plugin\Modules\Api\Field;


class Partner
{
    public $ctp;
    public function __construct(){
        $this->cpt = 'exp_partner';
        $this->registerFields();
    }
    public function registerFields(){
        add_action( 'rest_api_init', array($this,'register_partner_website' ));
        add_action( 'rest_api_init', array($this,'register_partner_email' ));
        add_action( 'rest_api_init', array($this,'register_partner_api' ));
        add_action( 'rest_api_init', array($this,'register_partner_request_form' ));
    }
    //////////////////////////
    //  FIELD REGISTER SECTION
    //////////////////////////
    public function register_partner_website(){
        register_rest_field( $this->cpt, 'website',
            array(
                'get_callback'    => array($this,'get_partner_website'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_partner_email(){
        register_rest_field( $this->cpt, 'email',
            array(
                'get_callback'    => array($this,'get_partner_email'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_partner_api(){
        register_rest_field( $this->cpt, 'api',
            array(
                'get_callback'    => array($this,'get_partner_api'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function register_partner_request_form(){
        register_rest_field( $this->cpt, 'request_form',
            array(
                'get_callback'    => array($this,'get_partner_request_form'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    //////////////////////////
    //  GET META-FIELD SECTION
    //////////////////////////
    public function get_partner_website($object, $field_name, $request){
        return get_post_meta( $object[ 'id' ], 'partner_website', true );
    }
    public function get_partner_email($object, $field_name, $request){
        return get_post_meta( $object[ 'id' ], 'partner_email', true );
    }
    public function get_partner_api($object, $field_name, $request){
        $api = get_post_meta( $object[ 'id' ], 'partner_api', true );
        return ($api === 'TRUE'?true:false);
    }
    public function get_partner_request_form($object, $field_name, $request){
        $form = get_post_meta( $object[ 'id' ], 'partner_request_form', true );
        return ($form === 'TRUE'?true:false);
    }
}