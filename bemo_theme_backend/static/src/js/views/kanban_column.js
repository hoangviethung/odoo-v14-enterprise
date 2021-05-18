odoo.define("bemo_theme_backend.KanbanColumn", function (require) {
	"use strict";

	const config = require("web.config");

	const KanbanColumn = require("web.KanbanColumn");

	if (!config.device.isMobile) {
		return;
	}

	KanbanColumn.include({
		init() {
			this._super(...arguments);
			this.recordsDraggable = false;
			this.canBeFolded = false;
		},
	});
});
