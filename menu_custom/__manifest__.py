# -*- coding: utf-8 -*-
{
    'name': "BAP Menu Custom",
    'version': '14.0.0.1.0',
    'category': 'BAP Modules/Menu Custom',
    'summary': 'This module will inherit from Core Web in Odoo.',
    'author': 'BAP Odoo Developer',
    'license': 'LGPL-3',
    'company': 'BAP Ventures',
    'maintainer': 'BAP Ventures',
    'support': 'service@bap.jp',
    'website': 'https://bap-ventures.com/vi/',
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
        # 'views/res_config_settings_views.xml',
    ],
    'installable': True,
    'application': False,
    'auto_install': False
}
