from odoo import api, SUPERUSER_ID

from . import models

XML_ID = "bemo_theme._assets_primary_variables"
SCSS_URL = "/bemo_theme/static/src/scss/colors.scss"


def _uninstall_reset_changes(cr, registry):
	env = api.Environment(cr, SUPERUSER_ID, {})
	env['bemo_theme.scss_editor'].reset_values(SCSS_URL, XML_ID)