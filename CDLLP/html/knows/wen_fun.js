
var userme;
var fabiaoimg1="";
var fabiaoimg2="";
var fabiaoimg3="";
var qunid="";
//初始化  设置合同可选项
function fabiao_init()
{
	try{
		document.getElementById("img2_div").style.visibility="hidden";
		document.getElementById("img3_div").style.visibility="hidden";
		qunid = localStorage["luanpeng_qunid"];
		if(qunid==null||qunid=="")
		{
			alert("查找不到平台，请从公共号中打开");
			window.opener=null;
			window.close();
		}
	}
	catch (e)
	{
		alert("登陆注册后方可发布");
		window.location.href="setting.html";
	}

}

var img1upload="true";
var img2upload="true";
var img3upload="true";
//上传文件
function readFile1()
{
	var file_path_str = $("#pic1_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG'&& suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#pic1_path").attr("src","images/huanchong.gif");
	document.getElementById("img2_div").style.visibility="visible";
	img1upload="false";
	$("#file1_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			fabiaoimg1 = data;
			fabiaoimg1 =  fabiaoimg1.replace(/\"/g,"");
			var thumbimgpath = fabiaoimg1.substring(0,fabiaoimg1.lastIndexOf("/")+1)+"thumb"+fabiaoimg1.substring(fabiaoimg1.lastIndexOf("/")+1,fabiaoimg1.length);
			$("#pic1_path").attr("src",HTTP_REQUEST+thumbimgpath);
			//alert(fabiaoimg1);
			$( "#file1_upload_form").resetForm();
			img1upload="true";

		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#pic1_path").attr("src","images/add.png");
		}
	});
}
//上传文件
function readFile2()
{
	var file_path_str = $("#pic2_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG'&& suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#pic2_path").attr("src","images/huanchong.gif");
	document.getElementById("img3_div").style.visibility="visible";
	img2upload="false";
	$("#file2_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			fabiaoimg2 = data;
			fabiaoimg2 = fabiaoimg2.replace(/\"/g,"");
			var thumbimgpath = fabiaoimg2.substring(0,fabiaoimg2.lastIndexOf("/")+1)+"thumb"+fabiaoimg2.substring(fabiaoimg2.lastIndexOf("/")+1,fabiaoimg2.length);
			$("#pic2_path").attr("src",HTTP_REQUEST+thumbimgpath);
			//alert(fabiaoimg2);
			$( "#file2_upload_form").resetForm();
			img2upload="true";
		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#pic2_path").attr("src","images/add.png");
		}
	});
}
//上传文件
function readFile3()
{
	var file_path_str = $("#pic3_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG'&& suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#pic3_path").attr("src","images/huanchong.gif");
	img3upload="false";
	$("#file3_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			fabiaoimg3 = data;
			fabiaoimg3 = fabiaoimg3.replace(/\"/g,"");
			var thumbimgpath = fabiaoimg3.substring(0,fabiaoimg3.lastIndexOf("/")+1)+"thumb"+fabiaoimg3.substring(fabiaoimg3.lastIndexOf("/")+1,fabiaoimg3.length);
			$("#pic3_path").attr("src",HTTP_REQUEST+thumbimgpath);
			//alert(fabiao_pic_path);
			$( "#file3_upload_form").resetForm();
			img3upload="true";
		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#pic3_path").attr("src","images/add.png");
		}
	});
}


var fabiao_dealtype = "有问有答";
//选择付款方式
function choose_quntype1(obj)
{
	fabiao_dealtype = obj.options[obj.selectedIndex].value;
}

//发布宝贝
function fabiaobb()
{
	if(img1upload!="true" || img2upload!="true" || img3upload!="true")
	{
		alert("等待上传图片成功后再发表");
		return;
	}
	var diary_title = document.getElementById("diary_title").value;
	var diary_content = document.getElementById("diary_content").value;
	if(diary_title=="")
	{
		alert("请填写问题简述");
		return;
	}
	if(confirm("发布后不可修改，您已确认无误？"))
	{
	}
	else
	{
		return;
	}
	var url = HTTP_WRITE_DIARY_WORD;
	var json= {
		"urltitle":diary_title,
		"content":diary_content,
		"qundiarytype":fabiao_dealtype,
		"userid": "0",
		"qunid":qunid,   //1作为科大二手平台
        "state":"0",
		"img1":fabiaoimg1,
		"img2":fabiaoimg2,
		"img3":fabiaoimg3
			   };
	document.getElementById("fabiao_button").innerText="发布中";
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			//alert("发布成功");
			document.getElementById("fabiao_button").innerText="发布";
			//window.location.href=history.go(-1);
			window.location.href=HTTP_REQUEST+"knows/alldiary.jsp?qunid="+qunid;
			
		}else{
			alert("发布失败");
			document.getElementById("fabiao_button").innerText="发布";
		 }
										  });
									  
}
