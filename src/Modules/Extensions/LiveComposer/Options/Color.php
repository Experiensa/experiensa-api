<?php namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Options;


class Color
{
    public static function colorField($id = '',$title = 'Color', $default = '#000',$scope,$section='styling',$tab='Color',$effect='color'){
        return array(
            'label'   => __($title, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'color',
            'refresh_on_change' => false,
            'affect_on_change_el' => $scope,
            'affect_on_change_rule' => $effect,
            'section' => $section,
            'tab' => __($tab,'experiensa')
        );
    }
}