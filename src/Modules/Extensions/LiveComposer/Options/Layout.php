<?php namespace Experiensa\Plugin\Modules\Extensions\LiveComposer\Options;


class Layout
{
    public static function header($label = 'Header', $default = '', $id = 'header_opt', $section = 'styling'){
        return array(
            'label'     => __($label,'experiensa'),
            'id'        => $id,
            'std'       => $default,
            'type'      => 'checkbox',
            'choices'   => array(
                array(
                    'label' =>  __('Title','experiensa'),
                    'value' =>  'show_title'
                ),
                array(
                    'label' =>  __('Subtitle','experiensa'),
                    'value' =>  'show_subtitle'
                )
            ),
            'section'   => $section
        );
    }
    public static function showcase_type($label = 'Type', $default = 'grid', $id = 'showcase_type'){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => array(
                array(
                    'label' => __('Button','experiensa'),
                    'value' => 'button'
                ),
                array(
                    'label' => __('Card','experiensa'),
                    'value' => 'Card'
                ),
                array(
                    'label' => __('Carousel','experiensa'),
                    'value' => 'carousel'
                ),
                array(
                    'label' => __('Flex','experiensa'),
                    'value' => 'flex'
                ),
                array(
                    'label' => __('Grid','experiensa'),
                    'value' => 'grid'
                ),
                array(
                    'label' => __('Image','experiensa'),
                    'value' => 'image'
                ),
                array(
                    'label' => __('Masonry','experiensa'),
                    'value' => 'masonry'
                ),
                array(
                    'label' => __('Pinterest','experiensa'),
                    'value' => 'pinterest'
                ),
                /*array(
                    'label' => __('Slider','experiensa'),
                    'value' => 'slider'
                ),
                array(
                    'label' => __('Vegas Slider','experiensa'),
                    'value' => 'vegas'
                ),*/
                array(
                    'label' => __('Windows 8','experiensa'),
                    'value' => 'win8'
                ),
            ),
            /*'dependent_controls' => array(
		        'button' => 'showcase_button_font'
	        ),*/
            'section' => 'styling',
        );
    }
    public static function post_per_row($label = 'Post per row', $default = '4', $id = 'post_per_row'){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => array(
                array(
                    'label' => '1',
                    'value' => '1'
                ),
                array(
                    'label' => '2',
                    'value' => '2'
                ),
                array(
                    'label' => '3',
                    'value' => '3'
                ),

                array(
                    'label' => '4',
                    'value' => '4'
                ),
            ),
            'section' => 'styling',
        );
    }
    public static function display_overlay($label = 'Overlay', $id = 'display_overlay', $default='true'){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'std'     => $default,
            'type'    => 'select',
            'choices' => array(
                array(
                    'label' => 'Enable',
                    'value' => 'true'
                ),
                array(
                    'label' => 'Disable',
                    'value' => 'false'
                )
            ),
            'section' => 'styling',
        );
    }
    public static function contentText($id = 'content_text',$label = 'Content',$default = '',$section,$tab){
        return array(
            'label' => __($label, 'experiensa'),
            'id'    => $id,
            'std'   => $default,
            'type'  => 'text',
            'section' => $section,
            'tab' => __($tab,'experiensa')
        );
    }
    public static function setLayoutOptions($options = [],$category = 'all'){
        $layout['container_class'] = 'full';
        $layout['container_style'] = 'padding: 0px 15px 0 15px;';
        $layout['content_color'] = 'color:'.$options['content_color'].';';
        $layout['title_color'] = 'color:'.$options['title_color'].';';
        $layout['title_alignment'] = 'center aligned';
        $layout['title'] = ucwords(str_replace('_',' ',$category));
        $layout['subtitle'] = '';

        if ($options['container'] == 'container') {
            $layout['container_class'] = 'container';
            $layout['container_style'] = 'pepe:#asdsad;';
        }
        if(!empty($options['title_alignment'] ))
            $layout['title_alignment'] = get_the_aligment($options['title_alignment']);
        if(!empty($options['segment_title']))
            $layout['title'] = $options['segment_title'];
        if(!empty($options['segment_subtitle']))
            $layout['subtitle'] = $options['segment_subtitle'];
        if($options['showTitle'] == 'false')
            $layout['title'] = '';
        if($options['showSubtitle'] == 'false')
            $layout['subtitle'] = '';
        return $layout;
    }
    public static function border_radius($id = 'border_radius', $label = 'Border Radius', $default = 'inherit', $tab, $scope, $ext='rem',$max = 6){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'onlypositive' => true,
            'std'     => $default,
            'type'    => 'slider',
            'refresh_on_change' => false,
            'affect_on_change_el' => $scope,
            'affect_on_change_rule' => 'border-radius',
            'section' => 'styling',
            'tab' => __($tab,'experiensa'),
            'ext' => $ext,
            'min' => 0,
            'max' => $max,
            'increment' => 0.05,
        );
    }
    public static function box_shadow($scope, $tab, $id = 'box_shadow', $label = 'Box Shadow'){
        return array(
            'label' => __( $label, 'experiensa' ),
            'id' => $id,
            'std' => '',
            'type' => 'box_shadow',
            'refresh_on_change' => false,
            'affect_on_change_el' => $scope,
            'affect_on_change_rule' => 'box-shadow',
            'section' => 'styling',
            'tab' => __($tab,'experiensa'),
        );
    }
    public static function line_height($scope, $tab, $id = 'line_height',$label = 'Line Height', $default = 'initial', $ext = 'em', $max = 10){
        return array(
            'label'   => __($label, 'experiensa'),
            'id'      => $id,
            'onlypositive' => true,
            'std'     => $default,
            'type'    => 'slider',
            'refresh_on_change' => false,
            'affect_on_change_el' => $scope,
            'affect_on_change_rule' => 'line-height',
            'section' => 'styling',
            'tab' => __($tab,'experiensa'),
            'ext' => $ext,
            'min' => 0,
            'max' => $max,
            'increment' => 0.05,
        );
    }
}