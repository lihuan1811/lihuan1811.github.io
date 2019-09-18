$(document).ready(function () {
  $(".kao").owlCarousel({
    items: 1,    //一张图  默认转换自为3
    autoplay: true,  //自动轮播
    autoplayTimeout: 2000, //每隔1000毫秒轮播一次
    loop: true,  //循环
    autoplayHoverPause: true,  //鼠标移上停止轮播 移出启动
  });
});

$(function () {
  console.log($(".owl-prev"));
  $(".owl-prev").html("<");

  $(".owl-next").html(">");
})

var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
  $(".guanul").slideToggle({ "display": "block" });

},false)


