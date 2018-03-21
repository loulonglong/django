<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>



<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>校园信息服务中心</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="jquery.cookie.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script src="alldiary_fun.js"></script>

</head>
<body onload="init()"  style="background-color: lightblue">


<div data-role="page" style="background-color: lightblue">


    <div role="main" class="ui-content"  style="background-color: lightblue" >

        <div class="ui-grid-b" id="alldiary" style="margin-top:25%"  qunid="<%=request.getParameter("qunid")%>">




    </div><!-- /content -->

</div><!-- /page -->
</body>
</html>


