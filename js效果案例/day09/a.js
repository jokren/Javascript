register = ((function(win){
    var uname = "张三";
    this.age=18;


    return {
        getValue : function(){
            return uname;
        },
        setValue : function(n){
            uname = n;
        }
    }

})(window))