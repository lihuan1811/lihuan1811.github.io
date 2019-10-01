window.onload = function () {

    var time = document.getElementById("time");
    var ce = document.getElementById("ce");
    var body = document.getElementsByTagName("body")[0];
    time.addEventListener("click", function (e) {
        e.cancelBubble = true;
        ce.style.transform = "translateX(0px)";
        body.style.background = "rgba(0,0,0,.8)";
    }, false)
    document.addEventListener("click", function (e) {
        e.cancelBubble = true;
        ce.style.transform = "translateX(-325px)"
        body.style.background = "";
    }, false)


    $("#youxi").click(function(ev){
        ev.cancelBubble = true; //阻止事件冒泡
         $("#yot").css("transform","translateY(0px)") 
          $("#yot").css("opacity","1") 
    })
    
    $("#yot").click(function(){
        $("#yot").css("transform","translateY(-190px)") 
        $("#yot").css("opacity","0") 
    })
    
    
    
}






