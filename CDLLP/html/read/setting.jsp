<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>发布朗读</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="sendpost.js"></script>
    <script src="setting_fun.js"></script>
</head>
<body>

<div data-role="page">

   <!-- <div data-role="header" data-position="fixed">
        &lt;!&ndash;<a href="#" data-role="button">Back</a>&ndash;&gt;
        <h1>系统设置</h1>
    </div>-->



    <div data-role="content"  style="margin-top: -10px">

        <p>注册登陆</p>
        <ul data-role="listview" data-inset="true">
            <li><a onclick="goanother('register.html')">注册</a></li>
            <li><a onclick="goanother('login.html')">登陆</a></li>
        </ul>
        <p>朗读记录</p>
        <ul data-role="listview" data-inset="true" id="user_set">
            <li><a onclick="goto_fabiao()">发布朗读</a></li>
            <li><a onclick="goto_mydiary()">我的朗读</a></li>
        </ul>
        <p>用户设置</p>
        <ul data-role="listview" data-inset="true">
            <li><a onclick="goto_change_user_inf()">修改信息</a></li>
            <li><a onclick="goto_change_user_password()">修改密码</a></li>
            <li><a onclick="goanother('feedback.html')">意见反馈</a></li>
            <li><a onclick="goanother('aboutus.html')">开发者平台</a></li>
        </ul>














    </div><!-- /content -->


</div><!-- /page -->

</body>
</html>

