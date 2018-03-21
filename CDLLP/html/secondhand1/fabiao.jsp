<%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>


<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>发布宝贝</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="jquery.mobile-1.4.5.min.css" />
    <script src="jquery-1.10.2.js"></script>
    <script src="jquery.mobile-1.4.5.min.js"></script>
    <script src="jquery.cookie.js"></script>
    <script src="sendpost.js"></script>
    <script src="jquery.form.min.js"></script>
    <script type='text/javascript' src='jquery-2.0.3.min.js'></script>
    <script type='text/javascript' src='LocalResizeIMG.js'></script>
    <script type='text/javascript' src='mobileBUGFix.mini.js'></script>
    <script src="fabiao_fun.js"></script>
</head>
<body onload="fabiao_init()">

<div data-role="page" style="background-color: #ffffff">

    <div data-role="header" data-position="fixed"  data-theme="a">
       <!-- <a onclick="goanother('setting.html')" data-role="button" class="ui-btn-left" data-theme="b">返回</a>-->
        <a onclick="fabiaojiaoyi()" data-role="button" class="ui-btn-right" data-theme="b" id="fabiao_button">发布</a>
        <h1>发布交易</h1>
    </div><!-- /header -->

    <div role="main" class="ui-content"  style="background-color: #ffffff">

       <!--出售或者求购-->
       <div>
            <label for="qun_type">出售OR求购：</label>
            <select id="qun_type" data-shadow="false" onchange="choose_diary_fun(this)">
                <option value="0">出售</option>
                <option value="1">求购</option>
            </select>
        </div>
       <!--宝贝类型-->
         <div>
            <label for="choose_type">选择类型：</label>
            <select id="choose_type" data-shadow="false" onchange="choose_type_fun(this)" qunid="<%=request.getParameter("qunid")%>" userid="<%=request.getParameter("userid")%>">
                <option value="0">学习办公</option>
                <option value="1">生活服务</option>
                <option value="2">文体用品</option>
                <option value="3">电子电器</option>
            </select>
        </div>

    <div id="secondhanddiv">
        <!--宝贝名称-->
        <div data-role="fieldcontain"  style="border: none">
            <label for="secondhand_name">宝贝名称：</label>
            <input type="text" name="name" id="secondhand_name" value=""  />
        </div>

        <!--入手时间-->
        <div id="secondhand_time_div" data-role="fieldcontain" style="border: none">
            <label for="secondhand_time">入手时间：</label>
            <input type="date" name="name" id="secondhand_time" value=""  />
        </div>
        <!--出售时间-->
        <div data-role="fieldcontain" style="border: none">
            <label for="secondhand_time_end">交易时间：</label>
            <input type="date" name="name" id="secondhand_time_end" value=""  />
        </div>

        <!--付款金额-->
        <div data-role="fieldcontain" style="border: none">
            <label for="secondhand_money">宝贝单价：</label>
            <input type="text" name="name" id="secondhand_money" value="" placeholder="仅数字" />

        </div>

        <!--备注-->
        <div data-role="fieldcontain" style="border: none">
            <label for="secondhand_beizhu">备注：</label>
            <input type="text" name="name" id="secondhand_beizhu" value=""  />
        </div>
    </div>




        <!--图片区域-->
    <!-- <label>添加的图片不要太大偶，否则容易上传失败。</label>-->
        <div class="ui-grid-b" id="alldiaryimg" style="margin-top: 2%">

            <div id="img1_div" class="ui-block-a">
                <form id="file1_upload_form" action="" method="post" enctype="multipart/form-data">
                    <input data-role="none" id="pic1_file"  type="file" name="file" style="display:none">
                    <img id="pic1_path" src="images/add.png" style="width: 90%;height: 90%" onclick="javascript:document.getElementById('pic1_file').click();">
                </form>
            </div>
            <div id="img2_div" class="ui-block-b">
                <form id="file2_upload_form" action="" method="post" enctype="multipart/form-data">
                    <input data-role="none" id="pic2_file" type="file" name="file" style="display:none">
                    <img id="pic2_path" src="images/add.png" style="width: 90%;height: 90%" onclick="javascript:document.getElementById('pic2_file').click();">
                </form>
            </div>
            <div id="img3_div" class="ui-block-c">
                <form id="file3_upload_form" action="" method="post" enctype="multipart/form-data">
                    <input data-role="none" id="pic3_file" type="file" name="file" style="display:none">
                    <img id="pic3_path" src="images/add.png" style="width: 90%;height: 90%" onclick="javascript:document.getElementById('pic3_file').click();">
                </form>
            </div>
        </div>

        <div data-role="footer" data-position="fixed">
            <div data-role="navbar">
                <ul>
                    <li><a href="#" data-icon="home"   class="ui-btn-active ui-state-persist">发布交易</a></li>
                    <li><a  onclick="goto_mydiary()"  data-icon="gear">我的发布</a></li>
                </ul>
            </div>
        </div>

    </div><!-- /content -->


</div><!-- /page -->
</body>
</html>
