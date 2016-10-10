/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function () {

    var camera = document.getElementById("camera");
    var takephoto = document.getElementById("catch");
    var video = document.createElement("video");
    video.autoplay = "autoplay";
    var canvas = document.getElementById("canvas");
    var pen = canvas.getContext("2d");
    var show = document.getElementById("show").getContext("2d");
    var show_x = 200,
        show_y = 200,
        show_w=200,
        show_h=200,
        move_x,move_y;

     function drawPhoto() {
         pen.save();
         pen.scale(500/video.videoWidth,500/video.videoHeight);
         pen.drawImage(video, 0, 0);
         pen.restore();
         id=requestAnimationFrame(drawPhoto);
     }


    //打开摄像头
    function OpenCamera() {

        navigator.mediaDevices.getUserMedia({
            audio:false,video:true
        }).then(function (result) {
            video.srcObject = result;
            drawPhoto();

        }).catch(function (error) {
            console.log(error);
        })
    }


    //照片选择
    function choosePhoto(x,y) {
        pen.clearRect(0, 0, 500, 500);
        pen.beginPath();
        pen.save();
        pen.scale(500/video.videoWidth,500/video.videoHeight);
        pen.drawImage(video, 0, 0);
        pen.restore();
        pen.fillStyle = "rgba(1,1,1,.5)";
        pen.fillRect(0, 0, 500, 500);
        pen.save();
        pen.rect(x,y,show_w,show_h);
        pen.clip();
        pen.scale(500/video.videoWidth,500/video.videoHeight);
        pen.drawImage(video, 0, 0);
        pen.restore();
        console.log(x, y);
    }

    //选择框时时显示
    function showPhoto(x,y) {
        show.beginPath();
        show.clearRect(0, 0, 300, 300);
        show.save();
        show.drawImage(canvas,x,y,show_w,show_h,0,0,300,300) ;
        show.restore();
    }
    //截取照片
    function takePhoto() {
        move_x=show_x;
        move_y=show_y;
        cancelAnimationFrame(id);
        video.pause();
        choosePhoto(show_x,show_y);
        showPhoto(move_x,move_y);
    };


    canvas.addEventListener("mousedown",function (e) {
        if(e.offsetX>show_x&&e.offsetX<show_x+show_w&&e.offsetX>show_y&&e.offsetY<show_y+show_h){
            var x= e.offsetX - move_x,
                y= e.offsetY - move_y;
            canvas.onmousemove = function (e) {
                move_x = e.offsetX-x;
                move_y = e.offsetY-y;
                choosePhoto(move_x,move_y);
                showPhoto(move_x,move_y);
                canvas.onmouseup=function () {
                    canvas.onmousemove = "";
                }
            };
        }




    })

    OpenCamera();

    camera.addEventListener("click", OpenCamera);
    takephoto.addEventListener("click", takePhoto);

    // OpenCamera();



})();