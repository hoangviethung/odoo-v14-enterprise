odoo.define("bemo_theme_backend.my_attendances", function (require) {
	"use strict";

	var core = require("web.core");
	var ajax = require("web.ajax");
	var qweb = core.qweb;

	ajax.loadXML("/bemo_theme_backend/static/src/xml/attendance.xml", qweb);
});
