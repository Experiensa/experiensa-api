<?php

/**
* The plugin bootstrap file
*
* This file is read by WordPress to generate the plugin information in the plugin
* admin area. This file also includes all of the dependencies used by the plugin,
* registers the activation and deactivation functions, and defines a function
* that starts the plugin.
*
* @link              https://github.com/Experiensa/experiensa-api
* @since             1.0.0
* @package           Experiensa_Api
*
* @wordpress-plugin
* Plugin Name:       Experiensa API
* Plugin URI:        https://github.com/Experiensa/experiensa-api
* Description:       Travel forms for travel agencies - Tourist & travel information on steroids
* Version:           1.0.0
* Author:            Experiensa Team
* Author URI:        https://github.com/Experiensa/experiensa-api
* License:           GPL-2.0+
* License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
* Text Domain:       experiensa-api
* Domain Path:       /languages
* Plugin Type:       Piklist
*/


// Avoid direct calls to this file.
if ( ! function_exists( 'add_action' ) ) {
  header( 'Status: 403 Forbidden' );
  header( 'HTTP/1.0 403 Forbidden' );
  header( 'HTTP/1.1 403 Forbidden' );
  exit();
}


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
  die;
}

if ( ! defined( 'ABSPATH' ) ) {
  header( 'HTTP/1.0 403 Forbidden' );
  exit;
}

/**
* Currently plugin version.
* Start at version 1.0.0 and use SemVer - https://semver.org
* Rename this for your plugin and update it as you release new versions.
* Define multiple PHP Constanst
*/
define('EXPERIENSA_VER', '1.0.0');
define('EXPERIENSA_FILE', __FILE__);
define('EXPERIENSA_PLUGIN_PATH',  WP_PLUGIN_DIR . '/experiensa-api/');
define('EXPERIENSA_BASENAME', plugin_basename(__FILE__));
define('EXPERIENSA_ABS', dirname(__FILE__));
define('EXPERIENSA_DIST', dirname(__FILE__) . '/dist');
define('EXPERIENSA_TEMPLATES', dirname(__FILE__) . '/templates/');
define('EXPERIENSA_URL', plugin_dir_url(__FILE__));
define('EXPERIENSA_ASSETS_URL', plugin_dir_url(__FILE__) . 'assets/');
define('EXPERIENSA_DIST_URL', plugin_dir_url(__FILE__) . 'dist/');
define('EXPERIENSA_MAIN_API_URL', get_bloginfo('url') . '/wp-json/wp/v2');
define('EXPERIENSA_DIR_NAME', dirname(plugin_basename(__FILE__)));

/**
* The code that runs during plugin activation.
* This action is documented in includes/class-experiensa-api-activator.php
*/
function activate_experiensa_api() {
  require_once plugin_dir_path( __FILE__ ) . 'includes/class-experiensa-api-activator.php';
  Experiensa_Api_Activator::activate();
}


/**
* The code that runs during plugin deactivation.
* This action is documented in includes/class-experiensa-api-deactivator.php
*/
function deactivate_experiensa_api() {
  require_once plugin_dir_path( __FILE__ ) . 'includes/class-experiensa-api-deactivator.php';
  Experiensa_Api_Deactivator::deactivate();
}


add_action( 'rest_api_init', function () {
  require plugin_dir_path( __FILE__ ) . 'api/rest/class-experiensa-voyage-endpoint.php';
  $controller = new Experiensa_Voyage_Endpoint();
  $controller->register_routes();
} );

register_activation_hook( __FILE__, 'activate_experiensa_api' );
register_deactivation_hook( __FILE__, 'deactivate_experiensa_api' );

/**
* The core plugin class that is used to define internationalization,
* admin-specific hooks, and public-facing site hooks.
*/
require plugin_dir_path( __FILE__ ) . 'includes/class-experiensa-api.php';

/**
* Begins execution of the plugin.
*
* Since everything within the plugin is registered via hooks,
* then kicking off the plugin from this point in the file does
* not affect the page life cycle.
*
* @since    1.0.0
*/
function run_experiensa_api() {

  $plugin = new Experiensa_Api();
  $plugin->run();

}
run_experiensa_api();


//gab's code
require_once plugin_dir_path( __FILE__ ) . 'includes/tgm-required-plugins.php';

require plugin_dir_path( __FILE__ ) . 'api/graphql/voyages.php';

//https://wordpress.stackexchange.com/questions/54423/add-image-size-in-a-plugin-i-created
add_action( 'after_setup_theme', 'experiensa_image_size_setup' );
function experiensa_image_size_setup() {
  add_image_size('exp-thumbnail',600,9999);
  update_option( 'thumbnail_size_w', 600 );
  update_option( 'thumbnail_size_h', 9999 );
  update_option( 'thumbnail_crop', false);

  update_option( 'medium_size_w', 900 );
  update_option( 'medium_size_h', 9999 );

  update_option( 'large_size_w', 1024 );
  update_option( 'large_size_h', 9999 );
}




// Victor's code
function init_experiensa(){
  //Include the custom autoloader
  require_once EXPERIENSA_ABS . '/autoloader.php';
  //new Experiensa\Plugin\Includes\Requires();
  new Experiensa\Plugin\Includes\Asset();
  new Experiensa\Plugin\Modules\Ajax();
  Experiensa\Plugin\Models\Register::init();
  Experiensa\Plugin\Modules\Settings::addSettingPages();
  new \Experiensa\Plugin\Modules\Defaults();
  new Experiensa\Plugin\Modules\Api\RegisterApi();
}
add_action('init','init_experiensa');

function experiensa_rewrite_flush(){
  require_once EXPERIENSA_ABS . '/autoloader.php';
  Experiensa\Plugin\Models\Register::register_flush_rewrite_rules();
}
register_activation_hook(EXPERIENSA_FILE, 'experiensa_rewrite_flush');
//https://github.com/WP-API/WP-API/issues/259
add_filter( 'json_url', function( $url ) {
  if ( force_ssl_admin() ){
    return set_url_scheme( $url, 'https' );
  } else {
    return $url;
  }
} );

add_filter( 'rest_post_collection_params', 'my_prefix_change_post_per_page', 10, 1 );

function my_prefix_change_post_per_page( $params ) {
  if ( isset( $params['per_page'] ) ) {
    $params['per_page']['maximum'] = 200;
  }
  return $params;
}
