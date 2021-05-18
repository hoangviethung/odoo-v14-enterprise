import re
import uuid
import base64

from odoo import api, fields, models

XML_ID = "bemo_theme_backend._assets_primary_variables"
SCSS_URL = "/bemo_theme_backend/static/src/scss/colors.scss"


class ResConfigSettings(models.TransientModel):

    _inherit = 'res.config.settings'

    #----------------------------------------------------------
    # Database
    #----------------------------------------------------------
    
    theme_favicon = fields.Binary(
        related="company_id.favicon",
        readonly=False
    )
    
    theme_background_image = fields.Binary(
        related="company_id.background_image",
        readonly=False
    )
    
    theme_background_blend_mode = fields.Selection(
        related="company_id.background_blend_mode",
        readonly=False
    )
    
    theme_default_sidebar_preference = fields.Selection(
        related="company_id.default_sidebar_preference",
        readonly=False
    )

    theme_default_chatter_preference = fields.Selection(
        related="company_id.default_chatter_preference",
        readonly=False
    )
    
    theme_color_brand = fields.Char(
        string="Theme Brand Color"
    )
    
    theme_color_primary = fields.Char(
        string="Theme Primary Color"
    )
    
    theme_color_required = fields.Char(
        string="Theme Required Color"
    )
    
    theme_color_menu = fields.Char(
        string="Theme Menu Color"
    )
    
    theme_color_appbar_color = fields.Char(
        string="Theme AppBar Color"
    )
    
    theme_color_appbar_background = fields.Char(
        string="Theme AppBar Background"
    )
    
    #----------------------------------------------------------
    # Functions
    #----------------------------------------------------------

    def set_values(self):
        res = super(ResConfigSettings, self).set_values()
        param = self.env['ir.config_parameter'].sudo()
        variables = [
            'o-brand-odoo',
            'o-brand-primary',
            'mk-required-color',
            'mk-apps-color',
            'mk-appbar-color',
            'mk-appbar-background',
        ]
        colors = self.env['bemo_theme_backend.scss_editor'].get_values(
            SCSS_URL, XML_ID, variables
        )
        colors_changed = []
        colors_changed.append(self.theme_color_brand != colors['o-brand-odoo'])
        colors_changed.append(self.theme_color_primary != colors['o-brand-primary'])
        colors_changed.append(self.theme_color_required != colors['mk-required-color'])
        colors_changed.append(self.theme_color_menu != colors['mk-apps-color'])
        colors_changed.append(self.theme_color_appbar_color != colors['mk-appbar-color'])
        colors_changed.append(self.theme_color_appbar_background != colors['mk-appbar-background'])
        if(any(colors_changed)):
            variables = [
                {'name': 'o-brand-odoo', 'value': self.theme_color_brand or "#243742"},
                {'name': 'o-brand-primary', 'value': self.theme_color_primary or "#5D8DA8"},
                {'name': 'mk-required-color', 'value': self.theme_color_required or "#d1dfe6"},
                {'name': 'mk-apps-color', 'value': self.theme_color_menu or "#f8f9fa"},
                {'name': 'mk-appbar-color', 'value': self.theme_color_appbar_color or "#dee2e6"},
                {'name': 'mk-appbar-background', 'value': self.theme_color_appbar_background or "#000000"},
            ]
            self.env['bemo_theme_backend.scss_editor'].replace_values(
                SCSS_URL, XML_ID, variables
            )
        param.set_param('bemo_theme_backend.background_blend_mode', self.theme_background_blend_mode)
        return res

    @api.model
    def get_values(self):
        res = super(ResConfigSettings, self).get_values()
        params = self.env['ir.config_parameter'].sudo()
        variables = [
            'o-brand-odoo',
            'o-brand-primary',
            'mk-required-color',
            'mk-apps-color',
            'mk-appbar-color',
            'mk-appbar-background',
        ]
        colors = self.env['bemo_theme_backend.scss_editor'].get_values(
            SCSS_URL, XML_ID, variables
        )
        res.update({
            'theme_color_brand': colors['o-brand-odoo'],
            'theme_color_primary': colors['o-brand-primary'],
            'theme_color_required': colors['mk-required-color'],
            'theme_color_menu': colors['mk-apps-color'],
            'theme_color_appbar_color': colors['mk-appbar-color'],
            'theme_color_appbar_background': colors['mk-appbar-background'],
            'theme_background_blend_mode': params.get_param('bemo_theme_backend.background_blend_mode', 'normal'),
        })

        for rec in self:
            users = self.env['res.users'].search([])
            for user in users:
                user.sidebar_type = rec.theme_default_sidebar_preference
        return res