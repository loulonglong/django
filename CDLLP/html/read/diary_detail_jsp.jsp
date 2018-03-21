    <%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    

<html lang="zh-CN"> 
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>我是朗读者</title>

    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="sendpost.js"></script>
    <script src="diary_detail_fun.js"></script>
    <link rel="stylesheet" href="jquery.range.css">
    <script src="jquery.range.js"></script>
    <%--<script>--%>
    <%--$(function(){--%>
        <%--$('.single-slider').jRange({--%>
            <%--from: 0,--%>
            <%--to: 1,--%>
            <%--step: 1,--%>
            <%--format: '%s',--%>
            <%--width: "100%",--%>
            <%--showLabels: true,--%>
            <%--showScale: true--%>
        <%--});--%>
        <%--});--%>
    <%--</script>--%>
    <style type="text/css">
    .ci{  color: #ffffff;font-size:22px;text-shadow:none;text-align: center; }
    .wrap {
        white-space: normal !important;
    }
    </style>
</head>
<body onload="getfromintetnet()" style="background-color:#3a393e">
    <div style=" overflow:hidden; width:0px; height:0; margin:0 auto; position:absolute; top:-800px;">
        <img src="images/huatong.jpg">
    </div>
<div data-role="page" style="background-color:#3a393e">

    <div role="main" class="ui-content"  style="background-color:#3a393e">

      <div style="width: 100%;margin-top: 0px;margin-left: 0px;border: none;" id="diary_name" diaryid="<%=request.getParameter("diaryid")%>">
          <div style="display:inline;float:left;background-color: #000000;width: 60px;height:60px;border-radius: 100px;margin-top: 0px;margin-left: 0px;margin-bottom: 0px;">
                <div style="width:58px;height:58px;border-radius: 100px;margin:1px 1px;overflow:auto">
                        <img src="" id="diary_detai1_pic" style="width:100%;">
                </div>

           </div>
        <div style="display:inline;float:left;font-size: 20px;line-height: 20px;font-weight:lighter;text-shadow:none;width: 55%;margin-left: 5px;margin-top: 5px;color: #ffffff">
            <label id="diary_title"  style="display:inline;float:left;width: 100%;font-size:15px;" max=7 size=7></label>
            <label id="user_name"  style="display:inline;float:left;width:100%;font-size: 12px;color:#c8c8c8"></label>
        </div>
        <div style="display:inline;float:right;width: 25%;margin-top: 15px;">
            <img src="images/sousuo.png" onclick="goto_alldiary()" style="display:inline;float:right;width:18px;height:18px;margin-right: 5px;">
            <img src="images/chat.png" onclick="get_comment()" style="display:inline;float:right;width:19px;height:18px;margin-right: 25px;">
        </div>
       </div>

        <br>
        <div style="width: 100%;height:370px;margin-top: 30px;border: none;line-height: 240%;overflow: auto;" id="cidiv">
            <label class="ci" id="diary_content">
            </label>
            <div id="commentdiv" style="border:none;background-color:transparent;display:none">
                <ul data-role="listview" data-inset="true" id="allcomment" style="background-color: transparent;border:none;z-index:2;">
                </ul>
                <div style="border:none;padding-top:-10px">
                    <input data-role="none" type="text" id="commenttext" style="border-radius:5px;border: none;display:inline;float:left;width:80%;height:30px;background-color:#ffffff;margin-right:10px;">
                    <input type="button" id="commentbutton" data-role="none" onclick="addcomment()" style="font-size:14px;display:inline;float:right;width:15%;height:33px;border-radius:5px;border:none" value="评论">
                </div>
            </div>
        </div>

    <div data-role="none" style="width:80%;height:10px;margin-left:10%;margin-top:15px" id="rangdiv">
        <input type="hidden" id="myrange" class="single-slider"  value="0" />
    </div>
        <div style="width: 80%;margin-top:30px;text-align: center;margin-left:10%">
             <img src="images/pre.png"  onclick="prefun()"  style="width: 40px;height:40px;margin-left: 0px;padding-bottom: 5px">
             <img src="images/open.png"  onclick="openfun()" id="openaudio" style="width: 60px;height:60px;margin-left:20px;">
             <img src="images/next.png"  onclick="nextfun()"  style="width: 40px;height:40px;margin-left: 20px;padding-bottom: 5px">
        </div>

        <%--<a onclick="goto_qundiary_path()" data-role="button" data-theme="a" style="margin-top: 5%">查看更多精品</a>--%>


    </div><!-- /content -->

</div><!-- /page -->
    <%--controls有播放组件，autoplay自动播放，loop循环播放，hidden隐藏，preload加载模式：值为auto：让浏览器自动下载整个文件，值为none：让浏览器不必预先下载文件，值为metadata：让浏览器先获取音频文件开头的数据块--%>
    <audio id="myaudio" src="" controls loop hidden preload="none"></audio>
</body>
</html>
