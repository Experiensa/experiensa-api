<?php
//Register my custom auto-loader
spl_autoload_register('experiensa_autoloader');
//Custom autoloader function
function experiensa_autoloader($class){
    $base_dir = __DIR__ . '/src/';
    $directories = array();
    $directories[] = $base_dir;
    $directories[] = $base_dir.'Includes/';
    $directories[] = $base_dir.'Models/';
    $directories[] = $base_dir.'Models/PostType/';
    $directories[] = $base_dir.'Models/Taxonomy/';
    $directories[] = $base_dir.'Modules/';
    $directories[] = $base_dir.'Modules/Api/';
    $directories[] = $base_dir.'Modules/Request/';
    
    $file = $base_dir . str_replace('\\', '/', $class) . '.php';
    foreach($directories as $dir){
        $file = $dir . str_replace('\\', '/', $class) . '.php';
        if (file_exists($file)) {
            require_once $file;
        }
    }
}
