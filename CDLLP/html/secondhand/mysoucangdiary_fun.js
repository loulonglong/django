//登陆界面初始化函数

var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=0;



function getmysousuodiaryinf()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var url = HTTP_ALL_DIF_DIARY;
	var json = {
		"showtype":"5",
		"userid":userme.id.toString(),
		"page":"1"
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			localStorage["luanpeng_somediary"] =JSON.stringify(backstr.data);
			//alert("查询成功");
			qundiary_init();

		}else{
			alert("查询失败");
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
	window.location.href="diary_detail.html";
	//window.location.href=HTTP_REQUEST+"web/secondhanddiarydetail?diaryid="+alldiary[diaryindex].id.toString();
}


var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content;
	var contentarr = contentstr.split("---");

	str = str+"<li  class=\"ui-li-has-count ui-first-child  ui-last-child\" data-icon=\"false\"><a diaryindex=\""+diaryindex+"\" onclick=\"goto_diarydetail_show(this)\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">";
	str = str+ "<h2>"+contentarr[0]+"</h2>";
	str = str+ "<h6>"+"单价:"+contentarr[2]+"&nbsp&nbsp&nbsp出售时间:"+contentarr[3]+"</h6>";
/*   str = str+ "<p class=\"ui-li-aside\">";

	str = str+"入手时间:"+contentarr[1]+"</p>";  //"&nbsp&nbsp&nbsp"*/
	if(diary.state==4)
		str = str+ "<span class=\"ui-li-count\"   style=\"color: #00a78e\">"+"已售"+"</span>";
	else if(diary.imgone==null || diary.imgone=="")
		str = str+ "<span class=\"ui-li-count\">"+"无图"+"</span>";
	else
		str = str+ "<span class=\"ui-li-count\">"+"有图"+"</span>";

	str = str+"</a></li>";

	return str;
}

