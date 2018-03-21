//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userme;
var diary_icon="";
var nowdiary;
//初始化  设置合同可选项
function change_init()
{
	setimg();
	//读取用户
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
   //读取日志
	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary =JSON.parse(diarystr);
	document.getElementById("diary_title").value = nowdiary.urltitle;
	document.getElementById("diary_content").value = nowdiary.content;
	videofile = nowdiary.urlpath;
	if(nowdiary.imgone!=null && nowdiary.imgone!="")
	{
		diary_icon = nowdiary.imgone;
		var thumbimgpath = diary_icon.substring(0,diary_icon.lastIndexOf("/")+1)+"thumb"+diary_icon.substring(diary_icon.lastIndexOf("/")+1,diary_icon.length);
		document.getElementById("pic1_path").onerror=function(){document.getElementById("pic1_path").src="images/add.png";};
		document.getElementById("pic1_path").src = HTTP_REQUEST+thumbimgpath;
	}
}

videofile="";
//上传文件
function readFile1()
{
	document.getElementById("video_text").innerText="上传中...";
	var file_path_str = $("#video_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'mp3')
	{
		alert("仅支持mp3格式文件");
		return;
	}
	$("#file1_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_VIDEO,  //HTTP_WEB_UPLOAD_VIDEO,
		success: function(data){
			document.getElementById("video_text").innerText="文件：";
			videofile=data.replace(/\"/g,"");
		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
		}
	});
}

function setimg()
{
	$('#pic1_file').localResizeIMG({
		width: 720,
		quality: 0.5,
		success: function (result) {
			var submitData={
				base64_string:result.clearBase64
			};
			$("#pic1_path").attr("src","images/huanchong.gif");
			$.ajax({
				type: "POST",
				url: HTTP_REQUEST+"web/base64strtoimg",
				data: submitData,
				dataType:"json",
				success: function(data){
					diary_icon = data;
					var fabiaoimg =  diary_icon.replace(/\"/g,"");
					var thumbimgpath = fabiaoimg.substring(0,fabiaoimg.lastIndexOf("/")+1)+"thumb"+fabiaoimg.substring(fabiaoimg.lastIndexOf("/")+1,fabiaoimg.length);
					$("#pic1_path").attr("src",HTTP_REQUEST+thumbimgpath);
				},
				complete :function(XMLHttpRequest, textStatus){
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){ //上传失败
					$("#pic1_path").attr("src","images/add.png");
					// alert(XMLHttpRequest.status);
					// alert(XMLHttpRequest.readyState);
					// alert(textStatus);
				}
			});
		}
	});
}
//发布宝贝
function change_diary()
{
	if(videofile=="" || diary_icon=="")
	{
		alert("请先上传图片和音频");
		return;
	}
	var diary_title = document.getElementById("diary_title").value;
	var diary_content = document.getElementById("diary_content").value;

	var url = HTTP_UPDATA_DIARY_WORD;
	var json= {
		"diaryid": nowdiary.id.toString(),
		"content":diary_content,
		"urltitle":diary_title,
		"urlpath":videofile,
		"userid": userme.id.toString(),
		"qunid":nowdiary.qun.id.toString(),   //1作为科大二手平台
        "state":"0",
		"img1":diary_icon,
			   };
	document.getElementById("fabiao").innerText="修改中";
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			//alert("修改成功");
			document.getElementById("fabiao").innerText="保存";
			window.location.href="mydiary.html";
			
		}else{
			alert("修改失败");
			document.getElementById("fabiao").innerText="保存";
		 }
										  });
									  
}


function shanchu()
{
	var url = HTTP_DEL_MOOD;
	var json = {
		"diaryID": nowdiary.id.toString(),
		"userID":userme.id.toString()
	};
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0"){
			window.location.href="mydiary.html";
		}else{
			alert("删除失败");
		}
	});
}

