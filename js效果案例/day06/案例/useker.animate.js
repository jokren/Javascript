function animate(obj, target){
    //1.清除之前的定时器
    clearInterval(obj.timer);
    //2.判断是 正方向还是反方向

    var steps = obj.offsetLeft > target ? -10 : 10;

    //3. 开启定时器
    // obj.timer 就保证 一个 DOM对象只有一个定时器
    obj.timer = setInterval(function(){
        //4. 公式  新的位置 =当前的位置+步长
        obj.style.left = obj.offsetLeft + steps + "px";
        //5.到了终点就下车
        if(Math.abs(obj.offsetLeft - target) <= Math.abs(steps)){
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }

    },0)


}