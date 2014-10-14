//scrollEffect 滚动函数
function scrollEffect(obj,category,minLength,intervalTime,animateSpeed) {
    this.Ul = obj;
    this.minLength = minLength; //最低显示数
    this.Timer = intervalTime;//计时器间隔时间
    var handId;//计时器id
    var self = this;
    this.Start = function () {
        if (self.Ul.children().length < this.maxLength) {
            self.Ul.append(self.Ul.children().clone());
        }
        handId = setInterval(self.Play, self.Timer);
    };
    this.Play = function () {
        var img = self.Ul.children().eq(0);
        if(category == "hor"){
            var left = img.width();
            img.animate({ "marginLeft": (-1 * left) + "px" }, animateSpeed, function () {
                $(this).css("margin-left", "auto").appendTo(self.Ul);
            });
        }else if(category == "ver"){
            var top = img.height();
            img.animate({ "marginTop": (-1 * top) + "px" }, animateSpeed, function () {
                $(this).css("margin-top", "auto").appendTo(self.Ul);
            });
        }
    };
};

function response(){
    $(".act-li-end").css("height",$("#act-li-box").find(".act-li").height())
};

window.onload = window.onresize = response;