<?php
/*
Title: Voyage Flights
Post Type: exp_voyage
Order: 2
*/

/*******************************************************************************
 ** Flight Section
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
    'options'   => array( 'dateFormat' => 'd/m/yy' ),
);

$flight_departure_time= array(
    'type'  => 'time',
    'field' => 'flight_departure_time',
    'columns'   => 3,
    'label' => __('Departure time','experiensa')
);

$flight_arrival_date = array(
    'type'      => 'datepicker',
    'field'     => 'flight_arrival_date',
    'columns'   => 3,
    'label'     => __('Arrival date','experiensa'),
    'options'   => array('dateFormat' => 'd/m/yy'),
);

$flight_arrival_time = array(
    'type'      => 'time',
    'field'     => 'flight_arrival_time',
    'columns'   => 3,
    'label'     => __('Arrival time','experiensa')
);
/*
piklist('field', array(
    'type'      => 'group',
    'field'     => 'flight_options',
    'template'  => 'field',
    'add_more'  => true,
    'fields'    => array(
        $flight_airline,
        $flight_number,
        $flight_class,
        $flight_departure_city,
        $flight_arrival_city,
        $flight_departure_date,
        $flight_departure_time,
        $flight_arrival_date,
        $flight_arrival_time
    )
));
*/