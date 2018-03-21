//登陆界面初始化函数

var userme;
var alldiary = new Array();
var somediary = new Array();
var alldiarynum=0;
var pagenum=0;
//查询详情
function getqundiaryinf()
{
	pagenum++;
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	if(userme.state==4 || userme.state==5)
	{
		alert("请先在设置中补全个人信息，等待审核通过");
		return;
	}
	var url = HTTP_ALL_QUN_DIARY_FORUSERID1;
	var json = {
				"userid": userme.id.toString(),
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

    var alldiarystr = localStorage["luanpeng_somediary"];
	somediary=JSON.parse(alldiarystr);
	$.each(somediary, function(index,value)
	{
		alldiary[alldiarynum] = value;
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
		var htmlstr =change_to_htmlstr(alldiary[i],i);
		$('#alldiary').append(htmlstr);
	}
}

/*
//添加更多日志
function addsomediary_show()
{
	for(var i=0;i<somediary.length;i++)
	{
		var htmlstr =change_to_htmlstr(somediary[i],i);
		$('#alldiary').append(htmlstr);
	}
}*/

//跳转到日志详情
function goto_diarydetail_show(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	window.location.href="diary_detail.html";
}


var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	var contentstr = diary.content;
	var contentarr = contentstr.split("---");
    var huikuandate =  diary.date.split("-");
	//添加月份
	if(huikuandate[1]!=nowmonth)
	{
		nowmonth = huikuandate[1];
		str = str + "<li data-role=\"list-divider\" role=\"heading\" class=\"ui-li-divider ui-bar-inherit ui-first-child\">"+nowmonth+"月</li>";
	}
    str = str+"<li class=\"ui-li-has-count ui-last-child\"><a diaryindex=\""+diaryindex+"\" onclick=\"goto_diarydetail_show(this)\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">";
	str = str+ "<h2>"+diary.qun.bname+"</h2>";
	str = str+ "<h6>"+diary.qun.ab+"</h6>";
	str = str+ "<p>"+contentarr[0]+"---付款方式："+diary.type+"</p>";
	str = str+ "<p>"+contentarr[1]+"---"+contentarr[2]+"</p>";
	str = str+ "<p>"+contentarr[3]+"---"+contentarr[4]+"</p>";
	str = str+ "<p class=\"ui-li-aside\">";
	var statestr="";
	if(diary.state==0)
		statestr = "校验";
	if(diary.state==1)
		statestr = "有误";
	if(diary.state==2)
		statestr = "无误";
	if(diary.state==3)
		statestr = "奖励";

	str = str+diary.date+"</p>";  //"&nbsp&nbsp&nbsp"
	str = str+ "<span class=\"ui-li-count\">"+statestr+"</span>";

	str = str+"</a></li>";

	return str;
}

