<?php
  use CRM_Groupsyncwithrole_ExtensionUtil as E;
  
  class CRM_Groupsyncwithrole_Utils {
    
    public static function getGroupsCiviCRM() {
      $groupsSelect = ['-- Sélectionnez un groupe --'];
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
      $roleSelect = ['-- Sélectionnez un rôle CMS --'];
      $roles_obj = new WP_Roles();
      $roles_names_array = $roles_obj->get_names();
      foreach ($roles_names_array as $key => $role_name) {
        // do something
        $roleSelect[$key] = $role_name;
      }
    
      return $roleSelect;
    }
  }