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
            'reportLoad': 'src/js/component/report/reportLoad',

            //格式化日期
            'formatDate': 'src/js/component/formatDate/format'
        }
    });
require(['moduleLoad', 'reportLoad', 'formatDate'], function (ml, reportLoad, formatDate) {
    'use strict';

    reportLoad.loadModules();
    $(document).ready(function () {
        $('#startTimeSelect').kendoDateTimePicker({
            value: new Date("Mar 24,2017"),
            change: function () {
                var startTime = kendo.toString(this.value(), 'g'),
                    endTime = $('#endTimeSelect').val(),
                    text = startTime + ' —— ' + endTime;

                $('.date-value').html(text);
            }
        });
        $('#endTimeSelect').kendoDateTimePicker({
            value: new Date(),
            change: function () {
                var endTime = kendo.toString(this.value(), 'g'),
                    startTime = $('#startTimeSelect').val(),
                    text = startTime + ' —— ' + endTime;
                $('.date-value').html(text);
            }
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


    $('#chart-print').on('click', function () {
        if ($('.chart-print')) {
            $('.chart-print').print();
        }
    });

    $('.export-pdf').click(function () {
        kendo.drawing.drawDOM($('.chart-print'))
            .then(function (group) {
                return kendo.drawing.exportPDF(group, {
                    paperSize: 'auto',
                    margin: {left: '1cm', top: '1cm', right: '1cm', bottom: '1cm'}
                });
            })
            .done(function (data) {
                kendo.saveAs({
                    dataURI: data,
                    fileName: 'admin' + formatDate.formDate(false) + '.pdf',
                    proxyURL: '//demos.telerik.com/kendo-ui/service/export'
                });
            });
    });

    $('.export-excel').click(function () {

    });
});