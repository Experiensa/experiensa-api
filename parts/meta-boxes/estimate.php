<?php
/*
Title: Estimate Voyages
Post Type: exp_estimate
Meta box: true
order:1
*/
use \Experiensa\Plugin\Modules\Common;
use \Experiensa\Plugin\Modules\Settings;
/**
 * Estimate Voyage General Information
 */
$title = array(
    'type'          => 'text',
    'field'         => 'estimate_title',
    'label'         => __('Title','experiensa'),
    'columns'       => 8
);

$people = array(
    'type'  => 'number',
    'field' => 'estimate_people',
    'label' => __('Number of people','experiensa'),
    'columns' => 2,
);

$number_days = array(
    'type'          => 'number',
    'field'         => 'estimate_days',
    'label'         => __('Days','experiensa'),
    'columns'       => 1,
);

$number_nights = array(
    'type'          => 'number',
    'field'         => 'estimate_nights',
    'label'         => __('Nights','experiensa'),
    'columns'       => 1,
);

$price = array(
    'type'          => 'number',
    'field'         => 'estimate_price',
    'label'         => __('Price','experiensa'),
    'attributes'    => array( 'step' => 'any' ),
    'columns'       => 3
);
$currency = array(
    'type'      => 'select',
    'field'     => 'estimate_currency',
    'label'     => __('Currency','experiensa'),
    'value'     => Settings::getCurrency(),
    'choices'   => Common::currency_name_description_list(),
    'columns'   => 5
);

$expiry_date = array(
    'type'      => 'datepicker',
    'field'     => 'estimate_expiry_date',
    'label'     => __('Expiry date','experiensa'),
    'columns'   => 4
);

$slogan = array(
    'type'      => 'text',
    'field'     => 'estimate_slogan',
    'columns'   => 12,
    'label'     => __('Voyage slogan','experiensa')
);

$conditions = array(
    'type'      => 'textarea',
    'field'     => 'estimate_information_conditions',
    'label'     => __('Additional information & Conditions','experiensa'),
    'columns'   => 12
);

$photos = array(
    'type'  => 'file',
    'field' => 'estimate_gallery',
    'label' => __('Photo Gallery','experiensa')
);



/*******************************************************************************
 ** Voyage Flight Section
 *******************************************************************************/

$flight_airline = array(
    'type'  => 'text',
    'field' => 'flight_airline',
    'columns'   => 4,
    'label' => __('Airline','experiensa')
);

$flight_number = array(
    'type'  => 'text',
    'field' => 'flight_number',
    'columns'   => 4,
    'label' => __('Flight number','experiensa')
);

$flight_class = array(
    'type'      => 'select',
    'field'     => 'flight_class',
    'label'     => __('Flight Class','experiensa'),
    'columns'   => 4,
    'value'     => 'economy',
    'choices'   => array(
        'economy'   => __('Economy','experiensa'),
        'business'  => __('Business','experiensa'),
        'first'     => __('First','experiensa'),
    ),
);

$flight_departure_city = array(
    'type'      => 'text',
    'field'     => 'flight_departure_city',
    'columns'   => 6,
    'label'     => __('Departure city','experiensa')
);

$flight_arrival_city = array(
    'type'      => 'text',
    'field'     => 'flight_arrival_city',
    'columns'   => 6,
    'label'     => __('Arrival city','experiensa')
);

$flight_departure_date = array(
    'type'      => 'datepicker',
    'field'     => 'flight_departure_date',
    'columns'   => 3,
    'label'     => __('Departure date','experiensa'),
    'options'   => array( 'dateFormat' => 'dd/mm/yy' ),
);

$flight_departure_time= array(
    'type'      => 'time',
    'field'     => 'flight_departure_time',
    'columns'   => 3,
    'label'     => __('Departure time','experiensa')
);

$flight_arrival_date = array(
    'type'      => 'datepicker',
    'field'     => 'flight_arrival_date',
    'columns'   => 3,
    'label'     => __('Arrival date','experiensa'),
    'options'   => array('dateFormat' => 'dd/mm/yy'),
);

$flight_arrival_time = array(
    'type'      => 'time',
    'field'     => 'flight_arrival_time',
    'columns'   => 3,
    'label'     => __('Arrival time','experiensa')
);

$flight_comments = [
    'type'          => 'text',
    'field'         => 'flight_comments',
    'label'         => __('Comments','experiensa'),
    'attributes'    => ['placeholder' => __('Comments','experiensa')],
    'columns'       => 12
];

$flights = array(
    'type' => 'group',
    'field' => 'flights_group',
    'label' => __('Flights','experiensa'),
    'add_more' => true,
    'fields' => array(
        $flight_airline,
        $flight_number,
        $flight_class,
        $flight_departure_city,
        $flight_arrival_city,
        $flight_departure_date,
        $flight_departure_time,
        $flight_arrival_date,
        $flight_arrival_time,
        $flight_comments
    )
);
/*******************************************************************************
 ** Voyage Accommodation Section
 *******************************************************************************/
$host_name = [
    'type'      => 'text',
    'field'     => 'establishment_name',
    'label'     => __('Establishment name','experiensa'),
    'columns'   => 6
];

$host_type = [
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
];

$host_rating = array(
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

$host_checkin_date = array(
    'type'      => 'datepicker',
    'field'     => 'establishment_checkin_date',
    'label'     => __('Check-in date','experiensa'),
    'columns'   => 3,
    'options'   => array('dateFormat' => 'd/m/yy'),
);

$host_checkin_time = array(
    'type'      => 'time',
    'field'     => 'establishment_checkin_time',
    'label'     => __('Check-in time','experiensa'),
    'columns'   => 3
);

$host_checkout_date = array(
    'type'      => 'datepicker',
    'field'     => 'establishment_checkout_date',
    'label'     => __('Check-out date','experiensa'),
    'columns'   => 3,
    'options'   => array('dateFormat' => 'd/m/yy'),
);

$host_checkout_time = array(
    'type'      => 'time',
    'field'     => 'establishment_checkout_time',
    'label'     => __('Check-out time','experiensa'),
    'columns'   => 3
);
$host_gallery = [
    'type'      => 'file',
    'field'     => 'establishment_gallery',
    'label'     => __('Photo Gallery','experiensa'),
];

$host_comments = array(
    'type'      => 'textarea',
    'field'     => 'establishment_comments',
    'label'     => __('Comments & Description','experiensa'),
    'columns'   => 12
);


$accomodations = array(
    'type' => 'group',
    'field' => 'accomodations_group',
    'label' => __('Accomodations','experiensa'),
    'add_more' => true,
    'fields' => array(
        $host_name,
        $host_type,
        $host_rating,
        $host_checkin_date,
        $host_checkin_time,
        $host_checkout_date,
        $host_checkout_time,
        $host_gallery,
        $host_comments
    )
);
/**
 * Estimate Group
 */
piklist('field', array(
    'type'      => 'group',
    'field'     => 'estimate_voyages',
    'template'  => 'field',
    'label'     => __('Voyages','experiensa'),
    'add_more'  => true,
    'fields'    => array(
        $title,
        $people,
        $number_days,
        $number_nights,
        $price,
        $currency,
        $expiry_date,
        $slogan,
        $conditions,
        $photos,
        $flights,
        $accomodations
    )
));
