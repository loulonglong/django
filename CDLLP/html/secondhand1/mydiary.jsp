<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>我的发布</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="jquery.cookie.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script src="mydiary_fun.js"></script>
</head>
<body onload="getmydiaryinf()">

<div data-role="page">

    <div data-role="navbar"  style="background-color: #e8e8e8;margin-top: 0px">
        <ul>
            <li  id="type1show"><a id="type1" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="gotypepath('1')">学习办公</a></li>
            <li  id="type2show"><a id="type2" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="gotypepath('2')">生活服务</a></li>
            <li  id="type3show"><a id="type3" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="gotypepath('3')">文体用品</a></li>
            <li  id="type4show"><a id="type4" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="gotypepath('4')">电子电器</a></li>
         </ul>
    </div>
<br>
    <div role="main" class="ui-content"  style="margin-top: -45px;margin-left: -10px;margin-right: -10px;background-color: transparent" >


        <ul data-role="listview" data-inset="true" id="alldiary"  qunid="<%=request.getParameter("qunid")%>" userid="<%=request.getParameter("userid")%>"  typeindex="<%=request.getParameter("typeindex")%>">



        </ul>

    </div><!-- /content -->

    <div data-role="footer" data-position="fixed">
        <div data-role="navbar">
            <ul>
                <li><a  onclick="goto_fabiao()" data-icon="home">发布交易</a></li>
                <li><a href="#" data-icon="gear"  class="ui-btn-active ui-state-persist">我的发布</a></li>
            </ul>
        </div>
    </div>

</div><!-- /page -->

</body>
</html>


