<?php
/**
 * Created by PhpStorm.
 * User: victor
 * Date: 20/03/17
 * Time: 09:06 AM
 */

namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Options;


class Font
{
    public static function fontFamily($id = 'text_font', $default = 'Source Sans Pro', $tab = 'Content', $class){
        return array(
            'label' => __( 'Font Family', 'experiensa' ),
            'id' => $id,
            'std' => $default,//'Open Sans',
            'type' => 'font',
            'refresh_on_change' => false,
            'affect_on_change_el' => $class,
            'affect_on_change_rule' => 'font-family',
            'section' => 'styling',
            'tab' => __( $tab, 'experiensa' )
        );
    }
    public static function fontSize($id = 'font_size',$label = 'Text Size',$default = '1.8',$scope, $tab,$ext='em'){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'onlypositive' => true,
            'std'     => $default,
            'type'    => 'slider',
            'refresh_on_change' => false,
            'affect_on_change_el' => $scope,
            'affect_on_change_rule' => 'font-size',
            'section' => 'styling',
            'tab' => __($tab,'experiensa'),
            'ext' => $ext,
            'min' => 0,
            'max' => 6,
            'increment' => 0.05,
        );
    }
    public static function textTransform($scope,$tab,$id = 'text_transform',$label = 'Transform',$default = 'none'){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => array(
                array(
                    'label' => __('None', 'experiensa'),
                    'value' => 'none'
                ),
                array(
                    'label' => __('Uppercase', 'experiensa'),
                    'value' => 'uppercase'
                ),
                array(
                    'label' => __('Lowercase', 'experiensa'),
                    'value' => 'lowercase'
                ),
                array(
                    'label' => __('Capitalize', 'experiensa'),
                    'value' => 'capitalize'
                )
            ),
            'refresh_on_change' => false,
            'affect_on_change_el' => $scope,
            'affect_on_change_rule' => 'text-transform',
            'section' => 'styling',
            'tab' => __($tab,'experiensa')
        );
    }
    public static function textAlign($id = 'text_align', $label = 'Text Align',$default = 'center',$scope, $tab){
        return array(
            'label' => __( $label, 'experiensa' ),
            'id' => $id,
            'std' => $default,
            'type' => 'text_align',
            'refresh_on_change' => false,
            'affect_on_change_el' => $scope,
            'affect_on_change_rule' => 'text-align',
            'section' => 'styling',
            'tab' => __( $tab, 'experiensa' ),
        );
    }
    public static function textWeight($scope, $tab, $id = 'text_weight', $label = 'Text Weight',$default = '700'){
        return array(
            'label' => __( $label, 'experiensa' ),
            'id' => $id,
            'std' => $default,
            'type' => 'select',
            'choices' => array(
                array(
                    'label' => '100 - Thin',
                    'value' => '100',
                ),
                array(
                    'label' => '200 - Extra Light',
                    'value' => '200',
                ),
                array(
                    'label' => '300 - Light',
                    'value' => '300',
                ),
                array(
                    'label' => '400 - Normal',
                    'value' => '400',
                ),
                array(
                    'label' => '500 - Medium',
                    'value' => '500',
                ),
                array(
                    'label' => '600 - Semi Bold',
                    'value' => '600',
                ),
                array(
                    'label' => '700 - Bold',
                    'value' => '700',
                ),
                array(
                    'label' => '800 - Extra Bold',
                    'value' => '800',
                ),
                array(
                    'label' => '900 - Black',
                    'value' => '900',
                ),
            ),
            'refresh_on_change' => false,
            'affect_on_change_el' => $scope,
            'affect_on_change_rule' => 'font-weight',
            'section' => 'styling',
            'tab' => __( $tab, 'experiensa' ),
        );
    }
}