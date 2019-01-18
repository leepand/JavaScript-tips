//弹窗编辑/form
$("body").on("click",".edit_desc",function(){
        
      var index =  layer.open({
        id:1,
        type: 1,
        title:'Update Description',
        skin:'layui-layer-rim',
        area:['450px', 'auto'],
        
        content: ' <div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'
            +'<div class="col-sm-12">'
            +'<div class="input-group">'
            +'<span class="input-group-addon"> 新 密 码   :</span>'
            +'<input id="firstpwd" type="password" class="form-control" placeholder="请输入密码">'
            +'</div>'
            +'</div>'
              +'<div class="col-sm-12" style="margin-top: 10px">'
              +'<div class="input-group">'
              +'<span class="input-group-addon">确认密码:</span>'
              +'<input id="secondpwd" type="password" class="form-control" placeholder="请再输入一次密码">'
              +'</div>'
              +'</div>'
              +'</div>'
        ,
        btn:['保存','取消'],
        btn1: function (index,layero) {
        },
        btn2:function (index,layero) {
             layer.close(index);
        }
 
    });    
        
    })