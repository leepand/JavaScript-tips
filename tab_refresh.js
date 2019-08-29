//刷新页面不改变之前的tab信息
    var getIndexNum = sessionStorage.getItem("tabLiNum");
    $('#model_details_tab a[href="'+getIndexNum+'"]').tab('show');
    $('#model_details_tab li a').on('click',function(){
        var indexNum = this.getAttribute("href"); //所点击li的索引值
        sessionStorage.setItem("tabLiNum",indexNum); //将(下标名称，索引值)存入session中
    })
