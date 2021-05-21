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
		# Security
		'security/ir.model.access.csv',
		#Snippets
		'views/snippets/s_bemo_hero_banner__v1.xml',
		'views/snippets/s_bemo_banner_title_page__v1.xml',
		'views/snippets/s_bemo_notification__v1.xml',
		'views/snippets/s_bemo_company_intention__v1.xml',
		'views/snippets/s_bemo_home_news__v1.xml',
		'views/snippets/s_bemo_employees_feedback__v1.xml',
		'views/snippets/s_bemo_packages__v1.xml',
		'views/snippets/s_bemo_why_bemo__v1.xml',
		'views/snippets/snippets.xml',
		# Pages
		'static/src/pages/p_bemo_pricing/p_bemo_pricing.xml',
		'static/src/pages/p_bemo_cart/p_bemo_cart.xml',
		'static/src/pages/p_bemo_payment/p_bemo_payment.xml',
		'static/src/pages/p_bemo_payment_online/p_bemo_payment_online.xml',
		'static/src/pages/p_bemo_payment_complete/p_bemo_payment_complete.xml',
		#View
		'views/assets.xml',
		'views/header.xml',
		'views/footer.xml',
		'views/login.xml',
		'views/pricing.xml',
		'views/cart.xml',
		'views/payment.xml',
		'views/payment_online.xml',
		'views/payment_complete.xml',
		'views/internal_feedback_views.xml',

	],
	'qweb': [],
	'installable': True,
	'application': True,
	'auto_install': True,
}