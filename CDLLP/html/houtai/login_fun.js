
var phone="";
var password="";
//登陆函数
function login_fun()
{
	//请求地址  json数据格式  返回值和格式已经定好了
        document.getElementById("login_button").value="登陆中...";
	phone = document.getElementById("login_phone").value;
	password = document.getElementById("login_password").value;
	if(phone =="" || password=="")
	{
		alert("请将信息填充完整");
		return;
	}
	{
		var url = HTTP_LOGIN;
		var json = {
					"phone": phone,
					"password": password
				   };
		sendDataByPost(url,json,function(backstr)
		{

			if(backstr.respcode == "0"){


				//设置cookie
				//$.cookie("test", "1", { expires: -1 }); //设置过期时间为负就失效了
                                //$.cookie("luanpeng_phone", phone, { path: '/' },{ expires: 7 }); // 存储一个带7天期限的 cookie 
				//$.cookie("luanpeng_password", password,{ path: '/' }, { expires: 7 }); // 存储一个带7天期限的 cookie 

				localStorage["luanpeng_user"] =JSON.stringify(backstr.data); 
				window.location.href="index.html";
				
				
			}else{
				alert("登陆失败");
                                document.getElementById("login_button").value="登陆";
			 }
											  });
	}								  
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


