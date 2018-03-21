﻿//登陆界面初始化函数
function login_init(){
	//$("#login_register").attr("href",HTTP_WEB_REGISTER_URL);
   try{
	  // localStorage["luanpeng_user"]=null;
	   var luanpeng_phonestr = $.cookie("luanpeng_phone");
	   var luanpeng_passwordstr = $.cookie("luanpeng_password");

	   //读取cookie
	   if(luanpeng_phonestr!=null && luanpeng_phonestr!="" && luanpeng_passwordstr!=null&& luanpeng_passwordstr!="")
	   {
		   document.getElementById("login_phone").value = luanpeng_phonestr;
		   document.getElementById("login_password").value = luanpeng_passwordstr;
		  // login_fun();
	   }
   }
	catch (e){
	}
	try{
		var qunidstr = localStorage["luanpeng_qunid"];
		if(qunidstr!=null && qunidstr!="")
			document.getElementById("registr_button").setAttribute("qunid",qunidstr);
		}
	catch (e){

	}
};



var phone="";
var password="";
//登陆函数
function login_fun()
{
	//请求地址  json数据格式  返回值和格式已经定好了
	phone = document.getElementById("login_phone").value;
	password = document.getElementById("login_password").value;
	var qunidstr =document.getElementById("login_button").getAttribute("qunid");
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
					"password": password,
			        "qunid":qunidstr
				   };
		document.getElementById("login_button").innerText = "登陆中...";
		sendDataByPost(url,json,function(backstr)
		{
			document.getElementById("login_button").innerText = "登陆";
			if(backstr.respcode == "0"){
				//设置cookie
				//test为键名，1为键值，第三个参数是失效时间
				$.cookie("luanpeng_phone", phone, { path: '/' },{ expires: 7 }); // 存储一个带7天期限的 cookie 
				$.cookie("luanpeng_password", password,{ path: '/' }, { expires: 7 }); // 存储一个带7天期限的 cookie 
			
				//$.cookie("test", "1", { expires: -1 }); //设置过期时间为负就失效了
				localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
               if(backstr.data.name==null || backstr.data.name=="")
				     window.location.href=HTTP_REQUEST+"vcard/change_user_info.html";
				else
				     window.location.href=HTTP_REQUEST+"vcard/qunuser.html";
				
				
			}else{
				alert(backstr.message);
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



function gotoregister()
{
	var qunidstr = document.getElementById("login_button").getAttribute("qunid");
	localStorage["luanpeng_qunid"]=qunidstr;
	window.location.href=HTTP_REQUEST+"vcard/register.html";
}

