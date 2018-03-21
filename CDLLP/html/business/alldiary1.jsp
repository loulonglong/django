<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>



<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>校园二手平台宝贝列表</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="jquery.cookie.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script src="alldiary1.js"></script>

</head>
<body onload="init()">


<div data-role="page" style="background-color: #ffffff">

     <!--  <div data-role="header" data-position="fixed">
        <h1>宝贝列表</h1>
    </div>-->
    <!--
    <div data-role="navbar"  style="background-color: #e8e8e8;margin-top: 0px">
       <ul>
         <li  id="type1show"><a id="type1" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('1')">二手宝贝</a></li>
         <li  id="type2show"><a id="type2" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('2')">优惠新品</a></li>
         <li  id="type3show"><a id="type3" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('3')">有偿服务</a></li>
         <li  id="type4show"><a id="type4" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('4')">网络资源</a></li>
       </ul>
    </div>
    -->

    <div role="main" class="ui-content"  style="margin-top: -15px;margin-left: -10px;margin-right: -10px;background-color: transparent"  >
        <input type="text" name="sousuo_name" id="sousuo_name" value="" placeholder="宝贝详情页可分享到朋友圈" onkeypress="EnterPress(event)" />
        <ul data-role="listview" data-inset="true" id="alldiary" style="margin-top: -1px" qunid1="<%=request.getParameter("qunid1")%>"  qunid2="<%=request.getParameter("qunid2")%>"  qunid3="<%=request.getParameter("qunid3")%>">

          <!--  <li>
                <a diaryindex="0" onclick="goto_diarydetail_show(this)">
                    <h2>湖南小天鹅饮食有限公司</h2>
                    <h6>合同号123456</h6>
                    <span class="ui-li-count" style="color: #00a78e">有图</span>
                </a>
            </li>-->
        </ul>

        <ul data-role="listview" data-inset="true"  data-shadow='false' data-corners='false'  style="margin-top: -10px">
             <li data-icon="false">
                 <a id="load_more" onclick="getfromint()"  style='border: none;background-color: transparent'>
                     <p id="getmore">加载更多...</p>
                 </a>
             </li>

        </ul>

    <!-- <div style="text-align: center">
            <img src="images/qrcode1.jpg" style="width: 100%;margin-top: 10px">
        </div>
    -->
    </div><!-- /content -->

    <div data-role="footer" data-position="fixed">
        <div data-role="navbar">
            <ul>
                <li><a href="#" data-icon="home" class="ui-btn-active ui-state-persist">二手宝贝</a></li>
                <li><a onclick="gotoalldiary2()" data-icon="gear">外包服务</a></li>
                <li><a onclick="gotoalldiary3()" data-icon="star">网络资源</a></li>
            </ul>
        </div>
    </div>

</div><!-- /page -->
</body>
</html>


