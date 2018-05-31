<?php
/*
Title: Voyage Accommodation
Post Type: exp_voyage
Order: 3
*/

/*******************************************************************************
 ** Accommodation Section
 *******************************************************************************/

$voyage_host_name = array(
    'type'      => 'text',
    'field'     => 'establishment_name',
    'label'     => __('Establishment name','experiensa'),
    'columns'   => 6
);

$voyage_host_type = array(
    'type'      => 'select',
    'field'     => 'establishment_type',
    'label'     => __('Establishment type','experiensa'),
    'columns'   => 4,
    'choices'   => array(
        'hotel'     => __('Hotel','experiensa'),
        'b&b'       => __('Bed & Breakfast','experiensa'),
        'residence' => __('Residence','experiensa'),
        'airbnb'    => __('Airbnb','experiensa'),
        'private'   => __('Private apartment','experiensa'),
        'hostel'    => __('Hostel','experiensa'),
    )
);

$voyage_host_rating = array(
    'type'      => 'select',
    'field'     => 'establishment_rating',
    'label'     => __('Rating','experiensa'),
    'columns'   => 2,
    'choices'   => array(
        '5' => __('5 Stars','experiensa'),
        '4' => __('4 Stars','experiensa'),
        '3' => __('3 Stars','experiensa'),
        '2' => __('2 Stars','experiensa'),
        '1' => __('1 Star','experiensa')
    )
);

$voyage_host_checkin_date = array(
    'type'      => 'datepicker',
    'field'     => 'establishment_checkin_date',
    'label'     => __('Check-in date','experiensa'),
    'columns'   => 3,
    'options'   => array('dateFormat' => 'd/m/yy'),
);

$voyage_host_checkin_time = array(
    'type'      => 'time',
    'field'     => 'establishment_checkin_time',
    'label'     => __('Check-in time','experiensa'),
    'columns'   => 3
);

$voyage_host_checkout_date = array(
    'type'      => 'datepicker',
    'field'     => 'establishment_checkout_date',
    'label'     => __('Check-out date','experiensa'),
    'columns'   => 3,
    'options'   => array('dateFormat' => 'd/m/yy'),
);

$voyage_host_checkout_time = array(
    'type'      => 'time',
    'field'     => 'establishment_checkout_time',
    'label'     => __('Check-out time','experiensa'),
    'columns'   => 3
);

$voyage_host_comments = array(
    'type'      => 'textarea',
    'field'     => 'establishment_comments',
    'label'     => __('Comments & Description','experiensa'),
    'columns'   => 12
);

$voyage_host_gallery = array(
    'type'      => 'file',
    'field'     => 'establishment_gallery',
    'label'     => __('Photo Gallery','experiensa'),
);
/* 
piklist('field', array(
    'type'      => 'group',
    'template'  => 'field',
    'field' => 'accommodations_options',
    'add_more'  => true,
    'fields'    => array(
        $voyage_host_name,
        $voyage_host_type,
        $voyage_host_rating,
        $voyage_host_checkin_date,
        $voyage_host_checkin_time,
        $voyage_host_checkout_date,
        $voyage_host_checkout_time,
        $voyage_host_comments,
        $voyage_host_gallery
    )
));
*/