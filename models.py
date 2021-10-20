from odoo import fields, models, api


class ProductTemplate(models.Model):
    _name = 'product.template'
    _inherit = 'product.template'

    customizeme_link = fields.Char('Product link')
