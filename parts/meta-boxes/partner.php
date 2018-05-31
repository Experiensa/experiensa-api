<?php
/*
Title: Partner information
Post Type: exp_partner
*/

piklist('field', array(
    'type'      => 'url',
    'label'     => __('Website','experiensa'),
    'field'     => 'partner_website',
    'columns'   => 12
));

piklist('field', array(
    'type'      => 'email',
    'label'     => __('Email','experiensa'),
    'field'     => 'partner_email',
    'columns'   => 12
));

piklist('field', array(
    'type'      => 'checkbox',
    'label'     => __('Include partner API in you catalogue','experiensa'),
    'field'     => 'partner_api',
    'value'     => 'FALSE',
    'choices'   => array(
        'TRUE'  => __('Yes','experiensa')
    )
));

piklist('field', array(
    'type'      => 'checkbox',
    'label'     => __('Send them request forms','experiensa'),
    'field'     => 'partner_request_form',
    'value'     => 'FALSE',
    'choices'   => array(
        'TRUE'  => __('Yes','experiensa')
    )
));
