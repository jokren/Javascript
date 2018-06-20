function myScroll(){
    if(window.pageXOffset != null){
        return {
            left : window.pageXOffset, //滚动条的位置的值X
            top : window.pageYOffset  //滚动条的位置的值Y
        }
    } else if(document.compatMode == "CSS1compat"){
        return {
            left : document.documentElement.scrollLeft,
            top : document.documentElement.scrollTop
        }
    }
    return {
        left : document.body.scrollLeft,
        top : document.body.scrollTop
    }
}

function addEvent(obj, type, fn, flag){
    // google
    if(obj.addEventListener){
        obj.addEventListener(type, fn, flag)
    } else {
        //ie 6 7 8
        window.attachEvent("on" + type, fn)
    }
}


function animate(obj, json, callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //每隔100毫秒就去询问一下 是否可以情况定时器了
        var flag = true;//大家都准时,默认是true
        // 新的位置=当前的位置+步长;
        for(var key in json){
            var target = 0;
            var current = 0;
            if(key == "opacity"){
                //目标值放大100
                target = json[key] * 100; // 30;
                //当前的值 也放大100倍
                current = Math.round(getStyle(obj, key) * 100);// 1*100=100; 0.952, 0.946 0.938
            } else {
                target = parseInt(json[key]);
                current = parseInt(getStyle(obj, key));
            }
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if(key == "opacity"){
                obj.style.opacity = (current + step) / 100; //缩小100倍
                obj.style.filter = "Alpha(Opacity=" + (current + step) + ")";
            } else {
                obj.style[key] = current + step + "px";
            }
            if(current != target){
                flag = false;
            }
        }
        //如果所有的属性的值,都没有走完,那么它就是会 false,也就不能关闭定时器
        if(flag == true){
            clearInterval(obj.timer);
            //这个地方才是 动画走完了之后的最后一个函数
            if(typeof(callback) == "function"){
                callback(obj);
            }
        }
    }, 30);
}

function getStyle(ele, attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}
