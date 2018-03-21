<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>账户中心</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/jquery.mobile-1.4.5.min.js"></script>
    <script src="sendpost.js"></script>
</head>
<body onload='load_info()'>

<div data-role="page">


    <div data-role="content"  style="margin: 0px -10px" id='main' userid="<%=request.getParameter("userid")%>">

    <div style='margin:-18px -10px 0;background-color:#ecf9fa;background-size:100% 100%;'>
    <br>
        <ul data-role="listview" style='margin:0px 20px 0;background-color: transparent;border:none'>
            <li  style='border:none;background-color: transparent;'>
                <img class='ui-li-thumb' src='images/img1.jpg' style='height: 60px;width:60px;border-radius:60px' >
                    <p style='font-size: 16px;margin: 0 -20px' id='user_name'></p>
                    <p style='font-size: 13px;margin: 10px -20px' id='user_info'>欢迎来到橙子权益</p>
            </li>
        </ul>
    </div>
        <p> 交易 </p>
        <ul data-role="listview" data-inset="true">
            <%--<li><a onclick="goto_tixian()">提现</a></li>--%>
            <li><a href='jiaoyixuzhi.jsp'>交易须知</a></li>
            <li><a onclick="goto_mydiary()">交易记录</a></li>

        </ul>
       <p> 账户信息</p>
        <ul data-role="listview" data-inset="true">
            <li><a onclick="goto_change()">修改绑定</a></li>
        </ul>
        <p> 联系我们 </p>
        <ul data-role="listview" data-inset="true">
            <li><a href='kefushuoming.jsp'>联系客服</a></li>
            <li><a href='guanyuwomen.jsp'>关于我们</a></li>
        </ul>

    </div><!-- /content -->


   <div data-role="footer" data-position="fixed">
        <div data-role="navbar">
            <ul>
                <li><a  onclick="goto_jiaocheng()" data-icon="home">交易教程</a></li>
                <li><a  onclick="goto_mydiary()" data-icon="calendar">券码管理</a></li>
                <li><a href="#" data-icon="user"  class="ui-btn-active ui-state-persist">账户中心</a></li>
            </ul>
        </div>
    </div>

</div><!-- /page -->

<script type='text/javascript'>
    function goto_tixian(){
        window.location= 'tixian.jsp?userid='+$('#main').attr('userid')
    }
    function goto_mydiary(){
        window.location= 'mydiary.jsp?qunid=999&typeindex=1&userid='+$('#main').attr('userid')
    }
    function goto_jiaocheng(){
        window.location= 'jiaocheng.jsp?userid='+$('#main').attr('userid')
    }
    function goto_change(){
        window.location= 'register.jsp?userid='+$('#main').attr('userid')
    }

    //下载个人信息缓存
    function load_info()
    {
        //请求地址  json数据格式  返回值和格式已经定好了
        var userid = $('#main').attr('userid')
        var url,json;
        if(userid!='null'){    // 查询用户信息
            url= HTTP_GET_USERINFO;
            json = {
            "userid": userid,
            };
        }
        sendDataByPost(url,json,function(backstr){
            if(backstr.respcode == "0"){
                localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
                show_info();
            }else{
                WeixinJSBridge.invoke('closeWindow',{},function(res){
                //alert(res.err_msg);
                });
            }
        });

    }
    var konggestr="&nbsp; &nbsp; &nbsp;";
    var user;
    function show_info()
    {
        user=JSON.parse(localStorage["luanpeng_user"]);
        $('#user_name').text(user.name);

        infotext = '出售中：'+user.zannum/10.0+konggestr;
        infotext+='已汇款：'+user.gold/10.0;
        $('#user_info').html(infotext);
    }
    </script>

</body>
</html>

