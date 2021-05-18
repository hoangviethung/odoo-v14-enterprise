

from odoo import api, fields, models



class res_country_district(models.Model):

    _name = 'res.country.district'

    name = fields.Char('District Name', required=True)
    code = fields.Char('District Code', required=True)
    active = fields.Boolean(default=True)
    province_id = fields.Many2one('res.country.state',string='Province')