<?php namespace Experiensa\Plugin\Modules;

use WP_Query;

class QueryBuilder
{
    /**
     * Create an Array with all post types registered. Structure: ['<post type id>'] => 'post type name'
     * @return array
     */
    public static function getPostTypes(){
        $cpt_list = get_post_types(array('public' => true));
        $post_types = array();
        foreach ($cpt_list as $cpt){
            if($cpt === 'jetpack-testimonial')
                $post_types[$cpt] = 'Testimonial';
            else {
                $post_types[$cpt] = ucwords(str_replace('_', ' ', $cpt));
            }
        }
        $post_types['none'] = __('None','experiensa');
        $post_types['team'] = __('Team','experiensa');
        return $post_types;
    }
    /**
     * Check if post type exist
     * @param $cpt_name
     * @return mixed
     */
    public static function checkPostTypeExist($cpt_name){
        return post_type_exists($cpt_name);
    }

    /**
     * Check if a meta-field exist
     * @param $id
     * @param $key
     * @param bool $single
     * @return bool
     */
    public static function checkMetaFieldExist($id,$key,$single=true){
        $meta = get_post_meta($id,$key,$single);
        if($single){
            return ($meta != '');
        }else{
            return (!empty($meta));
        }
    }
    /**
     * @param array $args
     * @param string $output
     * @return array
     */
    public static function getTaxonomies($args=[],$output='names'){
        $taxonomies_list = get_taxonomies($args,$output);
        $taxonomies = array();
        foreach ($taxonomies_list as $taxonomy){
            $taxonomies[$taxonomy] = ucwords(str_replace('_',' ',$taxonomy));
        }
        $taxonomies['all'] = __('All Posts','experiensa');
        $taxonomies['news'] = __('News','experiensa');
        return $taxonomies;
    }

    /**
     * Get term by taxonomy
     * @param $taxonomy
     * @param array $terms
     * @return array
     */
    public static function getTermsByTaxonomy($taxonomy,$terms = array(), $hide_empty = true){
        if(!empty($terms)){
            $args = array(
                'taxonomy'   => $taxonomy,
                'orderby'    => 'none',
                'slug'       => $terms,
                'hide_empty' => $hide_empty,
            );
        }else {
            $args = array(
                'taxonomy'   => $taxonomy,
                'orderby'    => 'none',
                'hide_empty' => $hide_empty,
            );
        }
        $terms = get_terms($args);
        return $terms;
    }
    /**
     * Get posts by arguments
     * @param int $limit
     * @param string $order
     * @param string $order_by
     * @return mixed
     */
    public static function getPosts($limit = 4, $order = 'ASC', $order_by = 'title'){
        $args = array(
            'numberposts' => $limit,
            'order'=> $order,
            'orderby' => $order_by
        );
        $posts = get_posts($args);
        return $posts;
    }
    /**
     * Get all posts by arguments
     * @param $post_type
     * @param $taxonomy
     * @param $terms
     * @param int $limit
     * @return WP_Query
     */
    public static function getPostByArguments($post_type,$taxonomy,$terms = [],$limit=-1){
        if(empty($terms)) {
            $terms = self::getTermsByTaxonomy($taxonomy);
        }else {
            $terms = self::getTermsByTaxonomy($taxonomy, $terms);
            if(empty($terms)) {
                $terms = self::getTermsByTaxonomy($taxonomy);
            }
        }

        $args = array (
            'posts_per_page' => $limit,
            'post_type'      => array($post_type),
            'post_status'    => array('publish', 'inherit'),
            'tax_query'      => array(
                array(
                    'taxonomy' => $taxonomy,
                    'field'    => 'slug',
                    'terms'    => wp_list_pluck($terms, 'slug')
                )
            )
        );
        $query = get_posts($args);
        return $query;
    }

    public static function getPostByPostType($post_type = 'exp_voyage',$limit = -1,$order = 'DESC'){
        $pt = (is_array($post_type)?$post_type:array($post_type));
        $args = [
            'posts_per_page' => $limit,
            'post_type'      => $pt,
            'post_status'    => ['publish', 'inherit'],
            'order' => $order,
        ];
        $query = get_posts($args);
        return $query;
    }

    /**
     * @param $post_type
     * @param $category
     * @param string $order
     * @return mixed
     */
    public static function getPostByPostTypeAndCategoryName($post_type,$category,$order = 'DESC'){
        $args = array(
            'post_type' => $post_type,
            'category_name' => $category,
            'order' => $order,
        );
        $posts = get_posts($args);
        return $posts;
    }
    public static function getPostByPostTypeTaxonomyAndTerm($post_type,$taxonomy,$terms = [],$limit = -1){
        if($taxonomy=='all'){
            return self::getPostByPostType($post_type,$limit);
        }else {
            $args = array(
                'post_type'      => $post_type,
                'posts_per_page' => $limit,
                'post_status'    => array('publish', 'inherit'),
                'tax_query'      => array(
                    array(
                        'taxonomy' => $taxonomy,
                        'field'    => 'slug',
                        'terms'    => $terms
                    )
                )
            );
            return($args);
            $query = get_posts($args);
            return $query;
        }
    }

}