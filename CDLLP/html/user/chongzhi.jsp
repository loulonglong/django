<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>
        <%
String urlpath = "http://www.525heart.com";

        %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>充值</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="chongzhi.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script type="text/javascript" charset="UTF-8" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body>

<div data-role="page" style="background-color: #ffffff">

    <div style="display:none">
        <label id="timeStamp">11</label>
        <label id="nonceStr">11</label>
        <label id="packAge">11</label>
        <label id="partnerId">11</label>
        <label id="prepayId">11</label>
        <label id="paySign">11</label>
        <label id="appId">11</label>
    </div>
    <div role="main" class="ui-content">
    <button onclick="chongzhiinit(this)" money="10" class="ui-btn-inline" openid="<%=request.getParameter("openid")%>" >10元</button>
    <button onclick="chongzhiinit(this)" money="20" class="ui-btn-inline"  openid="<%=request.getParameter("openid")%>">20元</button>
    <button onclick="chongzhiinit(this)" money="50" class="ui-btn-inline"  openid="<%=request.getParameter("openid")%>">50元</button>
    <button onclick="chongzhiinit(this)" money="100" class="ui-btn-inline"  openid="<%=request.getParameter("openid")%>">100元</button>

    </div><!-- /content -->

</div><!-- /page -->

</body>
</html>
