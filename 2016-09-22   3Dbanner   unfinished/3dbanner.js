/**
 * Created by Administrator on 2016/9/21 0021.
 */
(function () {
    var box = document.getElementsByClassName("box")[0];
    var btn = document.getElementsByClassName("btn");
    var btn_left = document.getElementsByClassName("btn_left")[0];
    var btn_right = document.getElementsByClassName("btn_right")[0];

    var apic = [
        "url(1.jpg) no-repeat ",
        "url(2.jpg) no-repeat ",
        "url(3.jpg) no-repeat ",
        "url(4.jpg) no-repeat ",
        "url(5.jpg) no-repeat ",];
    var width = 600,
        pieces=20,
        nexttime = 60,              //单张切换间隔时间
        gap,                      //1，单张切换间隔计时器   2，图片切换间隔
        change,
        nowshow=0,                 //目前显示图片
        movenow = false,
        changetime = 1;        //单张切换时间




    //动态创造div
    function creat_pic(type,number) {
        var wid = width/pieces;
        var pics = [];
        for(var i =0;i< pieces;i++){
            var pic = document.createElement("div");
            var img = document.createElement("div");
            pic.style.left =i*wid + "px";
            pic.style.width =wid + "px";
            pic.style.transition = "all " + changetime +"s";
            img.style.width =wid + "px";
            img.style.height = "400px";
            img.style.background = apic[number] + (-i*wid) +"px" + " 0px" ;
            pic.className = type;
            pic.appendChild(img);
            box.appendChild(pic);
            pics[i] =pic;
        }
        return pics;
    }


    function move(type) {
        var i ,
            uppic = nowshow-1,
            downpic =nowshow +1;
        if(uppic<0){uppic=4;}
        if(downpic>4){downpic=0;}
        movenow =true;
        gap && clearInterval(gap);
        while (box.hasChildNodes()) {
            box.removeChild(box.firstChild);
        }
        if(type == "up"){
            i =pieces-1;
            var center = creat_pic("center",nowshow);
            var bottom = creat_pic("bottom",uppic);
            nowshow--;
            if(nowshow<0){nowshow=4;}
            gap = setInterval(function () {
                center[i].style.transform = "rotateX(90deg)";
                bottom[i].style.transform = "rotateX(0deg)";
                i--;
                if(i < 0){
                    movenow = false;
                    clearInterval(gap);
                }
            },nexttime)
        }else if(type == "down"){
            i = 0;
            var center = creat_pic("center",nowshow);
            var top = creat_pic("top",downpic);
            gap = setInterval(function () {
                center[i].style.transform = "rotateX(-90deg)";
                top[i].style.transform = "rotateX(0deg)";
                i++;
                if(i>= pieces){
                    nowshow++;
                    if(nowshow>4){nowshow=0};
                    movenow = false;
                    clearInterval(gap);

                }
            },nexttime)
        }
    }

    btn_left.onclick = function () {
        movenow || (function () {
            move("up");
            start();
        })();

    };
    btn_right.onclick = function () {
        movenow || (function () {
            move("down");
            start();
        })();
    };

    function start() {
        change && clearInterval(change);
        change = setInterval(function () {
            movenow || (function () {
                move( "down");
            })() ;

        },4000);
    }


    start();
    creat_pic("center",nowshow);
})();