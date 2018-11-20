<?php namespace Experiensa\Modules\Customizer;


use Experiensa\Modules\Common;

class Defaults
{
    private $wp_customize;
    function __construct($wp_customize){
        $this->wp_customize = $wp_customize;
    }
    public function create_components(){
        $this->add_sections();
        $this->add_settings();
        $this->add_controls();
    }
    /**
     * Create General Section
     */
    public function add_sections(){
        $general_section = [
            'title'      => __('Defaults','experiensa'),
            'priority'   => 20,
            'panel'     => 'experiensa_settings'
        ];
        $this->wp_customize->add_section( 'experiensa_default_settings'  , $general_section );
    }
    /**
     * Define settings
     */
    public function add_settings(){
        $this->wp_customize->add_setting( 'experiensa_currency' , array(
            'default'     => 'CHF',
            'transport'   => 'refresh',
        ) );
        $this->wp_customize->add_setting( 'experiensa_timezone' , array(
            'transport'   => 'refresh',
        ) );
    }
    /**
     * Create setting controls
     */
    public function add_controls()
    {
        $this->wp_customize->add_control(
            'experiensa_currency',
            array(
                'label' => __('Currency', 'experiensa'),
                'section' => 'experiensa_default_settings',
                'settings' => 'experiensa_currency',
                'type' => 'select',
                'choices' => Common::currency_list()
            )
        );
        $this->wp_customize->add_control(
            'experiensa_timezone',
            array(
                'label' => __('Timezone', 'experiensa'),
                'section' => 'experiensa_default_settings',
                'settings' => 'experiensa_timezone',
                'type' => 'select',
                'choices' => Common::get_timezone_array()
            )
        );
    }
}