    <%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>提现</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/jquery.mobile-1.4.5.min.js"></script>
    <script src="sendpost.js"></script>

</head>

<body onload="init()">

<div data-role="page">



    <div role="main" class="ui-content">
        <a data-role="button" data-theme="a" style="margin-top: 1%;background-color:white;color:red;border-color:dodgerblue">暂时主动汇款</a>
        <div data-role="fieldcontain"  style="border: none">
            <label for="tixian_total">可提金额：</label>
            <input type="text" name="name" id="tixian_total" value="" disabled/>
        </div>
        <div data-role="fieldcontain"  style="border: none">
            <label for="tixian_alipay">银行卡：</label>
            <input type="text" name="name" id="tixian_alipay" value="" disabled/>
        </div>
        <div data-role="fieldcontain"  style="border: none">
            <label for="tixian_money">提款金额：</label>
            <input type="text" name="name" id="tixian_money" value="" placeholder='单位：元'  />
        </div>
    <div>
        <a onclick="tixian_fun()" id="tixian_button" data-role="button" data-theme="b" style="margin-top: 1%">提交</a>
    </div>
    <div>
        <p>温馨提示：</p>
        <p>1、每日限提现2笔</p>
        <p>2、20:00之后的提现，次日到账</p>
    </div>


    </div><!-- /content -->


</div><!-- /page -->
<script type="text/javascript">//
        var user;
        function init(){
            user = JSON.parse(localStorage["luanpeng_user"]);
            $("#tixian_alipay").val(user.alipay);
            $("#tixian_total").val(user.gold);
        }



        //提现函数
        function tixian_fun()
        {
            button_text =  $("#tixian_button").text();

            if(button_text!='提交')
                return;
            //请求地址  json数据格式  返回值和格式已经定好了
            var userid = $("#tixian_userid").val();
            var total = $("#tixian_total").val();
            var money = $("#tixian_money").val();
            if(money=="")
            {
                alert("请先设置提取金额");
                return;
            }

        try{
                total = parseFloat(total);
                money = parseFloat(money);
                if(money>total)
                {
                    alert("提取金额超标");
                    return;
                }
                if(money==0 || total==0)
                {
                    return;
                }
            }catch(e){
                return
            }




            $("#tixian_button").text("提交中...");

            url= HTTP_TIXIAN;
            json = {
                "userid": user.id.toString(),
                'money':money.toString()
            };
            sendDataByPost(url,json,function(backstr){
                if(backstr.respcode == "0"){
                    $("#tixian_button").text("提交成功");
                }else{
                    alert(backstr.message);
                    $("#tixian_button").text("提交失败");
                }
            });

        }

</script>
</body>
</html>
