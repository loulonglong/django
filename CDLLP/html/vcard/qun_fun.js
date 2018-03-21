//登陆界面初始化函数

var userme;
var allqun = new Array();
var pagenow=1;
//查询详情
function getquninf()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);

	var url = HTTP_GET_QUN_USERQUNUSE;
	var json = {
		"userid": userme.id.toString(),
		"qunusetype":"2",
		"page":pagenow.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			localStorage["luanpeng_allqun"] =JSON.stringify(backstr.data);
			//alert("群组查询成功");
			addallqun_show();

		}else{
			alert("查询失败");
		}
	});
}


//布局所有群组
function addallqun_show()
{
	var allqunstr = localStorage["luanpeng_allqun"];
	allqun =JSON.parse(allqunstr);
	$('#allqun').html("");
	for(var i=0;i<allqun.length;i++)
	{
		var htmlstr =change_to_htmlstr(allqun[i],i);
		$('#allqun').append(htmlstr);
	}
}


//跳转到群组用户
function goto_allqunuser_show(data)
{
	var qunindex = parseInt(data.getAttribute('qunindex'));
	localStorage["luanpeng_nowqun"] =JSON.stringify(allqun[qunindex]);   //获取第几个日志
	//window.location.href=HTTP_REQUEST+"web/qunrqcode?qunid="+allqun[qunindex].id.toString();
	window.location.href="onequnuser.html";
}


function change_to_htmlstr(qun,qunindex)
{
	var qunicon=HTTP_REQUEST+"vcard/images/tubiao.png";
	if(qun.qunicon!=null && qun.qunicon!="")
	{
		if(qun.qunicon.indexOf("upload")>0) {
			qunicon = qun.qunicon;
			var thumbimgpath = qunicon.substring(0, qunicon.lastIndexOf("/") + 1) + "thumb" + qunicon.substring(qunicon.lastIndexOf("/") + 1, qunicon.length);
			qunicon = HTTP_REQUEST + thumbimgpath;
		}
		else {
			qunicon=HTTP_REQUEST+qun.qunicon;
		}
	}

	var str="";
	str = str+"<li class=\"ui-li-has-thumb ui-first-child ui-last-child\"><a qunindex=\""+qunindex+"\" onclick=\"goto_allqunuser_show(this)\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">";
	str = str+ "<img src=\""+qunicon+"\" class=\"ui-li-thumb\"  style=\"height: 100%\">";
	str = str+ "<h2>"+qun.aname+"</h2>";
	str = str+ "<p>"+qun.gonggao+"</p>";
	str = str+"</a></li>";

	return str;
}




