var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var qunid="";
//查询我的日志
function getmydiaryinf()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	qunid = localStorage["luanpeng_qunid"];
	if(qunid==null||qunid=="")
	{
		alert("查找不到平台");
		window.opener=null;
		window.close();
		return;
	}
	var url = HTTP_ALL_DIARY_FORUSERQUN;
	var json = {
		"duserid":userme.id.toString(),
		"suserid":userme.id.toString(),
		"qunid":qunid,
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
     var i=0;
	 for(i=0;i<somediarynum;i++)
	 {
	   try{
			 var htmlstr =change_to_htmlstr(somediary[i],alldiarynum-somediarynum+i);
			$('#alldiary').append(htmlstr);
			}catch(e){
			}
	 }
 }

//跳转到日志详情
function goto_diarydetail_show(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	window.location.href="change_diary.html";
}



function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content;
	str = str+"<li class='ui-li-has-count ui-li-has-thumb ui-first-child  ui-last-child' style='border-radius: 3px;'>";
	str = str+"<a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show(this)' class='ui-btn' style='height:60px;padding: 0.1em 4.5em;margin: 0em 0em;border-radius:2px;'>";

	if(diary.imgone!=null && diary.imgone!="")
	{
		str=str+gettopleft(diary.imgone);
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



function  gettopleft(imagepath)
{
	var thumbimgpath = imagepath.substring(0, imagepath.lastIndexOf("/") + 1) + "thumb" + imagepath.substring(imagepath.lastIndexOf("/") + 1, imagepath.length);
	try {
		var width = parseInt(imagepath.substring(imagepath.indexOf("width") + 5, imagepath.indexOf("_height")));
		var height = parseInt(imagepath.substring(imagepath.indexOf("height") + 6, imagepath.indexOf("_qunid")));
		var str = "";
		str = str + "<div class='ui-li-thumb' style='height:45px;width:45px;margin-left: 8px;margin-top: 8px;overflow: hidden'>";
		//计算缩略图宽高  以px为单位
		if (width > height)
		{
			var leftstr = (width*45/height - 45)/2;   //高度变成80
			//alert("宽度"+width.toString()+"==="+"高度"+height.toString()+"===左偏移"+leftstr);
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "'  onerror='reloadimg()' style='height: 100%;margin-left: -" + (leftstr).toString(this) + "px' >";
		}
		else {
			var topstr = (height*45/width - 45)/2;  //宽度变成80
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "'  onerror='reloadimg()' style='width: 100%;margin-top: -" + (topstr).toString(this) + "px' >";
		}
		str = str+ "</div>";
		return str;
	}
	catch (err){
		//不进行移位
		var str = "";
		str = str+ "<img  src='"+HTTP_REQUEST + thumbimgpath +"' style='height: 45px;width:45px;margin-top:8px;margin-left:8px;' onerror='reloadimg(this)' >";
		return str;
	}
}


function  reloadimg(obj){
	obj.src = "images/pan1.png";
}
