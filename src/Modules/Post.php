<?php namespace Experiensa\Plugin\Modules;


class Post
{
    /**
     * Retrieve post content by Post ID
     * @param $post_id
     * @return mixed
     */
    public static function getPostContent( $post_id ){
        return get_post_field('post_content',$post_id);
    }

    /**
     * Retrieve post excerpt by Post ID
     * @param $post_id
     * @return mixed
     */
    public static function getPostExcerpt($post_id){
        return get_post_field('post_excerpt',$post_id);
    }
    /**
     * Retrieve Post Feature/Thumbnail ID by Post ID
     * @param $post_id
     * @return mixed
     */
    public static function getFeatureImageID( $post_id ){
        return get_post_thumbnail_id($post_id);
    }
    /**
     * Retrieve Post Feature/Thumbnail URL by Post ID
     * @param $post_id
     * @return mixed
     */
    public static function getFeatureImageURL($post_id){
        $image_id = self::getFeatureImageID($post_id);
        return wp_get_attachment_url($image_id);
    }
    /**
     * Retrieve a Feature Image Object by Post Feature/Thumbnail ID
     * @param $image_id
     * @return array
     */
    public static function getFeatureImageObject( $image_id ){
        $images = array();
        if($image_id) {
            $full_image = wp_get_attachment_image_src($image_id,'full');
            for($i=0;$i<count($full_image);$i++){
                if(strpos($full_image[$i],'http')===0){
                    $images['image_url'] = $full_image[$i];
                    break;
                }
            }
            $thumbnail_image = wp_get_attachment_image_src($image_id);
            for($i=0;$i<count($thumbnail_image);$i++){
                if(strpos($thumbnail_image[$i],'http')===0){
                    $images['thumbnail_url'] = $thumbnail_image[$i];
                    break;
                }
            }
            $images['thumbnail_image'] = wp_get_attachment_image($image_id);
        }else{
            $default = get_stylesheet_directory_uri() . '/assets/images/mauritius.jpg';
            $images['image_url'] = $default;
            $images['thumbnail_url'] = $default;
            $images['thumbnail_image'] = "<img src='".$default."' style=\"width: 100%;height: 100%;\">";
        }
        return $images;
    }

    /**
     * Retrieve a Feature Image Object by Post ID
     * @param $post_id
     * @return array
     */
    public static function getFeatureImage( $post_id ){
        $feature_image_id = self::getFeatureImageID($post_id);
        return self::getFeatureImageObject($feature_image_id);
    }
}