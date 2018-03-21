
var phone="";
var password="";
//登陆函数
function login_fun()
{
	$("#login_button").text("登陆中...");

	phone = $("#login_phone").val();
    phone=phone.replace(" ","");
    phone=phone.replace(" ","");
	password =$("#login_password").val();
	if(phone =="" || password=="")
	{
		alert("请将信息填充完整");
		return;
	}

	var url = HTTP_LOGIN;
	var json = {
				"phone": phone,
				"password": password
			   };
	console.log(url)
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0"){
			localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
			localStorage["luanpeng_qunid"]='5'
			qunid = localStorage["luanpeng_qunid"];
			if(qunid==null||qunid=="")
			{
				alert("查找不到平台");
				window.opener=null;
				window.close();
			}
			else
			{
				window.location.href="setting.html";
			}


		}else{
			alert(backstr.message);
			document.getElementById("login_button").innerText="登陆";
		 }
										  });
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


