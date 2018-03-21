//登陆界面初始化函数

//返回反馈信息
function send_fun()
{
	//读取用户信息  查询呢用户所有日志
	var sendmessage_phone = document.getElementById("sendmessage_phone").value;
	var sendmessage_content = document.getElementById("sendmessage_content").value;

	if(sendmessage_phone=="" || sendmessage_content)
	{
		alert("请填入发送电话和内容");
		return;
	}

	var url = HTTP_SENDMESSAGE;
	var json = {
		"phone": sendmessage_phone,
		"content": sendmessage_content
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("发送成功");
			window.location.href="setting.html";
		}else{
			alert("发送失败");
		}
	});

}
