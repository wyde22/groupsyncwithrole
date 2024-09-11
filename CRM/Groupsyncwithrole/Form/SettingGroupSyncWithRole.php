<?php

use CRM_Groupsyncwithrole_ExtensionUtil as E;

/**
 * Form controller class
 *
 * @see https://docs.civicrm.org/dev/en/latest/framework/quickform/
 */
class CRM_Groupsyncwithrole_Form_SettingGroupSyncWithRole extends CRM_Admin_Form_Setting {

  /**
   * @throws \CRM_Core_Exception
   */
  public function buildQuickForm(): void {
    $this->setTitle(E::ts('Settings of synchronisation CiviCRM groups between CMS rôle'));

    // add form elements
    /*$this->add(
      'select', // field type
      'select_group_1', // field name
      E::ts('Select Group 1 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_1', // field name
      E::ts('Select CMS role 1'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_2', // field name
      E::ts('Select Group 2 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_2', // field name
      E::ts('Select CMS role 2'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_3', // field name
      E::ts('Select Group 3 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_3', // field name
      E::ts('Select CMS role 3'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_4', // field name
      E::ts('Select Group 4 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_4', // field name
      E::ts('Select CMS role 4'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_5', // field name
      E::ts('Select Group 5 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_5', // field name
      E::ts('Select CMS role 5'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_6', // field name
      E::ts('Select Group 6 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_6', // field name
      E::ts('Select CMS role 6'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_7', // field name
      E::ts('Select Group 7 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_7', // field name
      E::ts('Select CMS role 7'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_8', // field name
      E::ts('Select Group 8 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_8', // field name
      E::ts('Select CMS role 8'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_9', // field name
      E::ts('Select Group 9 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_9', // field name
      E::ts('Select CMS role 9'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_group_10', // field name
      E::ts('Select Group 10 CiviCRM'), // field label
      CRM_Groupsyncwithrole_Utils::getGroupsCiviCRM(),
      false // is required
    );
  
    $this->add(
      'select', // field type
      'select_rolecms_10', // field name
      E::ts('Select CMS role 10'), // field label
      CRM_Groupsyncwithrole_Utils::getRoleCMSWP(),
      false // is required
    );
    
    $this->addButtons([
      [
        'type' => 'submit',
        'name' => E::ts('Synchronise'),
        'isDefault' => TRUE,
      ],
    ]);*/

    // export form elements
    $this->assign('elementNames', $this->getRenderableElementNames());
    parent::buildQuickForm();
  }

  public function postProcess(): void {
    $values = $this->exportValues();
  
    $valuesFilter = array_filter($values, function($key) {
      return strpos($key, 'select') === 0;
    }, ARRAY_FILTER_USE_KEY);
    
    foreach ($valuesFilter as $key => $value) {
    
    }
    
    parent::postProcess();
  }

  /**
   * Get the fields/elements defined in this form.
   *
   * @return array (string)
   */
  public function getRenderableElementNames(): array {
    // The _elements list includes some items which should not be
    // auto-rendered in the loop -- such as "qfKey" and "buttons".  These
    // items don't have labels.  We'll identify renderable by filtering on
    // the 'label'.
    $elementNames = [];
    foreach ($this->_elements as $element) {
      /** @var HTML_QuickForm_Element $element */
      $label = $element->getLabel();
      if (!empty($label)) {
        $elementNames[] = $element->getName();
      }
    }
    return $elementNames;
  }

}
