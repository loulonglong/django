//登陆界面初始化函数

var userme;
var alluser = new Array();
var someuser = new Array();
var someusernum=0;
var allusernum=0;
var pagenum=1;
var qunidstr="";
var qun;
var inqun = false;
//查询详情
function getqunuserinf()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var url = HTTP_GET_ALLQUNUSER;   //只有审核通过的人能获取到  所有用户
	var json = {
		"page":pagenum.toString(),
		"userid":userme.id.toString()
	};
	document.getElementById("load_more_text").innerText="加载中...";
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			document.getElementById("load_more_text").innerText="加载更多...";
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				document.getElementById("load_more").style.display="none";
			}
			else
			{
				localStorage["luanpeng_someuser"] =JSON.stringify(backstr.data);
				//alert("查询成功");
				qunuser_init();
			}


		}else{
			alert("查询失败");
			document.getElementById("load_more_text").innerText="加载更多...";
		}
	});

}

function getonequnuserinf()
{
	inqun=true;
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	qunidstr = qun.id.toString();
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	document.title=qun.aname;
	var url = HTTP_GET_QUN_USER;    //获取所有用户
	var json = {
		"userid":userme.id.toString(),
		"qunid":qun.id.toString(),
		"page":pagenum.toString()
	};
	document.getElementById("load_more_text").innerText="加载中...";
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				document.getElementById("load_more").style.display="none";
			}
			else
			{
				localStorage["luanpeng_someuser"] =JSON.stringify(backstr.data);
				//alert("查询成功");
				qunuser_init();
				document.getElementById("daochuqun_button").style.display="block";
			}
			document.getElementById("load_more_text").innerText="加载更多...";
		}else{
			addsomeuser_show();
			document.getElementById("load_more_text").innerText="加载更多...";
			alert(backstr.message);
		}
	});

}


function getonequnuserforqunid()
{
	qunidstr = document.getElementById("alluser").getAttribute("qunid");
	if(qunidstr==null || qunidstr=="")
	{
		return;
	}
	var url = HTTP_GET_QUN_USER;
	var json = {
		"qunid":qunidstr,
		"page":pagenum.toString()
	};
	document.getElementById("load_more_text").innerText="加载中...";
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				document.getElementById("load_more").style.display="none";
			}
			else
			{
				localStorage["luanpeng_someuser"] =JSON.stringify(backstr.data);
				//alert("查询成功");
				qunuser_init();
			}
			document.getElementById("load_more_text").innerText="加载更多...";

		}else{
			alert("查询失败");
			document.getElementById("load_more_text").innerText="加载更多...";
		}
	});

}

//读取所有日志
function qunuser_init()
{
	someusernum=0;
	var alluserstr = localStorage["luanpeng_someuser"];
	var someuserobj=JSON.parse(alluserstr);
	$.each(someuserobj, function(index,value)
	{
		someuser[someusernum] = value;
		alluser[allusernum] = value;
		someusernum++;
		allusernum++;
	});

	addsomeuser_show();
}

var first=true;
//更新部分用户
function addsomeuser_show()
{
	for(var i=0;i<someusernum;i++)
	{
		var htmlstr =change_to_htmlstr(someuser[i],allusernum-someusernum+i);
		$('#alluser').append(htmlstr);
	}
	if(first)
	{
		showrqcode();
		first=false;
	}


}
function showrqcode()
{
	var str1=HTTP_REQUEST+"vcard/loginjoin.jsp?qunid="+qunidstr;
	/*	$("#qrcode").qrcode({
	 render: "table",
	 width: 150,
	 height:150,
	 text: str1
	 });*/
	$('#qrcode').qrcode(str1);
}

//跳转到日志详情
function goto_userdetail_show(data)
{
	var userindex = parseInt(data.getAttribute('userindex'));
	localStorage["luanpeng_nowuser"] =JSON.stringify(alluser[userindex]);   //获取第几个日志
	window.location.href=HTTP_REQUEST+"web/userrqcode?userid="+alluser[userindex].id.toString();
	//window.location.href="userrqcode.html";
}


function change_to_htmlstr(user,userindex)
{
	var usericon=HTTP_REQUEST+"vcard/images/tubiao.png";
	if(user.image!=null && user.image!="")
	{
		if(user.image.indexOf("upload")>0)
		{
			usericon = user.image;
			var thumbimgpath = usericon.substring(0,usericon.lastIndexOf("/")+1)+"thumb"+usericon.substring(usericon.lastIndexOf("/")+1,usericon.length);
			usericon = HTTP_REQUEST+thumbimgpath;
		}
		else
			usericon = HTTP_REQUEST+user.image;
	}

	var str="";
	str = str+"<li class='ui-li-has-thumb ui-first-child ui-last-child'><a userindex='"+userindex.toString()+"' onclick='goto_userdetail_show(this)' class='ui-btn ui-btn-icon-right ui-icon-carat-r'>";
	str = str+ "<img src='"+usericon+"' class='ui-li-thumb' style='height: 100%;width: 100%'>";
	str = str+ "<h2>"+user.name+"</h2>";
	str = str+ "<p>"+user.phone+"</p>";

	//str = str+ "<span class=\"ui-li-count\">"+"<input type='radio' value='' />"+"</span>";
	if(inqun)
	{
		if(user.state==4)
			str = str+ "<span class='ui-li-count'>"+"未审核"+"</span>";
		else if(user.state==5)
			str = str+ "<span class='ui-li-count'>"+"审核不通过"+"</span>";
		else if(user.state==1)
			str = str+ "<span class='ui-li-count'>"+"创建者"+"</span>";
		else if(user.state==2)
			str = str+ "<span class='ui-li-count'>"+"管理员"+"</span>";
	}

	str = str+"</a></li>";

	return str;
}



function daochuonequn()
{
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	var url =HTTP_WEB_ONEQUNVCARD ;
	var json = {
		"qunid":qun.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
				if(backstr.respcode == "0"){
					var urlpath = HTTP_REQUEST+ backstr.data.toString();
					//urlpath = urlpath.replace("http://","");
					window.location.href = HTTP_REQUEST+"web/openlink?title="+"导出群名片&openlink="+urlpath;
				}else{
					alert("导出失败");
		}
	});
}

function daochuonequnforid()
{
	var url =HTTP_WEB_ONEQUNVCARD ;
	var json = {
		"qunid":qunidstr
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			var urlpath =HTTP_REQUEST+ backstr.data.toString();
			//urlpath = urlpath.replace("http://","");
			window.location.href = HTTP_REQUEST+"web/openlink?title="+"导出用户名片&openlink="+urlpath;
		}else{
			alert("导出失败");
		}
	});
}

function tuichuqun()
{
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var url =HTTP_DEL_QUN_USER ;
	var json = {
		"qunid":qun.id.toString(),
		"userid":userme.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			window.location.href="qunuser.html";
		}else{
			alert("退出失败");
		}
	});
}
