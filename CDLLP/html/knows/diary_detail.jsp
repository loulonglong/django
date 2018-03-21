<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    



<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>谁来帮我解答？</title>
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
    <script src="diary_detail_fun.js"></script>
    <script src="jquery.swipebox.min.js"></script>
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
<body onload="getdiaryfromlin()">

<div data-role="page" style="background-color: #f4f4f4" >


    <div role="main" class="ui-content" class="ui-btn-inline" style="background-color: #f4f4f4;margin-left: -20px;margin-right: -20px;margin-top: -30px" >
        <ul data-role="listview" data-inset="true" data-shadow='false' style="background-color: #ffffff" data-corners='false' id="diary" diaryid="<%=request.getParameter("diaryid")%>">
           <li data-icon="false"  style="background-color: #ffffff;border: none;border-bottom: solid;border-top: solid;border-bottom-width: thin;border-top-width: thin;border-bottom-color: #fde8d8;border-top-color: #fde8d8">
                <p  class="wrap" style='color:#1888df;font-size: 25px' id="diary_title"></p>
                <p class="wrap"  style="font-size: 15px" id="diary_content"></p>
                <div class="ui-grid-b" id="alldiaryimg" style="margin-top: -10px">
                    <div id="img1_div" class="ui-block-a" style="height:75px;overflow: hidden;display: none">
                         <a id="pic1_path_yuan" href='javascript:void(0);' target='_blank' class='swipebox' title='原图'>
                            <img id="pic1_path" src="images/huanchong.gif" style="width: 90%" title="原图" alt="原图">
                          </a>
                    </div>
                    <div id="img2_div" class="ui-block-b"  style="height:75px;overflow: hidden;display: none">
                          <a id="pic2_path_yuan" href='javascript:void(0);' target='_blank' class='swipebox' title='原图'>
                            <img id="pic2_path" src="images/huanchong.gif" style="width: 90%" title="原图" alt="原图">
                           </a>
                    </div>
                    <div id="img3_div" class="ui-block-c"  style="height:75px;overflow: hidden;display: none">
                        <a id="pic3_path_yuan" href='' target='_blank' class='swipebox' title='原图'>
                            <img id="pic3_path" src="images/huanchong.gif" style="width: 90%" title="原图" alt="原图">
                        </a>
                    </div>
                </div>

                    <p style='color:#a1a8ae;margin-top: 20px' id="diary_time"></p>
            </li>
        </ul>

        <ul data-role="listview" data-inset="true" data-shadow='false' data-corners='false' id="allcomment" style="margin-top: -10px">

        </ul>

    </div><!-- /content -->
    <div data-role="footer" data-position="fixed" class="ui-btn-inline"  style="float:right;margin-left: 75%;border: none;background-color:transparent;width: 90px;height: 90px" >
        <img src="images/da.png" onclick="da_fun()" style="width: 70px;height: 70px">  <!--需要大于300*300  且只能是jpg  gif格式-->
    </div>

</div><!-- /page -->

    <script type="text/javascript">
    jQuery(function($) {
    $(".swipebox").swipebox();
    });
    </script>

</body>
</html>
