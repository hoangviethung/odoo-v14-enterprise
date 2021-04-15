odoo.define('web.AppsMenu', function (require) {
"use strict";

var Widget = require('web.Widget');

var AppsMenu = Widget.extend({
    template: 'AppsMenu',
    events: {
        'click .o_app': '_onAppsMenuItemClicked',
    },
    /**
     * @override
     * @param {web.Widget} parent
     * @param {Object} menuData
     * @param {Object[]} menuData.children
     */
    init: function (parent, menuData) {
        this._super.apply(this, arguments);
        this._activeApp = undefined;
        this._apps = _.map(menuData.children, function (appMenuData) {
            debugger;
            return {
                actionID: parseInt(appMenuData.action.split(',')[1]),
                menuID: appMenuData.id,
                name: appMenuData.name,
                xmlID: appMenuData.xmlid,
                ir_ui_menu_category_id: appMenuData.ir_ui_menu_category_id,
            };
        });
    },

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    /**
     * @returns {Object[]}
     */
    getApps: function () {
        return this._apps;
    },
    getAppsCategory: function () {
        const category = [];
        const category_check_ids = [];
        for (let n in this._apps) {
                if (this._apps[n].ir_ui_menu_category_id)
                {
                    if (!category_check_ids.includes(this._apps[n].ir_ui_menu_category_id[0])){
                    category_check_ids.push(this._apps[n].ir_ui_menu_category_id[0]);

                    category.push(this._apps[n].ir_ui_menu_category_id);
                    }
                }
              }
        category.sort()
        return category.reverse();;
    },
    /**
     * Open the first app in the list of apps
     */
    openFirstApp: function () {
        if (!this._apps.length) {
            return
        }
        var firstApp = this._apps[0];
        this._openApp(firstApp);
    },

    //--------------------------------------------------------------------------
    // Handlers
    //--------------------------------------------------------------------------

    /**
     * @private
     * @param {Object} app
     */
    _openApp: function (app) {
        this._setActiveApp(app);
        this.trigger_up('app_clicked', {
            action_id: app.actionID,
            menu_id: app.menuID,
        });
    },
    /**
     * @private
     * @param {Object} app
     */
    _setActiveApp: function (app) {
        var $oldActiveApp = this.$('.o_app.active');
        $oldActiveApp.removeClass('active');
        var $newActiveApp = this.$('.o_app[data-action-id="' + app.actionID + '"]');
        $newActiveApp.addClass('active');
    },

    //--------------------------------------------------------------------------
    // Handlers
    //--------------------------------------------------------------------------

    /**
     * Called when clicking on an item in the apps menu.
     *
     * @private
     * @param {MouseEvent} ev
     */
    _onAppsMenuItemClicked: function (ev) {
        var $target = $(ev.currentTarget);
        var actionID = $target.data('action-id');
        var menuID = $target.data('menu-id');
        var app = _.findWhere(this._apps, { actionID: actionID, menuID: menuID });
        this._openApp(app);
    },

});

return AppsMenu;

});
