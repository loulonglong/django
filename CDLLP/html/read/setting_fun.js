//登陆界面初始化函数

var userme;

function goto_change_user_inf()
{
   try {
	   var userstr = localStorage["luanpeng_user"];
	   userme =JSON.parse(userstr);

	   if(userme.id!=null && userme.id!=0)
		   window.location.href="change_user_info.html";
	   else
		   alert("请先完成注册登录");
   }
	catch (e){
		alert("请先完成注册登录");
	}
}
function goto_change_user_password()
{
	try {
		var userstr = localStorage["luanpeng_user"];
		userme =JSON.parse(userstr);

		if(userme.id!=null && userme.id!=0)
			window.location.href="change_user_password.html";
		else
			alert("请先完成注册登录");
	}
	catch (e){
		alert("请先完成注册登录");
	}
}
function goto_fabiao()
{
	try {
		var userstr = localStorage["luanpeng_user"];
		userme =JSON.parse(userstr);

		if(userme.id!=null && userme.id!=0)
			window.location.href="fabiao.jsp?qunid=1000&userid="+userme.id.toString();
		else
			alert("请先完成注册登录");
	}
	catch (e){
		alert("请先完成注册登录");
	}
}



function goto_mydiary()
{
	try {
		var userstr = localStorage["luanpeng_user"];
		userme =JSON.parse(userstr);
		localStorage["luanpeng_qunid"]="1000";
		if(userme.id!=null && userme.id!=0)
		    window.location.href="mydiary.html";
		else
			alert("请先完成注册登录");
	}
	catch (e){
		alert("请先完成注册登录");
	}
}

var qunid="";
function gotoalldiary()
{
	qunid = localStorage["luanpeng_qunid"];
	if(qunid==null||qunid=="")
	{
		alert("查找不到平台");
		window.opener=null;
		window.close();
	}
	sessionStorage["luanpeng_somealldiary"]="";
	window.location.href=HTTP_REQUEST+"read/alldiary.jsp?qunid="+qunid;
}
