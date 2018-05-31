<?php namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Options;


use Experiensa\Plugin\Modules\QueryBuilder;

class Query
{
    public static function postType($id = 'posttype',$default = 'post',$title = 'Post Type')
    {
        $pt = QueryBuilder::getPostTypes();
        $cpt = [];
        $post_type_to_ignore = array(
            'page',
            'dslc_templates',
            'team'
        );
        foreach ($pt as $key => $value) {
            if(!in_array($key,$post_type_to_ignore))
                $cpt[] = ['label' => str_replace('Exp ','',$value), 'value' => $key];
        }
        return array(
            'label'   => __($title, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => $cpt,
            'tab' => __('Query','experiensa')
        );
    }
    public static function taxonomies($id = 'taxonomy',$default = 'all', $title = 'Taxonomy')
    {
        $taxonomies = QueryBuilder::getTaxonomies(array('public' => true));
        $tax = [];
        $tax_to_ignore = array(
            'post_tag',
            'nav_menu',
            'link_category',
            'post_format',
            'piklist_demo_type',
            'piklist_demo_user_type'
        );
        foreach ($taxonomies as $key => $value) {
            if(!in_array($key,$tax_to_ignore))
                $tax[] = ['label' => str_replace('Exp ','',$value), 'value' => $key];
        }
        return array(
            'label'   => __($title, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => $tax,
            'tab' => __('Query','experiensa')
        );
    }

    public static function terms($id = 'terms',$default='',$title='Categories')
    {
        return array(
            'label' => __($title, 'experiensa'),
            'id'    => $id,
            'std'   => $default,
            'type'  => 'text',
            'tab' => __('Query','experiensa')
        );
    }
    public static function max($id = 'max',$max = '2',$title ='Max post #',$onlypositive = true)
    {
        return array(
            'label'               => __($title, 'experiensa'),
            'id'                  => $id,
            'onlypositive'        => $onlypositive,
            'std'                 => $max,
            'type'                => 'slider',
            'refresh_on_change'   => true,
            'affect_on_change_el' => '.element-to-affect',
            'min'                 => -1,
            'max'                 => 50,
            'tab' => __('Query','experiensa')
        );
    }
}