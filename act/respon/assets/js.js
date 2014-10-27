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
            console.log(left)
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
        this.public();
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
    if(!document.getElementById("j-nav-ul")) return false;
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
    //内页用统计元素宽度
    var x = $("#morecars-ul").find("li").width() + 10;
    var y = $("#morecars-ul").find("li").length;
    $("#morecars-ul").css("width",x*y);
//    alert($(".act-wrap").height());
    $(".bg-zzxctm").click(function(){
        alert(document.body.clientWidth + "-" + document.documentElement.clientHeight)
    })
})

function response(){
    //首页空白元素对齐li高度
    $(".act-li-end").css("height",$("#act-li-box").find(".act-li").height());
    //列表页用slide
    (function(){
        if(!document.getElementById("j-slide-ver2")) return false;
        if(document.body.clientWidth < 767){
            var slide = document.getElementById("j-slide-ver2");
            var x = document.getElementsByClassName("swiper-slide");
            slide.style.height = slide.offsetWidth * 0.42 + "px";//640*270
        };
    })();
};

window.onload = window.onresize = response;

//活动规则查看
$(function(){
    $(".banner").click(function(){
        var hei = document.documentElement.clientHeight;
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

//选颜色弹窗
function selectColorPopup(){
    $("#popup-color").css("height",$(document).height());
    $("#popup-color").show();
    window.scrollTo(0,0);
    $(".popup-tpbm-inside").click(function(e){
        e.stopPropagation();
    });
    $("#popup-color").find(".f-close").click(function(){
        $('#popup-color').hide();
    });
    $("#popup-color").click(function(){
        $('#popup-color').hide();
    })
    $("#nextStep").click(function(){
        $('#popup-color').hide();
        tpbm();
    })
}
$(document).ready(function(){
    var selectColorItem=$("#color-swatch").find("li");
    var colorItem=$("#color-swatch-outside").find("li");
    var colorList=$("#color-swatch-inside").find("ul");
    var colorListItem=$("#color-swatch-inside").find("li");
    selectColorItem.each(function(){
        var selectColorVal=$(this).attr("data-hex");
        $(this).css("background",selectColorVal);
    });
    colorItem.each(function(){
        $(this).click(function(){
            var outsideclick=colorclick(colorItem,'select-color');
            var insideclick=colorclick(colorListItem,'select-color');
            colorList.hide();
            colorList.eq($(this).index()).fadeIn(500);
        })
        $("#color-swatch-outside").find("li:first-child").click();
        //$("#color-swatch-inside").children("ul").find("li:first-child").click();

    });
    function colorclick(obj,className){
        obj.bind("click",function(){
        if(obj.hasClass(className)){
            obj.removeClass(className);
            $(this).addClass(className);
            $(this).parent().parent().find(".color-val").text($(this).attr("data-color"));
        }else{
            $(this).addClass(className);
            $(this).parent().parent().find(".color-val").text($(this).attr("data-color"));
        }
    });
    }
});
//登入
function tpbm(){
    $("#popup-tpbm").css("height",$(document).height());
    $("#popup-tpbm").show();
    window.scrollTo(0,0);
    $(".popup-tpbm-inside").click(function(e){
        e.stopPropagation();
    });
    $("#popup-tpbm").find(".f-close").click(function(){
        $('#popup-tpbm').hide();
    });
    $("#popup-tpbm").click(function(){
        $('#popup-tpbm').hide();
    })
}

//排序
$(function(){
    var tmp = 0;
    $(".act-ul2-sel").bind("click",function(){
        if(tmp == 0){
            $(this).addClass("act-ul2-sel-open");
            $(".ul > li").each(function(i){
                $(this).bind("click",function(e){
                    var val = $(this).html();
                    $(this).parents(".act-ul2-sel").find("span").html(val);
                    $(".ul > li").eq(i).siblings().removeClass("cur").end().addClass("cur");
                    $(this).parent().parent().removeClass("act-ul2-sel-open");
                    e.stopPropagation();
                    tmp = 0;
                });
            });
            tmp = 1;
        }else{
            $(this).removeClass("act-ul2-sel-open");
            tmp = 0;
        };
    });
});
