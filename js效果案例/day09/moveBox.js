// var oBox = document.getElementById('box');
//
// oBox.onmousedown = function(evt){
//     var e = evt || window.event;
//     var disX = e.offsetX;
//     var disY = e.offsetY;
//
//     //开始移动
//     document.onmousemove = function(evt){
//         var e = evt || window.event;
//
//         oBox.style.left = e.clientX - disX + "px";
//         oBox.style.top = e.clientY - disY + "px";
//     }
//     //鼠标松开
//     document.onmouseup = function(){
//         document.onmousemove = document.onmouseup = null;
//     }
//
//
// }

    Obox = {
        ele : null, // DOM 对象
        init : function(_id){
            this.ele = document.getElementById(_id)
            return this;
        },
        //移动开始
        moveStart : function(){
            var self = this;
            this.ele.onmousedown = function(evt){
                var e = evt || window.event;
                var disX = e.offsetX;
                var disY = e.offsetY;

                self.moveIng(disX, disY);
                self.moveEnd();
            }
        },
        //移动中
        moveIng : function(disX, disY){
            var self = this; // oBox
            document.onmousemove = function(evt){
                var e = evt || window.event;
                self.ele.style.left = e.clientX - disX + "px";
                self.ele.style.top = e.clientY - disY + "px";
            }
        },
        //移动结束
        moveEnd : function(){
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
        }
    };


    // <div id="box"></div>
    //  Obox.init("box").moveStart();