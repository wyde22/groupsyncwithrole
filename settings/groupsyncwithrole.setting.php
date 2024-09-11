<?php
  return [
    'test_profile_frequency' => [
      'name' => 'test_profile_frequency',
      'type' => 'String',
      'default' => NULL,
      'html_type' => 'select',
      'add' => '4.7',
      'title' => ts('Choose frequency'),
      'is_domain' => 0,
      'is_contact' => 0,
      'description' => ts('Choose your frequency'),
      'pseudoconstant' => [
        'optionGroupName' => 'test_options',
      ],
      'settings_pages' => ['groupsyncwithrole' => ['weight' => 150]],
    ],
  ];