﻿//登陆界面初始化函数

var userme;
var user_icon="";
//查询详情
function set_user_inf()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	document.getElementById("user_name").value =userme.name ;
	document.getElementById("user_address").value =userme.address ;
	document.getElementById("user_phone").value =userme.phone;
	$("#change_user_pic").attr("src",HTTP_REQUEST+userme.userIcon);

}

//查询详情
function change_inf()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var user_name = document.getElementById("user_name").value;
	var user_address = document.getElementById("user_address").value;
	var user_phone = document.getElementById("user_phone").value;

	if(user_icon=="")
	{
		user_icon = userme.userIcon;
	}
	var url = HTTP_UPDATE_USERINF;
	var json = {
		"id": userme.id.toString(),
		"phone": user_phone,
		"name": user_name,
		"address": user_address
			   };
	
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
			alert("修改成功");
			window.location.href="setting.html";
			
		}else{
			alert("查询失败");
		 }
										  });
									  
}


//查询详情
function change_password()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var old_password = document.getElementById("old_password").value;
	var new_password = document.getElementById("new_password").value;
	var new_password1 = document.getElementById("new1_password").value;

	if(new_password!=new_password1)
	{
		alert("两次密码输入不相同");
		return;
	}

	var url = HTTP_UPDATE_USERPWD;
	var json = {
		"id": userme.id.toString(),
		"oldpassword": old_password,
		"newpassword": new_password
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("修改成功");
			window.location.href="login.html";
		}else{
			alert("修改失败");
		}
	});

}


//返回反馈信息
function feedback_fun()
{
	//读取用户信息  查询呢用户所有日志
	var feedback_name = document.getElementById("feedback_name").value;
	var feedback_phone = document.getElementById("feedback_phone").value;
	var feedback_content = document.getElementById("feedback_content").value;

	if(feedback_content=="")
	{
		alert("请填入反馈内容");
		return;
	}
        if(feedback_phone=="")
	{
            try{
              var userstr = localStorage["luanpeng_user"];
	      userme =JSON.parse(userstr);
              feedback_phone=userme.phone;
                }
               catch(e)
              { 
               }
         }

	var url = HTTP_SUMBIT_FEEDBACK;
	var json = {
		"name": feedback_name,
		"contact": feedback_phone,
		"content": feedback_content
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("提交成功");
			window.location.href="setting.html";
		}else{
			alert("提交失败");
		}
	});

}
