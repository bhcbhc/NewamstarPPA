/**
 * Created by bhcbhc on 2017/3/24.
 * 无菌启动报表
 */


define(function () {
    'use strict';

    var module = {};

    function eventBind() {

    }

    function eventUnBind() {
    }


    module.moduleName = "unGermAction";
    module.moduleId = 're-nGa';

    module.init = function () {
        var div = $('<div  class="clam_sys">无菌启动报表</div>');


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