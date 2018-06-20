function createXHR(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest()
    }
    return new ActiveXObject("Msxml2.XMLHTTP")
}

function Ajax(json){
    var xhr = createXHR();
    json.type == undefined ? json.type = "post" : json.type
    json.async == undefined ? json.async = true : json.async;

    if(json.type == "get"){
        xhr.open(json.type, json.url + "?" + para(json.data), json.async);
        xhr.send();
    } else {
        xhr.open(json.type, json.url, json.async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(para(json.data));
    }

    return new Promise(function(success, error){

        if(json.async == true){
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    result(success,error)
                }
            }
        } else {
            result(success,error)
        }
    })
    
    
    function result(success,error){
        if(xhr.status == 200){
            success(xhr.responseText);
        } else {
            error(xhr.status, xhr.statusText)
        }
    }
    
    

}


function para(obj){
    var str = ``;
    for(var key in obj){
        str += `${key}=${obj[key]}&&`;
    }
    return str;
}


function get(json){
    json.type = "get";
    Ajax(json)
}

function post(json){
    json.type = "post";
    Ajax(json)
}