/**
 * Created by Administrator on 2016/8/23 0023.
 */
(function () {
    function Creatball(color,r) {
        this.ball = document.createElement("div");
        this.ball.className = "ball";
        this.ball.style.backgroundColor=color;
        this.ball.style.width =  r * 2+ "px";
        this.ball.style.height = r * 2 + "px";
        this.ball.style.borderRadius = "100%";
        this.ball.style.boxShadow = "0 0 15px 20px " + color;
        this.x = xx();
        this.y = yy();
        var x=x;
        var y=y;
        this.xmove = xzhou();
        this.ymove = yzhou();
        this.beginleft =this.xmove;
        this.begintop=this.ymove;
        this.ball.style.left =this.x  + "px";
        this.ball.style.top = this.y + "px";

    }

    Creatball.prototype.move=function () {
        setInterval(function () {
            // ball.getball().style.position = "relative";
            this.ball.style.left = this.x + this.xmove+"px";
            this.ball.style.top = this.y + this.ymove+ "px";
            this.xmove= this.xmove + this.beginleft;
            this.ymove = this.ymove +this.begintop;


        }.bind(this), 50);
    }

    Creatball.prototype.getball = function () {
        return this.ball;
    }


    var xx=function () {
        this.x = Math.round(Math.random()*1000);
        return this.x;
    }
    var yy = function () {
        this.y = Math.round(Math.random()*600);
        return this.y;
    };
    var colors = function () {
        this.colors = [
            	"#FF8247",
            	"#FF3E96",
            	"#DA70D6",
            	"#BABABA",
            	"#A2CD5A",
                "#FF8247",
            	"#DA70D6",
            	"#FFC125"
        ]
        var i = Math.round(Math.random() * 7);

        return this.colors[i];
    }
    var xzhou=function () {
        this.xzhou=Math.round(Math.random() * 20)-10;
        return this.xzhou;
    }
    var yzhou=function () {
        this.yzhou=Math.round(Math.random() * 20)-10;
        return this.yzhou;
    }



    function init(number) {
        for(var i=0;i<number;i++) {
            var ball = new Creatball(colors(),10);
            document.body.appendChild(ball.getball());
            ball.move();
        }
    };
    
   
    init(30);

    // console.log(x,y,left,top);



})();