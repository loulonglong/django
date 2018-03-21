//登陆界面初始化函数

var userme;
var fabiaoimg1="";
var fabiaoimg2="";
var fabiaoimg3="";
var qunid="";
//初始化  设置合同可选项
function fabiao_init()
{
	try{
		var userstr = localStorage["luanpeng_user"];
		userme =JSON.parse(userstr);
		document.getElementById("img2_div").style.visibility="hidden";
		document.getElementById("img3_div").style.visibility="hidden";
		qunid = localStorage["luanpeng_qunid"];
		if(qunid==null||qunid=="")
		{
			alert("查找不到平台");
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

var choose_type_text="二手宝贝";
function choose_type_fun(obj)
{
	choose_type_text = obj.options[obj.selectedIndex].text;
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


//发布宝贝
function fabiaobb()
{
	if(img1upload!="true" || img2upload!="true" || img3upload!="true")
	{
		alert("等待上传图片成功后再发表");
		return;
	}
	var diary_name = document.getElementById("diary_name").value;
   var diary_time = document.getElementById("diary_time").value;
	var diary_time_end = document.getElementById("diary_time_end").value;
	var diary_money = document.getElementById("diary_money").value;
	var diary_beizhu = document.getElementById("diary_beizhu").value;

	diary_money = diary_money.replace("元","");

	if(diary_name=="" || diary_time=="" || diary_money=="" ||diary_time_end=="")
	{
		alert("请将信息填写完整");
		return;
	}
	if(diary_name.length>14)
	{
		alert("宝贝名称过长，请重新输入");
		return;
	}
	if(diary_money.length>8)
	{
		alert("价格字段过长，请重新输入价格");
		return;
	}
	if(diary_beizhu=="" || diary_beizhu==null)
		diary_beizhu="无";

	var contentstr = diary_name+"---"+diary_time+"---"+diary_money+"---"+diary_time_end+"---"+diary_beizhu;
	var url = HTTP_WRITE_DIARY_WORD;
	var json= {
		"content":contentstr,
		"qundiarytype":choose_type_text,
		"userid": userme.id.toString(),
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
			alert("发布成功，出售成功后记得及时处理宝贝");
			document.getElementById("fabiao_button").innerText="发布";
			window.location.href="alldiary.html"
			
		}else{
			alert("发布失败");
			document.getElementById("fabiao_button").innerText="发布";
		 }
										  });
									  
}
