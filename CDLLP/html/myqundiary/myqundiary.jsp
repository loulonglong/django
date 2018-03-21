<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="zh-CN">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>${qunname}</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="${urlpath}/myqundiary/jquery.mobile-1.4.5.min.css" />
    <script src="${urlpath}/myqundiary/jquery-1.10.2.js"></script>
    <script src="${urlpath}/myqundiary/jquery.mobile-1.4.5.min.js"></script>
    <script src="${urlpath}/myqundiary/jquery.cookie.js"></script>
    <script src="${urlpath}/myqundiary/sendpost.js"></script>
    <script src="${urlpath}/myqundiary/jquery.form.min.js"></script>
    <script src="${urlpath}/myqundiary/myqundiary_fun.js"></script>
    <style>
        body,h1,h2,h3,h4,h5,h6,p,ul,li,dl,dt,dd{padding:0;margin:0;font-size:12px;font-family:Arial,Verdana, Helvetica, sans-serif;word-break:break-all;word-wrap:break-word;}
        li{list-style:none;}img{border:none;}em{font-style:normal;}
        a{color:#555;text-decoration:none;outline:none;blr:this.onFocus=this.blur();}
        a:hover{color:#000;text-decoration:underline;}
        .clear{height:0;overflow:hidden;clear:both;}
        .play_content{
            padding:0px;
            overflow:hidden;
            width:98%;
            margin:auto;
        }
        .play{width:100%;height:230px;border:#ccc 0px solid;  margin:auto;overflow:hidden;position:absolute;}
        .textbg{margin-top:200px;z-index:1;filter:alpha(opacity=40);opacity:0.4;width:100%;height:30px;position:absolute;background:#000;}
        .text{margin-top:200px;z-index:2;padding-left:10px;font-size:14px;width:70%;color:#fff;line-height:30px;font-weight:lighter;text-shadow:none; overflow:hidden;position:absolute;cursor:pointer;}
        .num{margin:205px 1% 0 55%;z-index:3;width:45%; text-align:right;position:absolute;height:25px;float:right;}
        .num a{margin:0 2px;width:20px;height:20px;font-size:14px; font-weight:lighter;line-height:20px;cursor:pointer;color:#000;padding:0 5px;background:#D7D6D7;text-align:center}
        .num a.on{background:#FFD116;color:#A8471C;}
        .num a.on2{background:#D7D6D7;color:#000;}
        .img_content img{width:100%;height:230px;font-weight:lighter;text-shadow:none}

        .wrap {
        white-space: normal !important;
        }
    </style>
</head>
<body onload="init()">

<div data-role="page">

    <div style="height: 200px;margin-top: -2px" id="qunheader" qunid="${qunid}">
        <div class="play">
        <ul>
            <li class="textbg"></li>
            <li class="text"></li>
            <li class="num" ><a>1</a><a>2</a><a>3</a></li>
            <li class="img_content">
                <a href="${url1_path}" ><img src="${img1_path}" alt="${img1_text}" /></a>
                <a href="${url2_path}" ><img src="${img2_path}" alt="${img2_text}" /></a>
                <a href="${url3_path}" ><img src="${img3_path}" alt="${img3_text}" /></a>
            </li>
        </ul>
        </div>

    </div>

    <div data-role="navbar" style="background-color: #e8e8e8;margin-top: 30px">
        <ul>
            <li  id="type1show"><a id="type1" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('1')">${type1}</a></li>
            <li  id="type2show"><a id="type2" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('2')">${type2}</a></li>
            <li  id="type3show"><a id="type3" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('3')">${type3}</a></li>
            <li  id="type4show"><a id="type4" style="background-color: #e8e8e8;border: none;font-size: 16px;font-weight:lighter;text-shadow:none" onclick="goto_type_html('4')">${type4}</a></li>

        </ul>
    </div>

    <div role="main" class="ui-content">


        <ul data-role="listview"  data-inset="true"  data-shadow='false' data-corners='false' id="alldiary" typeindex="${typeindex}"  style="margin-top: -10px;margin-left: -10px;margin-right: -10px" >

        </ul>

    <ul data-role="listview" data-inset="true" data-shadow='false' data-corners='false' style="margin-top: -10px;margin-left: -10px">
         <li data-icon="false">
                 <a id="load_more" onclick="getalldiaryinf()" style='border: none;background-color: transparent'>
                     <p id="load_more_text">加载更多...</p>
                 </a>
             </li>

        </ul>

    </div><!-- /content -->



</div><!-- /page -->

</body>
</html>


