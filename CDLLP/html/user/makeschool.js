
var userid="0";

function init()
{
	var provinceitem = document.getElementById("choose_province");
	userid = provinceitem.getAttribute("userid");
	provinceitem.innerHTML="";
	for(var i=0;i<province.length;i++)
	{
		provinceitem.options.add(new Option(province[i][1],province[i][0]));  //text和value
	}
	provinceitem.options[0].setAttribute("selected", "selected");
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
	$('#choose_school').selectmenu('refresh');
	choose_school_fun(schoolitem);
}

var choose_school_text="";
function choose_school_fun(obj)
{
	choose_school_text = obj.options[obj.selectedIndex].text;
}
//注册函数
function makeschool_fun()
{
	if(choose_school_text=="")
	{
		alert("请先选择服务学校");
		return;
	}
	document.getElementById("register_button").innerText="绑定中...";
	var url = HTTP_UPDATE_USERINF;
	var json = {
		"id": userid,
		"school":choose_school_text
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("绑定成功，您现在可以通过公共号进入校园交易市场了");
			localStorage["luanpeng_user"] =JSON.stringify(backstr.data);
			WeixinJSBridge.invoke('closeWindow',{},function(res){
				//alert(res.err_msg);
			});
		}else{
			alert(backstr.message);
			document.getElementById("register_button").innerText="注册";
		}
	});

}

function gotologin()
{
	var openid = document.getElementById("register_openid").value;
	if(openid!=null && openid!="")
	    window.location.href=HTTP_REQUEST+"user/login.jsp?openid="+openid+"&phone=&password=";
}

