# -*- coding: utf-8 -*-
{
	'name': "Bemo Menu Apps",
	'summary': 'This is module custom Bemo Menu Apps',
	'version': '14.0.0.1.0',
	'license': 'LGPL-3',
	'category': 'Bemo Modules/Menu Apps Custom',
	'author': 'BAP Odoo Developer',
	'company': 'BAP Ventures',
	'maintainer': 'BAP Ventures',
	'support': 'service@bap.jp',
	'website': 'https://index.bemo.cloud/',
	'depends': [
		# Odoo
		'base',
		'web',
	],
	'data': [
		# Security
		'security/ir.model.access.csv',
		# Views
		'views/assets.xml',
		'views/ir_ui_menu_category_views.xml',
		'views/ir_ui_menu_views.xml',
	],
	'qweb': [],
	'installable': True,
	'application': True,
	'auto_install': True
}
