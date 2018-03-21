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
	localStorage["luanpeng_somediary"]="";
	sessionStorage["luanpeng_somediary"]="";
	sessionStorage["luanpeng_somealldiary"]="";
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
	var url =HTTP_GET_QUN_ALLDIARY;//   HTTP_ALL_DIARYS
	var json = {
		"qunid":qunstr,
		"page":pagenum.toString()
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				//document.getElementById("load_more").style.display="none";
			}
			else {
				localStorage["luanpeng_somediary"] = JSON.stringify(backstr.data);
				//alert("查询成功");
				qundiary_init();
			}
			//document.getElementById("getmore").innerText="加载更多...";
		}else{
			//document.getElementById("getmore").innerText="加载更多...";
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
	localStorage["luanpeng_somediary"]="";
	sessionStorage["luanpeng_somediary"]="";
	sessionStorage["luanpeng_somealldiary"]="";
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	if(alldiary[diaryindex].urlpath!=null && alldiary[diaryindex].urlpath!="")
		window.location.href=alldiary[diaryindex].urlpath;
	else
		window.location.href=HTTP_REQUEST+"web/getdiaryurl?diaryid="+alldiary[diaryindex].id.toString();

}


var imgweizhi=0;
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
	if(imgweizhi%3==0)
	  str = str+" <div class='ui-block-a' style='background-color: transparent;text-align: center'>";
	if(imgweizhi%3==1)
		str = str+" <div class='ui-block-b' style='background-color: transparent;text-align: center'>";
	if(imgweizhi%3==2)
		str = str+" <div class='ui-block-c' style='background-color: transparent;text-align: center'>";

/*	str = str+ "<div style='background-color: #ffffff;width: 80%;height: 80%;border-radius: 10px;text-align: center'>";*/
	if(diary.urlpath==null || diary.urlpath=="")
	    str = str+ "<a style='background-color: transparent;width: 70%;height: 70%'  target='_blank' href='"+HTTP_REQUEST+"web/getdiaryurl?diaryid="+diary.id.toString()+"'>";
	else
		str = str+ "<a style='background-color: transparent;width: 70%;height: 70%' target='_blank' href='"+diary.urlpath+"'>";
	str = str+ "<img  src='"+imgnow+"' style='width: 70%;height:70%;border-radius: 10px'>";
	str = str+"</a>";
	str = str+ "<p style='font-weight: lighter;color: #000000;text-align: center;font-size: 15px;margin-top:-1px;text-shadow:none;'>"+diary.urltitle+"</p>";

	str = str+"</div>";
	imgweizhi=imgweizhi+1;
	return str;
}


