//登陆界面初始化函数

var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var url;
var json;
var qunid="0";
var typeindex="1";
function  init()
{
	var qunstr = document.getElementById("alldiary").getAttribute("qunid3");
	if(qunstr==null || qunstr=="" || qunstr=="null")
	{
		alert("查询不到平台");
		return;
	}
	//获取当前显示类型
	var typeindexstr = sessionStorage["luanpeng_typeindex"];
	if(typeindexstr!=null && typeindexstr!="")
		typeindex=typeindexstr;

/*	//设置滚轮自动加载
	$(window).scroll(
		function() {
			var scrollTop = $(this).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(this).height();
			if (scrollTop + windowHeight == scrollHeight) {
// 此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
				getfromint();
			}
		});*/
	localStorage["luanpeng_qunid"]=qunstr;
	qunid=qunstr;
	var localstr = sessionStorage["luanpeng_somealldiary"];
	//如果本地没有缓存
	if(localstr==null || localstr=="")
	{
		url = HTTP_GET_QUN_DIARY;//   HTTP_ALL_DIARYS    //url = HTTP_GET_QUN_DIARY_TYPE;   //=HTTP_GET_QUN_DIARY
		json = {
			"typeindex":"3",
			"qunid":qunid,
			"page":pagenum.toString()
		};
		getfromint();
	}
	else
	{
		localdiary();
	}
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
	document.getElementById("type4").style.color='black';
	document.getElementById("type5").style.color='black';
	if(typeindex=="1")
		document.getElementById("type1").style.color='green';
	if(typeindex=="2")
		document.getElementById("type2").style.color='green';
	if(typeindex=="3")
		document.getElementById("type3").style.color='green';
	if(typeindex=="4")
		document.getElementById("type4").style.color='green';
	if(typeindex=="5")
		document.getElementById("type5").style.color='green';

	getfrominternet();
	//window.location.href=HTTP_REQUEST+"web/myqundiary?typeindex="+typeindex+"&qunid="+qunid;
}


function getfromint()
{

	json.page = pagenum.toString();
	getalldiaryinf();
}

//查询详情
function getalldiaryinf()
{
	document.getElementById("getmore").innerText="加载中...";
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				document.getElementById("load_more").style.display="none";
			}
			else {
				localStorage["luanpeng_somediary"] = JSON.stringify(backstr.data);
				//alert("查询成功");
				qundiary_init();
			}
			document.getElementById("getmore").innerText="加载更多...";
		}else{
			document.getElementById("getmore").innerText="加载更多...";
			//alert("查询失败");
		}
	});
}
//加载本地日志
function localdiary()
{
	somediarynum=0;
	var alldiarystr = sessionStorage["luanpeng_somealldiary"];
	somediary=JSON.parse(alldiarystr);
	$.each(somediary, function(index,value)
	{
		somediary[somediarynum] = value;
		alldiary[alldiarynum] = value;
		somediarynum++;
		alldiarynum++;
	});
	addsomediary_show();

	//读取缓存pagenum
	var pagenumstr= sessionStorage["luanpeng_pagenum"];
	if(pagenumstr!=null && pagenumstr!="")
	{
		pagenum=parseInt(pagenumstr);
	}else{
		pagenum=1;
	}
	//读取缓存url
	var urlstr= sessionStorage["luanpeng_url"];
	if(urlstr!=null && urlstr!="")
	{
		url = urlstr;
	}else{
		url =HTTP_GET_QUN_DIARY;//   HTTP_ALL_DIARYS
	}
	//读取缓存json
	var jsonstr= sessionStorage["luanpeng_json"];
	if(jsonstr!=null && jsonstr!="")
	{
		json=JSON.parse(jsonstr);
	}else{
		json = {
			"qunid":qunid,
			"page":pagenum.toString()
		};
	}
	//必须延迟设置滚动，不然执行滚动时还没有完成数据加载
	setTimeout("setweizhi()",50);

}

function setweizhi()
{
	//读取滑动位置
	var weizhi = sessionStorage["luanpeng_weizhi"];
	if(weizhi!=null && weizhi!="")
	{
		document.body.scrollTop = parseInt(weizhi);
		sessionStorage["luanpeng_weizhi"]="";
	}
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
	addsomediary_show();

	//缓存数据
	sessionStorage["luanpeng_somealldiary"] =JSON.stringify(alldiary);
	//记录加载数据页数
	sessionStorage["luanpeng_pagenum"] =pagenum.toString();

}



//添加更多日志
function addsomediary_show()
{
	for(var i=0;i<somediary.length;i++)
	{
		var htmlstr =change_to_htmlstr(somediary[i],alldiarynum-somediarynum+i);
		$('#alldiary').append(htmlstr);
	}
}

