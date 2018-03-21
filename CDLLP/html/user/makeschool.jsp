<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>绑定学校</title>
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
    <script src="makeschool.js"></script>
</head>
<body onload="init()">

<div data-role="page">

   <!--    <div data-role="header" data-position="fixed"  data-theme="a">
        <h1>注册</h1>
    </div>&lt;!&ndash; /header &ndash;&gt;-->

    <div role="main" class="ui-content">


        <div>
            <label for="choose_province">选择省份：</label>
            <select id="choose_province" data-shadow="false" onchange="choose_province_fun(this)" userid="<%=request.getParameter("userid")%>">

            </select>
        </div>
        <div>
            <label for="choose_school">选择大学：</label>
            <select id="choose_school" name="choose_school" data-shadow="false" onchange="choose_school_fun(this)">

            </select>
        </div>

        <br>
    <div>
        <a onclick="makeschool_fun()" id="register_button" data-role="button" data-theme="b" style="margin-top: 1%">绑定</a>
    <!--    <a onclick="gotologin()" data-role="button" data-theme="a" style="margin-top: 8%">已有账号</a>    -->
    </div>

    </div><!-- /content -->


</div><!-- /page -->

</body>
</html>
