$ = (function(){

    var getData = function(json){
        //1.随机生成一个 回调的函数名称
        var fnName = "jq_" + parseInt(Math.random() * 10000);
        window[fnName] = json.success;

        var urlSrc = json.url + "?" + parp(json.data) + "";
        //默认名字就是 callback
        json.callbackName == undefined ? json.callbackName = "callback" : json.callbackName;

        urlSrc += json.callbackName + "=" + fnName;

        var oSrc = document.createElement("script");
        oSrc.src = urlSrc;

        document.body.appendChild(oSrc);

        oSrc.onload = () =>{
            oSrc.remove();
            delete(window[fnName]);
        }

        function parp(obj){
            var str = "";
            for(var key in obj){
                str += key + "=" + obj[key] + "&&";
            }
            return str;
        }
    }


    return {
        getJSON : getData
    }


})()