<?php
/*
Title: Place Information
Post Type: exp_place
*/
piklist('field', array(
    'type' => 'text',
    'field' => 'google_place_search',
    'label' => __('Search Google Place Info','experiensa'),
    'attributes' => array(
        'class' => 'regular-text search-google-place' // WordPress css class
    )
));
piklist('field', array(
    'type'      => 'hidden',
    'field'     => 'place_api_data'
));

piklist('field', array(
  'type' => 'text',
  'field' => 'place_article_search',
  'label' => __('Search Article on Wikipedia','experiensa'),
  'attributes' => array(
      'class' => 'regular-text search-wiki-article' // WordPress css class
  )
));