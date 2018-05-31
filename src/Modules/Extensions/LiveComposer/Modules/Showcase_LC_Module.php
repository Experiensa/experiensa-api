<?php

use Experiensa\Plugin\Includes\Requires;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Query;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Layout;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Color;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Font;
if ( defined( 'DS_LIVE_COMPOSER_URL' ) ) {
    class Showcase_LC_Module extends DSLC_Module
    {
        var $module_id = 'Showcase_LC_Module';
        var $module_title = 'Showcase';
        var $module_icon = 'rocket';
        var $module_category = 'Experiensa';
        function options(){
            $options = [
                Query::postType(),
                Query::taxonomies(),
                Query::terms('terms'),
                Query::max('max','5'),
                Layout::header(),
                Layout::showcase_type(),
                Layout::post_per_row(),
                Layout::display_overlay(),
                Color::colorField('showcase_background_color','Background Color','inherit','.showcase-module','styling','general','background-color'),            
                /**
                 * Title - Header Options
                 */
                array(
                    'label' => __( 'Title', 'experiensa' ),
                    'id' => 'title_header_options',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Header', 'experiensa' )
                ),
                Layout::contentText('title_content','Content','Title','styling','Header'),
                Color::colorField('text_color_title','Color','#000','.showcase-title','styling','Header','color'),
                Font::fontFamily('text_font_title','','Header','.showcase-title'),
                Font::textAlign('text_align_title','Align','center','.showcase-title','Header'),
                Font::fontSize('font_size_title','Size','3.5','.showcase-title','Header'),
                Font::textTransform('.showcase-title','Header','text_transform_title'),
                Font::textWeight('.showcase-title','Header','text_weight_title'),
                Layout::line_height('.showcase-title','Header','header_line_height', 'Line Height', 1),
                array(
                    'id' => 'title_header_options',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Header', 'experiensa' )
                ),
                /**
                 * Subtitle - Header Options
                 */
                array(
                    'label' => __( 'Subtitle', 'experiensa' ),
                    'id' => 'subtitle_header_options',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Header', 'experiensa' )
                ),
                Layout::contentText('subtitle_content','Content','Subtitle','styling','Header'),
                Color::colorField('text_color_subtitle','Color','#000','.showcase-subtitle','styling','Header','color'),
                Font::fontFamily('text_font_subtitle','','Header','.showcase-subtitle'),
                Font::textAlign('text_align_subtitle','Align','center','.showcase-subtitle','Header'),
                Font::fontSize('font_size_subtitle','Size','2.0','.showcase-subtitle','Header'),
                Font::textTransform('.showcase-subtitle','Header','text_transform_subtitle'),
                Font::textWeight('.showcase-subtitle','Header','text_weight_subtitle'),
                array(
                    'id' => 'subtitle_header_options',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Header', 'experiensa' )
                ),
                /**
                 * Overlay - Content Options
                 */
                array(
                    'label' => __( 'Overlay', 'experiensa' ),
                    'id' => 'showcase_content_options',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Content', 'experiensa' )
                ),
                Color::colorField('showcase_overlay_bg','Background','#000','.ui.dimmer','styling','Content','background-color'),
                Color::colorField('showcase_overlay_text_color','Text Color','#fff','.ui.dimmer > .content > *','styling','Content','color'),
                Font::fontFamily('showcase_overlay_font_family','','Content','.ui.dimmer > .content'),
                Font::textTransform('.ui.dimmer > .content > *','Content','text_transform_overlay'),
                Font::fontSize('overlay_font_size','Size','1','.ui.dimmer > .content','Content','rem'),
                Font::textWeight('.ui.dimmer > .content','Content','overlay_text_weight','Text Weight','400'),
                array(
                    'id' => 'showcase_content_options',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Content', 'experiensa' )
                ),
                // Font::fontFamily('showcase_button_font','Source Sans Pro','Button','.showcase-button'),
            ];
            // Return the array
            return apply_filters( 'dslc_module_options', $options, $this->module_id );
        }
        function output($options){
            /**
             * Query Settings
             */
            $post_type = $options['posttype'];
            $taxonomy = $options['taxonomy'];
            $terms = $options['terms'];
            if (!empty($terms)){
                $terms = explode(',',$terms);
            }else{
                $terms = [];
            }
            $max = $options['max'];
            $query_options = array(
                'cpt'       => $post_type,
                'taxonomy'  => $taxonomy,
                'terms'     => $terms,
                'max'       => $max
            );
            set_query_var('query_options',$query_options);
            /**
             * Styling Settings
             */
            //Header - General
            $header_opt = $options['header_opt'];
            if ( ! empty( $header_opt ) )
                $header_opt = explode( ' ', trim( $header_opt ) );
            else
                $header_opt = array();
            set_query_var('header_opt',$header_opt);
            //Type - General
            set_query_var('showcase_type',$options['showcase_type']);

            $title_content = $options['title_content'];
            set_query_var('title_content',$title_content);
            $subtitle_content = $options['subtitle_content'];
            set_query_var('subtitle_content',$subtitle_content);
            /**
             * Component Settings
             */
            $type = $options['showcase_type'];
            $posts_per_row = $options['post_per_row'];
            $overlay = $options['display_overlay'];
            $component_options = array(
                'type'  => $type,
                'posts_per_row' => $posts_per_row,
                'overlay' => $overlay
            );
            set_query_var('component_options',$component_options);
            ob_start();
            Requires::experiensaLoadTemplate('partials/showcase/showcase.php');
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
        create_function('', 'return dslc_register_module( "Showcase_LC_Module" );')
    );
}