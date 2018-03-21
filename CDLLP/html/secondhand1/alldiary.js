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
	var qunstr = document.getElementById("alldiary").getAttribute("qunid");
	if(qunstr==null || qunstr==""  || qunstr=="null")
	{
		alert("查询不到平台");
		return;
	}

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
	qunid=qunstr;
	var localstr = sessionStorage["luanpeng_somealldiary"];
	var typeindexstr=document.getElementById("alldiary").getAttribute("typeindex");
	if(typeindexstr=="1" || typeindexstr=="2" ||typeindexstr=="3" ||typeindexstr=="4")
	{
		typeindex = typeindexstr;
	}
	if(typeindex=="1" || typeindex=="2" ||typeindex=="3" ||typeindex=="4")
	{
		document.getElementById("type"+typeindex).style.backgroundColor="#3189c9";
		document.getElementById("type"+typeindex).style.color="White";
		/*$('#footui').html("");
		 var  str ="";
		if(typeindex=="1")
			str+="<li><a onclick='gotoalldiary1()' data-icon='home' class='ui-btn-active ui-state-persist'>学习办公</a></li>";
		else
			str+="<li><a onclick='gotoalldiary1()' data-icon='home'>学习办公</a></li>";

		if(typeindex=="2")
			str+="<li><a onclick='gotoalldiary2()' data-icon='gear' class='ui-btn-active ui-state-persist'>生活服务</a></li>";
		else
			str+="<li><a onclick='gotoalldiary2()' data-icon='gear'>生活服务</a></li>";

		if(typeindex=="3")
			str+="<li><a onclick='gotoalldiary3()' data-icon='star' class='ui-btn-active ui-state-persist'>文体用品</a></li>";
		else
			str+="<li><a onclick='gotoalldiary3()' data-icon='star'>文体用品</a></li>";

		if(typeindex=="4")
			str+="<li><a onclick='gotoalldiary4()' data-icon='grid' class='ui-btn-active ui-state-persist'>电子电器</a></li>";
		else
			str+="<li><a onclick='gotoalldiary4()' data-icon='grid'>电子电器</a></li>";

		$('#footui').append(str);*/
	}
	url = HTTP_GET_QUN_DIARY_TYPE;//   HTTP_ALL_DIARYS    //url = HTTP_GET_QUN_DIARY_TYPE;   //HTTP_GET_QUN_DIARY
	json = {
		"typeindex":typeindex,
		"qunid":qunid,
		"page":pagenum.toString()
	};
	//如果本地没有缓存
	if(localstr==null || localstr=="")
	{
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
		if(backstr.respcode == "0")
		{
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				if(alldiarynum==0)
				{
					document.title=backstr.message.aname;   //设置标题
					document.getElementById("getmore").innerText="暂时没有发现宝贝";
				}else {
					document.getElementById("load_more").style.display="none";
				}
			}
			else {
				localStorage["luanpeng_somediary"] = JSON.stringify(backstr.data);
				//alert("查询成功");
				qundiary_init();
				document.getElementById("getmore").innerText="加载更多...";
			}

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
	if(somediarynum>0)
	{
		document.title=somediary[0].qun.aname;
	}
	addsomediary_show();

	//读取缓存pagenum
	var pagenumstr= sessionStorage["luanpeng_pagenum"];
	if(pagenumstr!=null && pagenumstr!="")
	{
		pagenum=parseInt(pagenumstr);
	}else{
		pagenum=1;
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
	if(somediarynum>0)
	{
		document.title=somediary[0].qun.aname;
	}
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
		var htmlstr =change_to_htmlstr1(somediary[i],alldiarynum-somediarynum+i);
		$('#alldiary').append(htmlstr);
	}
}

//跳转到日志详情
function goto_diarydetail_show(data)
{
	var weizhi = document.body.scrollTop;
	sessionStorage["luanpeng_weizhi"] = weizhi.toString();
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志

	window.location.href="diary_detail_jsp.jsp?diaryid="+alldiary[diaryindex].id.toString()+"&qunid="+qunid+"&typeindex="+typeindex;

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
		/*var imgpath = diary.imgone;
		var thumbimgpath = imgpath.substring(0,imgpath.lastIndexOf("/")+1)+"thumb"+imgpath.substring(imgpath.lastIndexOf("/")+1,imgpath.length);
		imgpath = HTTP_REQUEST+thumbimgpath;
		str = str+ "<img src='"+imgpath+"' style='height: 80px;width:80px' >";*/
		str=str+gettopleft(diary.imgone);
	}
	else
	{
		str = str+ "<img src='images/tubiao100.png' style='background-color:#e5e5e5;height: 70px;width:70px;margin-top: 7px;border-radius:5px;margin-left: 7px' >";
	}
	//
	str = str+ "<p style='font-size: 16px'>"+contentarr[0]+"</p>";
	str = str+ "<p style='font-size: 14px'>"+"时间:"+contentarr[3]+konggestr+"单价:"+contentarr[2]+"</p>";

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
		if(width==0 || height==0 || isNaN(width) ||  isNaN(height))
		{
			var str = "";
			str = str+ "<img  class='ui-li-thumb' src='"+HTTP_REQUEST + thumbimgpath +"' style='height: 70px;width:70px;margin-top: 7px;border-radius:5px;margin-left: 7px' >";
			return str;
		}
		var str = "";
		str = str + "<div class='ui-li-thumb' style='height:70px;width:70px;border-radius:5px;margin-top: 7px;margin-left: 7px;overflow: hidden'>";
		//计算缩略图宽高  以px为单位
		if (width > height)
		{
			var leftstr = (width*70/height - 70)/2;   //高度变成80
			//alert("宽度"+width.toString()+"==="+"高度"+height.toString()+"===左偏移"+leftstr);
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "' style='height: 100%;margin-left: -" + leftstr.toString() + "px' >";
		}
		else {
			var topstr = (height*70/width - 70)/2;  //宽度变成80
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "' style='width: 100%;margin-top: -" + topstr.toString() + "px' >";
		}
		str = str+ "</div>";
		return str;
	}
	catch (err){
		//不进行移位
		var str = "";
		str = str+ "<img  class='ui-li-thumb' src='"+HTTP_REQUEST + thumbimgpath +"' style='height: 70px;width:70px;margin-top: 7px;border-radius:5px;margin-left: 7px' >";
		return str;
	}

}

function gotoalldiary(index)
{
	document.getElementById("type"+typeindex).style.backgroundColor="#f7f7f7";
	document.getElementById("type"+typeindex).style.color="#2f2f2f";
	sessionStorage["luanpeng_somealldiary"]="";
	window.location.href="alldiary.jsp?qunid="+qunid+"&typeindex="+index.toString();
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
