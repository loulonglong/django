    <%@ page language="java" contentType="text/html; charset=utf-8"
pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>票券管理</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css" />
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/jquery.mobile-1.4.5.min.js"></script>
    <script src="sendpost.js"></script>
</head>
<body onload="getmydiaryinf()">

<div data-role="page">

    <div data-role="navbar"  style="background-color: #e8e8e8;margin-top: 0px">
        <ul>
            <li  id="type1show"><a id="type1" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="gotypepath('1')">已上传</a></li>
            <li  id="type2show"><a id="type2" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="gotypepath('2')">出售中</a></li>
            <li  id="type3show"><a id="type3" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="gotypepath('3')">已汇款</a></li>
            <li  id="type4show"><a id="type4" style="background-color: #e8e8e8;border: none;font-size: 15px;font-weight:lighter;text-shadow:none" onclick="gotypepath('4')">纠纷中</a></li>
         </ul>
    </div>
    <div role="main" class="ui-content"  style="margin-left: -10px;margin-right: -10px;width:96%;background-color: transparent" >


        <ul data-role="listview" data-inset="true" id="alldiary" style='margin-top:-15px;background-color: transparent'  qunid="<%=request.getParameter("qunid")%>" userid="<%=request.getParameter("userid")%>"  typeindex="<%=request.getParameter("typeindex")%>">


        </ul>

        <ul data-role="listview" data-inset="true"  data-shadow='false' data-corners='false'  style="margin-top: -10px">
             <li data-icon="false">
                 <a id="load_more" onclick="getfrominternet()"  style='border: none;background-color: transparent'>
                     <p id="getmore">加载更多...</p>
                 </a>
             </li>
        </ul>

    </div><!-- /content -->
   <div data-role="footer" data-position="fixed">
        <div data-role="navbar">
            <ul>
                <li><a  onclick="goto_jiaocheng()"  data-icon="home">交易教程</a></li>
                <li><a  href="#" data-icon="calendar" class="ui-btn-active ui-state-persist">券码管理</a></li>
                <li><a  onclick="goto_setting()" data-icon="user">账户中心</a></li>
            </ul>
        </div>
    </div>


</div><!-- /page -->

<script type='text/javascript'>
 var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
    var userid;
    var alldiary = new Array();
    var somediary = new Array();
    var somediarynum=0;
    var alldiarynum=0;
    var pagenum=1;
    var qunid="";
    var typeindex="1";

    //查询我的日志
    function getmydiaryinf() {
        userid = $('#alldiary').attr("userid");
        qunid = $('#alldiary').attr("qunid");
        typeindex = $('#alldiary').attr("typeindex");
        goto_type_html(typeindex);
    }
    function goto_type_html(typeindexstr)
    {
        typeindex = typeindexstr.toString();
        sessionStorage["luanpeng_somealldiary"] = "";
        pagenum=1;
        $("#alldiary").html="";
        alldiary = new Array();
        alldiarynum=0;
        $("#type1").css('color','black');
        $("#type2").css('color','black');
        $("#type3").css('color','black');
        $("#type4").css('color','black');
        if(typeindex=="1")           $("#type1").css('color','green');
        if(typeindex=="2")           $("#type2").css('color','green');
        if(typeindex=="3")           $("#type3").css('color','green');
        if(typeindex=="4")           $("#type4").css('color','green');
        getfrominternet();
    }

    function getfrominternet(){
        var url = HTTP_USERQUNDAIRY_FORTYPE;
        var json = {
            "duserid":userid,
            "suserid":userid,
            "qunid":qunid,
            "typeindex":typeindex,
            "page":pagenum.toString()
        };
        pagenum+=1;

        sendDataByPost(url,json,function(backstr){
            if(backstr.respcode == "0")
             {
                if(backstr.data==null || backstr.data=="")
                {
                    $("#load_more").css('display','none');
                }else{
                    pagenum++;
                    localStorage["luanpeng_somediary"] =JSON.stringify(backstr.data);
                    //alert("查询成功");
                    qundiary_init();
                }
            }else{
                alert("查询失败");
            }
        });
    }

    //读取所有日志
    function qundiary_init()
    {
        somediarynum=0;
        var alldiarystr = localStorage["luanpeng_somediary"];
        somediary=JSON.parse(alldiarystr);
        $.each(somediary, function(index,value)
        {
            somediary[somediarynum] = value;
            alldiary[alldiarynum] = value;
            somediarynum++;
            alldiarynum++;
        });
        addalldiary_show();
    }

    //更新全部日志
    function addalldiary_show()
    {
        $('#alldiary').html("");
        for(var i=0;i<alldiarynum;i++)
        {
            var htmlstr=change_to_htmlstr1(alldiary[i],i);
            $('#alldiary').append(htmlstr);
        }
    }

    function change_to_htmlstr1(diary,diaryindex)
    {
        var str="";
        var contentstr = diary.content;
        var contentarr = contentstr.split("---");


        str = str+"<li class='ui-li-has-count ui-li-has-thumb ui-first-child  ui-last-child' style='margin-top: 5px;background-color: transparent'>";
        str = str+"<a href='' class='ui-btn'>";

        str = str+ "<img class='ui-li-thumb' src='images/img1.jpg' style='height: 65px;width:65px;margin-top: 20px;border-radius:5px;margin-left: 15px' >";
        str = str+ "<p style='font-size: 16px;margin-top: -2px'>"+diary.content+"</p>";
        str = str+ "<p style='font-size: 10px;margin-top: -2px'>"+"服务器:橙子权益"+"</p>";
        str = str+ "<p style='font-size: 10px;margin-top: -2px'>"+"券码:"+diary.serial+"</p>";
        str = str+ "<p style='font-size: 10px;margin-top: -2px'>"+"金额:"+diary.money/10.0+"</p>";
        if(diary.type=='1')
            str = str+ "<span class='ui-li-count' diaryindex='"+diaryindex+"' onclick='xiajia(this,2)'  style='color: #00a78e;margin-top: 20px;'>"+"确认删除"+"</span>";
        <%--if(diary.type=='2')--%>
            <%--str = str+ "<span class='ui-li-count' diaryindex='"+diaryindex+"' onclick='xiajia(this,1)'  style='color: #00a78e;margin-top: 20px;'>"+"确认上线"+"</span>";--%>
        if(diary.type=='4')
            str = str+ "<p style='font-size: 10px;margin-top: -2px;color:red'>"+"原因:"+diary.urlcontent+"</p>";

        str = str+"</a></li>";

        return str;
    }

    //日志下架
    function xiajia(data,newtype)
    {
        var diaryindex = parseInt(data.getAttribute('diaryindex'));
        var diaryid = alldiary[diaryindex].id;
         var url = HTTP_DEL_MOOD;
            var json = {
                "diaryID":diaryid.toString(),
                'userID':userid.toString(),
            };
            sendDataByPost(url,json,function(backstr){
                if(backstr.respcode == "0")
                 {
                    window.location.reload(true);
                }else{
                    alert("操作失败");
                }
            });
    }
    function gotypepath(typeindexstr) {
        window.location.href = "mydiary.jsp?qunid="+qunid+"&userid="+userid+"&typeindex="+typeindexstr;
    }
    function goto_setting(){
        window.location= 'setting.jsp?userid='+$('#alldiary').attr('userid')
    }
    function goto_jiaocheng(){
        window.location= 'jiaocheng.jsp?userid='+$('#alldiary').attr('userid')
    }

</script>
</body>
</html>


