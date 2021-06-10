# -*- coding: utf-8 -*-
{
	'name': "Bemo Dashboard Advance",
	'summary': 'This is module Bemo Dashboard Advance',
	'version': '14.0.0.1.0',
	'license': 'LGPL-3',
	'category': 'Bemo Modules/Bemo Dashboard Advance',
	'author': 'BAP Odoo Developer',
	'company': 'BAP Ventures',
	'maintainer': 'BAP Ventures',
	'support': 'service@bap.jp',
	'website': 'https://bemo.cloud/',
	'depends': [
		# Bemo
		'ks_dashboard_ninja'
	],
	'data': [
		# View
		'views/ks_dashboard_tv_assets.xml',
		'views/ks_dashboard_ninja_item_view_inherit.xml',
		'views/ks_dashboard_form_view_inherit.xml',
	],
	'qweb': [
		'static/src/xml/ks_dashboard_tv_ninja.xml',
		'static/src/xml/ks_query_templates.xml',
		'static/src/xml/ks_dna_to_template.xml',
	],
	'installable': True,
	'application': True,
	'auto_install': True,
}