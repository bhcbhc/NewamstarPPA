/**
 * Created by bhcbhc on 2017/3/24.
 * 设备绩效报表
 */


define(function () {
    'use strict';

    var module = {};

    function eventBind() {

    }

    function eventUnBind() {
    }


    module.moduleName = "deviceEffect";
    module.moduleId = 're-device';

    module.init = function () {
        var div = $('<div  class="clam_sys">设备绩效报表</div>');


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