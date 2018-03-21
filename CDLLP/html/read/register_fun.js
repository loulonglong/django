

//注册函数
function register_fun()
{
	document.getElementById("register_button").innerText="注册中...";
	//请求地址  json数据格式  返回值和格式已经定好了
	var phone = document.getElementById("register_phone").value;
	var password = document.getElementById("register_password").value;
        phone=phone.replace(" ","");
        phone=phone.replace(" ",""); 
	if(phone=="" || password=="")
	{
		alert("请先输入完整信息");
		return;
	}


	var url = HTTP_REGISTER;
	var json = {
		"name": "未知",
		"phone": phone,
		"password": password,
		"usertype":"0"
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("注册成功");
			localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
			window.location.href="setting.html";
		}else{
			alert(backstr.message);
			document.getElementById("register_button").innerText="注册";
		}
	});

}

