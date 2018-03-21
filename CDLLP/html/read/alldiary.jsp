<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>



<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>朗读者</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <script src="jquery-1.10.2.js"></script>
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="sendpost.js"></script>
    <script src="alldiary.js"></script>

</head>
<body onload="init()" >


<div data-role="page" style="background-color: #ffffff">


    <div role="main" class="ui-content"  style="margin-top: -15px;margin-left: -10px;margin-right: -10px;background-color: transparent"  >
        <input type="text" name="sousuo_name" id="sousuo_name" value="" placeholder="搜索关键字" onkeypress="EnterPress(event)" style="border-radius:2px;" />
        <ul data-role="listview" data-inset="true" id="alldiary" style="margin-top: -1px" qunid="<%=request.getParameter("qunid")%>">

        </ul>

        <ul data-role="listview" data-inset="true"  data-shadow='false' data-corners='false'  style="margin-top: -10px">
             <li data-icon="false">
                 <a id="load_more" onclick="getfromint()"  style='border: none;background-color: transparent'>
                     <p id="getmore">加载更多...</p>
                 </a>
             </li>

        </ul>

    </div><!-- /content -->



</div><!-- /page -->
</body>
</html>


