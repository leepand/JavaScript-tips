//解决加载页面动态刷新导航栏导致导航栏的样式无法生效问题
$(".sidenav-menu li").click(function(){
    console.log($(this))
    $(this).siblings().removeClass("active")//.addClass("active");    // .siblings() 返回被选元素的所有同级元素（其余）。
    var index =   $(".sidenav-menu").find("li").index(this);
    $.cookie("current",index);
    $(this).addClass("active");
});


if($.cookie("current") != null ){
    var num  = $.cookie("current");
    $(".sidenav-menu").find("li").eq(num).parent().parent().removeClass("active");
    $(".sidenav-menu").find("li").eq(num).parent().parent().addClass("open active");
    $(".sidenav-menu").find("li").eq(num).addClass("active");

}

//jquery.cookie.js

//部分代码 https://blog.csdn.net/weixin_38951735/article/details/80883203 原始
$("#add_nav").on("click","li",function(){
    $("#add_nav").find("li").removeClass("active");
    var index =   $("#add_nav").find("li").index(this);
    $.cookie("current",index);
    $(this).addClass("active");
})
 
 
 
 
if($.cookie("current") != null ){
    var num  = $.cookie("current");
    $("#add_nav").find("li").eq(num).addClass("active")
}
 
 
html:
<div id="add_nav"></div>
