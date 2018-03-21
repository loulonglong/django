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
	/*$(window).scroll(
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
	/*if(alldiarynum>0)
	{
		document.body.style.backgroundImage=HTTP_REQUEST+alldiary[0].qun.qunicon;
	}*/
	addsomediary_show();

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
	str = str+"<li  class='ui-li-has-count ui-first-child  ui-last-child' style='margin-top: 15px;background-color: transparent;border-bottom-style: solid;border-bottom-width:thin;border-bottom-color:#eae9e9';data-icon='false'>";
	str = str+ "<div class='ui-btn-inline' style='width: 100%' >";
	if(diary.urlpath==null || diary.urlpath=="")
	    str = str+ "<a style='background-color: transparent'  target='_blank' href='"+HTTP_REQUEST+"web/getdiaryurl?diaryid="+diary.id.toString()+"'>";
	else
		str = str+ "<a style='background-color: transparent;text-align: center' target='_blank' href='"+diary.urlpath+"'>";

	str = str+ "<img src='"+imgnow+"' style='width: 100%;height: 180px'>";
	str = str+ "</div>";
	str = str+ "<div class='ui-btn-inline' style='margin-top: -200px;margin-left:40%;text-align:center'>";
	str = str+ "<img  src='images/bofang.png' style='width: 50px;height: 50px'>";
	str = str+ "</div>";
	str = str+"</a>";
	str = str+ "<p style='font-weight: lighter;color: #000000;text-align: left;font-size: 15px;margin-top:-10px;text-shadow:none;'>"+diary.urltitle+"</p>";
	str = str+ "<p style='font-weight: lighter;color: #d9d7d6;text-align: left;font-size: 12px;margin-top:-5px;text-shadow:none;'>"+diary.date+"</p>";
	str = str+"</li>";
	return str;
}




