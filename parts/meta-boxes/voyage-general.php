<?php
/*
Title: Voyage
Post Type: exp_voyage
Meta box: true
*/

$price = array(
    'type'  => 'number',
    'field' => 'exp_voyage_price',
    'label' => __('Price','experiensa'),
    'attributes'    => array( 'step' => 'any' ),
    'columns'   => 3
);

$offer_start_date = array(
    'type'      => 'datepicker',
    'field'     => 'exp_voyage_start_date',
    'label'     => __('Start date','experiensa'),
    'options'   => array( 'dateFormat' => 'dd/mm/yy'),
    'columns'   => 3
);

$expiry_date = array(
    'type'      => 'datepicker',
    'field'     => 'exp_voyage_end_date',
    'label'     => __('End date','experiensa'),
    'options'   => array( 'dateFormat' => 'dd/mm/yy'),
    'columns'   => 3
);

$from = array(
    'type'      => 'checkbox',
    'field'     => 'exp_voyage_display_from',
    'label'     => __('Display from','experiensa'),
    'choices'   => array( 'TRUE'  => 'Yes' ),
    'columns'   => 2
);

$slogan = array(
    'type'      => 'text',
    'field'     => 'exp_voyage_slogan',
    'columns'   => 12,
    'label'     => __('Voyage slogan','experiensa')
);

piklist('field', array(
    'type'      => 'group',
    'label'     => __('General info','experiensa'),
    'fields'    => array(
        $price,
        $offer_start_date,
        $expiry_date,
        $from,
        $slogan
    )
));

piklist('field', array(
    'type' => 'group',
    'label' => __('Number of Days'),
    'fields' => array(
        array(
            'type'          => 'number',
            'field'         => 'exp_voyage_number_days',
            'columns'       => 2,
            'attributes'    => ['placeholder' => __('Days','experiensa')],
        ),
        array(
            'type'          => 'number',
            'field'         => 'exp_voyage_number_nights',
            'columns'       => 2,
            'attributes' => array( 'placeholder' => __('Nights')),
        ),
    ),
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
piklist('field', array(
    'type'  => 'editor',
    'field' => 'exp_voyage_information_conditions',
    'label' => __('Additional information & Conditions','experiensa')
));

piklist('field', array(
    'type'          => 'file',
    'field'         => 'exp_voyage_gallery',
    'scope'         => 'post_meta',
    'description'   => __('Photos should be 1920x1080 pixels','experiensa'),
    'label'         => __('Photo Gallery','experiensa'),
    'options' => array(
        'modal_title' => 'Add File(s)',
        'button' => 'Add Photos'
    )
));
