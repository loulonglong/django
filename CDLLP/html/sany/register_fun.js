

var register_vcode="1234";
var usericon="";
//注册验证码
function register_vcode_fun()
{
	//请求地址  json数据格式  返回值和格式已经定好了
	var phone = document.getElementById("register_phone").value;
	if(phone=="")
	{
		alert("请先输入手机号码");
		return;
	}

	if(phone!="")
	{
		var url = HTTP_VCODE;
		var json = {
			"phone": phone,
		};
		sendDataByPost(url,json,function(backstr){
			if(backstr.respcode == "0"){
				register_vcode = backstr.data;
				alert(register_vcode+"验证码已发送到您的手机上");
			}else{
				alert("访问错误");
			}
		});
	}

}

//注册函数
function register_fun()
{
	//请求地址  json数据格式  返回值和格式已经定好了
	var phone = document.getElementById("register_phone").value;
	var password = document.getElementById("register_password").value;
	var identity = document.getElementById("register_identity").value;
	var name = document.getElementById("register_name").value;
	var vcodestr = document.getElementById("register_vcode").value;

	if(phone=="" || password=="" ||vcodestr=="" || name=="")
	{
		alert("请先输入完整信息");
		return;
	}
	if(vcodestr!=register_vcode)
	{
		alert("验证码错误");
		return;
	}

	var url = HTTP_REGISTER;
	var json = {
		"phone": phone,
		"password": password,
		"name": name,
		"identity": identity,
		"usertype":"0",
		"usericon":usericon
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("注册成功");
			window.location.href="login.html";
		}else{
			alert("注册失败");
		}
	});

}



function readFile()
{
	var file_path_str = $("#pic_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1].toLowerCase();
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#register_user_pic").attr("src","images/huanchong.gif");

	$("#file_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			usericon = data;
			usericon = usericon.replace(/\"/g,"");
			$("#register_user_pic").attr("src",HTTP_REQUEST+usericon);
			document.getElementById("register_user_pic").style.height ='100px';
			//alert(fabiao_pic_path);
		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#register_user_pic").attr("src","images/someone_head.png");
		}
	});
}
