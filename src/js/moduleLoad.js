/**
 * Created by Ninghai on 2016/12/13.
 */

define(function () {
    var jquery = window.$,
        allModule = [],
        currentModule = null;
    if (typeof jquery === "undefined") {
        console.log('need jquery');
        return;
    }

    return {
        /**
         * import a new module
         * @param module {{moduleName:string,moduleId:string,init:function,destroy:function,addEvents:function}}
         * @return {{result:boolean,message:string}}
         */
        importNewModule: function (module) {
            var re = {result: false, message: ''},
                isExist = false;
            if (typeof module !== 'undefined' && typeof module.moduleName != "undefined"
                && typeof module.init === 'function' && typeof module.moduleId !== 'undefined'
                && typeof module.destroy === 'function' && typeof  module.addEvents === 'function') {
                for (var i = 0; i < allModule.length; i++) {
                    if (allModule[i].moduleName === module.moduleName) {
                        isExist = true;
                        re.message = "ModuleName Exists";
                        break;
                    }
                }

                if (!isExist) {
                    allModule.push(module);
                    re.result = true;
                }
            }
            return re;
        },

        /**
         *  load a module to the container
         *  @param container
         *  @param moduleId
         */
        loadModule: function (container, moduleId) {
            var module = null,
                i = 0, length = allModule.length,
                moduleDiv;
            for (; i <= length; i++) {
                if (allModule[i].moduleId === moduleId) {
                    module = allModule[i];
                    break;
                }
            }

            if (module == null) {
                console.log('the module,' + moduleId + ',need to be imported first');
                return;
            }

            if (module === currentModule) {
                return;
            }

            if (currentModule != null) {
                currentModule.destroy();
            }


            currentModule = module;
            container.empty();
            moduleDiv = module.init();
            moduleDiv.appendTo(container);

            setTimeout(module.addEvents, 0);

        }

    }
});