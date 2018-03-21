<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>



<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>公告天下</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <link rel="stylesheet" href="swipebox.css">
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="jquery.cookie.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script src="jquery.swipebox.min.js"></script>
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
<body onload="gonggaoinit()">


<div data-role="page" style="background-color: #f4f4f4">

    <!--  <div data-role="navbar" style="background-color: #e8e8e8;margin-top: 0px">
        <ul id="alltype">
              <li id="t1"><a id='type1'  style='background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none' onclick='goto_type_html("1")'></a></li>
              <li id="t2"><a id='type2' style='background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none' onclick='goto_type_html("2")'></a></li>
              <li id="t3"><a id='type3'  style='background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none' onclick='goto_type_html("3")'></a></li>
              <li id="t4"><a id='type4'  style='background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none' onclick='goto_type_html("4")'></a></li>
         </ul>
    </div> -->


    <div role="main" class="ui-content" class="ui-btn-inline" style="margin-left: -20px;margin-right: -20px;border: none;background-color: #f4f4f4">

        <ul data-role="listview" data-shadow='false' data-corners='false' data-inset="true" id="alldiary" qunid="<%=request.getParameter("qunid")%>" style="margin-top: -20px;background-color: #f4f4f4">

        </ul>

        <ul data-role="listview" data-inset="true" data-shadow='false' data-corners='false' style="margin-top: -10px">
             <li data-icon="false">
                 <a id="load_more" onclick="getalldiaryinf()" style='border: none;background-color: #f4f4f4'>
                     <p id="getmore">点击加载更多</p>
                 </a>
             </li>
        </ul>




    </div><!-- /content -->

    <div data-role="footer" data-position="fixed" class="ui-btn-inline"  style="float:right;margin-left: 75%;border: none;background-color:transparent;width: 90px;height: 90px" >
        <img id="fabiaobutton" src="images/fabiao.png" onclick="gotofabiao()" style="width: 70px;height: 70px">  <!--需要大于300*300  且只能是jpg  gif格式-->
    </div>

</div><!-- /page -->

 <script type="text/javascript">
    $(function() {
    $("#pic1_path").click(function(event) {
    return false;
    });
    });


    jQuery(function($) {
    $(".swipebox").swipebox();
    });
</script>

</body>
</html>


