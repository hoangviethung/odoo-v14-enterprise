odoo.define("bemo_theme.AppsBar", function (require) {
	"use strict";

	const Widget = require("web.Widget");

	const AppsBar = Widget.extend({
		events: _.extend({}, Widget.prototype.events, {
			"click .nav-link": "_onAppsMenuItemClicked",
		}),
		template: "bemo_theme.AppsBarMenu",
		init(parent, menu) {
			this._super(...arguments);
			this._apps = _.map(menu.children, (app) => ({
				actionID: parseInt(app.action.split(",")[1]),
				web_icon_data: app.web_icon_data,
				menuID: app.id,
				category_name: app.ir_ui_menu_category_id,
				name: app.name,
				xmlID: app.xmlid,
			}));
		},
		getApps() {
			return this._apps;
		},

		getAppsCategory() {
			const category = [];
			for (var item in this._apps) {
				category.push(item.category_name);
			}
			return category;
		},

		_openApp(app) {
			this.trigger_up("app_clicked", {
				action_id: app.actionID,
				menu_id: app.menuID,
			});
		},
		_onAppsMenuItemClicked(ev) {
			const $target = $(ev.currentTarget);
			const actionID = $target.data("action-id");
			const menuID = $target.data("menu-id");
			const app = _.findWhere(this._apps, {
				actionID: actionID,
				menuID: menuID,
			});
			this._openApp(app);
			ev.preventDefault();
			$target.blur();
		},
	});

	return AppsBar;
});
