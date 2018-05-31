<?php

use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Catalog as CatalogOpt;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Layout;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Color;
use Experiensa\Plugin\Modules\Extensions\LiveComposer\Options\Font;
use Experiensa\PLugin\Includes\Requires;

if ( defined( 'DS_LIVE_COMPOSER_URL' ) && !class_exists('Catalog_LC_Module') ) {
    class Catalog_LC_Module extends DSLC_Module{
        // Module Attributes
        var $module_id = 'Catalog_LC_Module';
        var $module_title = 'Catalog';
        var $module_icon = 'newspaper-o';
        var $module_category = 'Experiensa';
        function options() {
            // The options array
            $options = array(
                //Header
                Layout::header('Header','','catalog_header_opt'),
                //Layout
                CatalogOpt::type(),
                //Items to show
                CatalogOpt::elements(),
                //Filters to show
                CatalogOpt::filters(),
                /**
                 * Title - Header Tab
                 */
                array(
                    'label' => __( 'Title', 'experiensa' ),
                    'id' => 'catalog_title_header_options',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Header', 'experiensa' )
                ),
                Layout::contentText('catalog_title_content','Content','Title','styling','Header'),
                Color::colorField('catalog_text_color_title','Color','#000','.catalog-title','styling','Header','color'),
                Font::fontFamily('catalog_text_font_title','','Header','.catalog-title'),
                Font::textAlign('catalog_text_align_title','Align','center','.catalog-title','Header'),
                Font::fontSize('catalog_font_size_title','Size','3.5','.catalog-title','Header'),
                Font::textTransform('.catalog-title','Header','catalog_text_transform_title'),
                Font::textWeight('.catalog-title','Header','catalog_text_weight_title'),
                Layout::line_height('.catalog-title','Header','catalog_header_line_height', 'Line Height', 1),
                array(
                    'id' => 'catalog_title_header_options',
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
                    'id' => 'catalog_subtitle_header_options',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Header', 'experiensa' )
                ),
                Layout::contentText('catalog_subtitle_content','Content','Subtitle','styling','Header'),
                Color::colorField('catalog_text_color_subtitle','Color','#000','.catalog-subtitle','styling','Header','color'),
                Font::fontFamily('catalog_text_font_subtitle','','Header','.catalog-subtitle'),
                Font::textAlign('catalog_text_align_subtitle','Align','center','.catalog-subtitle','Header'),
                Font::fontSize('catalog_font_size_subtitle','Size','2.0','.catalog-subtitle','Header'),
                Font::textTransform('.catalog-subtitle','Header','catalog_text_transform_subtitle'),
                Font::textWeight('.catalog-subtitle','Header','catalog_text_weight_subtitle'),
                array(
                    'id' => 'catalog_subtitle_header_options',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Header', 'experiensa' )
                ),
                /**
                 * Title - Filters Tab
                 */
                array(
                    'label' => __( 'Title', 'experiensa' ),
                    'id' => 'catalog_title_filter_options',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Filter', 'experiensa' )
                ),
                Font::fontFamily('filter_title_font','Source Sans Pro','Filter','.catalog-filter-title'),
                Color::colorField('filter_title_text_color','Color','#000','.catalog-filter-title','styling','Filter'),
                array(
                    'id' => 'catalog_title_filter_options',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Filter', 'experiensa' )
                ),
                /**
                 * Buttons - Filters Tab
                 */
                array(
                    'label' => __( 'Buttons', 'experiensa' ),
                    'id' => 'css_filter_button_group',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Filter', 'experiensa' )
                ),
                Font::fontFamily('button_font','Source Sans Pro','Filter','.filter-button'),
                Color::colorField('button_text_color','Text Color','#000','.filter-button','styling','Filter'),
                Color::colorField('button_bg_color','Button Color','#b7b7b7','.button.filter-button','styling','Filter','background'),
                Color::colorField('button_bg_hover_color','Button Color - Hover','#fff','.filter-button:hover','styling','Filter','background'),
                Color::colorField('button_bg_active_color','Button Color - Active','#fff','.ui.button.toggle.active.filter-button','styling','Filter','background'),
                Layout::border_radius('button_border_radius','Border Radius','inherit','Filter','.filter-button','px',20),
                Layout::box_shadow('.filter-button','Filter','button_box_shadow'),
                array(
                    'id' => 'css_filter_button_group',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Filter', 'experiensa' )
                ),
                /**
                 * Title - Content Tab
                 */
                array(
                    'label' => __( 'Title', 'experiensa' ),
                    'id' => 'catalog_title_content_options',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Content', 'experiensa' )
                ),
                Font::fontFamily('voyage_title_font','Source Sans Pro','Content','.voyage-title'),
                Color::colorField('voyage_title_text_color','Color','#000','.voyage-title','styling','Content'),
                array(
                    'id' => 'catalog_title_content_options',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Content', 'experiensa' )
                ),
                /**
                 * Content - Content Tab
                 */
                array(
                    'label' => __( 'Content', 'experiensa' ),
                    'id' => 'catalog_content_options',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Content', 'experiensa' )
                ),
                Font::fontFamily('voyage_content_font','Source Sans Pro','Content','.voyage-content'),
                Color::colorField('voyage_content_text_color','Color','#000','.voyage-content','styling','Content'),
                Color::colorField('voyage_content_bg_color','Background','#fff','.ui.card','styling','Content','background'),
                Layout::line_height('.voyage-content', 'Content'),
                Layout::border_radius('voyage_border_radius','Border Radius','inherit','Content','.ui.card','rem'),
                Layout::box_shadow('.ui.card','Content','card_box_shadow','Card Box Shadow'),
                array(
                    'id' => 'catalog_content_options',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Content', 'experiensa' )
                ),
                /**
                 * Detail Button - Content Tab
                 */
                array(
                    'label' => __( 'Detail Button', 'experiensa' ),
                    'id' => 'css_detail_button_group',
                    'type' => 'group',
                    'action' => 'open',
                    'section' => 'styling',
                    'tab' => __( 'Content', 'experiensa' )
                ),
                Color::colorField('button_detail_text_color','Text Color','#fff','.catalog-detail-button','styling','Content'),
                Color::colorField('button_detail_bg_color','Button Color','#21BA45','.catalog-detail-button','styling','Content','background'),
                array(
                    'id' => 'css_detail_button_group',
                    'type' => 'group',
                    'action' => 'close',
                    'section' => 'styling',
                    'tab' => __( 'Content', 'experiensa' )
                ),
            );

                // Return the array
            return apply_filters( 'dslc_module_options', $options, $this->module_id );

        }
        // Module Output
        function output( $options ) {
            $type = $options['type'];
            $elements = explode(' ',$options['elements']);
            $filters = $options['filters'];

            //Header - General
            $header_opt = $options['catalog_header_opt'];
            if ( ! empty( $header_opt ) )
                $header_opt = explode( ' ', trim( $header_opt ) );
            else
                $header_opt = array();
            set_query_var('header_opt',$header_opt);
            $title_content = $options['catalog_title_content'];
            set_query_var('title_content',$title_content);
            $subtitle_content = $options['catalog_subtitle_content'];
            set_query_var('subtitle_content',$subtitle_content);

            $button_bg_color = $options['button_bg_color'];
            $button_bg_hover_color = $options['button_bg_hover_color'];
            $button_bg_active_color = $options['button_bg_active_color'];
            $voyage_border_radius = $options['voyage_border_radius'];
            $catalog_options = [
                'type' => $type,
                'elements' => $elements,
                'button_bg_color' => $button_bg_color,
                'button_bg_hover_color' => $button_bg_hover_color,
                'button_bg_active_color' => $button_bg_active_color,
                'content_border_radius' => $voyage_border_radius
            ];

            set_query_var('catalog_options',$catalog_options);
            set_query_var('filters',$filters);

            ob_start();
            Requires::experiensaLoadTemplate('partials/showcase/catalog.php');
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
        create_function('', 'return dslc_register_module( "Catalog_LC_Module" );')
    );
}