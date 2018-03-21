//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userid;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var qunid="";
var typeindex="1";
//查询我的日志
function getmydiaryinf() {
	userid = document.getElementById("alldiary").getAttribute("userid");
	qunid = document.getElementById("alldiary").getAttribute("qunid");
	typeindex = document.getElementById("alldiary").getAttribute("typeindex");
	goto_type_html(typeindex);
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
	if(typeindex=="1") {
		document.getElementById("type1").style.color = 'green';
	}
	if(typeindex=="2")
	{
		document.getElementById("type2").style.color='green';
	}
	if(typeindex=="3")
	{
		document.getElementById("type3").style.color='green';
	}
	if(typeindex=="4")
	{
		document.getElementById("type4").style.color='green';
	}
	getfrominternet();
}
function gotypepath(typeindexstr) {
	window.location.href = "mydiary.jsp?qunid="+qunid+"&userid="+userid+"&typeindex="+typeindexstr;
	
}
function getfrominternet(){

	var url = HTTP_USERQUNDAIRY_FORTYPE;
	var json = {
		"duserid":userid,
		"suserid":userid,
		"qunid":qunid,
		"typeindex":typeindex,
		"page":pagenum.toString()
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0")
         {
			pagenum++;
			localStorage["luanpeng_somediary"] =JSON.stringify(backstr.data);
			//alert("查询成功");
			qundiary_init();

		}else{
			alert("查询失败");
		}
	});

}




function goto_fabiao()
{
	var useridstr =document.getElementById("alldiary").getAttribute("userid");
	var qunidstr =document.getElementById("alldiary").getAttribute("qunid");
	window.location.href="fabiao.jsp?userid="+useridstr+"&qunid="+qunidstr;
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
	addalldiary_show();
}

//更新全部日志
function addalldiary_show()
{
	$('#alldiary').html("");
	for(var i=0;i<alldiarynum;i++)
	{
		var htmlstr="";
		htmlstr =change_to_htmlstr1(alldiary[i],i);
		$('#alldiary').append(htmlstr);
	}
}



//跳转到日志详情
function goto_diarydetail_show(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	window.location.href="change_diary.jsp?userid="+userid+"&qunid="+qunid+"&typeindex="+typeindex+"&diaryid="+alldiary[diaryindex].id.toString();
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
		str=str+gettopleft(diary.imgone);
	}
	else
	{
		str = str+ "<img src='images/tubiao100.png' style='height: 80px;width:80px' >";
	}

	str = str+ "<p style='font-size: 16px'>"+contentarr[0]+"</p>";
	str = str+ "<p style='font-size: 14px'>"+"时间:"+contentarr[3]+konggestr+"单价:"+contentarr[2]+"</p>";

	if(diary.state==4)
		str = str+ "<span class='ui-li-count'  style='color: #00a78e'>"+"已售"+"</span>";


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
