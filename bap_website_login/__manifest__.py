# -*- coding: utf-8 -*-
{
	'name': 'BAP Website Login',
	'version': '14.0.0.1.0',
	'category': 'BAP Modules/Login Page',
	'summary': 'This module will be upgrading the new template for Login Page.',
	'author': 'PhatDM <phatdm@bap-ventures.com>',
	'license': 'LGPL-3',
	'company': 'BAP Ventures',
	'maintainer': 'BAP Ventures',
	'support': 'service@bap.jp',
	'website': 'https://bap-ventures.com/vi/',
	'depends': [
		# Odoo
		'website',

		# Bap
		'bap_website',
	],
	'live_test_url': '',
	'data': [
		# Data
		'data/ir_config_parameter.xml',
		# Templates
		'templates/assets.xml',
		'templates/footer.xml',
		'templates/home.xml',
		'templates/login.xml',
	],
	'demo': [],
	'qweb': [],
	'images': [],
	'installable': True,
	'application': True,
	'auto_install': False
}
