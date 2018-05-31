<?php

/*
Title: Tutorials Section
Setting: experiensa_tutorials
Tab: Tutorial
Flow: Howto
*/
piklist('field', array(
    'type' => 'group',
    'label' => 'Conseil',
    'add_more' => true,
    'columns' => 12,
    'attributes' => array('class' => 'text'),
    'fields' => array(
        array(
            'type'  => 'text',
            'field' => 'text3',
            'columns' => 6
        ),
        array(
            'type'  => 'text',
            'field' => 'text4',
            'columns' => 6
        )
    )
));



?>
