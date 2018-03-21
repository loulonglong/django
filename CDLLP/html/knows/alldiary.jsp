<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>



<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>校园知道</title>
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
<style>
    .wrap1{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    }
    .wrap {
    white-space: normal !important;
    }
</style>
<body onload="knowinit()">


<div data-role="page" style="background-color: #f4f4f4">

    <div style="margin-top: -5px;margin-left: 2px;margin-right: 2px"  data-shadow='false'  data-corners='false'>
       <input type="text" name="sousuo_name"  data-shadow='false'  data-corners='false' id="sousuo_name" style="margin-top: -2px;margin-left: 5px;margin-right: 5px" value="" placeholder="输入关键词搜索" onkeypress="EnterPress(event)" />
    </div>
    <div role="main" class="ui-content" class="ui-btn-inline" style="margin-top: -5px;margin-left: -20px;margin-right: -20px;border: none;background-color: #f4f4f4">
        <ul data-role="listview" data-shadow='false' data-corners='false' data-inset="true" id="alldiary" qunid="<%=request.getParameter("qunid")%>" style="margin-top: -20px;background-color: #f4f4f4">

        </ul>

        <ul data-role="listview" data-inset="true" data-shadow='false' data-corners='false' style="margin-top: -10px">
             <li data-icon="false">
                 <a id="load_more" onclick="getfromint()" style='border: none;background-color: #f4f4f4'>
                     <p id="getmore">点击加载更多</p>
                 </a>
             </li>
        </ul>

    </div><!-- /content -->

    <div data-role="footer" data-position="fixed" class="ui-btn-inline"  style="float:right;margin-left: 75%;border: none;background-color:transparent;width: 90px;height: 90px" >
        <img src="images/wen.png" onclick="gotofabiao()" style="width: 70px;height: 70px">  <!--需要大于300*300  且只能是jpg  gif格式-->
    </div>

</div><!-- /page -->
</body>
</html>


