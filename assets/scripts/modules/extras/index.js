import $ from 'jquery';

const AdminMenuStyle = function(){
  var target_menu_items = '';
  target_menu_items += '#adminmenu a[href="edit.php?post_type=exp_partner"],';
  target_menu_items += '#adminmenu a[href="edit.php?post_type=exp_place"],';
  target_menu_items += '#adminmenu a[href="edit.php?post_type=exp_service"],';
  target_menu_items += '#adminmenu a[href="edit.php?post_type=exp_voyage"],';
  target_menu_items += '#adminmenu a[href="edit.php?post_type=exp_estimate"],';
  target_menu_items += '#adminmenu a[href="edit.php?post_type=exp_host"],';
  target_menu_items += '#adminmenu a[href="edit.php?post_type=exp_brochure"],';
  target_menu_items += '#adminmenu a[href="edit.php?post_type=exp_feedback"],';
  target_menu_items += '#menu-appearance a[href="themes.php?page=experiensa-settings"]';  

  jQuery( target_menu_items ).append(' <attr title="Experiensa" class="dslc-menu-label">EXP</attr>');
}

module.exports = {
  AdminMenuStyle
}