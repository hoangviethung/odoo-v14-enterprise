odoo.define("bemo_theme.MenuSearchMixin", function (require) {
	"use strict";

	const core = require("web.core");
	const config = require("web.config");

	const QWeb = core.qweb;

	const MenuSearchMixin = {
		_findNames(memo, menu) {
			if (menu.action) {
				const key = menu.parent_id ? menu.parent_id[1] + "/" : "";
				memo[key + menu.name] = menu;
			}
			if (menu.children.length) {
				_.reduce(menu.children, this._findNames.bind(this), memo);
			}
			return memo;
		},
		_menuInfo(key) {
			const original = this._searchableMenus[key];
			return _.extend(
				{
					action_id: parseInt(original.action.split(",")[1], 10),
				},
				original
			);
		},
		_searchFocus() {
			if (!config.device.isMobile) {
				this.$search_input.focus();
			} else {
				this.$search_input.blur();
			}
		},
		_searchReset() {
			this.$search_container.removeClass("has-results");
			this.$search_results.empty();
			this.$search_input.val("");
		},
		_searchMenusSchedule() {
			this._search_def.reject();
			this._search_def = $.Deferred();
			setTimeout(this._search_def.resolve.bind(this._search_def), 50);
			this._search_def.then(this._searchMenus.bind(this));
		},
		_searchMenus() {
			const query = this.$search_input.val();
			if (query === "") {
				this.$search_container.removeClass("has-results");
				this.$search_results.empty();
				return;
			}
			const results = fuzzy.filter(query, _.keys(this._searchableMenus), {
				pre: "<b>",
				post: "</b>",
			});
			this.$search_container.toggleClass(
				"has-results",
				Boolean(results.length)
			);
			this.$search_results.html(
				QWeb.render("bemo_theme.MenuSearchResults", {
					results: results,
					widget: this,
				})
			);
		},
		_onSearchResultsNavigate(event) {
			if (this.$search_results.html().trim() === "") {
				this._searchMenusSchedule();
				return;
			}
			const all = this.$search_results.find(".bemo_menu_search_result");
			const key = event.key || String.fromCharCode(event.which);
			const pre_focused = all.filter(".active") || $(all[0]);
			const offset = all.index(pre_focused);
			if (key === "Tab") {
				event.preventDefault();
				key = event.shiftKey ? "ArrowUp" : "ArrowDown";
			}
			switch (key) {
				case "Enter":
					pre_focused.click();
					break;
				case "ArrowUp":
					offset--;
					break;
				case "ArrowDown":
					offset++;
					break;
				default:
					this._searchMenusSchedule();
					return;
			}
			if (offset < 0) {
				offset = all.length + offset;
			} else if (offset >= all.length) {
				offset -= all.length;
			}
			const new_focused = $(all[offset]);
			pre_focused.removeClass("active");
			new_focused.addClass("active");
			this.$search_results.scrollTo(new_focused, {
				offset: {
					top: this.$search_results.height() * -0.5,
				},
			});
		},
		_onMenuShown(event) {
			this._searchFocus();
		},
		_onMenuHidden(event) {
			this._searchReset();
		},
	};

	return MenuSearchMixin;
});
