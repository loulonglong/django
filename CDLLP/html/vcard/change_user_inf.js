//登陆界面初始化函数

var userme;
var user_icon="";
//查询详情
function set_user_inf()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	document.getElementById("change_name").value =userme.name ;
	document.getElementById("change_phone").value =userme.phone;
	document.getElementById("change_address_province").value =userme.parameter1;
	document.getElementById("change_address_shi").value =userme.parameter2;
	document.getElementById("change_address_qu").value =userme.parameter3;
	document.getElementById("change_address_road").value =userme.parameter4;
	document.getElementById("change_zip_code").value =userme.parameter5;
	document.getElementById("change_qq").value =userme.parameter6;
	document.getElementById("change_email").value =userme.email;
	document.getElementById("change_wechat").value =userme.wechat;
	document.getElementById("change_filed").value =userme.parameter7;
	document.getElementById("change_company").value =userme.parameter8;
	document.getElementById("change_section").value =userme.parameter9;
	document.getElementById("change_post").value =userme.parameter10;
	document.getElementById("change_url").value =userme.parameter11;
	document.getElementById("change_education").value =userme.parameter12;
	document.getElementById("change_benke_schools").value =userme.parameter13;
	document.getElementById("change_shuoshi_schools").value =userme.parameter14;
	document.getElementById("change_boshi_schools").value =userme.parameter15;
	document.getElementById("change_skill").value =userme.parameter16;
	document.getElementById("change_jianli").value =userme.parameter17;

	$("#change_user_pic").attr("src",HTTP_REQUEST+userme.userIcon);

}

//查询详情
function change_inf()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);

	var change_name = document.getElementById("change_name").value;
	var change_phone = document.getElementById("change_phone").value;
	var change_address_province = document.getElementById("change_address_province").value;
	var change_address_shi = document.getElementById("change_address_shi").value;
	var change_address_qu = document.getElementById("change_address_qu").value;
	var change_address_road = document.getElementById("change_address_road").value;
	var change_zip_code = document.getElementById("change_zip_code").value;
	var change_qq = document.getElementById("change_qq").value;
	var change_email = document.getElementById("change_email").value;
	var change_wechat = document.getElementById("change_wechat").value;
	var change_filed = document.getElementById("change_filed").value;
	var change_company = document.getElementById("change_company").value;
	var change_section = document.getElementById("change_section").value;
	var change_post = document.getElementById("change_post").value;
	var change_url = document.getElementById("change_url").value;
	var change_education = document.getElementById("change_education").value;
	var change_benke_schools = document.getElementById("change_benke_schools").value;
	var change_shuoshi_schools = document.getElementById("change_shuoshi_schools").value;
	var change_boshi_schools = document.getElementById("change_boshi_schools").value;
	var change_skill = document.getElementById("change_skill").value;
	var change_jianli = document.getElementById("change_jianli").value;

	if(user_icon=="")
	{
		user_icon = userme.userIcon;
	}
	var url = HTTP_UPDATE_USERINF;
	var json = {
		"id": userme.id.toString(),
		"phone": change_phone,
		"name": change_name,
		"address": change_address_province+change_address_shi+change_address_qu+change_address_road,
		"email": change_email,
		"wechat": change_wechat,
		"usericon":user_icon,
		"parameter1":change_address_province,
		"parameter2":change_address_shi,
		"parameter3":change_address_qu,
		"parameter4":change_address_road,
		"parameter5":change_zip_code,
		"parameter6":change_qq,
		"parameter7":change_filed,
		"parameter8":change_company,
		"parameter9":change_section,
		"parameter10":change_post,
		"parameter11":change_url,
		"parameter12":change_education,
		"parameter13":change_benke_schools,
		"parameter14":change_shuoshi_schools,
		"parameter15":change_boshi_schools,
		"parameter16":change_skill,
		"parameter17":change_jianli
			   };
	document.getElementById("change_button").innerText = "保存中...";
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0")
		{
			document.getElementById("change_button").innerText = "保存";
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


function readFile()
{
	var file_path_str = $("#pic_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png'  && suffix != 'PNG' && suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#change_user_pic").attr("src","images/huanchong.gif");
	$("#file_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			user_icon = data;
			user_icon = user_icon.replace(/\"/g,"");
			$("#change_user_pic").attr("src",HTTP_REQUEST+user_icon);
			document.getElementById("change_user_pic").style.height ='100px';
			//alert(user_icon);

		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#change_user_pic").attr("src","images/someone_head.png");
		}
	});
}
