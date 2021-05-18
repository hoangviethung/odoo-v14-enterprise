from odoo import api, SUPERUSER_ID

from . import models

XML_ID = "bemo_theme_backend._assets_primary_variables"
SCSS_URL = "/bemo_theme_backend/static/src/scss/colors.scss"


def _uninstall_reset_changes(cr, registry):
	env = api.Environment(cr, SUPERUSER_ID, {})
	env['bemo_theme_backend.scss_editor'].reset_values(SCSS_URL, XML_ID)