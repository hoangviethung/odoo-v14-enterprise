# -*- encoding: utf-8 -*-
import ast
import logging
import json

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


	@http.route(['/submit_feedback'],type='http', csrf=False, auth="public", methods=['POST'], website=True)
	def submit_feedback(self, **kw):

		request.env['internal.feedback'].sudo().create({'name': kw.get('title'),'description': kw.get('description')})
		return request.redirect('/')

	@http.route(['/pricing'], type='http', auth="public", website=True, sitemap=True)
	def pricing(self, **opt):

		return request.render("bemo_theme_frontend.layout_bemo_pricing")

	@http.route(['/cart'], type='http', auth="public", website=True, sitemap=True)
	def cart(self, **opt):

		return request.render("bemo_theme_frontend.layout_bemo_cart")

	@http.route(['/payment'], type='http', auth="public", website=True, sitemap=True)
	def payment(self, **opt):

		return request.render("bemo_theme_frontend.layout_bemo_payment")

	@http.route(['/payment_online'], type='http', auth="public", website=True, sitemap=True)
	def payment_online(self, **opt):

		return request.render("bemo_theme_frontend.layout_bemo_payment_online")

	@http.route(['/payment-complete'], type='http', auth="public", website=True, sitemap=True)
	def payment_complete(self, **opt):

		return request.render("bemo_theme_frontend.layout_bemo_payment_complete")