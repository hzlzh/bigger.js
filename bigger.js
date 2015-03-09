/* bigger.js v1.0.4 | https://github.com/hzlzh/bigger.js (under MIT license) */
(function () {
    "use strict";

    var Library = function (node, realWidth, type) {
        // set hight for scroll use
        // node.style.height = node.scrollHeight + 'px';

        function bigger() {

            if (window.innerWidth !== realWidth || window.orientation === 0 || window.orientation === 180) {
                // main function
                node.style.width = realWidth + "px";
                if(type){
                    node.style.zoom = window.innerWidth / realWidth;
                }else{
                    node.style.webkitTransform = "scale(" + window.innerWidth / realWidth + ")";
                    node.style.webkitTransformOrigin = "0 0";
                }
            }
        }

        function run() {
            bigger();
            // fix screen rotate animation time
            setTimeout(function () {
                bigger();
            }, 200);
        }

        // run the first time
        bigger();

        // listen to mobile screen resize event
        window.addEventListener(window.hasOwnProperty('onorientationchange') ? "orientationchange" : "resize", run, false);
        return this;
    };

    var Bigger = function (obj, realWidth, type) {
        // type true is fixed Dom
        if (isNaN(realWidth)) { realWidth = 320; } // 320px design width as default
        if (!obj) {
            obj = document.body; // style add to <body> as default
        }
        return new Library(obj, realWidth, type);
    };

    if (!window.Bigger) {
        window.Bigger = Bigger;
    }
}());