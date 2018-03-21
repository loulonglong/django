//登陆界面初始化函数

var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=0;
//查询我的日志
function getmyqundiaryinf()
{
	pagenum++;
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var url = HTTP_ALL_DIARY_FORUSERID;
	var json = {
		"duserid":userme.id.toString(),
		"suserid":userme.id.toString(),
		"page":pagenum.toString()
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



var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{

	var str="";
	str = str+ "<tr>";
	str = str+"<td align=\"center\"><input type=\"checkbox\" name=\"checkbox[]\" "+"value=\""+diary.id.toString()+"\" /></td>";
	str = str+"<td align=\"center\">"+diary.id.toString()+"</td>";
	str = str+"<td align=\"center\">"+diary.urltitle.toString()+"</td>";

	var typestr="文字";
	if(diary.diarytype==1)
		typestr= "图文";
	if(diary.diarytype==2)
		typestr= "视频";
	if(diary.diarytype=3)
		typestr= "网页";
	str = str+"<td align=\"center\">"+typestr+"</td>";
	str = str+"<td align=\"center\">"+diary.user.name+"</td>";
	str = str+"<td align=\"center\">"+diary.qun.aname+"</td>";
	str = str+"<td align=\"center\">"+diary.date+"</td>";
	str = str+"<td align=\"center\">"+diary.shoucangnum.toString()+"</td>";
	str = str+"<td align=\"center\">"+diary.zannum.toString()+"</td>";
	str = str+"<td align=\"center\">"+diary.tuijiannum.toString()+"</td>";
	str = str+"<td align=\"center\">"+diary.commentnum.toString()+"</td>";
	str = str+"</tr>";

	return str;
}

