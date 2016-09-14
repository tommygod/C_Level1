/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var usa = document.getElementById("usa");
    var usax = usa.getContext("2d");
    usax.beginPath();
    usax.arc(250, 250, 250, 0, 2 * Math.PI);
    usax.fillStyle = "#CD2E3E";
    usax.fill();

    usax.beginPath();
    usax.arc(250,250,200,0, 2 * Math.PI);
    usax.fillStyle = "#fff";
    usax.fill();

    usax.beginPath();
    usax.arc(250, 250, 150, 0, 2 * Math.PI);
    usax.fillStyle = "#CD2E3E";
    usax.fill();

    usax.beginPath();
    usax.arc(250, 250, 100, 0, 2 * Math.PI);
    usax.fillStyle = "#02468D";
    usax.fill();

    usax.beginPath();
    for(var i =0;i<6;i++) {
        var x = 250 + 100 * Math.sin(144 * i * Math.PI / 180);
        var y = 250 - 100 * Math.cos(144 * i * Math.PI / 180);
        usax.lineTo(x, y);
        console.log(x, y);
    }

    usax.fillStyle = "#fff";
    usax.fill();
})();