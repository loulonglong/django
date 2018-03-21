<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>


<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>发布朗读</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.form.min.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="sendpost.js"></script>
    <script src="fabiao_fun.js"></script>
    <script type="text/javascript" charset="UTF-8" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body onload="fabiao_init()">

<div data-role="page" style="background-color: #ffffff">
    <div role="main" class="ui-content"  style="background-color: #ffffff">
        <div data-role="fieldcontain"  style="border: none">
            <label for="diary_title">文章名称：</label>
            <input type="text" name="diary_title" id="diary_title" value=""  />
        </div>

        <div  data-role="fieldcontain" style="border: none">
            <label for="diary_content">文章内容：</label>
            <textarea name="diary_content" id="diary_content" rows="50" cols="25"></textarea>
        </div>

        <div>
            <label for="background_music">背景音乐：</label>
            <select id="background_music" data-shadow="false" onchange="choose_background_music_fun()">
                    <option selected value="">选择背景音乐</option>
            </select>
    <%--controls有播放组件，autoplay自动播放，loop循环播放，hidden隐藏，preload加载模式：值为auto：让浏览器自动下载整个文件，值为none：让浏览器不必预先下载文件，值为metadata：让浏览器先获取音频文件开头的数据块--%>
    <audio id="myaudio" src="" controls loop hidden preload="none"></audio>
        </div>
        <!--图片区域-->
    <!-- <label>添加的图片不要太大偶，否则容易上传失败。</label>-->
        <div style="margin-top:60px;text-align: center">
                <img id="luyin" src="images/open.png" style="width: 40%;height: 40%" onclick="">
        </div>
       <a onclick="fabiao()" id="fabiao" qunid="<%=request.getParameter("qunid")%>" userid="<%=request.getParameter("userid")%>" data-role="button" data-theme="b" style="margin-top: 60px">发布</a>


    </div><!-- /content -->


</div><!-- /page -->
</body>
</html>
