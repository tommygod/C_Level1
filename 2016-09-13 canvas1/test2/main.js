/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var block = document.getElementById("block");
    var pen = block.getContext("2d");
    pen.beginPath();
    pen.arc(300,300,200,0,Math.PI*2);
    pen.fillStyle = "#ADFF2E";
    pen.fill();

    pen.beginPath();
    pen.arc(300,300,200,0,Math.PI);
    pen.fillStyle = "#FF0000";
    pen.fill();

    pen.beginPath();
    pen.arc(300,300,200,Math.PI/4,Math.PI*5/4);
    pen.fillStyle = "#FFFF00";
    pen.fill();
    
    pen.beginPath();
    pen.arc(300,300,200,3/4*Math.PI,7/4*Math.PI);
    pen.fillStyle = "#ADFF2E";
    pen.fill();



})();