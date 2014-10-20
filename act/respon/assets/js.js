//功能函数
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
//popup
function popupFunc(hd,bd,fd){
    this.hd = hd;
    this.bd = bd;
    this.fd = fd;
    popup = document.getElementById("popup-box"),
        popupInside = popup.getElementsByClassName("popup-inside")[0],
        popupTitle = popup.getElementsByClassName("title")[0],
        popupBd = popup.getElementsByClassName("popup-bd")[0],
        popupFd = popup.getElementsByClassName("popup-fd")[0],
        popupClose = popup.getElementsByClassName("f-close")[0];
    this.public = function(){
        popupTitle.innerHTML = this.hd;
        popupBd.innerHTML = this.bd;
        if(this.fd == ""){
            if(!document.getElementById("popup-box").getElementsByClassName("popup-fd")[0]){
                return false;
            }else{
                popupFd.parentNode.removeChild(popupFd);
            };
        }else{
            popupFd.innerHTML = this.fd;
        };
    };
};
popupFunc.prototype = {
    transmit : function(){
        popup.style.display = "block";
        popupInside.style.top = (document.documentElement.clientHeight - popupInside.offsetHeight) / 2 + "px";
        popupClose.onclick = function(){
            popup.style.display = "none";
            popupTitle.innerHTML = "";
            popupBd.innerHTML = "";
            popupFd.innerHTML = "";
        };
    },
    share : function(desc,url,pic,carsn){
        this.public();
        popup.style.display = "block";
        popupInside.style.top = (document.documentElement.clientHeight - popupInside.offsetHeight) / 2 + "px";
        popupClose.onclick = function(){
            popup.style.display = "none";
            popupTitle.innerHTML = "";
            popupBd.innerHTML = "";
            popupFd.innerHTML = "";
        };
        var shareurl = popup.getElementsByClassName('share-ul')[0].getElementsByTagName('a');
        for( i = 0; i < shareurl.length; i++){
            shareurl[0].setAttribute('href','http://service.weibo.com/share/share.php?url=' + url + '&title=' + desc + '&pic=' + pic);
            shareurl[1].setAttribute('href','http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + desc + '&pic=' + pic + '&summary=' + desc);
            shareurl[2].setAttribute('href','http://share.v.t.qq.com/index.php?c=share&a=index&url=' + url + '&title=' + desc + '&pic=' + pic);
        };
    }
};



//应用函数
(function(){
    //底部栏关闭功能
    var bmbar = document.getElementById("bmbar");
    if(!bmbar) return false;
    var bmbarClose = bmbar.getElementsByClassName("f-close")[0];
    bmbarClose.onclick = function(){
        bmbar.parentNode.removeChild(bmbar);
    };
})();



//navScrollTo
$(function ($) {
    $(window).scroll(function () {
        if (($(window).scrollTop() > 623 && $(".side-box").width()<768) || ($(window).scrollTop() > 350 && $(".side-box").width()<768)) {
            $('#j-nav-position').addClass('selected');
            $("#j-nav-position").css("width",$(document).width());
        } else {
            $('#j-nav-position').removeClass('selected');
            $("#j-nav-position").css("width","auto");
        };
    });
    $('#j-nav-ul').onePageNav({
        filter: ':not(.external)',
        scrollThreshold: 0.25,
        scrollOffset: 0,
        end: function () {
            var $left = $('.current').position().left;
            $('#j-nav-ul .back').stop().animate({'left': $left}, "fast");
        },
        scrollChange: function () {
            var $left = $('.current').position().left;
            $('#j-nav-ul .back').stop().animate({'left': $left}, "fast");
        }
    });
});

$(function(){

    var x = $("#morecars-ul").find("li").width() + 10;
    var y = $("#morecars-ul").find("li").length;
    $("#morecars-ul").css("width",x*y)
    console.log(x +"_"+ y)
})

function response(){
    $(".act-li-end").css("height",$("#act-li-box").find(".act-li").height());

};

function side(){
    var slide = document.getElementById("j-slide-ver2");
    var x = document.getElementsByClassName("swiper-slide");
    slide.style.height = slide.offsetWidth * 0.42 + "px";//640*270
}

window.onload = window.onresize = response=side;


//活动规则查看
$(function(){
    $(".banner").click(function(){
        var hei = document.documentElement.clientHeight;
        console.log(hei)
        $("#j-popup-v2-static").css("height",hei);
        $("#j-popup-v2-static").show();
        x = ( document.documentElement.clientHeight - $("#j-popup-v2-inside-static").height() ) / 2;
        $("#j-popup-v2-inside-static").css("top",x);
        alert(document.body.clientHeight+"_"+document.documentElement.clientHeight)
    });
    $(".f-close").click(function(){
        $("#j-popup-v2-static").hide();
    });
});