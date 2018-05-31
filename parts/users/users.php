<?php
/*
 Title: Extra Information
 Meta box: true
 Capability: manage_options
 */
piklist('field', array(
    'type' => 'text',
    'field' => 'user_facebook',

    'label' => __('Facebook'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your Facebook')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'user_twitter',

    'label' => __('Twitter'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your Twitter')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'user_google_plus',

    'label' => __('Google Plus'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your Google Plus')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'user_linkedin',

    'label' => __('LinkedIn'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your LinkedIn')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));
piklist('field', array(
    'type' => 'text',
    'field' => 'user_github',

    'label' => __('Github'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your Github')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));
piklist('field', array(
    'type' => 'text',
    'field' => 'user_instagram',

    'label' => __('Instagram'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your Instagram')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'user_pinterest',

    'label' => __('Pinterest'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your Pinterest')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'user_skype',

    'label' => __('Skype'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your Skype')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type'  => 'text',
    'field' => 'user_title',
    'label' => __('Title'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter your Title')
    )
));

piklist('field', array(
    'type'  => 'radio',
    'field' => 'user_gender',
    'label' => __('Gender'),
    'attributes' => array(
        'class' => 'text'
    ),
    'choices' => array(
        'female' => __('Female','experiensa'),
        'male' => __('Male','experiensa')
    )
));

piklist('field', array(
    'type'       => 'checkbox',
    'field'      => 'user_language',
    'label'      => __('Language Spoken', 'experiensa'),
    'list'       => false,
    'attributes' => array(
        'class' => 'text'
    ),
    'choices' => array(
        'user_language_arabic'     => 'Arabic',
        'user_language_mandarin'   => 'Chinese (Mandarin)',
        'user_language_cantonese'  => 'Chinese (Cantonese)',
        'user_language_english'    => 'English',
        'user_language_farsi'      => 'Farsi (Persian)',
        'user_language_french'     => 'French',
        'user_language_german'     => 'German',
        'user_language_hindi'      => 'Hindi',
        'user_language_italian'    => 'Italian',
        'user_language_japanese'   => 'Japanese',
        'user_language_korean'     => 'Korean',
        'user_language_polish'     => 'Polish',
        'user_language_portuguese' => 'Portuguese',
        'user_language_russian'    => 'Russian',
        'user_language_spanish'    => 'Spanish',
        'user_language_thai'       => 'Thai',
        'user_language_turkish'    => 'Turkish',
        'user_language_vietnamese' => 'Vietnamese'
    )
));

piklist('field', array(
    'type' => 'file',
    'field' => 'user_profile_photo',

    'label' => __('Profile Picture','piklist'),
    'options' => array(
        'modal_title' => __('Add Picture','experiensa'),
        'button' => __('Add Picture','piklist')
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
    'type'     => 'text',
    'field'    => 'user_phone',
    'add_more' => true,
    'label'    => __('Phone(s)', 'experiensa')
));

piklist('field', array(
    'type'       => 'datepicker',
    'field'      => 'user_birthday',
    'label'      => __('Birthday', 'experiensa'),
    'attributes' => array(
        'class' => 'text'
    ),
    'options' => array(
        'dateFormat' => 'd-mm-yy',
        'firstDay'   => '0'
    )
));

piklist('field', array(
    'type'  => 'textarea',
    'field' => 'user_hobbies',
    'label' => __('Hobbies', 'experiensa'),
    'attributes' => array(
        'rows' => 10,
        'cols' => 50,
        'class' => 'large-text',
        'placeholder' => __('Enter your hobbies')
    )
));

$countrylist = \Experiensa\Modules\Common::country_list();

$passport_country = array(
    'type'      => 'select',
    'field'     => 'user_passport_country',
    'label'     => __('Country','experiensa'),
    'columns'   => 4,
    'choices'   => $countrylist
);

$passport_number = array(
    'type'      => 'text',
    'field'     => 'user_passport_number',
    'columns'   => 3,
    'label'     => __('Passport number','experiensa')
);

$passport_expiry_date = array(
    'type'      => 'datepicker',
    'field'     => 'user_passport_expiry_date',
    'columns'   => 2,
    'label'     => __('Expiry date','experiensa'),
    'options'   => array('dateFormat' => 'd/m/yy'),
);

$passport_place_issue = array(
    'type'      => 'text',
    'field'     => 'user_passport_place_issue',
    'columns'   => 3,
    'label'     => __('Place of issue','experiensa')
);

piklist('field', array(
    'type'      => 'group',
    'label' => __('Passport','experiensa'),
    'add_more'  => true,
    'fields'    => array(
        $passport_country,
        $passport_number,
        $passport_expiry_date,
        $passport_place_issue
    )
));


$user_work_occupation = array(
    'type' => 'text',
    'field' => 'user_work_occupation',
    'label' => __('Occupation','experiensa')
);

$work_sectors = array(
    "Aerospace, defense and security" => "Aerospace, defense and security",
    "Airline industry" => "Airline industry",
    "Banking" => "Banking",
    "Chemistry & pharma" => "Chemistry & pharma",
    "Consumer goods" => "Consumer goods",
    "Health" => "Health",
    "Insurance" => "Insurance",
    "Manufacturing" => "Manufacturing",
    "Mining industry" => "Mining industry",
    "Public sector" => "Public sector",
    "Services" => "Services",
    "Telecom" => "Telecom",
    "Tourism" => "Tourism",
    "Transport" => "Transport",
    "Utilities & energy" => "Utilities & energy"
);

$user_work_sectors =  array(
    'type' => 'select',
    'field' => 'user_work_sector',
    'label' => __('Sector','experiensa'),
    'attributes' => array(
        'class' => 'text'
    ),
    'choices' => $work_sectors
);

piklist('field', array(
    'type' => 'group',
    'label' => __('Work','experiensa'),
    'fields' => array(
        $user_work_occupation,
        $user_work_sectors
    )
));

piklist('field', array(
    'type' => 'checkbox',
    'field' => 'user_airplane_preferences',
    'label' => __('Airplane preferences','experiensa'),
    'list' => false,
    'attributes' => array(
        'class' => 'text'
    ),
    'choices' => array(
        'user_airplane_preferences_economy' => 'Economy',
        'user_airplane_preferences_business' => 'Business Class',
        'user_airplane_preferences_first' => 'First Class',
        'user_airplane_preferences_aile' => 'Aile',
        'user_airplane_preferences_window' => 'Window',
        'user_airplane_preferences_middle' => 'Middle seat',
        'user_airplane_preferences_chicken' => 'Chicken',
        'user_airplane_preferences_pasta' => 'Pasta',
        'user_airplane_preferences_vegetarian' => 'Vegetarian',
        'user_airplane_preferences_especial' => 'Special / Gluten free'
    )
));

$status = array(
    "single" => "Single",
    "in couple" => "In Couple",
    "married" => "Married",
    "divorced" => "Divorced",
    "widow" => "Widow/Widower",
    "complicated" => "Complicated"
);

piklist('field',array(
    'type'      => 'select',
    'field'     => 'user_marital_status',
    'label'     => __('Marital Status','experiensa'),
    'columns'   => 4,
    'choices'   => $status
));

piklist('field', array(
    'type' => 'checkbox',
    'field' => 'user_color',
    'label' => __('Favorite color','experiensa'),
    'list' => false,
    'attributes' => array(
        'class' => 'text'
    ),
    'choices' => array(
        'user_color_red' => 'Red',
        'user_color_green' => 'Green',
        'user_color_yellow' => 'Yellow',
        'user_color_blue' => 'Blue',
        'user_color_pink' => 'Pink',
        'user_color_brown' => 'Brown',
        'user_color_purple' => 'Purple',
        'user_color_black' => 'Black',
        'user_color_grey' => 'Grey',
        'user_color_violet' => 'Violet',
        'user_color_white' => 'White',
        'user_color_orange' => 'Orange'
    )
));
