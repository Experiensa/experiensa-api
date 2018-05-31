<?php namespace Experiensa\Plugin\Models\Taxonomy;

class Theme{
    public static function init(){
        add_action( 'init' , array(__CLASS__,'addTaxonomy'), 0 );
        add_action( 'after_switch_theme', 'flush_rewrite_rules' );
    }
    public static function addTaxonomy(){
        $labels = array(
            'name'                       => _x( 'Themes', 'Taxonomy General Name', 'experiensa' ),
            'singular_name'              => _x( 'Theme', 'Taxonomy Singular Name', 'experiensa' ),
            'menu_name'                  => __( 'Themes', 'experiensa' ),
            'all_items'                  => __( 'All Themes', 'experiensa' ),
            'parent_item'                => __( 'Parent Theme', 'experiensa' ),
            'parent_item_colon'          => __( 'Parent Theme:', 'experiensa' ),
            'new_item_name'              => __( 'New Theme Name', 'experiensa' ),
            'add_new_item'               => __( 'Add New Theme', 'experiensa' ),
            'edit_item'                  => __( 'Edit Theme', 'experiensa' ),
            'update_item'                => __( 'Update Theme', 'experiensa' ),
            'view_item'                  => __( 'View Theme', 'experiensa' ),
            'separate_items_with_commas' => __( 'Separate Themes with commas', 'experiensa' ),
            'add_or_remove_items'        => __( 'Add or remove Themes', 'experiensa' ),
            'choose_from_most_used'      => __( 'Choose from the most used', 'experiensa' ),
            'popular_items'              => __( 'Popular Themes', 'experiensa' ),
            'search_items'               => __( 'Search Themes', 'experiensa' ),
            'not_found'                  => __( 'Not Found', 'experiensa' ),
            'items_list'                 => __( 'Themes list', 'experiensa' ),
            'items_list_navigation'      => __( 'Themes list navigation', 'experiensa' ),
        );
        $rewrite = array(
            'slug'                       => 'exp_themes',
            'with_front'                 => true,
            'hierarchical'               => false,
        );
        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => true,
            'public'                     => true,
            'show_ui'                    => true,
            'show_admin_column'          => true,
            'show_in_nav_menus'          => true,
            'show_in_rest'               => true,
            'show_tagcloud'              => true,
            'rewrite'                    => $rewrite,
        );
        register_taxonomy( 'exp_theme', array( 'post', 'attachment', 'exp_voyage', 'exp_service', 'exp_host' ), $args );
        self::add_exp_theme_taxonomy();
    }
    public static function add_exp_theme_taxonomy() {
        $taxonomy = 'exp_theme';
        $df_theme_en = ['City','Safari','Nature','Sport','Wellness','Leisure','Beach','Honeymoon','Adventure','Party','Mountain','Cruise','Culinary','Shopping','Culture','Romance'];
        $df_theme_fr = ['Ville','Safari','Nature','Sport','Bien-être','Loisir','Plage','Voyage de noces','Aventure','Fetes','Montagne','Croisieres','Culinaire','Shopping','Cuture','Romance'];
        $df_theme_es = ['Ciudad','Safari','Naturaleza','Deporte','Bienestar','Ocio','Playa','Luna de miel','Aventura','Fiesta','Montaña','Cruceros','Culinario','Shopping','Cultura','Romance'];
        $df_theme = $df_theme_en;
        //
        $code = false;
        //Check if WPML is installed
        if ( function_exists('icl_object_id') ) {
            //Active WPML language code
            $code = ICL_LANGUAGE_CODE;
        }
        if(!$code){
            $code = get_bloginfo("language");
            $code = explode("-",$code,2);
            $code = $code[0];
        }
        $language = strtolower($code);
        // $language = Helpers::getSiteLanguageCode();
        if($language == 'es'){
            $df_theme = $df_theme_es;
        }else{
            if($language == 'fr'){
                $df_theme = $df_theme_fr;
            }
        }
        if(taxonomy_exists($taxonomy)){
            $terms = get_terms([
                'taxonomy'   => $taxonomy,
                'orderby'    => 'none',
                'hide_empty' => false,
            ]);
            if(!empty($terms)){
                foreach($terms as $t){
                    $name = ucfirst(strtolower($t->name));
                    if(in_array($name, $df_theme)){
                        $df_theme = array_diff($df_theme, array($name));
                    }
                }
            }
            foreach($df_theme as $theme){
                wp_insert_term($theme, $taxonomy);
            }
        }
    }
}