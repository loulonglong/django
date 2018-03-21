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
function goto_change_user_school_inf()
{
	try {
		var userstr = localStorage["luanpeng_user"];
		userme =JSON.parse(userstr);

		if(userme.id!=null && userme.id!=0)
			window.location.href="makeschool.jsp?userid="+userme.id.toString();
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
			window.location.href="fabiao.html";
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
		if(userme.id!=null && userme.id!=0)
		    window.location.href="mydiary.html";
		else
			alert("请先完成注册登录");
	}
	catch (e){
		alert("请先完成注册登录");
	}
}

function goto_mysousuodiary()
{
	try {
		var userstr = localStorage["luanpeng_user"];
		userme =JSON.parse(userstr);
		if(userme.id!=null && userme.id!=0)
			window.location.href="mysoucangdiary.html";
		else
			alert("请先完成注册登录");
	}
	catch (e){
		alert("请先完成注册登录");
	}
}



function enterchongzhi()
{
	var urlpath = "https://www.525heart.com/wechat/oauth";
	var urlencode = encodeURI(urlpath);
	window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b5557f84c686b7d&redirect_uri="+urlencode+"&response_type=code&scope=snsapi_base&state=123#wechat_redirect";

     //信息工程大学
	//https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b5557f84c686b7d&redirect_uri=https://www.525heart.com/wechat/codetoregister?province_school=11_0&response_type=code&scope=snsapi_base&state=123#wechat_redirect";

}