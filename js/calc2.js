//功能函数
//冒泡排序
function bubbleSort(arr){
    var i=arr.length, j;
    var tempExchangVal;
    while(i>0){
        for(j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                tempExchangVal = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tempExchangVal;
            }
        }
        i--;
    }
    return arr;
};
//初始css相关
$(function(){
    //4等分元素屏幕宽度
    $(".calc-blk").css("width",$(document).width());
    $(".j-sh-switch").click(function(){
        $(this).next().toggle();
        if($(this).hasClass("j-sh-switch-cur")){
            $(this).removeClass("j-sh-switch-cur");
        }else{
            $(this).addClass("j-sh-switch-cur");
        };
    });
//    $(".cash").text("待定");
});
//四屏高度取最高值
function bigHei(){
    var arrHei = [];
    $(".calc-blk").each(function(){
        arrHei.push($(this).height())
    });
    bubbleSort(arrHei);
    //absolute块赋予高度
    $(".calc-blks").css("height",arrHei[3]);
};
bigHei();
//找到nav数组赋予点击功能
$("#j-calc-nav-ul").find("li").each(function(i){
    $(this).click(function(){
        if(i == 0){
            to1(i);
        }else if(i == 1){
            to2(i);
        }else if(i == 2){
            to3(i);
        }else if(i == 3){
            to4(i);
        };
        $("body,html").animate({scrollTop:0},500);
        calc_get_height($('.calc-blk').eq(i));
    });
});

//点击底部按钮祖列
$(".stage-btn").each(function(i){
   $(this).click(function(){
       $("body,html").animate({scrollTop:0},500);
       if(i == 0){
           setTimeout(function(){to2(i + 1)},600);
       }else if(i == 1){
           setTimeout(function(){to3(i + 1)},600);
       }else if(i == 2){
           setTimeout(function(){to4(i + 1)},600);
       };
       return false;
   });
});


//==========================================功能函数，华丽丽的分割线 ヽ(●´∀`●)ﾉ==========================================
//过渡到当前的动画
function to1(i){
    $("#calc-blk-inside").removeClass().addClass("calc-area1");
    $("#j-calc-nav-ul").find("li").removeClass();
    $("#j-calc-nav-ul").find("li").eq(i).addClass("cur");
};
function to2(i){
    $("#calc-blk-inside").removeClass().addClass("calc-area2");
    $("#j-calc-nav-ul").find("li").removeClass();
    $("#j-calc-nav-ul").find("li").eq(i-1).addClass("cur-before");
    $("#j-calc-nav-ul").find("li").eq(i).addClass("cur");
};
function to3(i){
    $("#calc-blk-inside").removeClass().addClass("calc-area3");
    $("#j-calc-nav-ul").find("li").removeClass();
    $("#j-calc-nav-ul").find("li").eq(i-1).addClass("cur-before");
    $("#j-calc-nav-ul").find("li").eq(i).addClass("cur");
};
function to4(i){
    $("#calc-blk-inside").removeClass().addClass("calc-area4");
    $("#j-calc-nav-ul").find("li").removeClass();
    $("#j-calc-nav-ul").find("li").eq(i-1).addClass("cur-before");
    $("#j-calc-nav-ul").find("li").eq(i).addClass("cur");
};

//保险购买年数
function bxns(){
    if($("#bxgmns").find("option:selected").val() == 0){
        var bxgmnsValue = (parseFloat($("#settle2-byhf").text()) + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.95).toFixed(0);
    }else if($("#bxgmns").find("option:selected").val() == 1){
        var bxgmnsValue = (parseFloat($("#settle2-byhf").text()) + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.95 + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.855).toFixed(0);
    }else if($("#bxgmns").find("option:selected").val() == 2){
        var bxgmnsValue = (parseFloat($("#settle2-byhf").text()) + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.95 + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.855 + (parseFloat($("#settle2-byhf2").text()) + parseFloat($("#settle2-byhf3").text())) * 0.855).toFixed(0);
    };
//    $("#bxgmns-val").text(bxgmnsValue);
//    $("#settle2-byhf4").text(bxgmnsValue);
    //stage2保险合计
    $("#stage2-all-val").text(bxgmnsValue);
    $("#j-calc-nav-val2").text(bxgmnsValue);
    $("#stage5-bxnx").find("li").eq(0).remove();
    $("#stage5-bxnx").append("<li><span class='val'><b>" + $('#bxgmns').find('option:selected').text() + "</b></span><span class='tit'>已选年数</span></li>");
};

//xxValue 转化出来的js变量
var csjValue = $("#csj").val(),//车身价
    zdjValue = $("#csj").attr("data-zvalue"),//指导价
    sfjeprop = $("#sfk").val(),//首付金额比例
    sfjeValue,//首付款金额计算后
    dkjeValue,//贷款金额计算后
    sfjeTempValue = (csjValue * sfjeprop).toFixed(0),//首付款金额临时
    cc
    ;

