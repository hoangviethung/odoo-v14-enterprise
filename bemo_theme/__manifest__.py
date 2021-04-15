{
	"name": "Bemo Theme", 
	"summary": "This is module custom Bemo Theme.",
	"version": "14.0.1.0.0", 
	"category": "Themes/Bemo Theme", 
	"license": "LGPL-3", 
	"author": "B.A.P Ventures",
	"website": "https://bap-software.net/en/",
	'live_test_url': 'https://mukit.at/r/SgN',
	"contributors": [
		"BAP Ventures",
	],
	"depends": [
        "base",
		"sale",
		"web_editor",
	],
	"excludes": [
		"web_enterprise",
	],
	"data": [
		"template/assets.xml",
		"template/web.xml",
		"views/res_users.xml",
		"views/res_config_settings_view.xml",
		"data/res_company.xml",
	],
	"qweb": [
		"static/src/components/control_panel.xml",
		"static/src/xml/*.xml",
	],
	"images": [],
	"external_dependencies": {
		"python": [],
		"bin": [],
	},
	"application": True,
	"installable": True,
	"auto_install": True,
	"uninstall_hook": "_uninstall_reset_changes",
}
