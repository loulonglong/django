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
    <script src="addmanydiary.js"></script>
</head>
<body onload="init()">

<div data-role="page">

<!--    <div data-role="header" data-position="fixed"  data-theme="a">
        <h1>登陆</h1>
    </div>&lt;!&ndash; /header &ndash;&gt;-->

    <div role="main" class="ui-content">

      <div data-role="fieldcontain"  style="border: none;display:none">
            <label for="register_openid">qunid：</label>
            <input type="text" name="name" id="qunidinput" disabled="true" value="<%=request.getParameter("qunid")%>"  />
        </div>

<br><br><br><br><br><br><br><br>

        <a onclick="adddiary()" id="login_button" data-role="button" data-theme="b" style="margin-top: 8%">登陆</a>


    </div><!-- /content -->


</div><!-- /page -->

</body>
</html>
