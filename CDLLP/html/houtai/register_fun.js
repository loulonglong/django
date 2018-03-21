

//注册函数
function register_fun()
{
	//请求地址  json数据格式  返回值和格式已经定好了
	var name = document.getElementById("register_name").value;
	var phone = document.getElementById("register_phone").value;
	var password = document.getElementById("register_password").value;

	if(phone=="" || password=="")
	{
		alert("请先输入完整信息");
		return;
	}

	var url = HTTP_REGISTER;
	var json = {
		"name": name,
		"phone": phone,
		"password": password,
		"usertype":"0"
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("注册成功");
			window.location.href="login.html";
		}else{
			alert(backstr.message);
		}
	});

}

