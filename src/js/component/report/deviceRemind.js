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


    module.moduleName = "deviceRemind";
    module.moduleId = 're-remind';

    module.init = function () {
        var div = $('<div>设备启动报表</div>');


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