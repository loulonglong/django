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
var typeindex="1";
function  init()
{
	qunid = localStorage["luanpeng_qunid"];
	if(qunid==null||qunid=="")
	{
		alert("查找不到平台");
		window.opener=null;
		window.close();
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
	localStorage["luanpeng_qunid"]=qunid;
	var localstr = sessionStorage["luanpeng_somealldiary"];
	//如果本地没有缓存
	if(localstr==null || localstr=="")
	{
		url =HTTP_GET_QUN_DIARY;//   HTTP_ALL_DIARYS    //url = HTTP_GET_QUN_DIARY_TYPE;
		json = {
			//"typeindex":typeindex,
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
		try{
			var htmlstr =change_to_htmlstr1(somediary[i],alldiarynum-somediarynum+i);
			$('#alldiary').append(htmlstr);
		}
		catch (err)
		{}

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
	window.location.href="diary_detail.html"

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
	str = str+ "<h6>"+"单价:"+contentarr[2]+"&nbsp &nbsp &nbsp &nbsp &nbsp时间:"+contentarr[3]+"</h6>";
	/*if(diary.type=="求购")
	 {
	 str = str+ "<h6>"+"单价:"+contentarr[2]+"（求购）"+"</h6>";
	 }
	 else if(diary.state==4)
	 {
	 str = str+ "<h6>"+"单价:"+contentarr[2]+"（交易完成）"+"</h6>";
	 }else
	 {
	 str = str+ "<h6>"+"单价:"+contentarr[2]+"</h6>";
	 }*/


	if(diary.state==4)
		str = str+ "<span class='ui-li-count'  style='color: #00a78e'>"+"已售"+"</span>";
	else if(diary.imgone==null || diary.imgone=="")
		str = str+ "<span class='ui-li-count'>"+"无图"+"</span>";
	else
		str = str+ "<span class='ui-li-count'>"+"有图"+"</span>";

	str = str+"</a></li>";

	return str;
}
function change_to_htmlstr1(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content;
	var contentarr = contentstr.split("---");

	str = str+"<li class='ui-li-has-count ui-li-has-thumb ui-first-child  ui-last-child'  data-icon='false'>";
	str = str+"<a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show(this)' class='ui-btn'>";

	if(diary.imgone!=null && diary.imgone!="")
	{
		//var imgpath = diary.imgone;
		//var thumbimgpath = imgpath.substring(0,imgpath.lastIndexOf("/")+1)+"thumb"+imgpath.substring(imgpath.lastIndexOf("/")+1,imgpath.length);
		//imgpath = HTTP_REQUEST+thumbimgpath;
		//str = str+ "<img  src='"+imgpath+"' style='height: 80px;width:80px' >";
		str=str+gettopleft(diary.imgone);
	}
	else
	{
		str = str+ "<img src='images/tubiao100.png' style='height: 80px;width:80px' >";
	}
	//
	str = str+ "<p style='font-size: 16px'>"+contentarr[0]+"</p>";
	str = str+ "<p style='font-size: 12px'>"+"时间:"+contentarr[3]+konggestr+konggestr+"单价:"+contentarr[2]+"</p>";

	if(diary.state==4)
		str = str+ "<span class='ui-li-count'  style='color: #00a78e'>"+"已售"+"</span>";
	/*else if(diary.imgone==null || diary.imgone=="")
	 str = str+ "<span class='ui-li-count'>"+"无图"+"</span>";
	 else
	 str = str+ "<span class='ui-li-count'>"+"有图"+"</span>";*/

	str = str+"</a></li>";

	return str;
}



function  gettopleft(imagepath)
{
	var thumbimgpath = imagepath.substring(0, imagepath.lastIndexOf("/") + 1) + "thumb" + imagepath.substring(imagepath.lastIndexOf("/") + 1, imagepath.length);
	try {
		var width = parseInt(imagepath.substring(imagepath.indexOf("width") + 5, imagepath.indexOf("_height")));
		var height = parseInt(imagepath.substring(imagepath.indexOf("height") + 6, imagepath.indexOf("_qunid")));
		var str = "";
		str = str + "<div class='ui-li-thumb' style='height:80px;width:80px;overflow: hidden'>";
		//计算缩略图宽高  以px为单位
		if (width > height)
		{
			var leftstr = (width*80/height - 80)/2;   //高度变成80
			//alert("宽度"+width.toString()+"==="+"高度"+height.toString()+"===左偏移"+leftstr);
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "' style='height: 100%;margin-left: -" + leftstr.toString() + "px' >";
		}
		else {
			var topstr = (height*80/width - 80)/2;  //宽度变成80
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "' style='width: 100%;margin-top: -" + topstr.toString() + "px' >";
		}
		str = str+ "</div>";
		return str;
	}
	catch (err){
		//不进行移位
		var str = "";
		str = str+ "<img  src='"+HTTP_REQUEST + thumbimgpath +"' style='height: 80px;width:80px' >";
		return str;
	}

}



function gotofabiao()
{
	sessionStorage["luanpeng_somealldiary"]="";
	window.location.href="setting.html";
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
