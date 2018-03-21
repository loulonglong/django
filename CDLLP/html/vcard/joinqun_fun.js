//登陆界面初始化函数

var userme;
var allqun = new Array();

var pagenum=1;
function EnterPress(e)
{ //传入 event
	var e = e || window.event;
	if (e.keyCode == 13) {
		var str = document.getElementById("sousuo_name").value;
		if(str!=null && str!="")
		     sousuo(str);
	}
}

//查询详情
function sousuo(keystr)
{
	var url = HTTP_SOUSUO_QUN_NAME;
	var json = {
		"keystr": keystr,
		"qunusetype":"2",
	    "page":pagenum.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
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
function joinqun(data)
{
	var userstr = localStorage["luanpeng_user"];
	var userme =JSON.parse(userstr);
	var qunindex = parseInt(data.getAttribute('qunindex'));
	var qunnow = allqun[qunindex];

	if(qunnow.userid==userme.id)
	{
		localStorage["luanpeng_nowqun"] =JSON.stringify(allqun[qunindex]);
		window.location.href="change_qun_info.html";
		return;
	}

	var url = HTTP_JOIN_QUN;
	var json = {
		"qunid": qunnow.id.toString(),
		"userid": userme.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("加入群组成功");
			window.location.href="qun.html";
		}else{
			alert("查询失败");
		}
	});
}


function change_to_htmlstr(qun,qunindex)
{
	var str="";
	str = str+"<li data-icon=\"false\" class=\"ui-li-has-count ui-li-has-thumb ui-first-child ui-last-child\"><a qunindex=\""+qunindex+"\"  onclick=\"joinqun(this)\" class=\"ui-btn\">";
	str = str+ "<img src=\""+HTTP_REQUEST+qun.qunicon+"\" class=\"ui-li-thumb\"  style=\"height: 100%\">";
	str = str+ "<h2>"+qun.aname+"</h2>";
	str = str+ "<p>"+qun.type1+"</p>";
	var userstr = localStorage["luanpeng_user"];
	var userme =JSON.parse(userstr);
	if(qun.userid==userme.id)
	{
		str = str+ "<span class=\"ui-li-count\">"+"编辑"+"</span>";
	}
	else
	{
		str = str+ "<span class=\"ui-li-count\">"+"加入"+"</span>";
	}
	str = str+"</a></li>";

	return str;
}




