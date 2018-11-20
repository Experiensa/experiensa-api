<?php namespace Experiensa\Plugin\Modules\Api\Field;


class Posts
{
    public $ctp;
    public function __construct(){
        $this->cpt = 'posts';
        $this->registerFields();
    }
    public function registerFields()
    {
        add_action('rest_api_init', array($this, 'register_post_cover_image'));
    }
    public function register_post_cover_image() {
        register_rest_field( $this->cpt, 'cover_image',
            array(
                'get_callback'    => array($this,'get_post_cover_image'),
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
    public function get_post_cover_image( $object, $field_name, $request ) {
        $images = array();
        $cover_image = wp_get_attachment_image_src( get_post_thumbnail_id($object['id']), 'full' );
        if(!empty($cover_image)){
            for($i=0;$i < count($cover_image);$i++){
                if(strpos($cover_image[$i],'http')===0){
                    $images['feature_image'] = $cover_image[$i];
                }
            }
        }else{
            $images['feature_image'] = false;
        }
        return $images;
    }
}