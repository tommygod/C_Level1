/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var mycanvas = document.getElementById("picblock"),
        bbb = mycanvas.getContext("2d")
        , storage = localStorage
        , clean = document.getElementById("clean");
    //
    // bbb.beginPath();
    // bbb.moveTo(250, 50);

    // for(var i = 0 ;i < 6; i+=2) {
    //     var xx = 200*Math.cos(i*72*Math.PI/180-Math.PI/2)+250;
    //     var yy = 200*Math.sin(i*72*Math.PI/180-Math.PI/2)+250;
    //     bbb.lineTo(xx, yy);
    // }



    // bbb.strokeStyle = "#FF7F00";
    // bbb.stroke();
    // bbb.fillStyle = "#EE6A50";
    // bbb.fill();


    // 保存与恢复
    // bbb.save();
    // bbb.clearRect(0, 0, 500, 500); //清楚矩形区域
    // bbb.restore();



    // bbb.font = "100px 宋体";
    // bbb.strokeText("哔哔", 200, 200);
    // bbb.fillText("IIIIIIIIIIIII", 200, 200);
//   线性渐变
//     var changeColor = bbb.createLinearGradient(500, 0, 0, 500);
//     changeColor.addColorStop(0,"black");
//     changeColor.addColorStop("0.3","magenta");
//     changeColor.addColorStop("0.5","blue");
//     changeColor.addColorStop("0.6","green");
//     changeColor.addColorStop("0.8","yellow");
//     changeColor.addColorStop(1,"red");
//     bbb.fillStyle = changeColor;
//     bbb.fillRect(0, 0, 500, 500);
//     bbb.fillText("♦♦♦♦♦♦♦♦♦♦", 200,200);


    // bbb.lineCap = "round";
    bbb.lineWidth = 5;
    bbb.strokeStyle = "black";
    var color = document.getElementById("colorbox");
    color.onclick = function move() {
        change();
    };
    function change() {
        var change = /\d+,\d+,\d+/g.exec(changecolor());
        // console.log(change[0]);
        bbb.strokeStyle = "rgb("+change[0]+")";

    };
    function changecolor () {
        var cc,
            color = "";
        for(var i =0;i<3;i++){
            cc = Math.floor(Math.random()*255);
            color += cc+",";
        }
        return color;
    };
    // console.log(changecolor());



    mycanvas.onmousedown = function () {

        bbb.beginPath();
        mycanvas.onmousemove = function (ev) {
            var e =ev || event;
            bbb.lineTo(e.pageX,e.pageY);
            bbb.stroke();
        };
    };
    mycanvas.onmouseup = function () {
        mycanvas.onmousemove = "";
        // var data= bbb.getImageData(0,0,800,800);
        var path = mycanvas.toDataURL("image/png");
        storage.setItem("canvas", path);
        // console.log(storage.getItem("canvas"));
        console.log(storage.getItem("canvas"));
    } ;

    window.onload=function () {
        var url =storage.getItem("canvas");
        var img = document.createElement("img");
        img.src = url;
        bbb.drawImage(img, 0, 0);
    }();


    clean.addEventListener("click", function () {
        storage.clear();
        bbb.clearRect(0, 0, 800, 800);
    });



})();