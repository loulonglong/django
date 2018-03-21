//登陆界面初始化函数

var userme;
var fabiaoimg1="";
var fabiaoimg2="";
var fabiaoimg3="";
//初始化  设置合同可选项
function creatqun_init()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
}

var qunimg="";
//上传文件
function readFile()
{
	var file_path_str = $("#pic_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG'&& suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#qun_pic").attr("src","images/huanchong.gif");
	$("#file_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			qunimg = data;
			qunimg =  qunimg.replace(/\"/g,"");
			$("#qun_pic").attr("src",HTTP_REQUEST+qunimg);
			//alert(fabiaoimg1);
			//$( "#file_upload_form").resetForm();

		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#qun_pic").attr("src","images/someone_head.png");
		}
	});
}

//创建群组
function creatqun_fun()
{
	var qun_name = document.getElementById("qun_name").value;
   var qun_gonggao = document.getElementById("qun_gonggao").value;
	document.getElementById("creatqun_button").value="正在创建";
	if(qun_name=="")
	{
		alert("请将信息填写完整");
		return;
	}
	if(qunimg=="")
	{
		alert("请设置名片组头像");
		return;
	}

	var url = HTTP_ADD_QUN;
	var json = {
		"userid":userme.id.toString(),
		"quntype":"0",
		"qunusetype":"2",
		"Aname": qun_name,
		"Bname": qun_name,
		"AB": qun_name,
		"state":"0",
        "gonggao":qun_gonggao,
		"qunicon":qunimg
			   };
	document.getElementById("creatqun_button").innerText = "创建中...";
	sendDataByPost(url,json,function(backstr)
	{
		document.getElementById("creatqun_button").innerText = "创建";
		if(backstr.respcode == "0")
		{
			alert("创建名片组成功");
			window.location.href="setting.html";
			
		}else{
			alert("发布失败");
			document.getElementById("creatqun_button").value="创建";
		 }
										  });
									  
}
