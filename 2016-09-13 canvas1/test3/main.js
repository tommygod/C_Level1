/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {


    var block = document.getElementById("block");
    var pen = block.getContext("2d");
    var c=0,
        b,
        colors;
    var id = setInterval(
        function () {

            if(c<=0.51){
                b=0;
                draw(b,c,"#98F5FF");
            }else if(c>0.5&&c<=1.01){
                b=1/2;
                draw(b,c,"#C0FF3E");
            }else if(c>1&&c<=2){
                b =1;
                draw(b,c,"#EEAD0E");
            }else if(c>2){
                draw(b,2,"#EEAD0E");
                clearInterval(id);
            }
            c +=0.01;

            console.log(c);


        },100
    );
    pen.beginPath();

    function draw(begin,close,color) {
        // var changeColor = pen.createRadialGradient(300, 300, 1, 300, 300, 200);
        // changeColor.addColorStop(0,"black");
        // changeColor.addColorStop("0.3","magenta");
        // changeColor.addColorStop("0.5","blue");
        // changeColor.addColorStop("0.6","green");
        // changeColor.addColorStop("0.8","yellow");
        // changeColor.addColorStop(1,"red");
        // pen.fillStyle = changeColor;
        pen.strokeStyle = color;
        pen.fillStyle = color;
        pen.beginPath();
        // pen.moveTo(300, 300);
        // pen.lineTo(300+200*Math.cos(begin*Math.PI),300+200*Math.sin(begin*Math.PI));
        pen.arc(300,300,200,begin*Math.PI,close*Math.PI);
        pen.lineTo(300,300);
        // pen.stroke();
        pen.fill();

    }

    // console.log(Math.PI - 1 / 2 * Math.PI);
    
})();