//登陆界面初始化函数

var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;

var pagenum=1;

//查询详情
function getalldiaryinf()
{
	var url =HTTP_GET_QUN_DIARY;//
	var json = {
		"qunid":"120",
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
	for(var i=0;i<13 && i<somediarynum;i++)
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
	{
		window.location.href=alldiary[diaryindex].urlpath;;
	}
	else
	{
		window.open("../dongtai/detail.html","_blank");
	}


}


var imgweizhi=0;
function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	str = str+ "<div class='content'>";
	str = str+ "<a href='javascript:void(0)' onclick='goto_diarydetail_show(this)' diaryindex='"+diaryindex.toString()+"' target='_blank'><img src='images/index_06.jpg'>&nbsp;&nbsp;"+diary.urltitle+"<span>"+diary.date+"</span></a>";
	str = str+ "</div>";
	return str;
}


