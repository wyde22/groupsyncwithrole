<?php
  use CRM_Groupsyncwithrole_ExtensionUtil as E;
  
  return [
    [
      'name' => 'Navigation_Synchronisation_Groupe_WP_roles',
      'entity' => 'Navigation',
      'cleanup' => 'always',
      'update' => 'always',
      'params' => [
        'version' => 4,
        'values' => [
          'label' => E::ts('Synchronisation Groupe - WP roles'),
          'name' => 'Synchronisation Groupe - WP roles',
          'url' => 'civicrm/admin/setting/groupsyncwithrole',
          'permission' => [
            'access CiviCRM',
          ],
          'permission_operator' => 'AND',
          'parent_id.name' => 'Customize Data and Screens',
          'weight' => 15,
        ],
        'match' => [
          'name',
          'domain_id',
        ],
      ],
    ],
  ];