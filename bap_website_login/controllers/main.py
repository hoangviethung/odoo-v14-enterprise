# -*- encoding: utf-8 -*-
import ast
import logging

from odoo import http
from odoo.http import request
from odoo.addons.web.controllers.main import Home

_logger = logging.getLogger(__name__)


class BAPLoginHome(Home):

    @http.route('/web/login', type='http', auth='none')
    def web_login(self, redirect=None, **kw):
        param_obj = request.env['ir.config_parameter'].sudo()

        request.params['disable_footer'] = ast.literal_eval(
            param_obj.get_param('login_form_disable_footer')
        ) or False

        request.params['disable_database_manager'] = ast.literal_eval(
            param_obj.get_param('login_form_disable_database_manager')
        ) or False

        request.params['default_background_src'] = param_obj.get_param('login_form_background_default') or ''
        request.params['in_form_background_src'] = param_obj.get_param('login_form_background_in_form_login') or ''

        return super(BAPLoginHome, self).web_login(redirect, **kw)
