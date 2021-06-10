{
	'name': 'Bemo Theme Backend',
	'summary': 'This is module custom Bemo Theme Backend.',
	'version': '14.0.1.0.0', 
	'license': 'LGPL-3',
	'category': 'Bemo Modules/Bemo Theme Backend',
	'author': 'BAP Odoo Developer',
	'company': 'BAP Ventures',
	'maintainer': 'BAP Ventures',
	'support': 'service@bap.jp',
	'website': 'https://bemo.cloud/',
	'depends': [
		# Odoo
		'base',
		'web',
		'web_editor',
	],
	'data': [
		# Views
		'views/assets.xml',
		'views/web.xml',
		'views/res_users.xml',
		'views/res_config_settings_view.xml',
		# Datas
		'data/res_company.xml',
	],
	'qweb': [
		'static/src/components/control_panel.xml',
		'static/src/xml/*.xml',
	],
	'external_dependencies': {
		'python': [],
		'bin': [],
	},
	'application': True,
	'installable': True,
	'auto_install': True,
	'uninstall_hook': '_uninstall_reset_changes',
}