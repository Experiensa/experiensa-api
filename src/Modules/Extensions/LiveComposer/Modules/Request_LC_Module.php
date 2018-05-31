<?php

use Experiensa\Plugin\Includes\Requires;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Query;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Layout;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Color;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Font;
if ( defined( 'DS_LIVE_COMPOSER_URL' ) && !class_exists('Request_LC_Module')) {
    class Request_LC_Module extends DSLC_Module
    {
        var $module_id = 'Request_LC_Module';
        var $module_title = 'Request';
        var $module_icon = 'send';
        var $module_category = 'Experiensa';
        function options(){
            $options = [
              Layout::header('Header','','request_header_opt',''),
              // Color::colorField('request_background_color','Background Color','inherit','.showcase-module','styling','general','background-color'),            
              /**
              * Title - Header Tab
              */
              array(
                'label' => __( 'Title', 'experiensa' ),
                'id' => 'request_title_header_options',
                'type' => 'group',
                'action' => 'open',
                'section' => 'styling',
                'tab' => __( 'Header', 'experiensa' )
              ),
              Layout::contentText('request_title_content','Content','Title','styling','Header'),
              Color::colorField('request_text_color_title','Color','#000','.request-title','styling','Header','color'),
              Font::fontFamily('request_text_font_title','','Header','.request-title'),
              Font::textAlign('request_text_align_title','Align','center','.request-title','Header'),
              Font::fontSize('request_font_size_title','Size','3.5','.request-title','Header'),
              Font::textTransform('.request-title','Header','request_text_transform_title'),
              Font::textWeight('.request-title','Header','request_text_weight_title'),
              Layout::line_height('.request-title','Header','request_header_line_height', 'Line Height', 1),
              array(
                'id' => 'request_title_header_options',
                'type' => 'group',
                'action' => 'close',
                'section' => 'styling',
                'tab' => __( 'Header', 'experiensa' )
              ),
              /**
               * Subtitle - Header Tab
               */
              array(
                'label' => __( 'Subtitle', 'experiensa' ),
                'id' => 'request_subtitle_header_options',
                'type' => 'group',
                'action' => 'open',
                'section' => 'styling',
                'tab' => __( 'Header', 'experiensa' )
              ),
              Layout::contentText('request_subtitle_content','Content','Subtitle','styling','Header'),
              Color::colorField('request_text_color_subtitle','Color','#000','.request-subtitle','styling','Header','color'),
              Font::fontFamily('request_text_font_subtitle','','Header','.request-subtitle'),
              Font::textAlign('request_text_align_subtitle','Align','center','.request-subtitle','Header'),
              Font::fontSize('request_font_size_subtitle','Size','2.0','.request-subtitle','Header'),
              Font::textTransform('.request-subtitle','Header','request_text_transform_subtitle'),
              Font::textWeight('.request-subtitle','Header','request_text_weight_subtitle'),
              array(
                'id' => 'request_subtitle_header_options',
                'type' => 'group',
                'action' => 'close',
                'section' => 'styling',
                'tab' => __( 'Header', 'experiensa' )
              ),
            ];
            // Return the array
            return apply_filters( 'dslc_module_options', $options, $this->module_id );
        }
        function output($options){

            /**
             * Styling Settings
             */
            //Header - General
            $header_opt = $options['request_header_opt'];
            if ( ! empty( $header_opt ) )
                $header_opt = explode( ' ', trim( $header_opt ) );
            else
                $header_opt = array();
            set_query_var('header_opt',$header_opt);
            $title_content = $options['request_title_content'];
            set_query_var('title_content',$title_content);
            $subtitle_content = $options['request_subtitle_content'];
            set_query_var('subtitle_content',$subtitle_content);
            ob_start();
            Requires::experiensaLoadTemplate('partials/request.php');
            $html = ob_get_clean();
            // REQUIRED
            $this->module_start( $options );
            echo $html;
            // REQUIRED
            $this->module_end( $options );
        }
    }
    // Register Module
    add_action('dslc_hook_register_modules',
        create_function('', 'return dslc_register_module( "Request_LC_Module" );')
    );
}