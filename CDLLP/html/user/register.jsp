<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>注册</title>
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
    <script src="register_fun.js"></script>
</head>
<body onload="init()">

<div data-role="page">

   <!--    <div data-role="header" data-position="fixed"  data-theme="a">
        <h1>注册</h1>
    </div>&lt;!&ndash; /header &ndash;&gt;-->

    <div role="main" class="ui-content">

        <div data-role="fieldcontain"  style="border: none;display:none">
            <label for="register_openid">Openid：</label>
            <input type="text" name="name" id="register_openid" disabled="true" value="<%=request.getParameter("openid")%>"  />
        </div>
        <div>
            <label id="choose_province_text" for="choose_school">选择省份：</label>
            <select id="choose_province" data-shadow="false" onchange="choose_province_fun(this)">

            </select>
        </div>
        <div>
            <label id="choose_school_text" for="choose_school">选择大学：</label>
            <select id="choose_school" name="choose_school" data-shadow="false" onchange="choose_school_fun(this)">

            </select>
        </div>

    <div data-role="fieldcontain"  style="border: none">
            <label for="register_phone">登陆手机号：</label>
            <input type="text" name="name" id="register_phone" value=""  />
        </div>

        <div data-role="fieldcontain"  style="border: none">
            <label for="register_password">登陆密码：</label>
            <input type="text" name="name" id="register_password" value=""  />
        </div>

        <br>
    <div>
        <a onclick="register_fun()" id="register_button" data-role="button" data-theme="b" style="margin-top: 1%">注册</a>
   <a onclick="gotologin()" data-role="button" data-theme="a" style="margin-top: 8%">已有账号</a>
    </div>

    </div><!-- /content -->


</div><!-- /page -->

</body>
</html>
