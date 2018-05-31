<?php
/*
 Title: Agency Partners
 Setting: agency_settings
 Tab: Partners
 Flow: Options
 */
piklist('field',array(
    'type'          => 'select',
    'field'         => 'setting_partners_display',
    'label'         => __('Display Partners Section','experiensa'),
    'value'         => 'FALSE',
    'choices'       => array(
        'TRUE'  => __('Yes','experiensa'),
        'FALSE' => __('No','experiensa')
    ),
));
$partner_name = array(
    'type' => 'text',
    'field' => 'partner_name',
    'label' => __('Partner Name','experiensa'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the partner name','experiensa')
    )
);
$partner_website = array(
    'type' => 'text',
    'field' => 'partner_website',
    'label' => __('Partner Website','experiensa'),
    'attributes' => array(
        'class' => 'regular-text',
        'placeholder' => __('Enter the partner website','experiensa')
    ),
    'validate' => array(
        array(
            'type' => 'url'
        )
    )
);
$partner_logo = array(
    'type' => 'file',
    'field' => 'partner_logo',
    'label' => __('Partner Logo','experiensa'),
    'options' => array(
        'modal_title' => __('Add Logo','experiensa'),
        'button' => __('Add Logo','experiensa')
    )
);
piklist('field', array(
    'type' => 'group',
    'field' => 'agency_partners',
    'label' => __('Partners','experiensa'),
    'add_more' => true,
    'fields' => array(
        $partner_name,
        $partner_website,
        $partner_logo
    )
));