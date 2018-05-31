<?php namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Options;

use Experiensa\Plugin\Modules\Taxonomy;

class Catalog
{
    public static function type($id = 'type', $default = 'cards'){
        return array(
            'label' => __('Type','experiensa'),
            'id'    => $id,
            'std'   => $default,
            'type'  => 'select',
            'choices' => array(
                array(
                    'label' => __( 'Cards', 'experiensa' ),
                    'value' => 'cards',
                ),
                array(
                    'label' => __( 'Pinterest', 'experiensa' ),
                    'value' => 'pinterest',
                ),
            ),
            'section' => 'styling'
        );
    }
    public static function elements($id = 'elements', $default = 'title price button destination duration themes country'){
        return array(
            'label' => __( 'Elements', 'experiensa' ),
            'id' => $id,
            'std' => $default,
            'type' => 'checkbox',
            'choices' => array(
                array(
                    'label' => __( 'Title', 'experiensa' ),
                    'value' => 'title',
                ),
                array(
                    'label' => __( 'Price', 'experiensa' ),
                    'value' => 'price',
                ),
                array(
                    'label' => __( 'Detail Button', 'experiensa' ),
                    'value' => 'detail_button',
                ),
                array(
                    'label' => __( 'Destination', 'experiensa' ),
                    'value' => 'destination',
                ),
                array(
                    'label' => __( 'Duration', 'experiensa' ),
                    'value' => 'duration',
                ),
                array(
                    'label' => __( 'Themes', 'experiensa' ),
                    'value' => 'themes',
                ),
                array(
                    'label' => __( 'Country', 'experiensa' ),
                    'value' => 'country',
                ),
                array(
                    'label' => __( 'Includes', 'experiensa' ),
                    'value' => 'includes',
                ),
                array(
                    'label' => __( 'Excludes', 'experiensa' ),
                    'value' => 'excludes',
                )
            ),
            'section' => 'styling',
        );
    }
    public static function filterOptions(){
        $taxonomies = Taxonomy::get_custom_taxonomies_by_pt('exp_voyage');
        $options = [];
        if(!empty($taxonomies)){
            foreach ($taxonomies as $tax) {
                $value = str_replace("exp_", "", $tax);
                $name = ucwords($value);
                if($value == 'location'){
                    $value = 'destination';
                    $name = 'Destination';
                }
                $options[] = [
                    'label' => __($name, 'experiensa'),
                    'value' => $value
                ];
            }
        }
        return $options;
    }
    public static function filters($id = "filters", $default = "country theme"){
        // var_dump(self::filterOptions());
        return array(
            'label' => __( 'Filters to show', 'experiensa' ),
            'id' => $id,
            'std' => $default,
            'type' => 'checkbox',
            'choices' => self::filterOptions(),
            /*'choices' => array(
                array(
                    'label' => __( 'Category', 'experiensa' ),
                    'value' => 'category',
                ),
                array(
                    'label' => __( 'Country', 'experiensa' ),
                    'value' => 'country',
                ),
                array(
                    'label' => __( 'Destination', 'experiensa' ),
                    'value' => 'destination',
                ),
                array(
                    'label' => __( 'Themes', 'experiensa' ),
                    'value' => 'themes',
                ),
                array(
                    'label' => __( 'Includes', 'experiensa' ),
                    'value' => 'includes',
                ),
                array(
                    'label' => __( 'Excludes', 'experiensa' ),
                    'value' => 'excludes',
                )
            ),*/
            'section' => 'styling',
//            'tab' => __('Filters','experiensa')
        );
    }
}