//登陆界面初始化函数
function login_init(){
	var usermestr=localStorage["luanpeng_user"];
    var userme = JSON.parse(usermestr);
	document.getElementById("login_phone").value = userme.phone;
	document.getElementById("login_password").value = userme.password;
}



var phone="";
var password="";
//登陆函数
function login_fun()
{
	document.getElementById("login_button").innerText="登陆中...";
	phone = document.getElementById("login_phone").value;
	phone=phone.replace(" ","");
	phone=phone.replace(" ","");
	password = document.getElementById("login_password").value;
	if(phone =="" || password=="")
	{
		alert("请将信息填充完整");
		return;
	}
	//if(phone!="" && password!="")
	{
		var url = HTTP_LOGIN;
		var json = {
					"phone": phone,
					"password": password
				   };
		sendDataByPost(url,json,function(backstr)
		{
			if(backstr.respcode == "0"){
				localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
					window.location.href="setting.html";
			}else{
				alert(backstr.message);
				document.getElementById("login_button").innerText="登陆";
			 }
		});
	}								  
}
function loginfree_fun()
{
	window.location.href='alldiary.jsp?qunid=1000';
}
//忘记密码
function forget_password()
{
	//请求地址  json数据格式  返回值和格式已经定好了
	var phone = document.getElementById("login_phone").value;
	if(phone=="")
	{
		alert("请先输入手机号码");
		return;
		}
	
	if(phone!="")
	{
		var url = HTTP_FINDPASSWORD;
		var json = {
					"phone": phone,
				   };
		sendDataByPost(url,json,function(backstr){
			if(backstr.respcode == "0"){
				alert("密码已发送到您的手机上");
			}else{
				alert("访问错误");
			 }
											  });
	}
							  
}


