/**
 * 格式化日期
 */


define(function () {
    'use strict';

    function prefix(time) {
        return time < 10 ? '0' + time : time;
    }

    function formDate(type) {
        var time = new Date(),
            year = time.getFullYear(),
            month = prefix(time.getMonth() + 1),
            day = prefix(time.getDate()),
            hour = prefix(time.getHours()),
            min = prefix(time.getMinutes()),
            sec = prefix(time.getSeconds());

        return type > 0 ?
        year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec :
        year + month + day + hour + min + sec;
    }

    return {
        formDate: formDate
    }
})