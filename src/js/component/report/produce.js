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
        var div = $('<div  class="full-height full-width">生产报表</div>');

        var asideTitle = $('<div><span>新美星生产表表系统</span></div>');
        var middleTitle = $('<div><h2>PET瓶无菌线-用电量</h2><span></span></div>');
        var chartDiv = $('<div></div>');
        var tabel = $('<table></table>');

        var thead = $('<tr><td>班次/品种</td><td></td><td>记录时间：</td><td></td><td>记录人</td>' +
            '<td></td><td>审核人</td><td></td><td>页码</td><td></td></tr>');

        thead.appendTo(tabel);

        asideTitle.appendTo(div);
        middleTitle.appendTo(div);
        chartDiv.appendTo(div);

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