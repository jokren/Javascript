function getStyle(ele, attr){
    if(ele.currentStyle){
        return ele.currentStyle[attr];
    }
    //一会回头再看看 null应该如何使用?
    return window.getComputedStyle(ele, null)[attr]
}


/**
 * @method 这是一个祖传动画方法
 * @param {Element} 是一个DOM对象
 * @param {Object} json
 * @param {Function} callback
 */
function animate(obj, json, callback){
    //1.情况定时器
    clearInterval(obj.timer);

    //2.创建定时器
    obj.timer = setInterval(function(){
        // 新的位置=当前的位置+步长
        var flag = true;// 默认认为所有的 值 都完成了动画

        for(var key in json){
            var target = 0;//目标位置
            var current = 0;//当前位置

            if(key.toLowerCase() == "opacity"){
                target = Math.round(json[key] * 100);
                current = Math.round(getStyle(obj, key) * 100)
            } else if(key != "zIndex"){
                // height,width,left top
                target = parseInt(json[key]);
                current = parseInt(getStyle(obj, key));
            }
            //步长

            if(key != "zIndex"){
                //说明 不参与  zIndex 变化
                var step = (target - current) / 10;

                step = step > 0 ? Math.ceil(step) : Math.floor(step);
            }

            // 新的位置=当前的位置+步长

            if(key.toLowerCase() == "opacity"){
                obj.style.opacity = (current + step) / 100;
            } else if(key != "zIndex"){
                obj.style[key] = current + step + "px";// height,width,left top
            }

            if(key == "zIndex"){
                // 如果key== zIndex 直接给 对象赋值
                obj.style.zIndex = Number(json[key]);
            }


            //关注哪些属性的动画还没完成
            if(current != target){
                flag = false;
            }


        }

        //如果for里面都没有任何属性需要改变 flag的状态,说明动画都完成了
        if(flag){

            clearInterval(obj.timer);
            //动画完成后,通知或者做其他操作
            //此处说明 callback就是一个函数
            if(typeof(callback) == "function"){
                callback(obj);//执行callback函数

            }
        }

        console.log(111);

    }, 30)


}
