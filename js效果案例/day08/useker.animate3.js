function getStyle(ele, attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}

function animate(obj, json, fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var key  in json){
            // 目标位置
            var target = parseInt(json[key]);
            //当前位置
            var current = parseInt(getStyle(obj, key));
            if(key == "opacity"){
                target = json[key] * 100;
                current = getStyle(obj, key) * 100;
            }
            //步长
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // 新的位置=当前位置+步长
            if(key == "opacity"){
                obj.style.opacity = (current + step) / 100

            } else if(key == "zIndex"){
                obj.style.zIndex = json[key]
            } else {
                obj.style[key] = current + step + "px";
            }
            if(current != target){
                flag = false;
            }
        }

        if(flag){
            clearInterval(obj.timer);
            //所有的属性都完成了!
            if(typeof(fn) == "function"){
                fn(obj);
            }
        }
    },30)
}