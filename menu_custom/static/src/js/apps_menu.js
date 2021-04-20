odoo.define('menu_custom.AppsMenuInherit', function (require) {
"use strict";

    var AppsMenu = require('web.AppsMenu');

    AppsMenu.include({
        //--------------------------------------------------------------------------
        // BAP inherit from Odoo
        //--------------------------------------------------------------------------

        /**
         * @override
         * New: 'Get Apps Menu Category'
         */
        getAppsCategory: function () {
            var category = [];
            var category_check_ids = [];
            for (let n in this._apps) {
                    if (this._apps[n].ir_ui_menu_category_id)
                    {
                        if (!category_check_ids.includes(this._apps[n].ir_ui_menu_category_id[0])){
                        category_check_ids.push(this._apps[n].ir_ui_menu_category_id[0]);

                        category.push(this._apps[n].ir_ui_menu_category_id);
                        }
                    }
                  }
            category.sort();
            return category.reverse();
        },
    });

});
