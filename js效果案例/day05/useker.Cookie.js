/**
 * @author 帅哥罗
 * @time 2018.1.17
 * @method 设置cookie操作
 * @param {String} key cookie的键
 * @param {String} value
 * @param {Number} day
 * @param {String} path
 * @param {String} domain
 * @param {Boolean}secure
 * @returns {string} 返回cookie格式
 */
function setCookie(key, value, day, path, domain, secure){
    // name=value;[expires=date];[path=路径];[domain=域名];[secure]
    var strCookie = "";
    if(key){
        strCookie += encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }
    if(typeof(day) == "number"){
        var date = new Date();
        date.setDate(date.getDate() + day);
        strCookie += ";expires=" + date;
    }
    if(path){
        strCookie += ";path=" + path;
    }
    if(domain){
        strCookie += ";domain=" + domain;
    }
    if(secure){
        strCookie += ";secure";
    }
    return document.cookie = strCookie;
}


//获取cookise

/**
 *@author sss
 * @param {String} key
 * @returns {String}
 */
function getCookie(key){
    var strCookie = document.cookie // key1=aaaa; key2=bbbb
    var arr = strCookie.split(";");// [key1=aaaa, key2=bbbb];
    for(var i = 0; i < arr.length; i++){
        // arr[i]  key1=aaaa   key2=bbbb
        var tempArr = arr[i].split("="); // [key1,aaa]  [ key2,bbb]
        // %E9%94%AE1 =="键1"
        if(decodeURIComponent(tempArr[0].trim()) == key){
            return decodeURIComponent(tempArr[1]);
        }
    }
    return "";
}

//删除的封装

/**
 * @param {String} key
 */
function removeCookie(key){
    setCookie(key, "", -1);
}