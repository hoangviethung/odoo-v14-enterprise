odoo.define("bemo_theme.AppsMenu", function (require) {
	"use strict";

	const core = require("web.core");
	const session = require("web.session");

	const AppsMenu = require("web.AppsMenu");
	const MenuSearchMixin = require("bemo_theme.MenuSearchMixin");

	AppsMenu.include(
		_.extend({}, MenuSearchMixin, {
			events: _.extend({}, AppsMenu.prototype.events, {
				"keydown .bemo_search_input input": "_onSearchResultsNavigate",
				"click .bemo_menu_search_result": "_onSearchResultChosen",
				"shown.bs.dropdown": "_onMenuShown",
				"hidden.bs.dropdown": "_onMenuHidden",
				"hide.bs.dropdown": "_onMenuHide",
			}),
			init(parent, menuData) {
				this._super(...arguments);
				for (let n in this._apps) {
					this._apps[n].web_icon_data =
						menuData.children[n].web_icon_data;
					this._apps[n].ir_ui_menu_category_id =
						menuData.children[n].ir_ui_menu_category_id;
				}
				this._searchableMenus = _.reduce(
					menuData.children,
					this._findNames.bind(this),
					{},
				);
				this._search_def = $.Deferred();
			},
			start() {
				this._setBackgroundImage();
				this.$search_container = this.$(".bemo_search_container");
				this.$search_input = this.$(".bemo_search_input input");
				this.$search_results = this.$(".bemo_search_results");
				return this._super(...arguments);
			},
			_onSearchResultChosen(event) {
				event.preventDefault();
				const $result = $(event.currentTarget),
					text = $result.text().trim(),
					data = $result.data(),
					suffix = ~text.indexOf("/") ? "/" : "";
				this.trigger_up("menu_clicked", {
					action_id: data.actionId,
					id: data.menuId,
					previous_menu_id: data.parentId,
				});
				const app = _.find(
					this._apps,
					(_app) => text.indexOf(_app.name + suffix) === 0,
				);
				core.bus.trigger("change_menu_section", app.menuID);
			},
			_onAppsMenuItemClicked(event) {
				this._super(...arguments);
				event.preventDefault();
			},
			_setBackgroundImage() {
				const url = session.url("/web/image", {
					model: "res.company",
					id: session.company_id,
					field: "background_image",
				});
				this.$(".dropdown-menu").css({
					"--url-background": "url(" + url + ")",
				});
				if (session.bemo_theme_background_blend_mode) {
					this.$(".o-app-name").css({
						"mix-blend-mode":
							session.bemo_theme_background_blend_mode,
					});
				}
			},
			_onMenuHide(event) {
				return (
					$(".oe_wait").length === 0 && !this.$("input").is(":focus")
				);
			},
		}),
	);
});
