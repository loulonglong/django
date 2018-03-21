//登陆界面初始化函数

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
	userid = document.getElementById("alldiary").getAttribute("userid");
	qunid = document.getElementById("alldiary").getAttribute("qunid1");
	typeindex = sessionStorage["luanpeng_typeindex"];

	if (typeindex == 2) {
		qunid = document.getElementById("alldiary").getAttribute("qunid2");
	}
	else if (typeindex == 3) {
		qunid = document.getElementById("alldiary").getAttribute("qunid3");
	}
	else
	{
		typeindex="1";
	}
	goto_type_html(typeindex);
}

function getfrominternet(){

	var url = HTTP_ALL_DIARY_FORUSERQUN;
	var json = {
		"duserid":userid,
		"suserid":userid,
		"qunid":qunid,
		"page":pagenum.toString()
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0")
         {
			pagenum++;
			localStorage["luanpeng_somediary"] =JSON.stringify(backstr.data);
			//alert("查询成功");
			qundiary_init();

		}else{
			alert("查询失败");
		}
	});

}

function goto_type_html(typeindexstr)
{
	typeindex = typeindexstr.toString();
	sessionStorage["luanpeng_typeindex"] = typeindex;
	sessionStorage["luanpeng_somealldiary"] = "";
	pagenum=1;
	document.getElementById("alldiary").innerHTML="";
	alldiary = new Array();
	alldiarynum=0;
	document.getElementById("type1").style.color='black';
	document.getElementById("type2").style.color='black';
	document.getElementById("type3").style.color='black';
	if(typeindex=="1") {
		document.getElementById("type1").style.color = 'green';
		qunid = document.getElementById("alldiary").getAttribute("qunid1");
	}
	if(typeindex=="2")
	{
		document.getElementById("type2").style.color='green';
		qunid = document.getElementById("alldiary").getAttribute("qunid2");
	}

	if(typeindex=="3")
	{
		document.getElementById("type3").style.color='green';
		qunid = document.getElementById("alldiary").getAttribute("qunid3");
	}


	getfrominternet();
	//window.location.href=HTTP_REQUEST+"web/myqundiary?typeindex="+typeindex+"&qunid="+qunid;
}



function goto_fabiao()
{
     var useridstr =document.getElementById("alldiary").getAttribute("userid");
	var qunid1str =document.getElementById("alldiary").getAttribute("qunid1");
	var qunid2str =document.getElementById("alldiary").getAttribute("qunid2");
	var qunid3str =document.getElementById("alldiary").getAttribute("qunid3");
	window.location.href="fabiao.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;
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

		var htmlstr="";
		if(alldiary[i].qun.qunusetype==1)
		{
			htmlstr =change_to_htmlstr1(alldiary[i],i);
		}
		if(alldiary[i].qun.qunusetype==14)
		{
			htmlstr =change_to_htmlstr2(alldiary[i],i);
		}
		if(alldiary[i].qun.qunusetype==15)
		{
			htmlstr =change_to_htmlstr3(alldiary[i],i);
		}

		$('#alldiary').append(htmlstr);
	}
}



//跳转到日志详情
function goto_diarydetail_show1(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志

	var useridstr =document.getElementById("alldiary").getAttribute("userid");
	var qunid1str =document.getElementById("alldiary").getAttribute("qunid1");
	var qunid2str =document.getElementById("alldiary").getAttribute("qunid2");
	var qunid3str =document.getElementById("alldiary").getAttribute("qunid3");
	window.location.href="change_diary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;
}
//跳转到日志详情
function goto_diarydetail_show2(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	var useridstr =document.getElementById("alldiary").getAttribute("userid");
	var qunid1str =document.getElementById("alldiary").getAttribute("qunid1");
	var qunid2str =document.getElementById("alldiary").getAttribute("qunid2");
	var qunid3str =document.getElementById("alldiary").getAttribute("qunid3");
	window.location.href="change_diary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;
}
//跳转到日志详情
function goto_diarydetail_show3(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	var useridstr =document.getElementById("alldiary").getAttribute("userid");
	var qunid1str =document.getElementById("alldiary").getAttribute("qunid1");
	var qunid2str =document.getElementById("alldiary").getAttribute("qunid2");
	var qunid3str =document.getElementById("alldiary").getAttribute("qunid3");
	window.location.href="change_diary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;
}


