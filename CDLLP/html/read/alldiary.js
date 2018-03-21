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
	if(qunstr==null || qunstr=="")
	{
		alert("查询不到平台");
		return;
	}

	localStorage["luanpeng_qunid"]=qunstr;
	qunid=qunstr;

	url =HTTP_GET_QUN_DIARY;//   HTTP_ALL_DIARYS    //url = HTTP_GET_QUN_DIARY_TYPE;
	json = {
		"qunid":qunid,
		"page":pagenum.toString()
	};
	getfromint();

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
				document.getElementById("getmore").innerText=" ";
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
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	//window.location.href="diary_detail.html";
	window.location.href=HTTP_REQUEST+"read/diary_detail_jsp.jsp?diaryid="+alldiary[diaryindex].id.toString();

}

function change_to_htmlstr1(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content;
	str = str+"<li class='ui-li-has-count ui-li-has-thumb ui-first-child  ui-last-child' >";
	str = str+"<a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show(this)' class='ui-btn' style='height:60px;padding: 0.1em 4.5em;margin: 0em 0em;border-radius:2px;'>" ;

	if(diary.imgone!=null && diary.imgone!="")
	{
		str=str+gettopleft(diary.imgone,45);
	}
	else
	{
		str = str+ "<img src='images/pan1.png' style='height: 45px;width:45px;margin-left:8px;margin-top: 8px' >";
	}
	//
	str = str+ "<p style='font-size: 16px'>"+diary.urltitle+"</p>";
	str = str+ "<p style='font-size: 12px'>"+diary.user.name+konggestr+diary.date+"</p>";

	str = str+"</a></li>";

	return str;
}


function  gettopleft(imagepath,imgheight)
{
	var thumbimgpath = imagepath.substring(0, imagepath.lastIndexOf("/") + 1) + "thumb" + imagepath.substring(imagepath.lastIndexOf("/") + 1, imagepath.length);
	try {
		var width = parseInt(imagepath.substring(imagepath.indexOf("width") + 5, imagepath.indexOf("_height")));
		var height = parseInt(imagepath.substring(imagepath.indexOf("height") + 6, imagepath.indexOf("_qunid")));
		var str = "";
		str = str + "<div class='ui-li-thumb' style='height:"+imgheight+"px;width:"+imgheight+"px;margin-left: 8px;margin-top: 8px;overflow: auto'>";
		//计算缩略图宽高  以px为单位
		if (width > height)
		{
			var leftstr = (width*imgheight/height - imgheight)/2;   //高度变成80
			//alert("宽度"+width.toString()+"==="+"高度"+height.toString()+"===左偏移"+leftstr);
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "'  onerror='reloadimg()' style='height: 100%;margin-left: -" + (leftstr).toString(this) + "px' >";
		}
		else {
			var topstr = (height*imgheight/width - imgheight)/2;  //宽度变成80
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "'  onerror='reloadimg()' style='width: 100%;margin-top: -" + (topstr).toString(this) + "px' >";
		}
		str = str+ "</div>";
		return str;
	}
	catch (err){
		//不进行移位
		var str = "";
		str = str+ "<img  src='"+HTTP_REQUEST + thumbimgpath +"' style='height: "+imgheight+"px;width:"+imgheight+"px;margin-top:8px;margin-left:8px;' onerror='reloadimg(this)' >";
		return str;
	}
}


function  reloadimg(obj){
	obj.src = "images/pan1.png";
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
