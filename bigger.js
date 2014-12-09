/* Copyright: @hzlzh https://github.com/hzlzh/bigger.js */
;(function(win) {
    node = document.getElementsByClassName('bigger')[0];
    node.style.height = document.body.scrollHeight+'px';

    bigger();
    win.addEventListener('resize', bigger);

    function bigger(){
        if(win.innerWidth!=320){
            node.style.width = "320px";
            node.style.webkitTransform="scale("+(win.innerWidth/320)+")";
            node.style.webkitTransformOrigin="0 0";
        }
    }
})(window);