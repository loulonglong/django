<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>使用浏览器打开</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="${urlpath}/vcard/jquery.mobile-1.4.5.min.css" />
    <script src="${urlpath}/vcard/jquery-1.10.2.js"></script>
    <script src="${urlpath}/vcard/jquery.mobile-1.4.5.min.js"></script>
    <script src="${urlpath}/vcard/jquery.cookie.js"></script>
    <script src="${urlpath}/vcard/sendpost.js"></script>
    <script src="${urlpath}/vcard/jquery.form.min.js"></script>
</head>
<body onload="getlink()">

<div data-role="page" style="background-color: #ffffff">


    <div role="main" class="ui-content" style="margin-top: -10px">
        <a href="${openlink}" data-role="button"  class="ui-btn-active ui-state-persist" id="openlink_button" style="margin-top: 5%" target="_blank">使用浏览器打开后点击</a>

    </div><!-- /content -->


</div><!-- /page -->

</body>
</html>

