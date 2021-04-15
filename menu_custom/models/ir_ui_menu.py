# -*- coding: utf-8 -*-
from odoo import api, fields, models



class IrUiMenuCategory(models.Model):
    _name = 'ir.ui.menu.category'

    name = fields.Char("Name")

class IrUiMenu(models.Model):
    _inherit = 'ir.ui.menu'

    ir_ui_menu_category_id = fields.Many2one('ir.ui.menu.category', "Category")