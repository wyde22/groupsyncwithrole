# groupsyncwithrole

This is an [extension for CiviCRM](https://docs.civicrm.org/sysadmin/en/latest/customize/extensions/), licensed under [AGPL-3.0](LICENSE.txt).

## Description
This extension manages the synchronization between CiviCRM groups and the roles of the CMS used with this CRM. For the moment, this extension is tested only with CMS WordPress

## Getting Started

After installation, you have a seeting page for map CiviCRM groups and role WordPress

## Known Issues

(* FIXME *)

## Requirements

For a good synchronization between CiviCRM groups and role of user, the user contact must exist in the table `UFMatch`.
Often i test my code with extension `cmsuser`