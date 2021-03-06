<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://zambrano.ch
 * @since      1.0.0
 *
 * @package    Experiensa_Api
 * @subpackage Experiensa_Api/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Experiensa_Api
 * @subpackage Experiensa_Api/includes
 * @author     Gabriel Zambrano <gabriel@experiensa.com>
 */
class Experiensa_Api {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Experiensa_Api_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $experiensa_api    The string used to uniquely identify this plugin.
	 */
	protected $experiensa_api;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'PLUGIN_NAME_VERSION' ) ) {
			$this->version = PLUGIN_NAME_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'experiensa-api';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();
    $this->define_default_setup();
    $this->define_api();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Experiensa_Api_Loader. Orchestrates the hooks of the plugin.
	 * - Experiensa_Api_i18n. Defines internationalization functionality.
	 * - Experiensa_Api_Admin. Defines all hooks for the admin area.
	 * - Experiensa_Api_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-experiensa-api-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-experiensa-api-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-experiensa-api-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-experiensa-api-public.php';

    /**
     * The class responsible for defining default configuration for the experiensa website
     */
    require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-experiensa-default-setup.php';

    /**
     * The class responsible for loading world regions in the region taxonomy
     */
     require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/onload/class-experiensa-world-region-loader.php';

     /**
      * The class responsible for Admin messages for required and/or recommended plugins
      */
     require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/tgm-required-plugins.php';

     /**
      * The class responsible for loading voyage endpoint in graphql
      */
     require plugin_dir_path( dirname( __FILE__ ) ) . 'api/graphql/voyages.php';


		$this->loader = new Experiensa_Api_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Experiensa_Api_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Experiensa_Api_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Experiensa_Api_Admin( $this->get_plugin_name(), $this->get_version() );
    $region_loader = new Experiensa_World_Region_Loader();

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

    $this->loader->add_action( 'wp_loaded', $region_loader, 'load_world_region');
    $this->loader->add_action( 'wp_loaded', $region_loader, 'load_countries');

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Experiensa_Api_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

	}

  /**
   * Register all of the hooks related to the public-facing functionality
   * of the plugin.
   *
   * @since    1.0.0
   * @access   private
   */
  private function define_default_setup() {

    $plugin_setup = new Experiensa_Default_Setup();

    $this->loader->add_action( 'after_setup_theme', $plugin_setup, 'experiensa_default_image_size' );

  }

  /**
   * Register all of the hooks related to the API Routes and Endpoints
   *
   * @since    1.0.0
   * @access   private
   */
  private function define_api() {

    //$plugin_public = new Experiensa_Api_Public( $this->get_plugin_name(), $this->get_version() );

    //$this->loader->add_action( 'after_setup_theme', $plugin_public, 'experiensa_image_size_setup' );

  }

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Experiensa_Api_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
