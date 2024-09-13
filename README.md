# Group sync with WordPress role

This is an [extension for CiviCRM](https://docs.civicrm.org/sysadmin/en/latest/customize/extensions/), licensed under [AGPL-3.0](LICENSE.txt).

## Description
This extension manages the synchronization between CiviCRM groups and the roles of the CMS used with this CRM. For the moment, this extension is tested only with CMS WordPress

## Getting Started

After installation, you have a seeting page for map CiviCRM groups and role WordPress. This page is on this menu : Administer > Customize Data and screens > Synchronisation Groupe - WP roles.
In this page, you have 10 lines of 2 select for create your mapping between Groups CiviCRM and WordPress role.

for a good synchronization it's necessary to create all the wordpress roles you need before use this extension

## Known Issues

If you find a problem, you can create an issue in this repo please

## Improvement

- Perhaps, this extension can be used with CMS Drupal. In the moment it's only use with CMS WordPress. This feature requires some developpement.
- My code use the hook_civicrm_post but i prefer to use a hook symfony. In the future i think it's important to use hook symfony
- For the moment, you map only 10 group with WordPress role. Perhaps need another feature to improve this extension

## Requirements

For a good synchronization between CiviCRM groups and role of user, the user contact must exist in the table `UFMatch`.
Often i test my code with extension `cmsuser`. It's necessary to have a `civirules` etxension in your project