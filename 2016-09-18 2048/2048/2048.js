/**
 * Created by Administrator on 2016/9/18 0018.
 */
(function () {
    var game = {
        data:null,
        rn:4,
        cn:4,
        state:0,
        RUNNNING:1,
        GAMEOVER:0,
        score:0,


        start:function(){
            this.data = [];
            this.state=this.RUNNNING;
            for(var r=0;r<this.cn;r++){
                this.data[r] = [];
                for(var c = 0;c<this.rn;c++){
                    this.data[r][c]=0;
                }
            }
            this.score=0;
            this.randamNum();
            this.randamNum();
            this.updataView();
        },
        randamNum:function(){
            if(!this.isFull()){
                while(true){
                    var r = parseInt(Math.random()*this.rn);
                    var c = parseInt(Math.random()*this.cn);
                    if(this.data[r][c]==0){
                        this.data[r][c]=Math.random()<0.4?2:4;
                        break;
                    }
                }
            }
        },
        isFull:function(){
            for(var r=0;r<this.rn;r++){
                for(var c=0;c<this.cn;c++){
                    if(this.data[r][c]==0){
                        return false;
                    }
                }
            }
            return true;
        },
        updataView:function(){
            for(var r=0;r<this.rn;r++){
                for(var c=0;c<this.cn;c++){
                    var num = document.getElementById("c"+r+c);
                    if(this.data[r][c]!=0){
                        num.innerHTML = this.data[r][c];
                        num.className = "cell n"+this.data[r][c];
                    }else{
                        num.className = "cell";
                        num.innerHTML = "";
                    }
                }
            }
            document.getElementById("score").innerHTML=this.score;
            if(this.state==this.GAMEOVER){
                document.getElementById("btns").style.display="block";
                document.getElementById("finalscore").innerHTML=this.score;
            }else if(this.state==this.RUNNING){
                document.getElementById("btns").style.display="none";
            }
        },

        // ---------------------------------------------------------------
        moveLeft:function(){
            var before = this.data.toString();
            // console.log(before);
            for(var r=0;r<this.data.length;r++){
                this.moveLeftInc(r);
            }
            var after=this.data.toString();
            if(before!=after){
                this.randamNum();
                this.isGameOver();
                this.updataView();
            }
        },
        
        moveLeftInc:function(r){
            for(var c=0;c<this.data[r].length-1;c++){
                var next=this.getRight(r,c);
                if(next==-1){
                    break;
                }else if(this.data[r][c]==0){
                    this.data[r][c]=this.data[r][next];
                    this.data[r][next]=0;
                    // c--;
                }else if(this.data[r][c]==this.data[r][next]){
                    this.data[r][c]*=2;
                    this.data[r][next]=0;
                    this.score+=this.data[r][c];
                }
            }
            this.updataView();
        },
        
        getRight:function(r,c){
            for(var next=c+1;next<this.data[r].length;next++){
                if(this.data[r][next]!=0){
                    return next;
                }
            }
            return -1;
        },
        // --------------------------------------------------------------------
        moveRight:function(){
            var before=this.data.toString();
            for(var r=0;r<this.data.length;r++){
                this.moveRightInr(r);
            }
            var after=this.data.toString();
            if(before!=after){
                this.randamNum();
                this.isGameOver();
                this.updataView(); 
            }
        },
        moveRightInr:function(r){
            for(var c=this.cn-1;c>0;c--){
                var next=this.getLeft(r,c);
                if(next==-1){break;}
                else{
                    if(this.data[r][c]==0){
                        this.data[r][c]=this.data[r][next];
                        this.data[r][next]=0;
                        // c++;
                    }else if(this.data[r][c]==this.data[r][next]){
                        this.data[r][c]*=2;
                        this.data[r][next]=0;
                        this.score+=this.data[r][c];
                    }
                }
            }
        },
        getLeft:function(r,c){
            for(var next=c-1;next>=0;next--){
                if(this.data[r][next]!=0){
                    return next;
                }
            }
            return -1;
        },
        // ----------------------------------------------------------------------
        moveUp:function(){
            var before=this.data.toString();
            for(var c=0;c<this.data.length;c++){
                this.moveUpInc(c);
            }
            var after=this.data.toString();
            if(before!=after){
                this.randamNum();
                this.isGameOver();
                this.updataView(); 
            }
        },
        moveUpInc:function(c){
            for(var r=0;r<this.data.length-1;r++){
                var next=this.getDown(r,c);
                if(next==-1){break;}
                else{
                    if(this.data[r][c]==0){
                        this.data[r][c]=this.data[next][c];
                        this.data[next][c]=0;
                        // r--;
                    }else if(this.data[r][c]==this.data[next][c]){
                        this.data[r][c]*=2;
                        this.data[next][c]=0;
                        this.score+=this.data[r][c];
                    }
                }
            }
        },
        getDown:function(r,c){
            for(var next=r+1;next<this.data.length;next++){
                if(this.data[next][c]!=0){
                    return next;
                }
            }
            return -1;
        },
        // -------------------------------------------------------------------------------
        moveDown:function(){
            var before=this.data.toString();
            for(var c=0;c<this.data.length;c++){
                this.moveDownInc(c);
            }
            var after=this.data.toString();
            if(before!=after){
                this.randamNum();
                this.isGameOver();
                this.updataView(); 
            }
        },
        moveDownInc:function(c){
            for(var r=this.data.length-1;r>0;r--){
                var next=this.getUp(r,c);
                if(next==-1){break;}
                else{
                    if(this.data[r][c]==0){
                        this.data[r][c]=this.data[next][c];
                        this.data[next][c]=0;
                        // r++;
                    }else if(this.data[r][c]==this.data[next][c]){
                        this.data[r][c]*=2;
                        this.data[next][c]=0;
                        this.score+=this.data[r][c];
                    }
                }
            }
        },
        getUp:function(r,c){
            for(var next=r-1;next>=0;next--){
                if(this.data[next][c]!=0){
                    return next;
                }
            }
            return -1;
        },
        // -----------------------------------------------------------------
        isGameOver:function(){
            if(!this.isFull()){
                return false;
            }else{
                for(var r=0;r<this.data.length;r++){
                    for(var c=0;c<this.data[r].length;c++){
                        if(c!=this.data[r].length-1&&this.data[r][c]==this.data[r][c+1]){
                            return false;
                        }else if(r!=this.data.length-1&&this.data[r][c]==this.data[r+1][c]){
                            return false;
                        }
                    }
                }
                this.state=this.GAMEOVER;
                return true;
            }
        },

    }

    window.onload = function(){
        game.start();
        var btns = document.getElementById("btns");
        console.log(btns);
        btns.onclick = function(){
            document.getElementById("btns").style.display = "none";
            game.start();
        }
        document.onkeydown = function(){
            if(game.state==game.RUNNNING){
                var e = window.event||arguments[0];
                if(e.keyCode==37){
                    game.moveLeft();
                }else if(e.keyCode==39){
                    game.moveRight();
                }else if(e.keyCode==38){
                    game.moveUp();				
                }else if(e.keyCode==40){
                    game.moveDown();
                }
            }
        }
    }



})();