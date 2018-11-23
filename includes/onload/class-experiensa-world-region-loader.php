<?php


class Experiensa_World_Region_Loader{
  /**
  * Script to load automatically World Regions
  * @return [script] [description]
  *  Amerique du nord
  *  Amerique centrale
  *  Amerique du sud
  *  Afrique
  *  Mahgreb
  *  Scandinavia
  *  Europe
  *  Europe de l'est
  *  Mediterranee
  *  Moyen-Orient
  *  Asie
  *  Asie du sud-est
  *  Ocean indean
  *  Pacifique
  */
  public static function load_world_region(){
    ////http://www.levoyageur.net/maps-1-africa.html

    /** Amérique du nord ******************************************************/
    $anord = ['description' => 'Canada, États-Unis, Groenland, Mexique'];
    wp_insert_term( 'Amérique du nord', 'exp_region', $anord);

    /** Amérique centrale *****************************************************/
    $acentral = ['description' => 'Belize, Costa Rica, Guatemala, Honduras, Nicaragua, Panamá, Salvador'];
    wp_insert_term( 'Amérique centrale', 'exp_region', $acentral);

    /** Amérique du sud *******************************************************/
    $asud = ['description' => 'Argentine, Bolivie, Brésil, Chili, Colombie, Équateur, Guyana, Guyane (France), Îles Malouines (Royaume-Uni), Paraguay, Pérou, Suriname, Uruguay, Venezuela'];
    wp_insert_term( 'Amérique du sud', 'exp_region', $asud);

    /** Caraïbes **************************************************************/
    $caraibes = ['description' => 'Antigua-et-Barbuda, Bahamas, Barbade, Belize, Colombie, Costa Rica, Cuba, Dominique, République dominicaine, Grenade, Guatemala, Guyana, Haïti, Honduras, Jamaïque, Nicaragua, Panama, Saint-Christophe-et-Niévès, Sainte-Lucie, Saint-Vincent-et-les-Grenadines, Suriname, Trinité-et-Tobago, Venezuela'];
    wp_insert_term( 'Caraïbes', 'exp_region', $caraibes );

    /** Pacifique *************************************************************/
    $pacifique = ['description' => 'Australie, États fédérés de Micronésie, Fidji, Île de Pâques (Chili), Île Wake (États-Unis), Îles Cook, Îles Mariannes du Nord (États-Unis), Îles Marshall, Îles Pitcairn (Royaume-Uni), Îles Salomon, Kiribati, Nauru, Niue, Nouvelle-Calédonie (France), Nouvelle-Zélande, Palaos, Indonésie Papouasie, Papouasie-Nouvelle-Guinée, Polynésie française (France), Samoa, Samoa américaines (États-Unis), Tonga, Tuvalu, Vanuatu, Wallis-et-Futuna (France)'];
    wp_insert_term( 'Pacifique', 'exp_region', $pacifique);

    /** Afrique ***************************************************************/
    $afrique = ['description' => 'Afrique du Sud, Angola, Bénin, Botswana, Burkina Faso, Burundi, Cameroun, Cap-Vert, Comores, Congo, Côte d\'Ivoire, Djibouti, Égypte, Érythrée, Éthiopie, Gabon, Gambie, Ghana, Guinée, Guinée équatoriale, Guinée-Bissau, Kenya, Lesotho, Liberia, Malawi, Mali, Mauritanie, Mozambique, Namibie, Niger, Nigeria, Ouganda, République centrafricaine, République démocratique du Congo, Rwanda, São Tomé-et-Príncipe, Sénégal, Sierra Leone, Somalie, Soudan, Soudan du Sud, Swaziland, Tanzanie, Tchad, Togo, Zambie, Zimbabwe'];
    wp_insert_term( 'Afrique', 'exp_region', $afrique);

    /** Mahgreb ***************************************************************/
    $mahgreb = ['description' => 'Algérie, Libye, Mauritanie, Maroc, Tunisie, Sahara occidental'];
    wp_insert_term( 'Mahgreb', 'exp_region', $mahgreb);

    /** Scandinavie ***********************************************************/
    $scandinavie = ['description' => 'Denmark, Norway, Sweden, Finland, Iceland, Faroe Islands, Åland Islands'];
    wp_insert_term( 'Scandinavie', 'exp_region', $scandinavie);

    /** Europe ****************************************************************/
    $europe = ['description' => 'Belgique, Pays-Bas, Luxembourg, Allemagne, Autriche, Liechtenstein, Slovénie, Suisse, Angleterre, Écosse, Pays de Galles, Irlande du Nord, Irlande'];
    wp_insert_term( 'Europe', 'exp_region', $europe);

    /** Europe de l'est *******************************************************/
    $europe_est = ['description' => 'Arménie, Azerbaïdjan, Biélorussie, Géorgie, Russie, Ukraine, Turquie, Estonie, Lettonie, Lituanie, République tchèque, Hongrie, Pologne, Slovaquie'];
    wp_insert_term( "Europe de l'est", 'exp_region', $europe_est);

    /** Mediterranee ***********************************************************/
    $mediterranee = ['description' => 'Italie, Malte, France, Monaco, Espagne, Andorre, Portugal, Gibraltar, Grèce, Chypre, Vatican, Saint-Marin'];
    wp_insert_term( 'Mediterranee', 'exp_region', $mediterranee);

    /** Asie du sud-est *******************************************************/
    $asie_est = ['description' => 'Birmanie, Brunei, Cambodge, Indonésie, Laos, Malaisie, Philippines, Singapour, Thaïlande, Timor oriental, Viêt Nam'];
    wp_insert_term( 'Asie du sud-est', 'exp_region', $asie_est);

    /** Scandinavie ***********************************************************/
    $moyen_orient = ['description' => 'Akrotiri, Bahrai,Cyprus, Dhekelia, Gaza Strip, Iran, Iraq, Israel, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, Syria, Turkey, United Arab Emirates, Yemen'];
    wp_insert_term( 'Moyen-Orient', 'exp_region', $moyen_orient);

    /** Asie ******************************************************************/
    $asie = ['description' => 'Afghanistan, Chine (incluant Hong Kong et Macao), Turkménistan, Sri Lanka, Pakistan, Bangladesh, Bhoutan, Inde, Maldives, Népal, Tadjikistan, Mongolie, Japon, Taïwan, Corée du Sud, Corée du Nord, Kazakhstan, Ouzbékistan, Kirghizistan'];
    wp_insert_term( 'Asie', 'exp_region', $asie);

    /** Océan Indien **********************************************************/
    $ocean_indien = ['description' => 'Île Europa (France), Îles Glorieuses (France), Île Juan de Nova (France), Île Lamu, Archipel de Lamu (Kenya), Îles Laquedives (Inde), Madagascar, Mafia (île) (Tanzanie), Île Maurice, Îles Nicobar, Sri Lanka, Île Andaman (Inde), Maldives, Nosy Be (Madagascar), Pemba (Tanzanie), Îles Quirimbas (Mozambique), La Réunion (France), Rodrigues (Maurice), Seychelles, Socotra (Yémen), Île Tromelin (France), Zanzibar (Tanzanie), Îles Comores, Grande Comore, Anjouan, Mohéli, Mayotte (France), Îles Chagos (Royaume-Uni)'];
    wp_insert_term( 'Océan Indien', 'exp_region', $ocean_indien);
  }

/**
 * [load_countries description]
 * @return [type] [description]
 * API: https://restcountries.eu
 */
  public function load_countries(){
    $countries = file_get_contents('https://restcountries.eu/rest/v2/all');
    $countries = (array) json_decode( $countries );
    foreach ($countries as $key ) {
      wp_insert_term( $key->translations->fr, 'exp_country');
      //echo "<h3 style='margin-left:200px; color:blue;'>" . $key->translations->fr . "</h3>";
    }
  }

  public function load_themes(){
    $themes = [
      'Voyage de noces', 'Romantique', 'Aventure',
      'Business','Loisir', 'Découverte', 'Gastronomie',
      'Histoire', 'Croisière', 'Safari', 'Plage', 'Sport',
      'Nature', 'Golf', 'Bien-être', 'Shopping', 'Repos', 'Ville', 'Culture', 'Divertissement', 'Spa'
    ];
    foreach ($themes as $key => $value) {
        wp_insert_term($value,'exp_theme');
    }
  }

  public function load(){
    //add_action('wp_loaded','load_world_region');
    //add_action('wp_loaded','load_countries');
  }

}
