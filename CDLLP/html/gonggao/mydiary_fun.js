//登陆界面初始化函数

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


var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	str = str+"<li  class='ui-li-has-count ui-first-child  ui-last-child' data-icon='false'><a diaryindex=\""+diaryindex+"\" onclick=\"goto_diarydetail_show(this)\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">";
	str = str+ "<h2>"+diary.urltitle+"</h2>";
	str = str+ "<h6>"+diary.date+"</h6>";
/*   str = str+ "<p class=\"ui-li-aside\">";
	str = str+"入手时间:"+contentarr[1]+"</p>";  //"&nbsp&nbsp&nbsp"*/
	if(diary.commentnum==0)
		str = str+ "<span class=\"ui-li-count\">"+"无解"+"</span>";
	else
		str = str+ "<span class=\"ui-li-count\">"+"有解"+"</span>";

	str = str+"</a></li>";

	return str;
}

