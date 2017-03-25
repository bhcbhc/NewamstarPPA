/**
 * Created by bhcbhc on 2017/3/24.
 */


define(function () {
    'use strict';

    var module = {};

    function eventBind() {

    }

    function eventUnBind() {
    }

    module.moduleName = "consumption";
    module.moduleId = 're-waste';

    module.init = function () {
        var div = $('<div  class="clam_sys">物料消耗报表</div>');


        eventBind();

        return div;

    };

    module.destroy = function () {
        eventUnBind();
    };


    return {
        addModule: module
    }

});