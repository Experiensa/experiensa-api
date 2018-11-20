<?php namespace Experiensa\Plugin\Modules;


class User
{
    public static function getUsersByRoles($roles = ['agent']){
        if(!is_array($roles)){
            $roles = [$roles];
        }
        $args = array(
            "role"      => $roles
        );
        $users = get_users($args);
        return $users;
    }
    public static function  getUserBasicInfo($user){
        $info = array();
        if(!empty($user)) {
            $info['ID'] = $user->ID;
            $info['username'] = $user->data->user_login;
            $info['name'] = $user->data->display_name;
            $info['email'] = $user->data->user_email;
            $info['registered_date'] = $user->data->user_registered;
            $info['url'] = $user->data->user_url;
        }
        return $info;
    }
}