<?php
  use CRM_Groupsyncwithrole_ExtensionUtil as E;
  
  class CRM_Groupsyncwithrole_Utils {
    
    public static function getGroupsCiviCRM() {
      $defaultName = E::ts('-- Select a group --');
      $groupsSelect = [$defaultName];
      $groups = \Civi\Api4\Group::get(FALSE)
        ->addSelect('id', 'name', 'title')
        ->execute();
      foreach ($groups as $group) {
        // do something
        $groupsSelect[$group['name']] = $group['title'];
      }
      
      return $groupsSelect;
    }
  
    public static function getRoleCMSWP() {
      $defaultName = E::ts('-- Select a WordPress role --');
      $roleSelect = [$defaultName];
      $roles_obj = new WP_Roles();
      $roles_names_array = $roles_obj->get_names();
      foreach ($roles_names_array as $key => $role_name) {
        // do something
        $roleSelect[$key] = $role_name;
      }
    
      return $roleSelect;
    }
    
    public static function getSettingsGroupSyncWPRoleForMap() {
      $map = [];
  
      $i = 1;
      do {
        $key = Civi::settings()->get('select_group_' . $i);
        $value = Civi::settings()->get('select_rolecms_' . $i);
        
        if(!empty($key) && !empty($value)) {
          $map[$key] = $value;
        }
  
        $i++;
      } while ($i <= 10);
      
      return $map;
    }
    
    public static function removeDefaultRoleWP($userObject) {
      $defaultRole = get_option('default_role');
      $settingDefaultRole = Civi::settings()->get('activate_desactivate_default_role_wp');
      if($settingDefaultRole == '0') {
        $userObject->remove_role($defaultRole);
      }
    }
    
    public static function addAnonymousUserRole($userObject) {
      $ug = get_user_by('ID', $userObject->data->ID);
      if (count($ug->roles) == 0) {
        $userObject->add_role('anonymous_user');
      }
    }
  
    public static function removeAnonymousUserRole($userObject) {
      $ug = get_user_by('ID', $userObject->data->ID);
      if (in_array('anonymous_user',$ug->roles)) {
        $userObject->remove_role('anonymous_user');
      }
    }
}