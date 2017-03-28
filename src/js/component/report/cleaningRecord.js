/**
 * Created by bhcbhc on 2017/3/24.
 * 清洗记录报表
 */


define(function () {
    'use strict';

    var module = {};

    function eventBind() {

    }

    function eventUnBind() {
    }

    module.moduleName = "cleaningRecord";
    module.moduleId = 're-clean';

    module.init = function () {
        var div = $('<div  class="clam_sys">清洗记录报表</div>');

        return div;

    };


    module.addEvents = function () {
        eventBind();
    };

    module.destroy = function () {
        eventUnBind();
    };


    return {
        addModule: module
    }

});