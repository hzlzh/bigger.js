/* bigger.js by @hzlzh | https://github.com/hzlzh/bigger.js (under MIT license) */
(function () {
    "use strict";

    var Library = function (node, realWidth) {

        node.style.height = document.body.scrollHeight + 'px';

        function bigger() {
            if (window.innerWidth !== realWidth) {
                node.style.width = realWidth + "px";
                node.style.webkitTransform = "scale(" + window.innerWidth / realWidth + ")";
                node.style.webkitTransformOrigin = "0 0";
            }
        }

        bigger();
        window.addEventListener('resize', bigger);

        return this;
    };

    var Bigger = function (className, realWidth) {
        var node = null;
        if (isNaN(realWidth)) { realWidth = 320; }
        if (!className) {
            node = document.body;
        } else {
            node = document.getElementsByClassName(className)[0];
        }
        return new Library(node, realWidth);
    };

    if (!window.Bigger) {
        window.Bigger = Bigger;
    }
}(window, document));