//跳转到日志详情
function goto_diarydetail_show(data)
{
	var weizhi = document.body.scrollTop;
	sessionStorage["luanpeng_weizhi"] = weizhi.toString();
	sessionStorage["luanpeng_url"] = url;
	sessionStorage["luanpeng_json"] = JSON.stringify(json);
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	//window.location.href="diary_detail.html";
	var qunid1=document.getElementById("alldiary").getAttribute("qunid1");
	var qunid2=document.getElementById("alldiary").getAttribute("qunid2");
	var qunid3=document.getElementById("alldiary").getAttribute("qunid3");

	window.location.href=HTTP_REQUEST+"business/diary_detail_jsp3.jsp?diaryid="+alldiary[diaryindex].id.toString()+"&qunid1="+qunid1+"&qunid2="+qunid2+"&qunid3="+qunid3;


}


function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content;
	var contentarr = contentstr.split("---");

	str = str+"<li class='ui-li-has-count ui-first-child  ui-last-child'  data-icon='false'><a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show(this)' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>";
	if(diary.type=="求购")
		str = str+ "<h2>"+"求购:"+contentarr[0]+"</h2>";
	else
	    str = str+ "<h2>"+contentarr[0]+"</h2>";

	str = str+ "<h6>"+"发布方:"+contentarr[1]+"</h6>";

	/*if(diary.type=="求购")
	{
		str = str+ "<h6>"+"出品方:"+contentarr[1]+"（求购）"+"</h6>";
	}
	else if(diary.state==4)
	{
		str = str+ "<h6>"+"出品方:"+contentarr[1]+"（交易完成）"+"</h6>";
	}else
	{
		str = str+ "<h6>"+"出品方:"+contentarr[1]+"</h6>";
	}*/
	if(diary.state==4)
		str = str+ "<span class='ui-li-count'  style='color: #00a78e'>"+"下线"+"</span>";
	else if(diary.imgone==null || diary.imgone=="")
		str = str+ "<span class='ui-li-count'>"+"无图"+"</span>";
	else
		str = str+ "<span class='ui-li-count'>"+"有图"+"</span>";

	str = str+"</a></li>";

	return str;
}

function gotoalldiary1()
{
	sessionStorage["luanpeng_somealldiary"]="";
	var qunstr1 = document.getElementById("alldiary").getAttribute("qunid1");
	var qunstr2 = document.getElementById("alldiary").getAttribute("qunid2");
	var qunstr3 = document.getElementById("alldiary").getAttribute("qunid3");
	window.location.href=HTTP_REQUEST+"business/alldiary1.jsp?qunid1="+qunstr1+"&qunid2="+qunstr2+"&qunid3="+qunstr3;
}

function gotoalldiary2()
{
	sessionStorage["luanpeng_somealldiary"]="";
	var qunstr1 = document.getElementById("alldiary").getAttribute("qunid1");
	var qunstr2 = document.getElementById("alldiary").getAttribute("qunid2");
	var qunstr3 = document.getElementById("alldiary").getAttribute("qunid3");
	window.location.href=HTTP_REQUEST+"business/alldiary2.jsp?qunid1="+qunstr1+"&qunid2="+qunstr2+"&qunid3="+qunstr3;
}

function gotoalldiary3()
{
	sessionStorage["luanpeng_somealldiary"]="";
	var qunstr1 = document.getElementById("alldiary").getAttribute("qunid1");
	var qunstr2 = document.getElementById("alldiary").getAttribute("qunid2");
	var qunstr3 = document.getElementById("alldiary").getAttribute("qunid3");
	window.location.href=HTTP_REQUEST+"business/alldiary3.jsp?qunid1="+qunstr1+"&qunid2="+qunstr2+"&qunid3="+qunstr3;
}


function EnterPress(e)
{ //传入 event
	var e = e || window.event;
	if (e.keyCode == 13) {
		var str = document.getElementById("sousuo_name").value;
		if(str!=null && str!="")
		{
			sousuo(str);
		}
		else
		{
			$('#alldiary').html("");
			sessionStorage["luanpeng_somealldiary"] ="";
			sessionStorage["luanpeng_pagenum"] ="1";
			sessionStorage["luanpeng_weizhi"]="0";
			alldiary = new Array();
			alldiarynum=0;
			document.getElementById("load_more").style.display="block";
			pagenum=1;
			url =HTTP_GET_QUN_DIARY;//   HTTP_ALL_DIARYS
			json = {
				"qunid":qunid,
				"page":pagenum.toString()
			};
			getalldiaryinf();
		}
	}
}

//查询详情
function sousuo(keystr)
{
	$('#alldiary').html("");
	sessionStorage["luanpeng_somealldiary"] ="";
	sessionStorage["luanpeng_pagenum"] ="1";
	sessionStorage["luanpeng_weizhi"]="0";
	alldiary = new Array();
	alldiarynum=0;
	document.getElementById("load_more").style.display="block";
	pagenum=1;
	url = HTTP_SOUSUO_QUNDIARY_CONTENT;
	json = {
		"keystr": keystr,
		"qunid":qunid,
		"page":pagenum.toString()
	};
	getalldiaryinf();

}
