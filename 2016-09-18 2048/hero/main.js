/**
 * Created by Administrator on 2016/9/18 0018.
 */
(function () {

    var block = document.getElementById("block");
    var pen = block.getContext("2d");

    pen.strokeStyle = "red";
    pen.width = 2;

    var line = 0,
        score =0;
    window.onload= function () {
        pen.fillStyle = "black";
        pen.fillRect(0, 400, 100, 200);
        pen.fillStyle = "red";
        pen.fillRect(80, 380, 20, 20);
        create_block();
        pen.translate(100, 400);
        // movebox();
    }

    function create_block() {
        pen.fillStyle = "black";
        var width = Math.floor(Math.random() * 160+20);
        var position =Math.floor(Math.random() * 250+50);
        pen.fillRect(100+position, 400, width, 200);
    }

    document.onkeydown = function (ev) {
        var e = event || ev;
            if (e.keyCode == 32){
                line += 10;
                pen.moveTo(0, 0);
                pen.lineTo(0,-line);
                pen.stroke();
            }

        document.onkeyup = function (ev) {
            pen.save();
            var e = event || ev,
                angel = 0,
                turing = false;
            if(e.keyCode == 32){
                var turn = setInterval(function () {
                    angel += 0.01;
                    pen.clearRect(-2,-400,500,400);
                    pen.save();
                    pen.rotate(angel * Math.PI);
                    pen.beginPath();
                    pen.moveTo(0, 0);
                    pen.lineTo(0,-line);
                    pen.stroke();
                    pen.restore();
                    if(angel >=0.5){
                        pen.translate(-100, -400);
                        clearInterval(turn);
                        // var move = setInterval(function () {
                        //
                        //
                        //     pen.clearRect()
                        //
                        //
                        //
                        //
                        // },100);
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    }
                },5);



            }
        };
    };





})();