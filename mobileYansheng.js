<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <title>忘记密码</title>
        <style type="text/css">
            * {margin: 0;padding: 0;}
            html {font-size: 62.5%;}/*62.5%相当于10px字体的大小*/
            /*input {border: 0;}*/
            body {background: #eee;}
            input {outline: none;border: 0;}
            /*修改所有的placeholder样式*/
            ::-webkit-input-placeholder {color: #CFCFCF;font-weight: 100;}
            .container {width: 100%;margin: 10% auto;}
            .telInfo {border-top: 1px solid #DBDBDB;height: 25px;line-height: 25px; font-size: 1.5rem;background: #fff;padding: 8px 10%;}
            .telInfo span {padding-right: 10px;}
            .telInfo input {height: 25px;line-height: 25px;font-size: 1.5rem;color: #999;}
            .telCode {border-bottom: 1px solid #DBDBDB;position: relative;}
            .telCode .tel_code {position: absolute;top: 8px;right: 5px;bottom: 0;width: 28%;border-radius: 5px; background: #FF5053;color: #fff;}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="telNum telInfo">
                <span class="tel">手机号</span>
                <input type="tel" class="number" placeholder="请输入手机号"/>
            </div>
            <div class="telCode telInfo">
                <span class="tel">验证码</span>
                <input type="tel" class="code" placeholder="请输入验证码"/>
                <input type="button" class="tel_code" value="获取验证码" />
            </div>
        </div>
    </body>
    <script type="text/javascript" src="js/jquery-1.8.3.min.js" ></script>
    <script type="text/javascript">
        $(function(){
            //获取验证码
            var colock = '';
            var num = 30;
            $(".tel_code").on("click", function(){
                $(".tel_code").attr("disabled","true");
                console.log("222");
                $(".tel_code").val(num+"秒后重新获取");
                colock = setInterval(doLoop, 1000);//一秒一次
            })
            
            function doLoop(){
                num--;
                if(num > 0) {
                    $(".tel_code").val(num+"秒后重新获取");
                }else {
                    clearInterval(colock);//
                    $(".tel_code").removeAttr("disabled");
                    $(".tel_code").val("获取验证码");
                    num = 30;
                }
            }
        });
    </script>
</html>
