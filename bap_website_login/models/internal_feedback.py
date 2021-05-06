# -*- coding: utf-8 -*-
import logging

from odoo import fields, models, _

_logger = logging.getLogger(__name__)


class internal_feedback(models.Model):
    _name = "internal.feedback"
    _description = _("Internal Feedback")
    _order = 'id desc'

    name = fields.Char(
        string="Title",
    )
    description = fields.Text(string="Description")