//宝贝列表
function change_to_htmlstr1(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content; 
        
	var contentarr = contentstr.split("---");
        
	str = str+"<li  class='ui-li-has-count ui-first-child  ui-last-child' data-icon='false'><a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show1(this)' class='ui-btn'>";
	if(diary.type=="求购")
		str = str+ "<h2>"+"求购:"+contentarr[0]+"</h2>";
	else
		str = str+ "<h2>"+contentarr[0]+"</h2>";
	str = str+ "<h6>"+"单价:"+contentarr[2]+"&nbsp &nbsp &nbsp &nbsp &nbsp时间:"+contentarr[3]+"</h6>";
/*   str = str+ "<p class=\"ui-li-aside\">";

	str = str+"入手时间:"+contentarr[1]+"</p>";  //"&nbsp&nbsp&nbsp"*/
	if(diary.state==4)
		str = str+ "<span class='ui-li-count'   style='color: #00a78e'>"+"已售"+"</span>";
	else if(diary.imgone==null || diary.imgone=="")
		str = str+ "<span class='ui-li-count'>"+"无图"+"</span>";
	else
		str = str+ "<span class='ui-li-count'>"+"有图"+"</span>";

	str = str+"</a></li>";

	return str;
}


//服务列表
function change_to_htmlstr2(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content;
	var contentarr = contentstr.split("---");

	str = str+"<li class='ui-li-has-count ui-first-child  ui-last-child'  data-icon='false'><a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show2(this)' class='ui-btn'>";
	if(diary.type=="求购")
		str = str+ "<h2>"+"求购:"+contentarr[0]+"</h2>";
	else
		str = str+ "<h2>"+contentarr[0]+"</h2>";
	str = str+ "<h6>"+"出品方:"+contentarr[1]+"</h6>";
	/*	str = str+ "<p class=\"ui-li-aside\">";

	 str = str+"入手时间:"+contentarr[1]+"</p>";  //"&nbsp&nbsp&nbsp"*/
	if(diary.state==4)
		str = str+ "<span class='ui-li-count'  style='color: #00a78e'>"+"下线"+"</span>";
	else if(diary.imgone==null || diary.imgone=="")
		str = str+ "<span class='ui-li-count'>"+"无图"+"</span>";
	else
		str = str+ "<span class='ui-li-count'>"+"有图"+"</span>";

	str = str+"</a></li>";

	return str;
}


//资源列表
function change_to_htmlstr3(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content;
	var contentarr = contentstr.split("---");

	str = str+"<li class='ui-li-has-count ui-first-child  ui-last-child'  data-icon='false'><a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show3(this)' class='ui-btn'>";
	if(diary.type=="求购")
		str = str+ "<h2>"+"求购:"+contentarr[0]+"</h2>";
	else
		str = str+ "<h2>"+contentarr[0]+"</h2>";
	str = str+ "<h6>"+"出品方:"+contentarr[1]+"</h6>";
	/*	str = str+ "<p class=\"ui-li-aside\">";

	 str = str+"入手时间:"+contentarr[1]+"</p>";  //"&nbsp&nbsp&nbsp"*/
	if(diary.state==4)
		str = str+ "<span class='ui-li-count'  style='color: #00a78e'>"+"下线"+"</span>";
	else if(diary.imgone==null || diary.imgone=="")
		str = str+ "<span class='ui-li-count'>"+"无图"+"</span>";
	else
		str = str+ "<span class='ui-li-count'>"+"有图"+"</span>";

	str = str+"</a></li>";

	return str;
}