//金额取整
function roundNum(num){
    var len = String(num).length;
    var arr = [];
    for(i = 0; i < len; i++){
        var n = String(num).charAt(i);
        arr[i] = n;
        if(i == len-1){
            arr[i] = "0";
        }else if(i == len-2){
            arr[i] = "0";
        }else if(i == len-3){
            arr[i] = "0";
        };
    };
    roundFinalNum = arr.join("");
};
roundNum(csjValue - sfjeTempValue);
dkjeValue = roundFinalNum;
sfjeValue = (csjValue - dkjeValue);
function bankSelect(){
    $("#xzyh").on("change",function(){
        
    })
};
function count(){
};
$(function(){
    $(document).on({
        click : function(){
            test()
        },
        change : function(){
            test()
        }
    })
});

//==========================================计算逻辑，华丽丽的分割线 ヽ(●´∀`●)ﾉ==========================================
taxTmp = [];
$(function(){
    six();
    add();
    $(".change").on("change",function(){
        add();
    });
    $("#j-stage1-tab").find("li").each(function(){
        $(this).click(function(){
            add();
        });
    });
    $("#jqx").change(function(){
        six();
    });
    function add(){
        //车身价
        var csjVal = $("#csj").val();
        //指导价
        var zdjVal = $("#csj").attr("data-zvalue");
        //首付款 + 贷款金额
        var sfkVal = $("#sfk").val();
        var sfValue = (csjVal * sfkVal).toFixed(0);
        var dkjeVal = csjVal - sfValue;
        roundNum(dkjeVal);
        $("#sfk-val").text(csjVal - roundFinalNum);
        $("#dkje-val").text(roundFinalNum);
        var sfkValue=csjVal - roundFinalNum;
        var dkjeValue=roundFinalNum;
        //购置税
        $("#gzs").text((zdjVal / (1 + 0.17) * 0.1).toFixed(0));
        //金融服务费
        $("#jrfwf").text((roundFinalNum * 0.03).toFixed(0));
        //必要花费
        var byhfValue = parseFloat($("#gzs").text()) + parseFloat($("#jrfwf").text()) + parseFloat($("#dyfw").text()) + parseFloat($("#spfw").val());
        $("#settle-byhf").text(byhfValue);

        //全款
        //必要花费
        var byhfValue2 = parseFloat($("#gzs2").text()) + parseFloat($("#spfw2").val());
        $("#settle-byhf2").text(byhfValue2);
        //车身价
        var sfValue2 = $("#csj2").val();
        var byhfValue2 = parseFloat($("#gzs2").text()) + parseFloat($("#spfw2").val());
        //购置税
        $("#gzs2").text((zdjVal / (1 + 0.17) * 0.1).toFixed(0));

        //文案类别变更
        function tabSelect(){
            if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")){
                $("#stage1-p").html("贷款购车，首付" + $("#sfk").find("option:selected").text() + "，" + $("#xzyh").find("option:selected").text() + "，贷款按" + $("#yg").find("option:selected").text() + "计算，需首付" + $("#sfk-val").text() + "元 + 必要花费" + $("#settle-byhf").text() + "元，月还款" + $("#lxje-val").text() + "元");
                var firstValue = parseFloat(sfkValue) + parseFloat(byhfValue);
                $("#stage1-all-val").text(firstValue);
                $("#j-calc-nav-val1").text(firstValue);
                $("#j-settle-box-ul3").find(".daikuan").css("display","block");
                //首付合计
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-dyfwf").text()) + parseFloat($("#s4-bxje").text()));
                //车身首付
                $("#s4-csj-tit").text("车身首付");
                $("#s4-csj").text($("#sfk-val").text());
            }else{
                $("#stage1-p").html("全款购车，车身价" + $("#csj2").val() + "元 + 必要花费" + $("#settle-byhf2").text() + "元");
                var firstValue2 = parseFloat(sfValue2) + parseFloat(byhfValue2);
                $("#stage1-all-val").text(firstValue2);
                $("#j-calc-nav-val1").text(firstValue2);
                $("#j-settle-box-ul3").find(".daikuan").css("display","none");
                //首付合计
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()));
                //车身首付
                $("#s4-csj-tit").text("车身金额");
                $("#s4-csj").text($("#csj").val());
            };
            bigHei();
        };
        tabSelect();
        //银行利率及利息金额
        var yhllVal = $("#yg").val();
        if($("#lxzffs").val() == "ftsq" && $("#j-stage1-tab").find("li").eq(0).hasClass("cur")){
            var lxValue = (dkjeValue * (1 + parseFloat(yhllVal)) / $("#yg").find("option:selected").attr("data-cycle")).toFixed(0);
            $("#lxje-val").text(lxValue);
            $("#stage1-p").html("贷款购车，首付" + $("#sfk").find("option:selected").text() + "，" + $("#xzyh").find("option:selected").text() + "，贷款按" + $("#yg").find("option:selected").text() + "计算，需首付" + $("#sfk-val").text() + "元 + 其他费用" + $("#settle-byhf").text() + "元，月还款" + $("#lxje-val").text() + "元");
            $("#lxje-txt").text("分摊至月供中");
        };
        if($("#lxzffs").val() == "ycxsq" && $("#j-stage1-tab").find("li").eq(0).hasClass("cur")){
            var lxValue = (dkjeValue / $("#yg").find("option:selected").attr("data-cycle")).toFixed(0);
            var ycxLxValue = (dkjeValue * yhllVal).toFixed(0);
            $("#lxje-val").text(lxValue);
         $("#stage1-p").html("贷款购车，首付" + $("#sfk").find("option:selected").text() + "，" + $("#xzyh").find("option:selected").text() + "，贷款按" + $("#yg").find("option:selected").text() + "计算，需首付" + $("#sfk-val").text() + "元 + 其他费用" + $("#settle-byhf").text() + "元，月还款" + $("#lxje-val").text() + "元" + "<span>，贷款利息一次性支付：" + ycxLxValue + "元</span>");
            $("#lxje-txt").text(ycxLxValue + "元");

            var firstValue = parseFloat(sfkValue) + parseFloat(byhfValue) + parseFloat(ycxLxValue);
            $("#stage1-all-val").text(firstValue);
            $("#j-calc-nav-val1").text(firstValue);
        };

        //第二屏
        //初始化
        $("#dszzrx-val").attr("data-value","0");
        $("#clssx-val").attr("data-value","0");
        $("#qcdqx-val").attr("data-value","0");
        $("#sjzwzrx-val").attr("data-value","0");
        $("#ckzwzrx-val").attr("data-value","0");
        $("#bjmpx-val").attr("data-value","0");
        $("#zrssx-val").attr("data-value","0");
        $("#blddpsx-val").attr("data-value","0");
        $("#cshhssx-val").attr("data-value","0");
        $("#ssxsssx-val").attr("data-value","0");
        $("#zdzxc-val").attr("data-value","0");
        $("#bjmpx2-val").attr("data-value","0");
        //交强险
        $("#jqx-val").text($("#jqx").val());
        //车船税
        $("#ccs-val").text($("#ccs").val());
        //第三者责任险
        $("#dszzrx-val").text($("#dszzrx").val());
        if(!$("#dszzrx").prop("disabled")){
            $("#dszzrx-val").attr("data-value",$("#dszzrx-val").text());
        };
        $("#s4-dszzrx-val").text($("#dszzrx-val").attr("data-value"));
        //乘客座位责任险
        $("#ckzwzrx-val").text(10000 * 0.0026 * 4);
        //不计免赔险
        bjmpx_run();
        //自燃损失险
        var gzjVal = $("#csj").attr("data-gzjvalue");
        $("#zrssx-val").text((gzjVal * 0.0012).toFixed(0));
        //玻璃单独破碎险
        $("#blddpsx-val").text(($("#blddpsx").val() * gzjVal).toFixed(0));
        if(!$("#blddpsx").prop("disabled")){
            $("#blddpsx-val").attr("data-value",$("#blddpsx-val").text());
        };
        //车身划痕损失险
        $("#cshhssx-val").text($("#cshhssx").val());
        if(!$("#cshhssx").prop("disabled")){
            $("#cshhssx-val").attr("data-value",$("#cshhssx-val").text());
        };
        //涉水行驶损失险
        $("#ssxsssx-val").text((taxTmp[0] * 0.05).toFixed(0));
        //指定专修厂
        $("#zdzxc-val").text((taxTmp[0] * 0.5).toFixed(0));
        //附加险不计免赔险
        $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").text()) + parseFloat($("#cshhssx-val").text()) + parseFloat($("#ssxsssx-val").attr("data-value"))) * 0.15).toFixed(0));
        //小计部分
        $("#settle2-byhf").text(parseFloat($("#jqx-val").text()) + parseFloat($("#ccs-val").text()));
        $("#settle2-byhf2").text(parseFloat($("#dszzrx-val").attr("data-value")) + parseFloat($("#clssx-val").attr("data-value")) + parseFloat($("#qcdqx-val").attr("data-value")) + parseFloat($("#sjzwzrx-val").attr("data-value")) + parseFloat($("#ckzwzrx-val").attr("data-value")) + parseFloat($("#bjmpx-val").attr("data-value")));
        $("#settle2-byhf3").text(parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#blddpsx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value")) + parseFloat($("#zdzxc-val").attr("data-value")) + parseFloat($("#bjmpx2-val").attr("data-value")));
        $("#settle2-byhf2").text(parseFloat($("#dszzrx-val").text()) + parseFloat($("#clssx-val").text()) + parseFloat($("#qcdqx-val").text()) + parseFloat($("#sjzwzrx-val").text()) + parseFloat($("#ckzwzrx-val").text()) + parseFloat($("#bjmpx-val").text()));
        $("#settle2-byhf3").text(parseFloat($("#zrssx-val").text()) + parseFloat($("#blddpsx-val").text()) + parseFloat($("#cshhssx-val").text())+ parseFloat($("#bjmpx2-val").text()));

        bxns();

        //第四屏
        $("#to-stage1-p").text($("#stage1-p").text() + "。首付" + $("#stage1-all-val").text() + "元。");
        $("#to-stage2-p").text($(".stage3-p").eq(0).text() + "+" + $(".stage3-p").eq(1).text());
        $("#s4-jqx-val").text($("#jqx-val").text());
        $("#s4-ccs-val").text($("#ccs-val").text());
        //购置税
        $("#s4-gzs").text($("#gzs").text());
        //金融服务费
        $("#s4-jrfwf").text($("#jrfwf").text());
        //上牌服务费
        $("#s4-spfwf").text($("#spfw").val());
        //抵押服务费
        $("#s4-dyfwf").text($("#dyfw").text());
        //保险金额
        $("#s4-bxje").text($("#j-calc-nav-val2").text());
        //关联第三关 + 加装精品
        $(".jzjp-select").bind("click",function(){
            $("#to-stage2-p").text($(".stage3-p").eq(0).text());
            if($(".stage3-p").eq(0).text() == ""){
                $("#to-stage2-p").text($(".stage3-p").eq(1).text());
            }else if($(".stage3-p").eq(1).text() != ""){
                $("#to-stage2-p").text($(".stage3-p").eq(0).text() + "+" + $(".stage3-p").eq(1).text());
            };
            $("#s4-jzjp").text($("#j-calc-nav-val3").text());
            if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")) {
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-dyfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            }else{
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            }
            $("#j-calc-nav-val4").text($("#s4-all").text());
        });
        $("#to-stage2-p").text($(".stage3-p").eq(0).text());
        if($(".stage3-p").eq(1).text() != ""){
            $("#to-stage2-p").text($(".stage3-p").eq(0).text() + "+" + $(".stage3-p").eq(1).text());
        };
        $("#s4-jzjp").text($("#j-calc-nav-val3").text());
        //首付合计
        if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")){
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-dyfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            $(".jzjp-select").bind("click",function(){
                $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-dyfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            });
            $("#s4-tit").text("首付合计");
        }else{
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
            $("#s4-tit").text("购车合计");
        };
        $("#j-calc-nav-val4").text($("#s4-all").text());
        $(".j-sh-switch").click(bigHei);


        //第三者责任险
        if($(".point2-dszzrx").hasClass("point2-cur")){
            $(".point2-dszzrx").siblings().find("#dszzrx").removeAttr("disabled");
            $("#dszzrx-val").attr("data-value",$("#dszzrx-val").text());
            if($("#stage4-jbxz:has(li[class='c1'])").length==0){
            $("#stage4-jbxz").append("<li class='c1'><span class='val'>￥<b id='s4-dszzrx-val'>" + $("#dszzrx-val").attr("data-value") + "</b></span><span class='tit'>第三者责任险</span></li>");}
        };
        //车辆损失险
        if($(".check-select-box-clssx").hasClass("check-select-box-cur")){
            $("#clssx-val").attr("data-value",$("#clssx-val").text());
            if($("#stage4-jbxz:has(li[class='c2'])").length==0){
            $("#stage4-jbxz").append("<li class='c2'><span class='val'>￥<b>" + $("#clssx-val").attr("data-value") + "</b></span><span class='tit'>车辆损失险</span></li>");}
        };
        //全车盗抢险
        if($(".check-select-box-qcdqx").hasClass("check-select-box-cur")){
            $("#qcdqx-val").attr("data-value",$("#qcdqx-val").text());
            if($("#stage4-jbxz:has(li[class='c3'])").length==0){
            $("#stage4-jbxz").append("<li class='c3'><span class='val'>￥<b>" + $("#qcdqx-val").attr("data-value") + "</b></span><span class='tit'>全车盗抢险</span></li>");}
        };
        //司机座位责任险
        if($(".check-select-box-sjzwzrx").hasClass("check-select-box-cur")){
            $("#sjzwzrx-val").attr("data-value",$("#sjzwzrx-val").text());
            if($("#stage4-jbxz:has(li[class='c4'])").length==0){
            $("#stage4-jbxz").append("<li class='c4'><span class='val'>￥<b>" + $("#sjzwzrx-val").attr("data-value") + "</b></span><span class='tit'>司机座位责任险</span></li>");}
        };
        //乘客座位责任险
        if($(".check-select-box-ckzwzrx").hasClass("check-select-box-cur")){
            $("#ckzwzrx-val").attr("data-value",$("#ckzwzrx-val").text());
            if($("#stage4-jbxz:has(li[class='c5'])").length==0){
            $("#stage4-jbxz").append("<li class='c5'><span class='val'>￥<b>" + $("#ckzwzrx-val").attr("data-value") + "</b></span><span class='tit'>乘客座位责任险</span></li>");}
        };
        //不计免赔险
        if($(".check-select-box-bjmpx").hasClass("check-select-box-cur")) {
            $("#bjmpx-val").attr("data-value", $("#bjmpx-val").text());
            if($("#stage4-jbxz:has(li[class='c6'])").length==0){
            $("#stage4-jbxz").append("<li class='c6'><span class='val'>￥<b>" + $("#bjmpx-val").attr("data-value") + "</b></span><span class='tit'>不计免赔险</span></li>");}
        };
        //自燃损失险
        if($(".check-select-box-zrssx").hasClass("check-select-box-cur")){
            $("#zrssx-val").attr("data-value",$("#zrssx-val").text());
            if($("#stage4-fjxz:has(li[class='c1'])").length==0){
            $("#stage4-fjxz").append("<li class='c1'><span class='val'>￥<b>" + $("#zrssx-val").attr("data-value") + "</b></span><span class='tit'>自燃损失险</span></li>");}
        };
        //玻璃单独破碎险
        if($(".point2-blddpsx").hasClass("point2-cur")){
            $(".point2-blddpsx").siblings().find("#blddpsx").removeAttr("disabled");
            $("#blddpsx-val").attr("data-value",$("#blddpsx-val").text());
            if($("#stage4-fjxz:has(li[class='c2'])").length==0){
            $("#stage4-fjxz").append("<li class='c2'><span class='val'>￥<b id='s4-blddpsx-val'>" + $("#blddpsx-val").attr("data-value") + "</b></span><span class='tit'>玻璃单独破碎险</span></li>");}
        };
        //车身划痕损失险
        if($(".point2-cshhssx").hasClass("point2-cur")){
            $(".point2-cshhssx").siblings().find("#cshhssx").removeAttr("disabled");
            $("#cshhssx-val").attr("data-value",$("#cshhssx-val").text());
            if($("#stage4-fjxz:has(li[class='c3'])").length==0){
            $("#stage4-fjxz").append("<li class='c3'><span class='val'>￥<b id='s4-cshhssx-val'>" + $("#cshhssx-val").attr("data-value") + "</b></span><span class='tit'>车身划痕损失险</span></li>");}
        };
        //不计免赔险
        if($(".check-select-box-bjmpx2").hasClass("check-select-box-cur")){
            $("#bjmpx2-val").attr("data-value",$("#bjmpx2-val").text());
            if($("#stage4-fjxz:has(li[class='c6'])").length==0){
            $("#stage4-fjxz").append("<li class='c6'><span class='val'>￥<b>" + $("#bjmpx2-val").attr("data-value") + "</b></span><span class='tit'>不计免赔险</span></li>");}
        };
        $("#settle2-byhf2").text(parseFloat($("#dszzrx-val").attr("data-value")) + parseFloat($("#clssx-val").attr("data-value")) + parseFloat($("#qcdqx-val").attr("data-value")) + parseFloat($("#sjzwzrx-val").attr("data-value")) + parseFloat($("#ckzwzrx-val").attr("data-value")) + parseFloat($("#bjmpx-val").attr("data-value")));
        $("#settle2-byhf3").text(parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#blddpsx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value")) + parseFloat($("#zdzxc-val").attr("data-value")) + parseFloat($("#bjmpx2-val").attr("data-value")));
    };

    function six(){
        //座位类别判断
        var selectTxt = $("#jqx").find("option:selected").text();
        if(selectTxt == "(家用6座以下)"){
            $("#dszzrx").children().remove();
            $("#dszzrx").append("<option value='660'>(5万)</option><option value='954'>(10万)</option><option value='1087'>(15万)</option><option value='1182'>(20万)</option><option value='1334'>(30万)</option><option value='1601' selected='selected'>(50万)</option><option value='2085'>(100万)</option>")
            $("#dszzrx-val").text($("#dszzrx").val());
            //车辆损失险
            $("#clssx-val").text((566 + parseFloat($("#csj").val()) * 0.0135).toFixed(0));
            //全车盗抢险
            $("#qcdqx-val").text((120 + parseFloat($("#csj").val()) * 0.005).toFixed(0));
            //司机座位责任险
            $("#sjzwzrx-val").text(10000 * 0.0041);
            //乘客座位责任险
            $("#ckzwzrx-val").text(10000 * 0.0026 * 4);
            //涉水行驶损失险
            $("#ssxsssx-val").text(($("#clssx-val").text() * 0.05).toFixed(0));
            //指定专修厂
            $("#zdzxc-val").text(($("#clssx-val").text() * 0.5).toFixed(0));
        }else if(selectTxt == "(家用6座以上)"){
            $("#dszzrx").children().remove();
            $("#dszzrx").append("<option value='616'>(5万)</option><option value='869'>(10万)</option><option value='982'>(15万)</option><option value='1058'>(20万)</option><option value='1185'>(30万)</option><option value='1411' selected='selected'>(50万)</option><option value='1838'>(100万)</option>");
            $("#dszzrx-val").text($("#dszzrx").val());
            //车辆损失险
            $("#clssx-val").text((679 + parseFloat($("#csj").val()) * 0.0135).toFixed(0));
            //全车盗抢险
            $("#qcdqx-val").text((140 + parseFloat($("#csj").val()) * 0.0045).toFixed(0));
            //司机座位责任险
            $("#sjzwzrx-val").text(10000 * 0.004);
            //乘客座位责任险
            $("#ckzwzrx-val").text(10000 * 0.0026 * 6);
            //涉水行驶损失险
            $("#ssxsssx-val").text(($("#clssx-val").text() * 0.05).toFixed(0));
            //指定专修厂
            $("#zdzxc-val").text(($("#clssx-val").text() * 0.5).toFixed(0));
        };
        taxTmp[0] = $("#clssx-val").text();
        taxTmp[1] = $("#sjzwzrx-val").text();
        taxTmp[2] = $("#qcdqx-val").text();
        bjmpx_run();
    };

    $(".check-select-box").click(function(){
        if($(this).hasClass("check-select-box-cur")){
            $(this).removeClass("check-select-box-cur");
            //车辆损失险
            if($(this).hasClass("check-select-box-clssx")){
                $("#clssx-val").attr("data-value","0");
                $("#stage4-jbxz").find(".c2").remove();
            };
            //全车盗抢险
            if($(this).hasClass("check-select-box-qcdqx")){
                $("#qcdqx-val").attr("data-value","0");
                $("#stage4-jbxz").find(".c3").remove();
            };
            //司机座位责任险
            if($(this).hasClass("check-select-box-sjzwzrx")){
                $("#sjzwzrx-val").attr("data-value","0");
                $("#stage4-jbxz").find(".c4").remove();
            };
            //乘客座位责任险
            if($(this).hasClass("check-select-box-ckzwzrx")){
                $("#ckzwzrx-val").attr("data-value","0");
                $("#stage4-jbxz").find(".c5").remove();
            };
            //不计免赔险
            if($(this).hasClass("check-select-box-bjmpx")){
                $("#bjmpx-val").attr("data-value","0");
                $("#stage4-jbxz").find(".c6").remove();
            };
            //自燃损失险价格
            if($(this).hasClass("check-select-box-zrssx")){
                $("#zrssx-val").attr("data-value","0");
                $("#stage4-fjxz").find(".c1").remove();
                $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value"))) * 0.15).toFixed(0));
                $("#stage4-fjxz").find(".c6").find("b").text($("#bjmpx2-val").text());
            };
            //涉水行驶损失险价格
            if($(this).hasClass("check-select-box-ssxsssx")){
                $("#ssxsssx-val").attr("data-value","0");
                $("#stage4-fjxz").find(".c4").remove();
                $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value"))) * 0.15).toFixed(0));
                $("#stage4-fjxz").find(".c6").find("b").text($("#bjmpx2-val").text());
            };
            //指定专修厂价格
            if($(this).hasClass("check-select-box-zdzxc")){
                $("#zdzxc-val").attr("data-value","0");
                $("#stage4-fjxz").find(".c5").remove();
            };
            //不计免赔险价格
            if($(this).hasClass("check-select-box-bjmpx2")){
                $("#bjmpx2-val").attr("data-value","0");
                $("#stage4-fjxz").find(".c6").remove();
            };
            //附加险不计免赔险 由涉水行驶险再计算
            $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value"))) * 0.15).toFixed(0));
        }else{
            $(this).addClass("check-select-box-cur");
            //车辆损失险
            if($(this).hasClass("check-select-box-clssx")){
                $("#clssx-val").attr("data-value",$("#clssx-val").text());
                $("#stage4-jbxz").append("<li class='c2'><span class='val'>￥<b>" + $("#clssx-val").attr("data-value") + "</b></span><span class='tit'>车辆损失险</span></li>");
            };
            //全车盗抢险
            if($(this).hasClass("check-select-box-qcdqx")){
                $("#qcdqx-val").attr("data-value",$("#qcdqx-val").text());
                $("#stage4-jbxz").append("<li class='c3'><span class='val'>￥<b>" + $("#qcdqx-val").attr("data-value") + "</b></span><span class='tit'>全车盗抢险</span></li>");
            };
            //司机座位责任险
            if($(this).hasClass("check-select-box-sjzwzrx")){
                $("#sjzwzrx-val").attr("data-value",$("#sjzwzrx-val").text());
                $("#stage4-jbxz").append("<li class='c4'><span class='val'>￥<b>" + $("#sjzwzrx-val").attr("data-value") + "</b></span><span class='tit'>司机座位责任险</span></li>");
            };
            //乘客座位责任险
            if($(this).hasClass("check-select-box-ckzwzrx")){
                $("#ckzwzrx-val").attr("data-value",$("#ckzwzrx-val").text());
                $("#stage4-jbxz").append("<li class='c5'><span class='val'>￥<b>" + $("#ckzwzrx-val").attr("data-value") + "</b></span><span class='tit'>乘客座位责任险</span></li>");
            };
            //不计免赔险
            if($(this).hasClass("check-select-box-bjmpx")){
                $("#bjmpx-val").attr("data-value",$("#bjmpx-val").text());
                $("#stage4-jbxz").append("<li class='c6'><span class='val'>￥<b>" + $("#bjmpx-val").attr("data-value") + "</b></span><span class='tit'>不计免赔险</span></li>");
            };
            //自燃损失险
            if($(this).hasClass("check-select-box-zrssx")){
                $("#zrssx-val").attr("data-value",$("#zrssx-val").text());
                $("#stage4-fjxz").append("<li class='c1'><span class='val'>￥<b>" + $("#zrssx-val").attr("data-value") + "</b></span><span class='tit'>自燃损失险</span></li>");
                $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value"))) * 0.15).toFixed(0));
                $("#stage4-fjxz").find(".c6").find("b").text($("#bjmpx2-val").text());
            };
            //涉水行驶损失险
            if($(this).hasClass("check-select-box-ssxsssx")){
                $("#ssxsssx-val").attr("data-value",$("#ssxsssx-val").text());
                //附加险不计免赔险 由涉水行驶险再计算
                $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value"))) * 0.15).toFixed(0));
                $("#stage4-fjxz").append("<li class='c4'><span class='val'>￥<b>" + $("#ssxsssx-val").attr("data-value") + "</b></span><span class='tit'>涉水行驶损失险</span></li>");
                $("#stage4-fjxz").find(".c6").find("b").text($("#bjmpx2-val").text());
            };
            //指定专修厂
            if($(this).hasClass("check-select-box-zdzxc")){
                $("#zdzxc-val").attr("data-value",$("#zdzxc-val").text());
                $("#stage4-fjxz").append("<li class='c5'><span class='val'>￥<b>" + $("#zdzxc-val").attr("data-value") + "</b></span><span class='tit'>指定专修厂</span></li>");
            };
            //不计免赔险
            if($(this).hasClass("check-select-box-bjmpx2")){
                $("#bjmpx2-val").attr("data-value",$("#bjmpx2-val").text());
                $("#stage4-fjxz").append("<li class='c6'><span class='val'>￥<b>" + $("#bjmpx2-val").attr("data-value") + "</b></span><span class='tit'>不计免赔险</span></li>");
            };
        };

        $("#settle2-byhf2").text(parseFloat($("#dszzrx-val").attr("data-value")) + parseFloat($("#clssx-val").attr("data-value")) + parseFloat($("#qcdqx-val").attr("data-value")) + parseFloat($("#sjzwzrx-val").attr("data-value")) + parseFloat($("#ckzwzrx-val").attr("data-value")) + parseFloat($("#bjmpx-val").attr("data-value")));
        $("#settle2-byhf3").text(parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#blddpsx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value")) + parseFloat($("#zdzxc-val").attr("data-value")) + parseFloat($("#bjmpx2-val").attr("data-value")));
        bxns();
        $("#s4-bxje").text($("#stage2-all-val").text());
        if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")) {
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-dyfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
        }else{
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
        }
        $("#j-calc-nav-val4").text($("#s4-all").text());
        bigHei();
    });


    $(".point2").click(function(){
        if($(this).hasClass("point2-cur")){
            $(this).removeClass("point2-cur");
            //第三者责任险
            if($(this).hasClass("point2-dszzrx")){
                $(".point2-dszzrx").siblings().find("#dszzrx").attr("disabled","disabled");
                $("#dszzrx-val").attr("data-value","0");
                $("#stage4-jbxz").find(".c1").remove();
            };
            //玻璃单独破碎险
            if($(this).hasClass("point2-blddpsx")){
                $(".point2-blddpsx").siblings().find("#blddpsx").attr("disabled","disabled")
                $("#blddpsx-val").attr("data-value","0");
                $("#stage4-fjxz").find(".c2").remove();
            };
            //车身划痕损失险
            if($(this).hasClass("point2-cshhssx")){
                $(".point2-cshhssx").siblings().find("#cshhssx").attr("disabled","disabled");
                $("#cshhssx-val").attr("data-value","0");
                $("#stage4-fjxz").find(".c3").remove();
                $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value"))) * 0.15).toFixed(0));
                $("#stage4-fjxz").find(".c6").find("b").text($("#bjmpx2-val").text());
            };
        }else{
            $(this).addClass("point2-cur");
            //第三者责任险
            if($(this).hasClass("point2-dszzrx")){
                $(".point2-dszzrx").siblings().find("#dszzrx").removeAttr("disabled");
                $("#dszzrx-val").attr("data-value",$("#dszzrx-val").text());
                if($("#stage4-jbxz:has(li[class='c1'])").length==0){
                $("#stage4-jbxz").append("<li class='c1'><span class='val'>￥<b id='s4-dszzrx-val'>" + $("#dszzrx-val").attr("data-value") + "</b></span><span class='tit'>第三者责任险</span></li>");}
            };
            //玻璃单独破碎险
            if($(this).hasClass("point2-blddpsx")){
                $(".point2-blddpsx").siblings().find("#blddpsx").removeAttr("disabled");
                $("#blddpsx-val").attr("data-value",$("#blddpsx-val").text());
                if($("#stage4-fjxz:has(li[class='c2'])").length==0){
                $("#stage4-fjxz").append("<li class='c2'><span class='val'>￥<b id='s4-blddpsx-val'>" + $("#blddpsx-val").attr("data-value") + "</b></span><span class='tit'>玻璃单独破碎险</span></li>");}
            };
            //车身划痕损失险
            if($(this).hasClass("point2-cshhssx")){
                $(".point2-cshhssx").siblings().find("#cshhssx").removeAttr("disabled");
                $("#cshhssx-val").attr("data-value",$("#cshhssx-val").text());
                if($("#stage4-fjxz:has(li[class='c3'])").length==0){
                $("#stage4-fjxz").append("<li class='c3'><span class='val'>￥<b id='s4-cshhssx-val'>" + $("#cshhssx-val").attr("data-value") + "</b></span><span class='tit'>车身划痕损失险</span></li>");}
                $("#bjmpx2-val").text(((parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value"))) * 0.15).toFixed(0));
                $("#stage4-fjxz").find(".c6").find("b").text($("#bjmpx2-val").text());
            };
        };

        $("#settle2-byhf2").text(parseFloat($("#dszzrx-val").attr("data-value")) + parseFloat($("#clssx-val").attr("data-value")) + parseFloat($("#qcdqx-val").attr("data-value")) + parseFloat($("#sjzwzrx-val").attr("data-value")) + parseFloat($("#ckzwzrx-val").attr("data-value")) + parseFloat($("#bjmpx-val").attr("data-value")));
        $("#settle2-byhf3").text(parseFloat($("#zrssx-val").attr("data-value")) + parseFloat($("#blddpsx-val").attr("data-value")) + parseFloat($("#cshhssx-val").attr("data-value")) + parseFloat($("#ssxsssx-val").attr("data-value")) + parseFloat($("#zdzxc-val").attr("data-value")) + parseFloat($("#bjmpx2-val").attr("data-value")));
        bxns();
        $("#s4-bxje").text($("#stage2-all-val").text());
        if($("#j-stage1-tab").find("li").eq(0).hasClass("cur")) {
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-jrfwf").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-dyfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
        }else{
            $("#s4-all").text(parseFloat($("#s4-csj").text()) + parseFloat($("#s4-gzs").text()) + parseFloat($("#s4-spfwf").text()) + parseFloat($("#s4-bxje").text()) + parseFloat($("#s4-jzjp").text()));
        }
        $("#j-calc-nav-val4").text($("#s4-all").text());
        bigHei();
    });

    //保险金额
    $("#s4-bxje").text($("#j-calc-nav-val2").text());

    function bjmpx_run(){
        $("#bjmpx-val").text(((parseFloat(taxTmp[0]) + parseFloat($("#dszzrx-val").text()) + parseFloat(taxTmp[1]) + parseFloat($("#ckzwzrx-val").text())) * 0.15 + parseFloat(taxTmp[2]) * 0.2).toFixed(0));
    }
});

//stage3
$(function(){
    calc_autosize();
    $('.jzjp-list').each(function(){
        $(this).find('li:last').addClass('last');
    });
    $('#j-jzjp-tab li').click(function(){
        calc_get_height(this);
    });
    $('.jzjp-list li .point2,.calc-list-ul-jzjp-li .point2').bind('click',function(){
        //$(this).parents('li').siblings().find('.point2').removeClass('point2-cur');
        var jse=$('.point2-cur').parents('li');
        var total=getTotal($(jse).find('.price-final'));
        var html=getTaozhuang(jse,'.title');
        if(html=='')html='暂无选择';
        $(this).parents('.calc-con').find('.calc-settle #stage1-p').html(html);
        $(this).parents('.calc-con').find('.calc-settle .js .val').html(total);
        getTotalALL();
        calc_get_height(this);
    });
    $('.jzjp-select').each(function(){
        var jse=this;
        var comput=function(){
            try{
                var cur=$(jse).parents('.calc-con').find('dl.cur');
                var total=getTotal(cur.find('big.fr'));
                var html=getTaozhuang(cur);
                $(jse).parents('.calc-con').find('.calc-settle').find('#stage1-p').html(html);
                $(jse).parents('.calc-con').find('.calc-settle').find('.js .val').html(total);
                getTotalALL();
            }catch(err){}
        }
        $(this).find('dt').bind('click',function(){
            var dl=$(this).parent();
            dl.siblings().removeClass('cur');
            if(dl.hasClass('cur')){
                dl.removeClass('cur');
            }
            else{
                dl.addClass('cur');
            }
            if(dl.parents('#j-jzjp-select-normal').length==0){calc_get_height(this);return;}
            var ml=dl.parents('.calc-cons').offset().left-dl.find('dd').offset().left;
            var oml=dl.find('dd').css('margin-left');
            if(oml=='0px'){dl.find('dd').css({'margin-left':ml});}
            comput();
            calc_get_height(this);
        });
        $(this).find('dl').each(function(){
            price_sum=getTotal($(this).find('.price-final'));
            $(this).find('.jzjp-list-total .hl span').html(price_sum);
        });
        comput();
    });
    $('.jzjp-select').find('.duibi').bind('click',function(){
        if($(this).find('a').hasClass('show'))$(this).find('a').removeClass('show');
        else $(this).find('a').addClass('show');
        $(this).siblings('.price-area').toggle();
    });
});
function getTaozhuang(obj,hobj){
    var html='';
    var hobj=hobj||'dt span';
    $(obj).each(function(n){
        var prex=n==0?'':'+';
        html+=prex+$(this).find(hobj).html();
    });
    return html;
}
function getTotalALL(){
    var all=getTotal($('.calc-blk:eq(2) .calc-settle'),'.js .val');
    $('.calc-nav-ul #j-calc-nav-val3').html(all);
}
function getTotal(obj,vobj){
    var sum=0,vobj=vobj||'.hl span';
    $(obj).each(function(){
        sum+=parseFloat($(this).find(vobj).html());
    });
    return sum;
}
function calc_autosize(){
    function run(){
        $('.jzjp-select').each(function(){
            $(this).find('dl').each(function(){
                var win_w=$(document.body).width();
                var w=$(this).find('dt').width();
                $(this).find('dd').css({'width':win_w});
                if($(this).parents('#j-jzjp-select-normal').length==0)return;
                $(this).css({'width':w});
            });
        });
    }
    run();
    $(window).resize(run);
}
function calc_get_height(me){
    obj=$(me).hasClass('calc-blk')?me:$(me).parents('.calc-blk');
    $('.calc-blks').css('height',$(obj).height());
}
