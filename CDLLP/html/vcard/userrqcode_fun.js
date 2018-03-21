//登陆界面初始化函数

var usernow;
var useridstr;
var qun;
var userme;
//查询详情
function getuserinf()
{
	useridstr = document.getElementById("user_name").getAttribute('userid');
	if(useridstr!="0")
	{
		var str1=HTTP_REQUEST+"web/userrqcode?userid="+useridstr;
		$('#qrcode').qrcode(str1);
	}
	else
	{
		var userstr = localStorage["luanpeng_nowuser"];
		usernow =JSON.parse(userstr);
		document.title=usernow.name;
		document.getElementById("user_name").setAttribute("userid",usernow.id.toString());
		document.getElementById("user_name").innerText =usernow.name ;
		document.getElementById("user_phone").innerText ="电话："+usernow.phone;
		document.getElementById("user_company").innerText ="单位："+usernow.parameter8;
		document.getElementById("user_post").innerText ="职务："+usernow.parameter10;
		document.getElementById("user_email").innerText ="邮件："+usernow.email;
		document.getElementById("user_school").innerText ="学校："+usernow.parameter13;
		document.getElementById("user_address").innerText ="地址："+usernow.parameter1+usernow.parameter2+usernow.parameter3;
		$("#user_icon").attr("src",HTTP_REQUEST+usernow.image);


		var str1=HTTP_REQUEST+"web/userrqcode?userid="+usernow.id.toString();
		/*	$("#qrcode").qrcode({
		 render: "table",
		 width: 150,
		 height:150,
		 text: str1
		 });*/
		$('#qrcode').qrcode(str1);

	}

	//设置是否显示审核通过
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	var usermestr = localStorage["luanpeng_user"];
	userme = JSON.parse(usermestr);
	if(qun.userid==userme.id)
	{
		document.getElementById('ok_button').style.display='block';
		document.getElementById('not_button').style.display='block';
	}
}


function daochuoneuser()
{
    var useridstr = document.getElementById("user_name").getAttribute('userid');
	var url =HTTP_WEB_ONEVCARD ;
	var json = {
		"userid":useridstr
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			var urlpath =HTTP_REQUEST+ backstr.data.toString();
			window.location.href = HTTP_REQUEST+"web/openlink?title="+"导出用户名片&openlink="+urlpath;

		}else{
			alert("导出失败");
		}
	});
}


function lookuserdetail()
{
	useridstr = document.getElementById("user_name").getAttribute('userid');
	localStorage["luanpeng_userid"]=useridstr;
	window.location.href=HTTP_REQUEST+"vcard/user_detail.html";

}

function setstate_ok()
{
	var url =HTTP_UPDATE_USERQUNSTATE ;
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	var json = {
		"userid":useridstr,
		"qunid":qun.id.toString(),
		"userstate":"3"
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("设置成功");
		}else{
			alert("审核失败");
		}
	});
}

function setstate_not()
{
	var url =HTTP_UPDATE_USERQUNSTATE ;
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	var json = {
		"userid":useridstr,
		"qunid":qun.id.toString(),
		"userstate":"5"
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("设置成功");
		}else{
			alert("审核失败");
		}
	});
}