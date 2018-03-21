//登陆界面初始化函数

var userme;
var img1path="";
var img2path="";
var img3path="";

var nowdiary;
//初始化  设置合同可选项
function change_init()
{
	//读取用户
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	//先隐藏两个图片
	document.getElementById("img2_div").style.visibility="hidden";
	document.getElementById("img3_div").style.visibility="hidden";

   //读取日志
	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary =JSON.parse(diarystr);


	var conttentarr = nowdiary.content.split("---");
	document.getElementById("diary_name").value =conttentarr[0];
	document.getElementById("diary_time").value = conttentarr[1];
	document.getElementById("diary_money").value =conttentarr[2];
	document.getElementById("diary_time_end").value = conttentarr[3];

	//$('#alldiaryimg').html("");

	if(nowdiary.imgone!=null && nowdiary.imgone!="")
	{
		img1path = nowdiary.imgone;
		var thumbimgpath = img1path.substring(0,img1path.lastIndexOf("/")+1)+"thumb"+img1path.substring(img1path.lastIndexOf("/")+1,img1path.length);
		document.getElementById("pic1_path").src = HTTP_REQUEST+thumbimgpath;
		document.getElementById("img2_div").style.visibility="visible";
	}

	if(nowdiary.imgtwo!=null && nowdiary.imgtwo!="") {
		img2path = nowdiary.imgtwo;
		var thumbimgpath = img2path.substring(0,img2path.lastIndexOf("/")+1)+"thumb"+img2path.substring(img2path.lastIndexOf("/")+1,img2path.length);
		document.getElementById("pic2_path").src = HTTP_REQUEST + thumbimgpath;
		document.getElementById("img3_div").style.visibility="visible";
	}

	if(nowdiary.imgthree!=null && nowdiary.imgthree!="") {
		img3path = nowdiary.imgthree;
		var thumbimgpath = img3path.substring(0,img3path.lastIndexOf("/")+1)+"thumb"+img3path.substring(img3path.lastIndexOf("/")+1,img3path.length);
		document.getElementById("pic3_path").src = HTTP_REQUEST + thumbimgpath;
	}

	if(nowdiary.state==4)
		document.getElementById("havagodiaryid").innerText="上线";
	else
		document.getElementById("havagodiaryid").innerText="下线";

	document.getElementById("diary_beizhu").value = conttentarr[4];


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
			img1path = data;
			img1path =  img1path.replace(/\"/g,"");
			var thumbimgpath = img1path.substring(0,img1path.lastIndexOf("/")+1)+"thumb"+img1path.substring(img1path.lastIndexOf("/")+1,img1path.length);
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
			img2path = data;
			img2path = img2path.replace(/\"/g,"");
			var thumbimgpath = img2path.substring(0,img2path.lastIndexOf("/")+1)+"thumb"+img2path.substring(img2path.lastIndexOf("/")+1,img2path.length);
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
	img3path="false";
	$("#file3_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			img3path = data;
			img3path = img3path.replace(/\"/g,"");
			var thumbimgpath = img3path.substring(0,img3path.lastIndexOf("/")+1)+"thumb"+img3path.substring(img3path.lastIndexOf("/")+1,img3path.length);
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


var choose_type_text="二手宝贝";
function choose_type_fun(obj)
{
	choose_type_text = obj.options[obj.selectedIndex].text;
}

//发布宝贝
function change_diary()
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
	var url = HTTP_UPDATA_DIARY_WORD;
	var json= {
		"diaryid": nowdiary.id.toString(),
		"content":contentstr,
		"qundiarytype":choose_type_text,
		"userid": userme.id.toString(),
		"qunid":nowdiary.qun.id.toString(),   //1作为科大二手平台
        "state":"0",
		"img1":img1path,
		"img2":img2path,
		"img3":img3path
			   };
	document.getElementById("fabiao_button").innerText="修改中";
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			alert("修改成功，出售成功后记得及时处理宝贝");
			document.getElementById("fabiao_button").innerText="保存";
			window.location.href="mydiary.html";
			
		}else{
			alert("修改失败");
			document.getElementById("fabiao_button").innerText="保存";
		 }
										  });
									  
}



function setdiarystate()
{
	if(nowdiary.state==4)
		shangxiandiary();
	else
		xiaxiandiary();
}

function xiaxiandiary()
{
	var url = HTTP_CHANGE_MOOD_STATE;
	var json = {
		"diaryid": nowdiary.id.toString(),
		"state": "4"
	};
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0"){
			window.location.href="mydiary.html";
		}else{
			alert("修改失败");
		}
	});
}


function shangxiandiary()
{
	var url = HTTP_CHANGE_MOOD_STATE;
	var json = {
		"diaryid": nowdiary.id.toString(),
		"state": "0"
	};
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0"){
			window.location.href="mydiary.html";
		}else{
			alert("修改失败");
		}
	});
}