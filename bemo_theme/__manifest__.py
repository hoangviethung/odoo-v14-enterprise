# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'BEMO web theme',
    'category': 'BEMO theme',
    'version': '1.0',
    'description':
        """
Bemo theme Web Client.
===========================

This module modifies the web addon to provide Bemo design and responsiveness.
        """,
    'depends': ['web', 'web_enterprise'],
    'auto_install': True,
    'data': [
        "views/templates.xml",
        "views/web.xml",
    ],
    'qweb': [
    ],
    'license': 'LGPL-3',
}
