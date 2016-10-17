/**
 * Created by Administrator on 2016/8/9 0009.
 */
(function () {

    var eye = document.getElementsByClassName("eye");
    var eyeb = document.getElementsByClassName("eyeb");
    console.log(eye);
    function geteyecenterX(center) {
        var ex = center.offsetWidth / 2 + center.offsetLeft;
        var dady = center.offsetParent;
        while(dady!=null){
            ex += dady.offsetLeft;
            dady = dady.offsetParent;
        }
        return ex;
    }
    
    function geteyecenterY(center) {
        var ey = center.offsetHeight / 2 + center.offsetTop;
        var dady = center.offsetParent;
        while(dady!=null){
            ey += dady.offsetTop;
            dady = dady.offsetParent;
        }
        return ey;
    }

    function gululu() {
		var event = event || window.event;
        function angle(center) {
            var x = -event.pageX + geteyecenterX(center);
            var y = -event.pageY + geteyecenterY(center);
            return -Math.atan2(x,y)*180/Math.PI;

        }
        var eyeblength = eyeb.length;
        
        for(var i = 0;i < eyeblength;i++){
        	 eyeb[i].style.top = "10px";
        	 
        }
        
        for(var j = 0;j < eyeblength;j++ ){
        	var rotate = angle(eye[j]);
        	console.log(rotate);
        	eye[j].style.transform = "rotate("+rotate+"deg)"
        }
    }

	window.onmousemove = gululu;












})();