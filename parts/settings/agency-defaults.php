<?php
/*
 Title: Agency defaults
 Setting: agency_settings
 Tab: Defaults
 Flow: Options
 */
use \Experiensa\Plugin\Modules\Common;

$currency_list = Common::currency_name_description_list();
piklist('field',array(
    'type'      => 'select',
    'field'     => 'agency_currency',
    'label'     => __('Currency','experiensa'),
    'columns'   => 3,
    'value'     => 'CHF',
    'choices'   => $currency_list,
));



$timezone_list = Common::get_timezone_array();

piklist('field', array(
    'type' => 'select',
    'field' => 'agency_timezone',
    'label' => __('Timezone'),
    'attributes' => array(
        'class' => 'text'
    ),
    'choices' => $timezone_list
));
