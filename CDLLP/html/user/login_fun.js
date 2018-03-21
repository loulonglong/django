//登陆界面初始化函数
function login_init(){
	/*var provinceitem = document.getElementById("choose_province");
	provinceitem.innerHTML="";
	for(var i=0;i<province.length;i++)
	{
		provinceitem.options.add(new Option(province[i][1],province[i][0]));  //text和value
	}
	provinceitem.options[0].setAttribute("selected", "selected");
	$('#choose_province').selectmenu('refresh');
	choose_province_fun(provinceitem);*/

	/*var school = document.getElementById("choose_school").getAttribute("school");
	var schoolindex = parseInt(school);
	document.getElementById("choose_school").options[schoolindex].setAttribute("selected", "selected");
	/!*$("#choose_school option").each(function(){
		if($(this).value() == school){
			$(this).attr("selected","selected");
		}
	});*!/
	$('#choose_school').selectmenu('refresh');*/
};

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
	$('#choose_school').selectmenu('refresh');

}


var choose_school_text="";
var choose_school_index=0;
function choose_school_fun(obj)
{
	choose_school_index=obj.selectedIndex;
	choose_school_text = obj.options[obj.selectedIndex].text;
}

var phone="";
var password="";
//登陆函数
function login_fun()
{
	document.getElementById("login_button").innerText="登陆中...";
	//请求地址  json数据格式  返回值和格式已经定好了
	phone = document.getElementById("login_phone").value;
        phone=phone.replace(" ","");
        phone=phone.replace(" ",""); 
	password = document.getElementById("login_password").value;
	var identity= document.getElementById("login_openid").value;
	if(phone =="" || password=="")
	{
		alert("请将信息填充完整");
		return;
	}
	if(choose_school_index==0)
	{
		choose_school_text="";
	}
	//if(phone!="" && password!="")
	{
		var url = HTTP_LOGIN;
		var json = {
					"phone": phone,
					"password": password,
			"identity":identity,
			"school":choose_school_text
				   };
		sendDataByPost(url,json,function(backstr)
		{
			if(backstr.respcode == "0"){
				//设置cookie
				//test为键名，1为键值，第三个参数是失效时间
				$.cookie("luanpeng_phone", phone, { path: '/' },{ expires: 7 }); // 存储一个带7天期限的 cookie 
				$.cookie("luanpeng_password", password,{ path: '/' }, { expires: 7 }); // 存储一个带7天期限的 cookie 
				$.cookie("luanpeng_school", choose_school_text,{ path: '/' }, { expires: 7 }); // 存储一个带7天期限的 cookie
				//$.cookie("test", "1", { expires: -1 }); //设置过期时间为负就失效了

				localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
				if(backstr.data.school==null || backstr.data.school=="")
					window.location.href="makeschool.jsp?userid="+backstr.data.id.toString();
				else
				   window.location.href="setting.html";
				
				
			}else{
				alert(backstr.message);
				document.getElementById("login_button").innerText="登陆";
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
	var openid = document.getElementById("login_openid").value;
	if(openid!=null && openid!="")
		window.location.href=HTTP_REQUEST+"user/register.jsp?openid="+openid;
}
