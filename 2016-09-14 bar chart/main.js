/**
 * Created by Administrator on 2016/9/14 0014.
 */
(function () {
    var block = document.getElementById("block");
    var pen = block.getContext("2d");
    var data = [60,90,150,130,170,190,125,175,155,165,155,145];
    pen.strokeStyle = "black";
    pen.strokeRect(100, 60, 490, 400);
    pen.translate(100, 60);

    // 定义横线函数
    function horizontal_line() {
        for(var i =200;i>=0;i-=20){
            pen.beginPath();
            pen.moveTo(0, 2*(200-i));
            pen.lineTo(490, 2*(200-i));
            pen.stroke();
            pen.strokeText(i, -30, 2*(200 - i));
        }
    }


    function mounth() {
        for(var i = 0;i<data.length;i++){
            var text = (i + 1) + "月";
            pen.fillText(text, ((i + 1) * 10 + (i * 30)), 420);
        }

    };
    // 定义竖线函数
    function vertical_line(i,top) {
        pen.strokeStyle = "#555";
        pen.lineWidth = 30;
        pen.beginPath();
        pen.moveTo(((25 * (i + 1)) + (15 * i)), 400);
        pen.lineTo(((25 * (i + 1)) + (15 * i)), top);
        pen.stroke();
    }
    var top=0,                 //到顶信号
        frames = 100,    //帧
        per={};

    setInterval(function () {
       for(var i = 0;i<data.length;i++) {
           per.move[i] += data[i] / 50;
           vertical_line(i,move);
       }
    },1000/frames);


    function init() {
        horizontal_line();
        mounth();
        vertical_line();
    }


    init();


})();