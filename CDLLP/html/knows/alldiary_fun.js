//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var url;
var json;
var qunid="0";
function  knowinit()
{
	var qunstr = document.getElementById("alldiary").getAttribute("qunid");
	if(qunstr==null || qunstr=="")
	{
		alert("查询不到平台");
		return;
	}
	/*//设置滚轮自动加载
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
		url =HTTP_GET_QUN_DIARY;//   HTTP_ALL_DIARYS
		json = {
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
			document.getElementById("getmore").innerText="点击加载更多";
		}else{
			document.getElementById("getmore").innerText="点击加载更多";
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
	window.location.href=HTTP_REQUEST+"knows/diary_detail.jsp?diaryid="+alldiary[diaryindex].id.toString();

}


function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	str = str+"<li  class='ui-li-has-count ui-first-child  ui-last-child' style='margin-top: 5px'; data-icon='false'>";
	str = str+"<a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show(this)' class='ui-btn' style='background-color: #ffffff'>";  // ui-btn-icon-right ui-icon-carat-r
	str = str+ "<h2 style='color:#1888df;font-weight: lighter'>"+diary.urltitle+"</h2>";
	str = str+ "<p  class='wrap'>"+diary.content+"</p>";
	str = str+ "<p style='color:#a1a8ae'>"+diary.date+konggestr+"评论"+diary.commentnum.toString()+konggestr+"浏览"+diary.tuijiannum.toString()+"</p>";
	/*   str = str+ "<p class=\"ui-li-aside\">";
	 str = str+"入手时间:"+contentarr[1]+"</p>";  //"&nbsp&nbsp&nbsp"*/
	/*if(diary.commentnum==0)
 str = str+ "<span class=\"ui-li-count\">"+"无解"+"</span>";
 else
 str = str+ "<span class=\"ui-li-count\">"+"有解"+"</span>";*/

	str = str+"</a></li>";

	return str;
}


function gotofabiao()
{
	sessionStorage["luanpeng_somealldiary"]="";
	//window.location.href=HTTP_REQUEST+"knows/setting.html";
	window.location.href=HTTP_REQUEST+"knows/wen.html";
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
	url = HTTP_SOUSUO_QUNDIARY_TITLE;
	json = {
		"keystr": keystr,
		"qunid":qunid,
		"page":pagenum.toString()
	};
	getalldiaryinf();

}
