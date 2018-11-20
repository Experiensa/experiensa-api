<?php


require_once EXPERIENSA_ABS . '/modules/customizer/Information.php';
require_once EXPERIENSA_ABS . '/modules/customizer/Defaults.php';
require_once EXPERIENSA_ABS . '/modules/customizer/SocialNetwork.php';
require_once EXPERIENSA_ABS . '/modules/customizer/Experiensa_Kirki.php';

use Experiensa\Modules\Customizer\Information;
use Experiensa\Modules\Customizer\Defaults;
use Experiensa\Modules\Customizer\SocialNetwork;

function experiensa_customize_register( $wp_customize ) {
    $design_panel = [
        'title' => __( 'Experiensa Settings', 'experiensa' ),
        'description' => __('Experiensa plugin settings'), // Include html tags such as <p>.
        'priority' => 160, // Mixed with top-level-section hierarchy.
    ];
    $wp_customize->add_panel( 'experiensa_settings', $design_panel);

    $info = new Information($wp_customize);
    $info->create_components();
    $defaults = new Defaults($wp_customize);
    $defaults->create_components();
    $socials = new SocialNetwork($wp_customize);
    $socials->create_components();
}
add_action( 'customize_register', 'experiensa_customize_register' );

//add_action( 'customize_register', 'jt_load_customize_controls', 0 );
//
//function jt_load_customize_controls() {
//
//    require_once( EXPERIENSA_ABS . '/modules/customizer/custom/controls/control-checkbox-multiple.php' );
//}