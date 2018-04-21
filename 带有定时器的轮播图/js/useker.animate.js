function animate(ele, target){
    //1. 情况之前的定时器
    clearInterval(ele.timer);
    //2.定义步长
    var step = ele.offsetLeft > target ? -10 : 10;

    //3.开始定时

    ele.timer = setInterval(function(){
        //4. 匀速动画的公式
        // 新的位置=当前的位置+步长
        ele.style.left = ele.offsetLeft + step + "px";

        //5.停止动画
        if(Math.abs(ele.offsetLeft - target) < Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },0)

}