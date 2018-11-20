<?php namespace Experiensa\Plugin\Modules;

use Experiensa\Plugin\Modules\Helpers;

class Taxonomy
{
    /**
     * Get all custom taxonomies from a post type name and exclude taxonomies on the list($excluded) param
     * @param $post_type
     * @param null $excluded
     * @return array|null
     */
    public static function get_custom_taxonomies_by_pt($post_type, $excluded = null){
        $taxs = get_object_taxonomies( $post_type );
        $taxonomies = array();
        if(!empty($taxs)){
            if($excluded!=null || !empty($excluded)){
                for($i=0;$i<count($taxs);$i++){
                    $sw = 0;
                    for($j=0;$j<count($excluded);$j++){
                        if($taxs[$i]==$excluded[$j]){
                            $sw = 1;
                            break;
                        }
                    }
                    if($sw == 0){
                        $taxonomies[]=$taxs[$i];
                    }
                }
                return $taxonomies;
            }else{
                return $taxs;
            }
        }else
            return null;
    }

    /**
     * Get terms from a post id and taxonomy list. All of them on default language
     * @param $id => Post ID
     * @param $taxonomies
     * @return array
     */
    public static function get_terms_by_id_taxonomies($id,$taxonomies){
        $WPML_active = Helpers::checkWPMLactive();
        global $sitepress;
        if($WPML_active) {
            $default_language = $sitepress->get_default_language();
            $actual_language = ICL_LANGUAGE_CODE;
            if ($default_language != $actual_language)
                $sitepress->switch_lang($default_language, true);
        }
        $terms = array();
        foreach($taxonomies as $taxonomy){
            $result = get_the_terms($id ,$taxonomy);
            if(!empty($result)){
                $terms = array_merge($terms,$result);
            }
        }
        if($WPML_active) {
            $sitepress->switch_lang($actual_language, true);
        }
        if(!empty($terms)){
            $result = array();
            foreach($terms as $term){
                if($term->taxonomy == 'theme')
                    $row['taxonomy'] = 'themes';
                else
                    $row['taxonomy'] = $term->taxonomy;
                $row['term'] = $term->name;
                $row['post_id'] = $id;
                $result[] = $row;
            }
            return $result;
        }else
            return $terms;
    }

    /**
     * Get all media terms
     * @param $id
     * @param $post_type
     * @return array
     */
    public static function get_media_terms($id,$post_type){
        $excluded = ['category ','post_tag ','excluded ','included ','category','theme'];
        $taxonomies = self::get_custom_taxonomies_by_pt($post_type,$excluded);
        if($taxonomies!=null && !empty($taxonomies)){
            $terms = self::get_terms_by_id_taxonomies($id,$taxonomies);
            return $terms;
        }else{
            return array();
        }
    }
}