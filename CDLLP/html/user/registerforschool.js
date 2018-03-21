﻿
function init()
{
	var provinceitem = document.getElementById("choose_province");
	provinceitem.innerHTML="";
	for(var i=0;i<province.length;i++)
	{
		provinceitem.options.add(new Option(province[i][1],province[i][0]));  //text和value
	}
	provinceitem.options[0].setAttribute("selected", "selected");
	try {
           var provinceindex = parseInt(provinceitem.getAttribute("provinceindex"));
		    provinceitem.options[provinceindex].setAttribute("selected", "selected");
	}catch (err)
	{
	}

	$('#choose_province').selectmenu('refresh');
	choose_province_fun(provinceitem);

}

var choose_province_value="";
function choose_province_fun(obj)
{
	choose_province_value = obj.options[obj.selectedIndex].value;
	var schoolitem = document.getElementById("choose_school");
	schoolitem.innerHTML="";

	//schoolitem.options.add(new Option(proSchool[i][1],proSchool[i][0]));  //text和value
	schoolUlStr = "";
	schoolListStr = new String(proSchool[choose_province_value]);
	schoolListArray = schoolListStr.split(",");
	for(var i=0;i<schoolListArray.length;i++)
	{
		schoolitem.options.add(new Option(schoolListArray[i],i));  //text和value
	}
	schoolitem.options[0].setAttribute("selected", "selected");

	try {

		var schoolindex = parseInt(schoolitem.getAttribute("schoolindex"));
		schoolitem.options[schoolindex].setAttribute("selected", "selected");

	}catch (err)
	{
	}
	$('#choose_school').selectmenu('refresh');
	choose_school_fun(schoolitem);
}

var choose_school_text="";
function choose_school_fun(obj)
{
	choose_school_text = obj.options[obj.selectedIndex].text;
}
//注册函数
function register_fun()
{

	//请求地址  json数据格式  返回值和格式已经定好了
	var phone = document.getElementById("register_phone").value;
	var password = document.getElementById("register_password").value;
        phone=phone.replace(" ","");
        phone=phone.replace(" ","");
	var identity= document.getElementById("register_openid").value;
	if(phone=="" || password=="" || choose_school_text=="")
	{
		alert("请先设置完整信息");
		return;
	}
	document.getElementById("register_button").innerText="注册中...";
	var url = HTTP_REGISTER;
	var json = {
		"name": "未知",
		"phone": phone,
		"password": password,
		"usertype":"0",
		"identity":identity,
		"school":choose_school_text
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			document.getElementById("register_button").innerText="注册成功";


		}else{
			alert(backstr.message);
			document.getElementById("register_button").innerText="注册";
		}
		document.getElementById("secondhandqr").style.display="block";
	});

}

function gotologin()
{
	var openid = document.getElementById("register_openid").value;
	if(openid!=null && openid!="")
	    window.location.href=HTTP_REQUEST+"user/login.jsp?openid="+openid+"&phone=&password=";
}
