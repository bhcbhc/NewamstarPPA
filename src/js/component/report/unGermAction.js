/**
 * Created by bhcbhc on 2017/3/24.
 * 无菌启动报表
 */


define(function () {
    'use strict';

    var module = {};

    function eventBind() {
        var startTime = $('#startTimeSelect').val(),
            endTime = $('#endTimeSelect').val(),
            text = startTime + '——' + endTime;
        $('.date-value').html(text);
    }

    function eventUnBind() {
    }


    module.moduleName = "unGermAction";
    module.moduleId = 're-nGa';

    module.init = function () {
        var div = $('<div class="chart-print full-height full-width" style="overflow:auto"></div>');

        var asideTitle = $('<div class="asideTitle pr-per-10" style="height: 10vh; padding-top: 5vh"><span class="fr">新美星生产报表系统</span></div>');
        var middleTitle = $('<div class="midTitle relative " style="height: 10vh;text-align: center;"><h2 style="font-weight: bold;vertical-align: middle">PET瓶无菌线-无菌灌装机_生产过程报表</h2></div>');
        var chartDiv = $('<div class="chart-div" style="height: 58vh;padding:2% 0;"></div>');
        var table = $('<table class="printMessage full-width text-center"></table>');


        var thead = $('<tr><td>班次/品种：</td><td></td><td>记录时间：</td><td></td><td>记录人：</td>' +
            '<td></td><td>审核人：</td><td></td><td>页码：</td><td>1</td></tr>');

        var dateSpan = $('<span class="date-value absolute"></span>');

        var chart = $('<table class="table table-bordered table-hover small full-width" style="text-align: center;" ></table>'),
            chartHead = $('<thead><tr><td rowspan="2">记录时间</td><td colspan="10">生成参数3</td></tr>' +
                '<tr><td>灌装速度</td><td>累计产量</td><td>灌装缸液位</td><td>灌装缸压力</td><td>无菌罐重量</td>' +
                '<td>KD0301</td><td>KD0302</td><td>水封水</td><td>消毒液回流罐</td><td>异常操作情况备注</td></tr></thead>'),
            chartBody = $('<tbody></tbody>');

        for (var i = 0; i < 8; i++) {
            var tr = $('<tr><td>17-03-27 11:40 AM</td><td>' + i * 10 + 'Bmp</td><td>' + i * 1200 + '瓶</td><td>0.00</td>' +
                '<td>0kg</td></td><td>0.00bar</td><td>27.6&#176;C</td><td>27.3&#176;C</td><td>' + Math.floor(Math.random() * 7) + 4 + 'T/H</td>' +
                '<td>23.4mm</td><td></td></tr>');
            tr.appendTo(chartBody);
        }

        chartHead.appendTo(chart);
        chartBody.appendTo(chart);

        chart.appendTo(chartDiv);

        dateSpan.appendTo(middleTitle);
        thead.appendTo(table);

        asideTitle.appendTo(div);
        middleTitle.appendTo(div);
        chartDiv.appendTo(div);
        table.appendTo(div);

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