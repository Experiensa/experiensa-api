<?php
/*
Title: Brochures
Post Type: exp_brochure
Meta box: true
*/

$brochure_title = array(
    'type'      => 'text',
    'label'     => __('Title','experiensa'),
    'field'     => 'title',
    'columns'   => 4,
    'required' => true
);

$brochure_expiry_date = array(
    'type'      => 'datepicker',
    'label'     => __('Expiry date','experiensa'),
    'field'     => 'expiry_date',
    'columns'   => 2,
    'options'   => array( 'dateFormat' => 'dd/mm/yy'),
);

$brochures_files = array(
    'type'          => 'file',
    'field'         => 'brochure_file',
    'help'          => __( 'Brochures should be PDF files','experiensa'),
    'label'         => __( 'Brochure File','experiensa' ),
    'columns'       => 3,
    'options'       => ['button' => __('PDF Brochures','experiensa')],
    'required' => true,
    'validate' => array(
        array(
            'type' => 'limit',
            'options' => array(
                'min' => 0,
                'max' => 1
            )
        )
    )
);

$brochure_gallery = array(
    'type'          => 'file',
    'field'         => 'image_gallery',
    'label'         => __('Image Gallery','experiensa'),
    'columns'       => 3,
    'options'       => [ 'button' => __('Add Images','experiensa')],
    'required' => true,
    'validate' => array(
        array(
            'type' => 'limit',
            'options' => array(
                'min' => 0,
                'max' => 1
            )
        )
    )
);

piklist('field',array(
    'type' => 'group',
    'field' => 'brochures',
    'label' => __('Brochures','experiensa'),
    'description'          => __('Images should be jpeg/png/gif files, please visit: <a href="https://smallpdf.com/pdf-to-jpg" target="_blank">https://smallpdf.com</a> for a single file convertion or <a href="https://pdfjpg.pro" target="_blank">https://pdfjpg.pro</a> for multiple files convertions','experiensa'),
    'add_more' => true,
    'fields' => array(
        $brochure_title,
        $brochure_expiry_date,
        $brochures_files,
        $brochure_gallery
    )
));