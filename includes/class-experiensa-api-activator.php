<?php

/**
 * Fired during plugin activation
 *
 * @link       https://zambrano.ch
 * @since      1.0.0
 *
 * @package    Experiensa_Api
 * @subpackage Experiensa_Api/includes
 */

class Experiensa_Api_Activator {

  public function load_world_region(){
    $anord = ['description' => 'Canada, États-Unis, Groenland, Mexique'];
    wp_insert_term( 'Amérique du nord', 'exp_region', $anord);
  }

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
    /**
     * The class responsible for loading world regions in the region taxonomy
     */
    //require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/onload/class-experiensa-world-region-loader.php';
    //admin_init
    //$anord = ['description' => 'Canada, États-Unis, Groenland, Mexique'];
    //wp_insert_term( 'Amérique du nord', 'exp_region', $anord);

    //$region = new Experiensa_World_Region_Loader();
    //$region::load();
    require_once EXPERIENSA_ABS . '/autoloader.php';
    $register = new Register();
    $register->register_flush_rewrite_rules();
	}


  //$world_region = new Experiensa_World_Region_Loader();
  //$this->loader->add_action( 'init', $world_region, 'load_america_region' );

}
