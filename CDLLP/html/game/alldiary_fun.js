//登陆界面初始化函数

var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var qunstr="";
var pagenum=1;
function  init()
{
	/*//设置滚轮自动加载
	$(window).scroll(
		function() {
			var scrollTop = $(this).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(this).height();
			if (scrollTop + windowHeight == scrollHeight) {
// 此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
				getalldiaryinf();
			}
		});*/
		getalldiaryinf();
}
//查询详情
function getalldiaryinf()
{
	qunstr = document.getElementById("alldiary").getAttribute("qunid");
	if(qunstr==null || qunstr=="")
	{
		alert("查询不到平台");
		return;
	}
	localStorage["luanpeng_qunid"]=qunstr;
	var url =HTTP_GET_QUN_DIARY;//   HTTP_ALL_DIARYS
	var json = {
		"qunid":qunstr,
		"page":pagenum.toString()
	};

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
	addsomediary_show();

}

//更新全部日志
function addalldiary_show()
{
	$('#alldiary').html("");
	for(var i=0;i<alldiarynum;i++)
	{
		var htmlstr =change_to_htmlstr(alldiary[i],i);
		$('#alldiary').append(htmlstr);
	}
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
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	if(alldiary[diaryindex].urlpath!=null && alldiary[diaryindex].urlpath!="")
		window.location.href=alldiary[diaryindex].urlpath;
	else
		window.location.href=HTTP_REQUEST+"web/getdiaryurl?diaryid="+alldiary[diaryindex].id.toString();

}


var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{
	var imgnow=HTTP_REQUEST+"info/images/tubiao.jpg";
	if(diary.imgone!=null && diary.imgone!="")
	{
		if(diary.imgone.indexOf("upload")>0)
		{
			imgnow = diary.imgone;
			var thumbimgpath = imgnow.substring(0,imgnow.lastIndexOf("/")+1)+"thumb"+imgnow.substring(imgnow.lastIndexOf("/")+1,imgnow.length);
			imgnow = HTTP_REQUEST+thumbimgpath;
		}
		else
			imgnow = HTTP_REQUEST+diary.imgone;
	}

	var str="";
	str = str+"<li class='ui-li-has-count ui-first-child  ui-last-child ui-li-has-thumb'>";
	str = str+"<a href='"+diary.urlpath+"' target='_blank' class='ui-btn' style='margin-bottom: -10px'>";
	str = str+ "<img src='"+imgnow+"' class='ui-li-thumb' style='height: 60px;width: 60px;border-radius:10px;margin-left: 5px;margin-top: 5px'>";
	str = str+ "<p style='font-weight: lighter;font-size: 16px;margin-left: -10px'>"+diary.urltitle+"</p>";
	str = str+ "<p style='color: #aaaaaa;font-weight: lighter;margin-top: -5px;margin-left: -10px'>"+""+diary.type+"</p>";
	str = str+ "<span class='ui-li-count' style='background-color: #fdc669;color: #ffffff;font-weight: lighter;text-shadow:none'>"+"开始玩"+"</span>";
	str = str+"</a></li>";

	return str;
}


