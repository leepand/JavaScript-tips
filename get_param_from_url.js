    /*获取URL传过来的参数*/
    function get_request_args(argname){  
        var url = decodeURI(document.location.href);//需要解码，一些参数有空格等
        var arrStr = url.substring(url.indexOf("?")+1).split("/");//根据实际页面修改
        //console.log('arrStr',arrStr);
        for(var i = 0; i < arrStr.length; i++) {
            var loc = arrStr[i].indexOf(argname+"=");  
            if(loc != -1){
                //console.log('loc',loc);
                return arrStr[i].replace(argname+"=","").replace("?","");
                break;
            }
        }
        return "";
    }
    var TagName = get_request_args("tag"); //http://0.0.0.0:9010/tags/tag=recommendation