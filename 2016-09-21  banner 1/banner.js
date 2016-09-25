/**
 * Created by Administrator on 2016/9/21 0021.
 */
(function () {
    // var pic = document.getElementsByClassName("pic");
    var box = document.getElementsByClassName("box")[0];
    var btn = document.getElementsByClassName("btn");
    var btn_left = document.getElementsByClassName("btn_left")[0];
    var btn_right = document.getElementsByClassName("btn_right")[0];
    // console.log(box);
    var wid = -600,
        speed=3000,
        nowshow=-1,
        movenow=false;

    function move(num) {
        var index = num;
        var position = wid * index ;
        box.style.left = position + "px";
        var index_before = index -1;
        var index_after = index + 1;
        if(index_before < 0){index_before =4;} ;
        if(index_after > 4){index_after =0;};
        btn[index_before].className = "btn";
        btn[index_after].className = "btn";
        btn[index].className = "btn btn_on";
        movenow = true;
        setTimeout(function () {
            movenow = false;
        },1000)

    }

    for(var i =0;i<btn.length;i++) {
        btn[i].index= i;
        btn[i].onmouseover = function () {
            time_control();
            nowshow = this.index;
            move(nowshow);
        };
    }
    btn_left.onclick = function () {
        time_control();
        if(!movenow){
            --nowshow;
            if(nowshow <= -1){
                nowshow = 4;
            }
            move(nowshow);
        }


    };
    btn_right.onclick = function () {
        time_control();
        if(!movenow) {
            ++nowshow;
            if (nowshow == 5) {
                nowshow = 0;
            }
            move(nowshow);
        }
    };

    var id;
    function time_control() {
        id && clearInterval(id);
        id=setInterval(function () {
                nowshow++;
                nowshow %= 5;
                move(nowshow);

        },speed);
    };
    time_control();




    
})();
