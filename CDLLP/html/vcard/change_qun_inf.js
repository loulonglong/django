//登陆界面初始化函数

var userme;
var qunnow;
var qunicon="";
//查询详情
function set_qun_inf()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var qunstr = localStorage["luanpeng_nowqun"];
	qunnow =JSON.parse(qunstr);
	qunicon = qunnow.qunicon;
	document.getElementById("qun_name").value =qunnow.aname ;
	document.getElementById("qun_gonggao").value =qunnow.gonggao;
	$("#qun_pic").attr("src",HTTP_REQUEST+qunnow.qunicon);

}

//查询详情
function change_inf()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var qunstr = localStorage["luanpeng_nowqun"];
	qunnow =JSON.parse(qunstr);

	var change_name = document.getElementById("qun_name").value;
	var change_type1 = document.getElementById("qun_gonggao").value;

	if(qunicon=="")
	{
		qunicon = qunnow.qunicon;
	}
	var url = HTTP_CHANGE_QUN_INF;
	var json = {
		"userid": userme.id.toString(),
		"qunid": qunnow.id.toString(),
		"Aname": change_name,
		"Bname": change_name,
		"AB": change_name,
		"qunicon":qunicon,
		"type1":change_type1
			   };
	document.getElementById("change_button").innerText = "保存中...";
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			document.getElementById("change_button").innerText = "保存";
			window.location.href="qun.html";
			
		}else{
			alert("查询失败");
		 }
										  });
									  
}
//查询详情
function del_qun()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var qunstr = localStorage["luanpeng_nowqun"];
	qunnow =JSON.parse(qunstr);

	var url = HTTP_DEL_QUN;
	var json = {
		"userid": userme.id.toString(),
		"qunid": qunnow.id.toString()
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("成功解散群组");
			window.location.href="qun.html";

		}else{
			alert("解散失败");
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
	$("#qun_pic").attr("src","images/huanchong.gif");
	$("#file_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			qunicon = data;
			qunicon = qunicon.replace(/\"/g,"");
			$("#qun_pic").attr("src",HTTP_REQUEST+qunicon);
			document.getElementById("qun_pic").style.height ='100px';
			$( "#file_upload_form").resetForm();

		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#qun_pic").attr("src","images/someone_head.png");
		}
	});
}
