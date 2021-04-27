# -*- coding: utf-8 -*-
{
	'name': "Bemo Theme Frontend",
	'summary': 'This is module custom Bemo Theme Frontend.',
	'version': '14.0.0.1.0',
	'license': 'LGPL-3',
	'category': 'Bemo Modules/Menu Theme Frontend',
	'author': 'BAP Odoo Developer',
	'company': 'BAP Ventures',
	'maintainer': 'BAP Ventures',
	'support': 'service@bap.jp',
	'website': 'https://index.bemo.cloud/',
	'depends': [
		# Odoo
		'website',
	],
	'data': [
		# Datas
		'data/ir_config_parameter.xml',
		# Templates
		'templates/assets.xml',
		'templates/footer.xml',
		'templates/home.xml',
		'templates/login.xml',
	],
	'qweb': [],
	'installable': True,
	'application': True,
	'auto_install': True,
}