<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>



<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>精选视频</title>
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
<body onload="init()">


<div data-role="page" style="background-color: #ffffff">


    <div role="main" class="ui-content" >
        <ul data-role="listview" data-shadow='false' data-corners='false' data-inset="true" id="alldiary" qunid="<%=request.getParameter("qunid")%>" style="margin-top: -10px;background-color: transparent">

        </ul>

     <ul data-role="listview" data-inset="true"  data-shadow='false' data-corners='false'  style="margin-top: -10px">
             <li data-icon="false">
                 <a id="load_more" onclick="getalldiaryinf()"  style='border: none;background-color: transparent;margin-left: -10px'>
                     <p id="getmore">加载更多...</p>
                 </a>
             </li>

        </ul>



    </div><!-- /content -->

</div><!-- /page -->
</body>
</html>


