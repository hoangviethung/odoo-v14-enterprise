# -*- coding: utf-8 -*-
{
	'name': "Bemo Dashboard",
	'summary': 'This is module Bemo Dashboard.',
	'version': '14.0.0.1.0',
	'license': 'LGPL-3',
	'category': 'Bemo Modules/Bemo Dashboard',
	'author': 'BAP Odoo Developer',
	'company': 'BAP Ventures',
	'maintainer': 'BAP Ventures',
	'support': 'service@bap.jp',
	'website': 'https://bemo.cloud/',
	'depends': [
		# Odoo
		'base',
		'web',
		'base_setup',
		'bus',
	],
	'data': [
		# Datas
		'data/ks_default_data.xml',
		# Security
		'security/ir.model.access.csv',
		'security/ks_security_groups.xml',
		#View
		'views/ks_dashboard_ninja_view.xml',
		'views/ks_dashboard_ninja_item_view.xml',
		'views/ks_dashboard_ninja_assets.xml',
		'views/ks_dashboard_action.xml',
	],
	'qweb': [
		'static/src/xml/ks_dn_global_filter.xml',
		'static/src/xml/ks_dashboard_ninja_templates.xml',
		'static/src/xml/ks_dashboard_ninja_item_templates.xml',
		'static/src/xml/ks_dashboard_ninja_item_theme.xml',
		'static/src/xml/ks_widget_toggle.xml',
		'static/src/xml/ks_dashboard_pro.xml',
		'static/src/xml/ks_import_list_view_template.xml',
		'static/src/xml/ks_quick_edit_view.xml',
		'static/src/xml/ks_to_do_template.xml',
	],
	'demo': [
		'demo/ks_dashboard_ninja_demo.xml',
	],
	'installable': True,
	'application': True,
	'auto_install': False,
}
