<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="zh-CN">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>精品课堂</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="jquery.cookie.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script src="alldiary.js"></script>

</head>
<body onload="getfrominternet()">

<div data-role="page">


    <div data-role="navbar"  style="background-color: #e8e8e8;margin-top: 0px">
       <ul>
         <li  id="type1show"><a id="type1" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('1')"></a></li>
         <li  id="type2show"><a id="type2" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('2')"></a></li>
         <li  id="type3show"><a id="type3" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('3')"></a></li>
         <li  id="type4show"><a id="type4" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('4')"></a></li>
    <li  id="type5show"><a id="type5" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('5')"></a></li>
    <!--   <li  id="type6show"><a id="type6" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('6')"></a></li>
    -->
    </ul>
    </div>

    <div role="main" class="ui-content">


        <ul data-role="listview"  data-inset="true"  data-shadow='false' data-corners='false' id="alldiary"  qunid="<%=request.getParameter("qunid")%>" style="margin-top: -10px;margin-left: -10px;margin-right: -10px" >

        </ul>

    <ul data-role="listview" data-inset="true" data-shadow='false' data-corners='false' style="margin-top: -10px;margin-left: -20px">
         <li data-icon="false">
                 <a id="load_more" onclick="getalldiaryinf()" style='border: none;background-color: transparent'>
                     <p id="load_more_text" style="font-size: 12px;font-weight:lighter;text-shadow:none">加载更多...</p>
                 </a>
             </li>

        </ul>

    </div><!-- /content -->



</div><!-- /page -->

</body>
</html>


