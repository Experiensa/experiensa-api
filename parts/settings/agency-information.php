<?php
/*
 Title: Agency Information
 Setting: agency_settings
 Tab: Information
 Flow: Options
 */

piklist('field',array(
    'type'      => 'select',
    'field'     => 'website_use',
    'label'     => __('This website will be used as:','experiensa'),
    'columns'   => 3,
    'value'     => 'travel',
    'choices'   => array(
        'travel'         => __('Travel Agency','experiensa'),
        'hotel'          => __('Hotel','experiensa'),
        'tourist'        => __('Tourist Office','experiensa')
    ),
));
//Travel Agency Post Types
piklist('field',array(
    'type' => 'checkbox',
    'field' => 'travel_agency_posttypes',
    'label' => __('Travel Agency Modules','experiensa'),
    'choices' => array(
        'exp_host'      => __('Hosts','experiensa'),
        'exp_estimate'  => __('Estimates','experiensa'),
        'exp_brochure'  => __('Brochure','experiensa'),
        'exp_partner'   => __('Partners','experiensa'),
        'exp_place'     => __('Place','experiensa'),
        'exp_feedback'  => __('Feedback','experiensa'),
        'exp_voyage'    => __('Voyages','experiensa'),
        'exp_service'   => __('Services','experiensa')
    ),
    'conditions' => array(
        array(
            'field' => 'website_use',
            'value' => 'travel'
        )
    )
));
//Hotel Post Types
piklist('field',array(
    'type' => 'checkbox',
    'field' => 'hotel_posttypes',
    'label' => __('Hotel Modules','experiensa'),
    'choices' => array(
        'exp_host'      => __('Hosts','experiensa'),
        'exp_estimate'  => __('Estiamtes','experiensa'),
        'exp_feedback'  => __('Feedback','experiensa'),
        'exp_place'     => __('Place','experiensa'),
        'exp_services'  => __('Services','experiensa'),
        'exp_facility'      => __('Facilities','experiensa')
    ),
    'conditions' => array(
        array(
            'field' => 'website_use',
            'value' => 'hotel'
        )
    )
));
//Tourist Office Post Types
piklist('field',array(
    'type' => 'checkbox',
    'field' => 'tourist_office_posttypes',
    'label' => __('Tourist Office Modules','experiensa'),
    'choices' => array(
        'exp_host' => __('Hosts','experiensa'),
        'exp_place'     => __('Place','experiensa'),
        'exp_voyage' => __('Voyages','experiensa'),
        'exp_sites' => __('Sites','experiensa'),
//        'exp_festivals' => __('Festivals','experiensa')
    ),
    'conditions' => array(
        array(
            'field' => 'website_use',
            'value' => 'tourist'
        )
    )
));
piklist('field', array(
    'type'      => 'file',
    'field'     => 'agency_logo',
    'label'     => __('Logo','experiensa'),
    'options'   => array(
        'modal_title'   => __('Add Logo','experiensa'),
        'button'        => __('Add Logo','experiensa')
    ),
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

piklist('field', array(
    'type'      => 'textarea',
    'field'     => 'agency_description',
    'label'     => __('Agency Description','experiensa'),
    'attributes' => array(
        'rows' => 5,
        'cols' => 50,
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency description')
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'agency_address',
    'label' => __('Address','experiensa'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency address','experiensa')
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'agency_postal_code',
    'label' => __('Postal Code'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency postal code','experiensa')
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'agency_city',
    'label' => __('City'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency city','experiensa')
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'agency_country',
    'label' => __('Country'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency country','experiensa')
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'agency_email',
    'label' => __('Email'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency email','experiensa')
    )
));

piklist('field', array(
    'type' => 'tel',
    'field' => 'agency_phone',
    'label' => __('Phone'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency phone','experiensa')
    )
));

piklist('field', array(
    'type' => 'tel',
    'field' => 'agency_fax',
    'label' => __('Fax','experiensa'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency fax','experiensa')
    )
));

piklist('field', array(
    'type' => 'textarea',
    'field' => 'agency_schedule',
    'label' => __('Schedule','experiensa'),
    'attributes' => array(
        'rows' => 5,
        'cols' => 50,
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency schedule','experiensa')
    )
));

piklist('field', array(
    'type' => 'textarea',
    'field' => 'agency_google_map',
    'columns'=> 12,
    'label' => __('Agency Map','experiensa'),
));

piklist('field', array(
    'type' => 'radio',
    'field' => 'agency_insurance',
    'value' => 'yes',
    'label' => 'Travel Agency Insurance',
    'attributes' => array(
        'class' => 'text'
    ),'choices' => array(
        'yes' => __('Yes'),
        'no' => __('No')
    )
));
piklist('field', array(
    'type' => 'text',
    'field' => 'recaptcha_site_key',
    'label' => __('reCAPTCHA Site Key','experiensa'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the reCAPTCHA site key','experiensa')
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'recaptcha_secret_key',
    'label' => __('reCAPTCHA Secret Key','experiensa'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the reCAPTCHA secret key','experiensa')
    )
));

piklist('field', array(
    'type' => 'text',
    'description' => __('If you don\'t have, get one here: ','experiensa').'<a href="https://developers.google.com/" target="_blank">Google Developers</a>',
    'field' => 'gmaps_api_key',
    'label' => __('Google Maps API Key','experiensa'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the Google Maps API key','experiensa')
    )
));