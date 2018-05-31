<?php
/*
 Title: Agency Social
 Setting: agency_settings
 Tab: Social
 Flow: Options
 */

piklist('field', array(
    'type' => 'text',
    'field' => 'social_facebook',
    'label' => __('Facebook'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency Facebook')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'social_twitter',
    'label' => __('Twitter'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency Twitter')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'social_pinterest',
    'label' => __('Pinterest'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency Pinterest')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'social_linkedin',
    'label' => __('LinkedIn'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency LinkedIn')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'social_gplus',
    'label' => __('Google Plus'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency Google Plus')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'social_skype',
    'label' => __('Skype'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency Skype')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));

piklist('field', array(
    'type' => 'text',
    'field' => 'social_instagram',
    'label' => __('Instagram'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the agency Instagram')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
));
