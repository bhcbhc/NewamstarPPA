/**
 * Created by bhcbhc on 2017/3/24.
 * 能源报表
 */


define(function () {
    'use strict';

    var module = {};

    function eventBind() {

    }

    function eventUnBind() {
    }


    module.moduleName = "source";
    module.moduleId = 're-source';

    module.init = function () {
        var div = $('<div  class="clam_sys">能源报表</div>');


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