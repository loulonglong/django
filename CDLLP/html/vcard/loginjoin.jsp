<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>


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
	<script src="login_fun.js"></script>
	</head>
	<body onload="login_init()">

	<div data-role="page">

	<div role="main" class="ui-content">

	<div data-role="fieldcontain" style="border: none">

	<label for="login_phone">手机号码：</label>
	<input type="text" name="login_phone" id="login_phone" value=""  />

	</div>

	<div data-role="fieldcontain"  style="margin-top: 1%;border: none">



	<label for="login_password">登陆密码：</label>
	<input type="password" name="login_password" id="login_password" value=""  />
	</div>
	<div  class="ui-btn-inline" style="width: 40%;border: none">
	<button onclick="forget_password()" class="ui-btn-inline" >忘记密码？</button>
	</div>

	<div  role="" class="ui-btn-inline" style="float: right;width: 35%">
	<button onclick="gotoregister()" class="ui-btn-inline" >注册</button>
	</div>



	<a qunid="<%=request.getParameter("qunid")%>" id="login_button" onclick="login_fun()" data-role="button" data-theme="b" style="margin-top: 5%">登陆</a>

	</div><!-- /content -->


	</div><!-- /page -->

	</body>
	</html>
