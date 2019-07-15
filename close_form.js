
<script>
    //关闭自身 
    window.formClose = function(){
        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        //layer.msg(index);
        parent.layer.close(index); //再执行关闭 
    }
</script>
<a tabindex="0" href="javascript:;"  onclick="formClose()" class="onlineExp-a">
