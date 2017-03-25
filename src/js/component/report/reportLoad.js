/**
 * Created by bhcbhc on 2017/3/25.
 */

define(['cleanRecord', 'consumption', 'deviceEffect', 'produce', 'deviceRemind', 'source', 'unGermAction', 'moduleLoad'],
    /**
     *
     * @return {{loadModules: loadReportModule}}
     */
    function () {
        for (var len = arguments.length, modules = Array(len), key = 0; key < len; key++) {
            modules[key] = arguments[key];
        }

        var mL = modules[modules.length - 1];
        var component = modules.slice(0, -1);

        function loadReportModule() {
            component.map(function (item) {
                mL.importNewModule(item.addModule);
            })
        }

        return {
            loadModules: loadReportModule
        }
    })