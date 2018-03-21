//登陆界面初始化函数

var userme;
var allqun = new Array();
//查询详情
function getquninf()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);

	var url = HTTP_GET_QUN;
	var json = {
		"userid": userme.id.toString()
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


//跳转到日志详情
function goto_qundetail_show(data)
{
	var qunindex = parseInt(data.getAttribute('qunindex'));
	localStorage["luanpeng_nowqun"] =JSON.stringify(allqun[qunindex]);   //获取第几个日志
	if(allqun[qunindex].userid==userme.id)
	    window.location.href="qun_detail.html";
}

function change_to_htmlstr(qun,qunindex)
{
	var str="";
	str = str+"<li data-icon=\"false\">";//ui-li-has-thumb 是包含缩略图时的样子
	str = str+"<a qunindex=\""+qunindex+"\" onclick=\"goto_qundetail_show(this)\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">";
	//str = str+ "<img src=\"images/tubiao.png\" class=\"ui-li-thumb\">";
	str = str+ "<h2>"+"合同号："+qun.ab+"</h2>";
	str = str+ "<p>"+"代理商："+qun.aname+"</p>";
	str = str+ "<p>"+"客户："+qun.bname+"</p>";

	str = str+"</a></li>";
	return str;
}




