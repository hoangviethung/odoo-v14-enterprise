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
		#Components
		'static/src/components/bemo-hero-banner.xml',
		'static/src/components/bemo-banner-title-page.xml',
		'static/src/components/bemo-notification.xml',
		'static/src/components/bemo-company-intention.xml',
		'static/src/components/bemo-home-news.xml',
		'static/src/components/bemo-pricing.xml',
		'static/src/components/bemo-cart.xml',
		'static/src/components/bemo-payment.xml',
		'static/src/components/bemo-payment-complete.xml',
		'static/src/components/employees-feedback.xml',
		# Templates
		'templates/assets.xml',
		'templates/header.xml',
		'templates/footer.xml',
		'templates/home.xml',
		'templates/login.xml',
		'templates/pricing.xml',
		'templates/cart.xml',
		'templates/payment.xml',
		'templates/payment-complete.xml',
		#view
		'views/internal_feedback_views.xml',

	],
	'qweb': [],
	'installable': True,
	'application': True,
	'auto_install': True,
}