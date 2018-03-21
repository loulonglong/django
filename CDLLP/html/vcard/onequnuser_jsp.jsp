<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

	<!DOCTYPE html>
	<html>
	<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<title>${qun_name}</title>
	<meta name="viewport" content="initial-scale=1.0,user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<link rel="stylesheet" href="${urlpath}/vcard/jquery.mobile-1.4.5.min.css" />
	<script src="${urlpath}/vcard/jquery-1.10.2.js"></script>
	<script src="${urlpath}/vcard/jquery.mobile-1.4.5.min.js"></script>
	<script src="${urlpath}/vcard/jquery.cookie.js"></script>
	<script src="${urlpath}/vcard/sendpost.js"></script>
	<script src="${urlpath}/vcard/jquery.form.min.js"></script>
	<script src="${urlpath}/vcard/jquery.qrcode.min.js"></script>
	<script src="${urlpath}/vcard/qunuser_fun.js"></script>
	</head>
	<body onload="getonequnuserforqunid()">
	<div data-role="page" style="background-color: #ffffff">
	<!--    <div data-role="header" data-position="fixed">

	<h1>名片组</h1>
	</div>-->
	<img>

	<div role="main" class="ui-content"  style="margin-top: -25px;margin-left: -10px;margin-right: -10px" >

	<ul data-role="listview" data-inset="true" id="alluser" qunid="${qunid}">

	</ul>
      <ul data-role="listview" data-inset="true"  data-shadow='false' data-corners='false'   style="margin-top: -10px;margin-left: -10px;margin-right: -10px">
             <li data-icon="false">
                 <a id="load_more" onclick="getonequnuserforqunid()"  style='border: none;background-color: transparent'>
                     <p id="load_more_text">加载更多...</p>
                 </a>
             </li>
        </ul>


	<br>
	<div style="width: 80%;margin-top: 10px;margin-left: 10%;border: none;background-color: #ffffff;border-radius: 10px;line-height: 100%; text-align:center">
	<br>
	<div style="margin: 0 auto" id="qrcode"></div>
	<br>
	</div>
	<br><br>
	<a onclick="tuichuqun()" data-role="button" data-theme="a" style="margin-top: 5%">退出该群组</a>
	<a onclick="daochuonequnforid()" data-role="button" data-theme="b" style="margin-top: 5%;display: none" id="daochuqun_button">导出所有用户名片</a>
	</div><!-- /content -->

	</div><!-- /page -->

	</body>
	</html>


