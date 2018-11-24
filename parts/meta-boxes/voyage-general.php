<?php
/*
Title: Voyage
Post Type: exp_voyage
Meta box: true
*/

$slogan = array(
  'type'      => 'text',
  'field'     => 'exp_voyage_slogan',
  'columns'   => 12,
  'label'     => __('Voyage slogan','experiensa')
);

$price = array(
  'type'  => 'number',
  'field' => 'exp_voyage_price',
  'label' => __('Price','experiensa'),
  'attributes'    => array( 'step' => 'any' ),
  'columns'   => 4
);

$discount = array(
  'type'  => 'number',
  'field' => 'exp_voyage_discount',
  'label' => __('Discount','experiensa'),
  'attributes'    => array( 'step' => 'any' ),
  'columns'   => 4
);

$from = array(
  'type'      => 'checkbox',
  'field'     => 'exp_voyage_display_from',
  'value'     => 'TRUE',
  'label'     => __('Display from','experiensa'),
  'choices'   => array( 'TRUE'  => 'Yes' ),
  'columns'   => 4
);


$source = array(
  'type'      => 'text',
  'field'     => 'exp_voyage_original_source',
  'columns'   => 12,
  'label'     => __('Original Source','experiensa'),
  'help'      => __('Copy the url of the website from where this information comes from','experiensa'),
);

piklist('field', array(
  'type'      => 'group',
  'label'     => __('General info','experiensa'),
  'fields'    => array(
    $slogan,
    $price,
    $discount,
    $from,
    $source
  )
));

/*******************************************************************************
* [Date and duration section]
* @var [Date - Start date: when does the offer begins]
* @var [Date - End date: when does the offer expires]
* @var [Num - Number of days: how many days does the trip last]
* @var [Num - Number of nights: how many nights does the trip last]
******************************************************************************/

$offer_start_date = array(
  'type'      => 'datepicker',
  'field'     => 'exp_voyage_start_date',
  'label'     => __('Start date','experiensa'),
  'options'   => array( 'dateFormat' => 'yy-mm-dd'),
  'columns'   => 4
);

$expiry_date = array(
  'type'      => 'datepicker',
  'field'     => 'exp_voyage_end_date',
  'label'     => __('End date','experiensa'),
  'options'   => array( 'dateFormat' => 'yy-mm-dd'),
  'columns'   => 4
);

$number_days = array(
  'type'          => 'number',
  'field'         => 'exp_voyage_number_days',
  'label'         => __('N° days','experiensa'),
  'columns'       => 2,
  'attributes'    => ['placeholder' => __('Days','experiensa')],
);
$number_nights = array(
  'type'          => 'number',
  'field'         => 'exp_voyage_number_nights',
  'label'         => __('N° nights','experiensa'),
  'columns'       => 2,
  'attributes' => array( 'placeholder' => __('Nights')),
);

piklist('field', array(
  'type' => 'group',
  'label' => __('Dates & duration'),
  'fields' => array(
    $offer_start_date,
    $expiry_date,
    $number_days,
    $number_nights,
  ),
));

piklist('field', array(
  'type'  => 'editor',
  'field' => 'exp_voyage_information_conditions',
  'label' => __('Additional information & Conditions','experiensa')
));

// https://idearocketanimation.com/17553-vertical-video-guide/?utm_referrer=https%3A%2F%2Fwww.google.com%2F
// for the aspect ratios we will use the following
// Portrait 4:5 Used by instagram and FB or 2:3 Used by facebook
// Panoramo is between 2:1 to 10:1 (commenly 4:1)
// Default image is 16:9 HD (1920x1080)
// Photo galeries does not matter

piklist('field', array(
  'type'          => 'file',
  'field'         => 'exp_voyage_panorama_image',
  'help'          => __( 'Panorama images should have an aspect ratio of 4:1, min is 2:1 and max 10:1','experiensa'),
  'label'         => __( 'Panorama image','experiensa' ),
  'columns'       => 3,
  'options'       => ['button' => __('Panorama image','experiensa')],
  'validate' => array(
    ['type' => 'limit','options' => [ 'min' => 0,'max' => 1]]
  )
));

piklist('field', array(
  'type'          => 'file',
  'field'         => 'exp_voyage_portrait_image',
  'help'          => __( 'Portrait images are optimized for mobile phones (aspect ratio 4:5 or 2:3)','experiensa'),
  'description'   => __('Aspect ratio 4:5 or 2:3','experiensa'),
  'label'         => __( 'Portrait image','experiensa' ),
  'columns'       => 3,
  'options'       => ['button' => __('Portrait Image','experiensa')],
  'validate' => array(
    ['type' => 'limit', 'options' => ['min' => 0,'max' => 1]]
  )
));

piklist('field', array(
  'type'          => 'file',
  'field'         => 'exp_voyage_gallery',
  'scope'         => 'post_meta',
  'description'   => __('Add different images (min 4 and max 8). The size of the images do not matter','experiensa'),
  'label'         => __('Photo Gallery','experiensa'),
  'options' => array(
    'modal_title' => 'Add File(s)',
    'button' => 'Add Photos'
  )
));

piklist('field', array(
  'type'          => 'file',
  'field'         => 'exp_voyage_flyer',
  'help'          => __( 'Flyer should be PDF files','experiensa'),
  'label'         => __( 'PDF Flyer','experiensa' ),
  'columns'       => 3,
  'options'       => ['button' => __('PDF Flyer','experiensa')],
  'validate' => array(
    array(
      'type' => 'limit',
      'options' => array(
        'min' => 0,
        'max' => 1
      )
    )
  )
));



/*
piklist('field', array(
'type'      => 'group',
'label'     => __('Resell to other agencies?','experiensa'),
'fields'    => array(
array(
'type'      => 'checkbox',
'field'     => 'resell',
'label'     => __('Resell','experiensa'),
'columns'   => 6,
'choices'   => array( 'TRUE'  => 'Yes' )
),
array(
'type'          => 'number',
'field'         => 'tour_operator_margin',
'columns'       => 6,
'label'         => __('Margin (%)','experiensa'),
'attributes'    => array( 'step' => 'any' ),
'conditions'    => array(
array(
'field' => 'resell',
'value' => 'TRUE'
),
),
),
),
));
*/
