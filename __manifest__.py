{
    'name': 'CustomizeMe',
    'category': 'Website/Website',
    'summary': 'customizeme',
    'version': '1.0',
    'description': """
    Customize product with 3d tool.
    """,
    'depends': ['website', 'sale', 'website_sale'],
    'data': [
        'views/customizeme_product.xml',
        'views/customizeme_sale.xml',
    ],
    'application': True,
    'installable': True,
    'auto_install': False,
}
