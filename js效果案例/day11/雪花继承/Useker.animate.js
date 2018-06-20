/**
 * Created by tronke on 2017/8/29.
 */

//缓动画 包名称
slowAnimate={
    animate:function(obj, json, callback) {
        //1.清空之前的定时器
        clearInterval(obj.timer);

        //启动定时器
        obj.timer = setInterval(function () {

            var flag = true
            for (var key in json) {
                // 步长 = （目标值-当前值）/10;
                var step = (parseInt(json[key]) - parseInt(getStyle(obj, key))) / 10;

                if (key == "opacity") {
                    step = (json[key] * 100 - getStyle(obj, "opacity") * 100) / 10;  // 0--10
                }
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                if (key == "z-Index") {
                    obj.style.zIndex = json[key];

                } else if (key == "opacity") {
                    // 没有带单位操作
                    //新的位置    =    当前的位置       +          步长；
                    obj.style.opacity = Number(getStyle(obj, "opacity")) + (step / 100);

                    if (Number(getStyle(obj, "opacity")) != Number(json[key])) {
                        flag = false;
                    }
                } else {
                    //新的位置    =    当前的位置       +          步长；
                    obj.style[key] = parseInt(getStyle(obj, key)) + step + "px";

                    if (parseInt(getStyle(obj, key)) != parseInt(json[key])) {
                        flag = false;
                    }
                }
            }

            // console.log(111);
            //到达指定位置
            if (flag == true) {
                clearInterval(obj.timer);
                if (callback) {
                    callback(obj);
                }
            }


        },80)

    }
}

//匀速动画 包名称
UniformAnimate={
    animate:function(obj, target,fn) {

        // obj ===  obOX
        clearInterval(obj.timer)//就清除之前的定时,就保证一个盒子只有一个定时器

        var step = obj.offsetTop > target ? -10 : +10;// 判断 +10 -->,还是-10 <---

        obj.timer = setInterval(function () {
            //新的位置=当前的位置+步长
            obj.style.top = obj.offsetTop + step + "px";
            //如何去暂停定时器？
            if (Math.abs(obj.offsetTop - target) <= Math.abs(step)) {
                clearInterval(obj.timer);
                obj.style.top = target + "px";
                if(fn){
                    fn();
                }
            }
        }, 100)

    }
}


// px
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        //ie
        return obj.currentStyle[attr];
    }
    //goole
    return window.getComputedStyle(obj, null)[attr];
}