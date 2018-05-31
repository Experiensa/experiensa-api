<?php namespace Experiensa\Modules\Customizer;


use Experiensa\Modules\Helpers;

class SocialNetwork
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
            'title'      => __('Social Networks','experiensa'),
            'priority'   => 30,
            'panel'     => 'experiensa_settings'
        ];
        $this->wp_customize->add_section( 'experiensa_socials_settings'  , $general_section );
    }
    /**
     * Define settings
     */
    public function add_settings(){
        $this->wp_customize->add_setting( 'experiensa_socials[facebook]' , array(
            'transport'   => 'refresh',
        ) );
        $this->wp_customize->add_setting( 'experiensa_socials[twitter]' , array(
            'transport'   => 'refresh',
        ) );
        $this->wp_customize->add_setting( 'experiensa_socials[instagram]' , array(
            'transport'   => 'refresh',
        ) );
        $this->wp_customize->add_setting( 'experiensa_socials[pinterest]' , array(
            'transport'   => 'refresh',
        ) );
        $this->wp_customize->add_setting( 'experiensa_socials[linkedin]' , array(
            'transport'   => 'refresh',
        ) );
        $this->wp_customize->add_setting( 'experiensa_socials[gplus]' , array(
            'transport'   => 'refresh',
        ) );
        $this->wp_customize->add_setting( 'experiensa_socials[skype]' , array(
            'transport'   => 'refresh',
        ) );
    }
    /**
     * Create setting controls
     */
    public function add_controls()
    {
        $this->wp_customize->add_control(
            'facebook',
            array(
                'label' => __('Facebook', 'experiensa'),
                'section' => 'experiensa_socials_settings',
                'settings' => 'experiensa_socials[facebook]',
                'type' => 'url',
                'input_attrs' => array(
                    'placeholder' => __('Enter the agency Facebook','experiensa')
                )/*,
                'active_callback' => function($value){
                    return Helpers::checkValidURL($value);
                }*/
            )
        );
        $this->wp_customize->add_control(
            'twitter',
            array(
                'label' => __('Twitter', 'experiensa'),
                'section' => 'experiensa_socials_settings',
                'settings' => 'experiensa_socials[twitter]',
                'input_attrs' => array(
                    'placeholder' => __('Enter the agency Twitter','experiensa')
                ),
                'type' => 'url'
            )
        );
        $this->wp_customize->add_control(
            'instagram',
            array(
                'label' => __('Instagram', 'experiensa'),
                'section' => 'experiensa_socials_settings',
                'settings' => 'experiensa_socials[instagram]',
                'input_attrs' => array(
                    'placeholder' => __('Enter the agency Instagram','experiensa')
                ),
                'type' => 'url'
            )
        );
        $this->wp_customize->add_control(
            'pinterest',
            array(
                'label' => __('Pinterest', 'experiensa'),
                'section' => 'experiensa_socials_settings',
                'settings' => 'experiensa_socials[pinterest]',
                'input_attrs' => array(
                    'placeholder' => __('Enter the agency Pinterest','experiensa')
                ),
                'type' => 'url'
            )
        );
        $this->wp_customize->add_control(
            'linkedin',
            array(
                'label' => __('LinkedIn', 'experiensa'),
                'section' => 'experiensa_socials_settings',
                'settings' => 'experiensa_socials[linkedin]',
                'input_attrs' => array(
                    'placeholder' => __('Enter the agency LinkedIn','experiensa')
                ),
                'type' => 'url'
            )
        );
        $this->wp_customize->add_control(
            'gplus',
            array(
                'label' => __('Google PLus', 'experiensa'),
                'section' => 'experiensa_socials_settings',
                'settings' => 'experiensa_socials[gplus]',
                'input_attrs' => array(
                    'placeholder' => __('Enter the agency Google Plus','experiensa')
                ),
                'type' => 'url'
            )
        );
        $this->wp_customize->add_control(
            'skype',
            array(
                'label' => __('Skype', 'experiensa'),
                'section' => 'experiensa_socials_settings',
                'settings' => 'experiensa_socials[skype]',
                'input_attrs' => array(
                    'placeholder' => __('Enter the agency Skype','experiensa')
                ),
                'type' => 'url'
            )
        );
    }
}