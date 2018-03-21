<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    


<!DOCTYPE html>
<html lang="zh-CN"> 
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>我在二手平台有宝贝要出售</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="jquery.cookie.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script src="diary_detail_fun1.js"></script>

    <style>
    .max{width:100%;height:auto;}
    .min{width:1px;height:1px;}
    </style>

</head>
<body onload="getfromintetnet()">

<div data-role="page"  style="background-color: #dff0d8" >

    <div role="main" class="ui-content" style="background-color: #dff0d8">

      <div style="width: 80%;margin-top: 10px;margin-left: 10%;border: none;background-color: #2b542c;border-radius: 10px;line-height: 400%;text-align: center">
          <label id="diary_name"  diaryid="<%=request.getParameter("diaryid")%>"  qunid1="<%=request.getParameter("qunid1")%>"  qunid2="<%=request.getParameter("qunid2")%>"  qunid3="<%=request.getParameter("qunid3")%>" style="font-size: 20px;color: #ffffff;font-weight:lighter;text-shadow:none"></label>
      </div>
        <div style="width: 80%;margin-top: 10px;margin-left: 10%;border: none;background-color: #ffffff;border-radius: 10px;line-height: 200%">
            <br>
            <label id="diary_money" style="color: #56595c;text-align:justify;margin-left: 10%;margin-right: 10%">卖家定价：</label>
            <label id="diary_time" style="color: #56595c;text-align:justify;margin-left: 10%;margin-right: 10%">入手时间：</label>
            <label id="diary_time_end" style="color: #56595c;text-align:justify;margin-left: 10%;margin-right: 10%">交易时间：</label>
            <label id="diary_user_phone" style="color: #56595c;text-align:justify;margin-left: 10%;margin-right: 10%">手机号码：</label>
            <label id="diary_beizhu" style="color: #56595c;text-align:justify;margin-left: 10%;margin-right: 10%">卖家备注：</label>
            <br>
        </div>
        <div id="alldiaryimg" style="width: 80%;margin-top: 10px;margin-left: 10%;border: none;background-color: #ffffff;border-radius: 10px;line-height: 200%">
    <!--   <img src="images/huanchong.gif"  onclick="goto_img1_path(this)" id="diary_detai1_pic" style="width: 80%;margin-top: 10%;margin-left: 10%;margin-bottom: 10%;display:none">
            <img src="images/huanchong.gif"  onclick="goto_img2_path(this)" id="diary_detai2_pic" style="width: 80%;margin-top: 10%;margin-left: 10%;margin-bottom: 10%;display:none">
             <img src="images/huanchong.gif"  onclick="goto_img3_path(this)" id="diary_detai3_pic" style="width: 80%;margin-top: 10%;margin-left: 10%;margin-bottom: 10%;display:none">
    --> </div>
        <br><br>
        <label style="color: #000000;text-align: center;font-size: 10px">自己联系卖家偶</label>
        <a id="shoucangnum" onclick="shoucang()" data-role="button" data-theme="a" style="margin-top: 5%">浏览</a>
        <a onclick="goto_qundiary_path()" data-role="button" data-theme="a" style="margin-top: 5%">查看更多宝贝</a>


    </div><!-- /content -->


</div><!-- /page -->

</body>
</html>
