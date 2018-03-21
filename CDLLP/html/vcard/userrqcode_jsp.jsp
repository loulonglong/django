<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<title>我的名片夹</title>
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
	<script src="${urlpath}/vcard/userrqcode_fun.js"></script>

</head>
<body onload="getuserinf()">

<div data-role="page" style="background-color: #e6e6e6">

	<div role="main" class="ui-content"  style="margin-top: 1%" >
		<div style="width: 80%;height: 20%;margin-top: 5%;margin-left: 10%;border: none;background-color: #1888df;border-top-left-radius: 10px;border-top-right-radius: 10px;text-align: center;line-height: 800%">
			<label></label>
			<label userid="${user_id}" style="color: #ffffff;font-size: 30px" id="user_name">${user_name}</label>
		</div>
	<div style="text-align: center">
		<img src="${user_icon}" id="user_icon" style="width: 80px;height:80px;margin-top: -40px;background-color: #e6e6e6;border-radius: 555px">
	</div>
		<div style="width: 80%;margin-top: -70px;margin-left: 10%;border: none;background-color: #ffffff;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;line-height: 200%">
         <h1></h1><br><br>
			<label id="user_phone" style="color: #000000;margin-left: 10%;margin-right: 10%">电话：${user_phone}</label>
			<label id="user_company" style="color: #000000;margin-left: 10%;margin-right: 10%">单位：${user_company}</label>
			<label id="user_post" style="color: #000000;margin-left: 10%;margin-right: 10%">职务：${user_post}</label>
			<label id="user_email" style="color: #000000;margin-left: 10%;margin-right: 10%">邮件：${user_email}</label>
			<label id="user_school" style="color: #000000;margin-left: 10%;margin-right: 10%">学校：${user_school}</label>
			<label id="user_address" style="color: #000000;margin-left: 10%;margin-right: 10%">地址：${user_address}</label>
            <br>
		</div>

		<div style="width: 80%;margin-top: 10px;margin-left: 10%;border: none;background-color: #ffffff;border-radius: 10px;line-height: 100%; text-align:center; ">
			<br>
			<div style="margin: 0 auto" id="qrcode"></div>
			<br>
		</div>
		<br><br>
		<a onclick="lookuserdetail()" data-role="button" data-theme="a" style="margin-top: 5%">查看名片详情</a>
		<a onclick="daochuoneuser()" data-role="button" data-theme="b" style="margin-top: 5%">导出用户名片夹</a>
	    <a onclick="setstate_ok()" data-role="button" data-theme="b" style="margin-top: 5%;display:none" id="ok_button">审核通过</a>
	    <a onclick="setstate_not()" data-role="button" data-theme="b" style="margin-top: 5%;display:none" id="not_button">审核不通过</a>














	</div><!-- /content -->

</div><!-- /page -->

</body>
</html>


