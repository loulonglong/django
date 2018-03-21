
var usericon="";
var jcrop_api,boundx,boundy,xsize,ysize;
var icon;
function registerinit()
{
	var qunidstr = localStorage["luanpeng_qunid"];
	if(qunidstr!=null && qunidstr!="")
	    document.getElementById("registr_button").setAttribute("qunid",qunidstr);
	document.getElementById("caijian_target").style.visibility="hidden";

}


//注册函数
function register_fun()
{
	//请求地址  json数据格式  返回值和格式已经定好了
	var name = document.getElementById("register_name").value;
	var phone = document.getElementById("register_phone").value;
	var password = document.getElementById("register_password").value;
	var address_province = document.getElementById("register_address_province").value;
	var register_address_shi = document.getElementById("register_address_shi").value;
	var register_address_qu = document.getElementById("register_address_qu").value;
	var register_address_road = document.getElementById("register_address_road").value;
	var register_zip_code = document.getElementById("register_zip_code").value;
	var register_qq = document.getElementById("register_qq").value;
	var register_email = document.getElementById("register_email").value;
	var register_wechat = document.getElementById("register_wechat").value;
	var register_filed = document.getElementById("register_filed").value;
	var register_company = document.getElementById("register_company").value;
	var register_section = document.getElementById("register_section").value;
	var register_post = document.getElementById("register_post").value;
	var register_url = document.getElementById("register_url").value;
	var register_education = document.getElementById("register_education").value;
	var register_benke_schools = document.getElementById("register_benke_schools").value;
	var register_shuoshi_schools = document.getElementById("register_shuoshi_schools").value;
	var register_boshi_schools = document.getElementById("register_boshi_schools").value;
	var register_skill = document.getElementById("register_skill").value;
	var register_jianli = document.getElementById("register_jianli").value;
    var qunidstr =document.getElementById("registr_button").getAttribute("qunid");
	if(phone=="" || password=="" || name=="")
	{
		alert("请先输入完整信息");
		return;
	}


	var url = HTTP_REGISTER;
	var json = {
		"phone": phone,
		"password": password,
		"name": name,
		"address": address_province+register_address_shi+register_address_qu+register_address_road,
		"usertype":"0",
		"email":register_email,
		"usericon":usericon,
		"wechat":register_wechat,
		"parameter1":address_province,
		"parameter2":register_address_shi,
		"parameter3":register_address_qu,
		"parameter4":register_address_road,
		"parameter5":register_zip_code,
		"parameter6":register_qq,
		"parameter7":register_filed,
		"parameter8":register_company,
		"parameter9":register_section,
		"parameter10":register_post,
		"parameter11":register_url,
		"parameter12":register_education,
		"parameter13":register_benke_schools,
		"parameter14":register_shuoshi_schools,
		"parameter15":register_boshi_schools,
		"parameter16":register_skill,
		"parameter17":register_jianli,
		"qunid":qunidstr
	};
	document.getElementById("registr_button").innerText = "注册中...";
	sendDataByPost(url,json,function(backstr){
		document.getElementById("registr_button").innerText = "注册";
		if(backstr.respcode == "0")
		{
			alert("注册成功");
			window.location.href="login.html";
		}else{
			alert(backstr.message);
		}
	});

}
//上传头像
function readFile()
{
	var file_path_str = $("#pic_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1].toLowerCase();
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG' && suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#pic_path").attr("src","images/huanchong.gif");

	$("#file_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			usericon = data;
			usericon = usericon.replace(/\"/g,"");
			var thumbimgpath = usericon.substring(0,usericon.lastIndexOf("/")+1)+"thumb"+usericon.substring(usericon.lastIndexOf("/")+1,usericon.length);
			$("#pic_path").attr("src",HTTP_REQUEST+thumbimgpath);

			document.getElementById("pic_path").style.height ='100px';
			//alert(fabiao_pic_path);

		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#pic_path").attr("src","images/someone_head.png");
		}
	});
}


function gotologin()
{
	var qunidstr = document.getElementById("registr_button").getAttribute("qunid");
	localStorage["luanpeng_qunid"]=qunidstr;
	window.location.href="login.html";
}