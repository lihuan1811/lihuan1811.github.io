window.onload = function () {
    function timecha() {
        var date = new this.Date();
        var now = date.getTime();
        console.log(now);
        var str = "2019/9/17 18:00:00";
        var endDate = new Date(str);
        var end = endDate.getTime();
        console.log(end);

        var nowday = end - now;
        var h, m, s;
        h = Math.floor(nowday / 1000 / 60 / 60 % 24);
        console.log(h);
        m = Math.floor(nowday / 1000 / 60 % 60);
        console.log(m);
        s = Math.floor(nowday / 1000 % 60);
        console.log(s);

        var shi = document.getElementById("shi");
        var fen = document.getElementById("fen");
        var miao = document.getElementById("miao");
        shi.innerHTML = h;
        fen.innerHTML = m;
        miao.innerHTML = s;
    }
    setInterval(timecha, 1000);





    // function Hot(){
    //     var k = 0;
    //     setInterval(() => {
    //         k++;
    //         $(".hot ul").css("top",k*-1+"rem");
    //     }, 1000);
    // }
    // Hot();














}