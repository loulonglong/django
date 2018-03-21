//登陆界面初始化函数

var nowuser;

function getinffromonline()
{
	var useridstr = localStorage["luanpeng_userid"];
	var url =HTTP_GET_USERINFO ;
	var json = {
		"userid":useridstr
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			localStorage["luanpeng_nowuser"] =JSON.stringify(backstr.data); ;
			user_detail_init();
		}else{
			alert("查询失败");
		}
	});
}





//初始化  设置合同可选项
function user_detail_init()
{
	var userstr = localStorage["luanpeng_nowuser"];
	nowuser =JSON.parse(userstr);

	document.getElementById("user_name").value =nowuser.name ;
	document.getElementById("user_phone").value =nowuser.phone;
	document.getElementById("user_address_province").value =nowuser.parameter1;
	document.getElementById("user_address_shi").value =nowuser.parameter2;
	document.getElementById("user_address_qu").value =nowuser.parameter3;
	document.getElementById("user_address_road").value =nowuser.parameter4;
	document.getElementById("user_zip_code").value =nowuser.parameter5;
	document.getElementById("user_qq").value =nowuser.parameter6;
	document.getElementById("user_email").value =nowuser.email;
	document.getElementById("user_wechat").value =nowuser.wechat;
	document.getElementById("user_filed").value =nowuser.parameter7;
	document.getElementById("user_company").value =nowuser.parameter8;
	document.getElementById("user_section").value =nowuser.parameter9;
	document.getElementById("user_post").value =nowuser.parameter10;
	document.getElementById("user_url").value =nowuser.parameter11;
	document.getElementById("user_education").value =nowuser.parameter12;
	document.getElementById("user_benke_schools").value =nowuser.parameter13;
	document.getElementById("user_shuoshi_schools").value =nowuser.parameter14;
	document.getElementById("user_boshi_schools").value =nowuser.parameter15;
	document.getElementById("user_skill").value =nowuser.parameter16;
	document.getElementById("user_jianli").value =nowuser.parameter17;

	$("#user_user_pic").attr("src",HTTP_REQUEST+nowuser.image);

}

function daochuoneuser()
{
	var userstr = localStorage["luanpeng_nowuser"];
	nowuser =JSON.parse(userstr);
	var url =HTTP_WEB_ONEVCARD ;
	var json = {
		"userid":nowuser.id.toString()
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

