/**
 * Created by bhcbhc on 2017/3/24.
 */
require.config(
    {
        paths: {
            'moduleLoad': 'src/js/moduleLoad',
            'main-menu': 'src/js/component/panelBar/menu-panelBar',

            //报表模块
            'cleanRecord': 'src/js/component/report/cleaningRecord',
            'consumption': 'src/js/component/report/consumption',
            'deviceEffect': 'src/js/component/report/deviceEffect',
            'produce': 'src/js/component/report/produce',
            'deviceRemind': 'src/js/component/report/deviceRemind',
            'source': 'src/js/component/report/source',
            'unGermAction': 'src/js/component/report/unGermAction',

            //报表加载
            'reportLoad': 'src/js/component/report/reportLoad'
        }
    });
require(['moduleLoad', 'main-menu', 'reportLoad'], function (ml, mainMenu, reportLoad) {
    'use strict';

    mainMenu.test();
    reportLoad.loadModules();
repot
    $(document).ready(function () {
        $('#startTimeSelect').kendoDateTimePicker({
            value: new Date("Mar 24,2017")
        });
        $('#endTimeSelect').kendoDateTimePicker({
            value: new Date()
        })
    });

    $('#panel-report li').on('click', function (e) {
        var target = e.target,
            id;
        if (target.tagName.toLowerCase() === 'li') {
            $('#panel-report li.a-selected').removeClass('a-selected');
            $(target).addClass('a-selected');
            id = $(target).attr('id');
            console.log(id);
            ml.loadModule($('#equip-viewport'), id);
        }
    });

    $('#panel-report ul li:first').trigger('click');
});