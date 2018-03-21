<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
String school = request.getParameter("school");//用request得到
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>登陆</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="jquery.cookie.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script src="school.js"></script>
    <script src="login_fun.js"></script>
</head>
<body onload="login_init()">

<div data-role="page">

<!--    <div data-role="header" data-position="fixed"  data-theme="a">
        <h1>登陆</h1>
    </div>&lt;!&ndash; /header &ndash;&gt;-->

    <div role="main" class="ui-content">

      <div data-role="fieldcontain"  style="border: none;display:none">
            <label for="register_openid">Openid：</label>
            <input type="text" name="name" id="login_openid" disabled="true" value="<%=request.getParameter("openid")%>"  />
        </div>
    <!--
    <div>
            <label for="choose_school">选择省份：</label>
            <select id="choose_province" data-shadow="false" onchange="choose_province_fun(this)">

            </select>
        </div>
        <div>
            <label for="choose_school">选择大学：</label>
            <select id="choose_school" name="choose_school" data-shadow="false" onchange="choose_school_fun(this)">

            </select>
        </div>
    -->
       <div data-role="fieldcontain" style="border: none">
          <label for="login_phone">手机号码：</label>
            <input type="text" name="login_phone" id="login_phone" value="<%=request.getParameter("phone")%>"  />

        </div>

        <div data-role="fieldcontain"  style="margin-bottom:2%;border: none">
            <label for="login_password">登陆密码：</label>
            <input  type="password" name="login_password" id="login_password" value="<%=request.getParameter("password")%>"  />
        </div>
        <div  class="ui-btn-inline" style="width: 40%;border: none">
            <button onclick="forget_password()" class="ui-btn-inline" >忘记密码？</button>
        </div>

        <div  role="" class="ui-btn-inline" style="float: right;width: 35%">
            <button onclick="gotoregister()" class="ui-btn-inline" >注册</button>
        </div>



        <a onclick="login_fun()" id="login_button" data-role="button" data-theme="b" style="margin-top: 8%">登陆</a>


    </div><!-- /content -->


</div><!-- /page -->

</body>
</html>
