/**
 * Created by bhcbhc on 2017/3/24.
 * 生产报表
 */


define(function () {
    'use strict';

    var module = {};

    function eventBind() {

    }

    function eventUnBind() {
    }


    module.moduleName = "produce";
    module.moduleId = 're-pro';

    module.init = function () {
        var div = $('<div  class="clam_sys">生产报表</div>');


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