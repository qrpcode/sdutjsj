//本代码在测试网站使用正式版请屏蔽！
var TopTipEffect = function(id, holderId, expand, step, speed){
    this.obj = document.getElementById(id);
    this.holder = document.getElementById(holderId);
    this.step = step;
    this.speed = speed;
    this.expand = expand;
    this.maxH = this.obj.offsetHeight;
    this.moveT = null;
    this.moving = false;
    this.tempH = expand ? 0 : this.maxH;
}
TopTipEffect.prototype = {
    play : function(){
        if(this.moving) return;
        if(this.holder.offsetHeight > this.maxH) return;
        var _this = this;
        this.moveT = setInterval(function(){_this.move()}, _this.speed);
    },
    move : function(){
        this.moving = true;
        if(this.expand){
            this.tempH += this.step;
            if(this.tempH > this.maxH){
                if((this.tempH - this.maxH) >= this.step){
                    this.expand = false;
                    this.moving = false;
                    clearInterval(this.moveT);
                    return;
                }else{
                    this.tempH = this.maxH;
                }
            }
        }else{
            this.tempH -= this.step;
            if(this.tempH < 0){
                if(-this.tempH >= this.step){
                    this.expand = true;
                    this.moving = false;
                    clearInterval(this.moveT);
                    return;
                }else{
                    this.tempH = 0;
                }
            }
        }
        this.holder.style.height = this.tempH + "px";
        this.holder.scrollTop = this.maxH - this.tempH;
    }
}
var mytip = new TopTipEffect("TopTip", "TopTipHolder", true, 1, 10);
mytip.play();
//右上角关闭按钮点击
document.getElementById("TopTipClose").onclick = function(){
    mytip.play();
}