/**
 * Created by Xnew on 2016/8/18.
 */


////leader=leader+step；
//// leader=leader+(target-leader)/10;
//
////elem 要操作的对象。
////josn 存放要操作的属性与值
////fn 回调函数，当动画执行完了后，在去执行函数
//function animate(elem, json, fn){
//    clearInterval(elem.timer);//清空定时器
//    elem.timer = setInterval(function(){
//        var flag=true
//        for(var key in json){
//            // leader=leader+(target-leader)/10;
//            var leader = 0;
//            if(key=="opacity"){
//                leader=parseInt(getStyle(elem, key)*100)||100; // 如果不满足，就取默认值为100
//            }else{
//                leader=parseInt(getStyle(elem, key))||0;//当前的值
//            }
//            var step = (Math.round(json[key]) - leader) / 10;// 步子
//            step = step > 0 ? Math.ceil(step) : Math.floor(step);
//            if(key=="opacity"){
//                elem.style.opacity = (leader + step)/100;
//                elem.style.filter="alpha(opacity="+(leader + step)+")";
//            }else{
//                elem.style[key] = leader + step + 'px';
//            }
//            if(json[key]!=leader){
//                flag=false;
//            }
//        }
////如果所有的属性，到执行完了，就停止定时器
//      if(flag){
//          clearInterval(elem.timer);//清空定时器
//          if(fn){
//              fn();//回调函数
//          }
//      }
//    }, 30)
//}

//通过属性获取对应的值
function getStyle(elem, prop){
    if(elem.currentStyle){
        return elem.currentStyle[prop];
    } else {
        return window.getComputedStyle(elem, null)[prop];
    }
}


//leader=leader+step；
// leader=leader+(target-leader)/10;
// zIndex
//elem 要操作的对象。
//josn 存放要操作的属性与值
//fn 回调函数，当动画执行完了后，在去执行函数
function animate(elem, json, fn){
    clearInterval(elem.timer);//清空定时器
    elem.timer = setInterval(function(){
        var flag = true
        for(var key in json){
            // leader=leader+(target-leader)/10;
            var leader = 0;
            if(key == "opacity"){
                // 如果不满足，就取默认值为100
                //leader = parseInt(getStyle(elem, key) * 100) || 100;
                leader =  Math.round(getStyle(elem,key) * 100);
            }else {
                leader = parseInt(getStyle(elem, key));//当前的值
            }
            var step = (json[key] - leader) / 10;// 步子
            //console.log("leader==="+leader);
            console.log("step:"+step);
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            leader=leader + step;
            if(key == "opacity"){
                elem.style.opacity =leader / 100;
                elem.style.filter = "alpha(opacity=" +leader + ")";
            } else if(key == "zIndex"){
                elem.style.zIndex = json[key];// 设置z-index的值
            } else {
                elem.style[key] = leader + 'px';
            }
            if(json[key] != leader ){
                flag = false;
            }
        }
        //如果所有的属性，到执行完了，就停止定时器
        if(flag){
            clearInterval(elem.timer);//清空定时器
            if(fn){
                fn();//回调函数
            }
        }
    }, 30)
}