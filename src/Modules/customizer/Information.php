<?php namespace Experiensa\Modules\Customizer;

//include EXPERIENSA_ABS . '/modules/customizer/custom/controls/control-checkbox-multiple.php';
//use Experiensa\Modules\Customizer\Custom\Control\EXP_Customize_Control_Checkbox_Multiple;

class Information
{
    private $wp_customize;
    private $section_id;
    function __construct($wp_customize){
        $this->wp_customize = $wp_customize;
    }
    public function create_components(){
        $this->add_sections();
        $this->add_settings();
        $this->add_controls();
        $this->section_id = 'experiensa_info_settings';
    }
    /**
     * Create General Section
     */
    public function add_sections(){
        $info_section = [
            'title'      => __('Information','experiensa'),
            'priority'   => 10,
            'panel'     => 'experiensa_settings'
        ];
        $this->wp_customize->add_section( $this->section_id , $info_section );
    }
    /**
     * Define settings
     */
    public function add_settings(){
        $this->wp_customize->add_setting('experiensa_info[modules]', array(
            'default'           => array( 'apple', 'orange' ),
        ));
        $this->wp_customize->add_setting( 'experiensa_info[logo]' , array(
            'default'              => '',
            'theme_supports'       => 'post-thumbnails',
        ) );
        $this->setting_creator('experiensa_info[description]');
        $this->setting_creator('experiensa_info[address]');
        $this->setting_creator('experiensa_info[postal_code]');
        $this->setting_creator('experiensa_info[city]');
        $this->setting_creator('experiensa_info[country]');
        $this->setting_creator('experiensa_info[email]');
        $this->setting_creator('experiensa_info[phone]');
        $this->setting_creator('experiensa_info[fax]');
        $this->setting_creator('experiensa_info[schedule]');
        $this->wp_customize->add_setting( 'experiensa_info[insurance]' , array(
            'default'        => false,
            'type'           => 'option',
        ) );
        $this->setting_creator('experiensa_info[captcha_site_key]');
        $this->setting_creator('experiensa_info[captcha_secret_key]');
        $this->setting_creator('experiensa_info[gmaps_api]');
    }
    private function setting_creator($setting_id){
        $this->wp_customize->add_setting( $setting_id , array(
            'transport'   => 'refresh',
        ) );
    }
    /**
     * Create setting controls
     */
    public function add_controls()
    {
//        $this->wp_customize->add_control(
//            new EXP_Customize_Control_Checkbox_Multiple(
//                $this->wp_customize,
//                'logo',
//                array(
//                    'section' => $this->section_id,
//                    'settings' => 'experiensa_info[modules]',
//                    'label'   => __( 'Favorite Fruit', 'jt' ),
//                    'choices' => array(
//                        'apple'      => __( 'Apple',      'jt' ),
//                        'banana'     => __( 'Banana',     'jt' ),
//                        'date'       => __( 'Date',       'jt' ),
//                        'orange'     => __( 'Orange',     'jt' ),
//                        'watermelon' => __( 'Watermelon', 'jt' )
//                    )
//                )
//            )
//        );
        $this->wp_customize->add_control('modules', array(
            'settings' => 'experiensa_info[modules]',
            'label'    => __('Modules','experiensa'),
            'section'  => $this->section_id,
            'type'     => 'checkbox',
        ));
        $this->wp_customize->add_control(
            new \WP_Customize_Image_Control(
                $this->wp_customize,
                'logo',
                array(
                    'label'    => __('Logo', 'experiensa'),
                    'section' => $this->section_id,
                    'settings'    => 'experiensa_info[logo]'
                )
            )
        );
        $this->basic_control_creator('description','textarea','Description',$this->section_id,'experiensa_info[description]','Enter the agency description');
        $this->basic_control_creator('address','text','Address',$this->section_id,'experiensa_info[address]','Enter the agency address');
        $this->basic_control_creator('postal_code','text','Postal Code',$this->section_id,'experiensa_info[postal_code]','Enter the agency postal code');
        $this->basic_control_creator('city','text','City',$this->section_id,'experiensa_info[city]','Enter the agency city');
        $this->basic_control_creator('country','text','Country',$this->section_id,'experiensa_info[country]','Enter the agency country');
        $this->basic_control_creator('email','text','Email',$this->section_id,'experiensa_info[email]','Enter the agency email');
        $this->basic_control_creator('phone','text','Phone',$this->section_id,'experiensa_info[phone]','Enter the agency phone');
        $this->basic_control_creator('fax','text','Fax',$this->section_id,'experiensa_info[fax]','Enter the agency fax');
        $this->basic_control_creator('schedule','textarea','Schedule',$this->section_id,'experiensa_info[schedule]','Enter the agency schedule');
        $this->wp_customize->add_control(
            'insurance',
            array(
                'label' => __('Agency Insurance', 'experiensa'),
                'section' => $this->section_id,
                'settings' => 'experiensa_info[insurance]',
                'type' => 'radio',
                'choices'    => array(
                    true => __('Yes','experiensa'),
                    false => __('No','experiensa')
                ),
            )
        );
        $this->basic_control_creator(
            'captcha_site_key',
            'text',
            'reCAPTCHA Site Key',
            $this->section_id,'experiensa_info[captcha_site_key]',
            'Enter the agency reCAPTCHA Site Key');
        $this->basic_control_creator(
            'captcha_secret_key',
            'text',
            'reCAPTCHA Secret Key',
            $this->section_id,'experiensa_info[captcha_secret_key]',
            'Enter the agency reCAPTCHA Secret Key');
        $this->basic_control_creator(
            'gmaps_api',
            'text',
            'Google Maps Api Key',
            $this->section_id,'experiensa_info[gmaps_api]',
            'Enter the agency Google Maps Api Key');
    }
    private function basic_control_creator($name,$type,$label,$section,$setting,$placeholder){
        $this->wp_customize->add_control(
            $name,
            array(
                'label' => __($label, 'experiensa'),
                'section' => $section,
                'settings' => $setting,
                'input_attrs' => array(
                    'placeholder' => __($placeholder, 'experiensa')
                ),
                'type' => $type
            )
        );
    }
}