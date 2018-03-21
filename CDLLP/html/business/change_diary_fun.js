//登陆界面初始化函数

var userid;
var img1path="";
var img2path="";
var img3path="";

var nowdiary;
//初始化  设置合同可选项
function change_init()
{
	setimg();
	//读取用户
	userid =document.getElementById("choose_type").getAttribute("userid");
	//先隐藏两个图片
	document.getElementById("img2_div").style.visibility="hidden";
	document.getElementById("img3_div").style.visibility="hidden";

   //读取日志
	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary =JSON.parse(diarystr);
	//设置选中出售还是求购
	if(nowdiary.type=="求购")
	{
		document.getElementById("qun_type").options[1].selected="selected";
		$('#qun_type').selectmenu('refresh');
		choose_diary_fun(document.getElementById("qun_type"));
	}
	document.getElementById("secondhanddiv").style.display="none";
	document.getElementById("fuwudiv").style.display="none";
	document.getElementById("ziyuandiv").style.display="none";

	if(nowdiary.qun.qunusetype==1)
	{
		document.getElementById("secondhanddiv").style.display="block";
		document.getElementById("choose_type").options[0].selected="selected";
		var conttentarr = nowdiary.content.split("---");
		document.getElementById("secondhand_name").value =conttentarr[0];
		document.getElementById("secondhand_time").value = conttentarr[1];
		document.getElementById("secondhand_time_end").value =conttentarr[3];
		document.getElementById("secondhand_money").value = conttentarr[2];
		document.getElementById("secondhand_beizhu").value = conttentarr[4];
	}
	if(nowdiary.qun.qunusetype==14)
	{
		document.getElementById("fuwudiv").style.display="block";
		document.getElementById("choose_type").options[1].selected="selected";
		var conttentarr = nowdiary.content.split("---");
		document.getElementById("fuwu_name").value =conttentarr[0];
		document.getElementById("fuwu_danwei").value = conttentarr[1];
		document.getElementById("fuwu_time").value =conttentarr[2];
		document.getElementById("fuwu_money").value = conttentarr[3];
		document.getElementById("fuwu_beizhu").value = conttentarr[4];
	}
	if(nowdiary.qun.qunusetype==15)
	{
		document.getElementById("ziyuandiv").style.display="block";
		document.getElementById("choose_type").options[2].selected="selected";
		var conttentarr = nowdiary.content.split("---");
		document.getElementById("ziyuan_name").value =conttentarr[0];
		document.getElementById("ziyuan_danwei").value = conttentarr[1];
		document.getElementById("ziyuan_money").value =conttentarr[2];
		document.getElementById("ziyuan_beizhu").value = conttentarr[3];
	}
	$('#choose_type').selectmenu('refresh');
	choose_type_fun(document.getElementById("choose_type"));


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
				url: "http://www.525heart.com/web/base64strtoimg",
				data: submitData,
				dataType:"json",
				success: function(data){
					document.getElementById("img2_div").style.visibility="visible";
					fabiaoimg1 = data;
					fabiaoimg1 =  fabiaoimg1.replace(/\"/g,"");
					var thumbimgpath = fabiaoimg1.substring(0,fabiaoimg1.lastIndexOf("/")+1)+"thumb"+fabiaoimg1.substring(fabiaoimg1.lastIndexOf("/")+1,fabiaoimg1.length);
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

	$('#pic2_file').localResizeIMG({
		width: 720,
		quality: 0.5,
		success: function (result) {
			var submitData={
				base64_string:result.clearBase64
			};
			$("#pic2_path").attr("src","images/huanchong.gif");
			$.ajax({
				type: "POST",
				url: "http://www.525heart.com/web/base64strtoimg",
				data: submitData,
				dataType:"json",
				success: function(data){
					document.getElementById("img3_div").style.visibility="visible";
					fabiaoimg2 = data;
					fabiaoimg2 =  fabiaoimg2.replace(/\"/g,"");
					var thumbimgpath = fabiaoimg2.substring(0,fabiaoimg2.lastIndexOf("/")+1)+"thumb"+fabiaoimg2.substring(fabiaoimg2.lastIndexOf("/")+1,fabiaoimg2.length);
					$("#pic2_path").attr("src",HTTP_REQUEST+thumbimgpath);
				},
				complete :function(XMLHttpRequest, textStatus){
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){ //上传失败
					$("#pic2_path").attr("src","images/add.png");
					// alert(XMLHttpRequest.status);
					// alert(XMLHttpRequest.readyState);
					// alert(textStatus);
				}
			});
		}
	});

	$('#pic3_file').localResizeIMG({
		width: 720,
		quality: 0.5,
		success: function (result) {
			var submitData={
				base64_string:result.clearBase64
			};
			$("#pic3_path").attr("src","images/huanchong.gif");
			$.ajax({
				type: "POST",
				url: "http://www.525heart.com/web/base64strtoimg",
				data: submitData,
				dataType:"json",
				success: function(data){
					fabiaoimg3 = data;
					fabiaoimg3 =  fabiaoimg3.replace(/\"/g,"");
					var thumbimgpath = fabiaoimg3.substring(0,fabiaoimg3.lastIndexOf("/")+1)+"thumb"+fabiaoimg3.substring(fabiaoimg3.lastIndexOf("/")+1,fabiaoimg3.length);
					$("#pic3_path").attr("src",HTTP_REQUEST+thumbimgpath);

				},
				complete :function(XMLHttpRequest, textStatus){
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){ //上传失败
					$("#pic3_path").attr("src","images/add.png");
					// alert(XMLHttpRequest.status);
					// alert(XMLHttpRequest.readyState);
					// alert(textStatus);
				}
			});
		}
	});
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

var choose_qun_index=0;
function choose_type_fun(obj)
{
	document.getElementById("secondhanddiv").style.display="none";
	document.getElementById("ziyuandiv").style.display="none";
	document.getElementById("fuwudiv").style.display="none";
	choose_qun_index = obj.selectedIndex;
	if(obj.selectedIndex==0)
	{
		document.getElementById("secondhanddiv").style.display="block";
		qunid = document.getElementById("choose_type").getAttribute("qunid1");
	}
	if(obj.selectedIndex==1)
	{
		document.getElementById("fuwudiv").style.display="block";
		qunid = document.getElementById("choose_type").getAttribute("qunid2");
	}
	if(obj.selectedIndex==2)
	{
		document.getElementById("ziyuandiv").style.display="block";
		qunid = document.getElementById("choose_type").getAttribute("qunid3");
	}
}


var choose_type_text="出售";
function choose_diary_fun(obj)
{
	choose_type_text = obj.options[obj.selectedIndex].text;
	if(obj.selectedIndex==0)
	{
		document.getElementById("secondhand_time_div").style.display="block";
	}
	else
	{
		document.getElementById("secondhand_time_div").style.display="none";
	}

}


function change_diary()
{
	if(choose_qun_index==0)
		changebaobei();
	if(choose_qun_index==1)
		changefuwu();
	if(choose_qun_index==2)
		changeziyuan();
}


//发布宝贝
function changebaobei()
{
	if(img1upload!="true" || img2upload!="true" || img3upload!="true")
	{
		alert("等待上传图片成功后再发表");
		return;
	}
	var secondhand_name = document.getElementById("secondhand_name").value;
	var secondhand_time = document.getElementById("secondhand_time").value;
	var secondhand_time_end = document.getElementById("secondhand_time_end").value;
	var secondhand_money = document.getElementById("secondhand_money").value;
	var secondhand_beizhu = document.getElementById("secondhand_beizhu").value;

	secondhand_money = secondhand_money.replace("元","");

	if(secondhand_name=="" || secondhand_money=="" || secondhand_time_end=="")
	{
		alert("请将信息填写完整");
		return;
	}
	if(secondhand_time=="")
	{
		secondhand_time="无";
	}
	if(secondhand_name.length>14)
	{
		alert("宝贝名称过长，请重新输入");
		return;
	}
	if(secondhand_money.length>8)
	{
		alert("价格字段过长，请重新输入价格");
		return;
	}
	if(secondhand_beizhu=="" || secondhand_beizhu==null)
		secondhand_beizhu="无";

	var contentstr = secondhand_name+"---"+secondhand_time+"---"+secondhand_money+"---"+secondhand_time_end+"---"+secondhand_beizhu;
	var url = HTTP_UPDATA_DIARY_WORD;
	var json= {
		"diaryid": nowdiary.id.toString(),
		"content":contentstr,
		"qundiarytype":choose_type_text,
		"userid": userid,
		"qunid":qunid,   //1作为科大二手平台
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
			alert("修改成功");
			document.getElementById("fabiao_button").innerText="保存";
			var useridstr =document.getElementById("choose_type").getAttribute("userid");
			var qunid1str =document.getElementById("choose_type").getAttribute("qunid1");
			var qunid2str =document.getElementById("choose_type").getAttribute("qunid2");
			var qunid3str =document.getElementById("choose_type").getAttribute("qunid3");
			window.location.href="mydiary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;


		}else{
			alert("修改失败");
			document.getElementById("fabiao_button").innerText="保存";
		 }
										  });
									  
}



//发布服务
function changefuwu()
{
	if(img1upload!="true" || img2upload!="true" || img3upload!="true")
	{
		alert("等待上传图片成功后再发表");
		return;
	}
	var fuwu_name = document.getElementById("fuwu_name").value;
	var fuwu_danwei = document.getElementById("fuwu_danwei").value;
	var fuwu_time = document.getElementById("fuwu_time").value;
	var fuwu_money = document.getElementById("fuwu_money").value;
	var fuwu_beizhu = document.getElementById("fuwu_beizhu").value;


	if(fuwu_name=="" ||fuwu_money=="" ||fuwu_time=="" ||fuwu_danwei=="")
	{
		alert("请将信息填写完整");
		return;
	}

	if(fuwu_name.length>14)
	{
		alert("服务名称过长，请重新输入");
		return;
	}
	if(fuwu_money.length>8)
	{
		alert("价格字段过长，请重新输入价格");
		return;
	}
	if(fuwu_beizhu=="" || fuwu_beizhu==null)
		fuwu_beizhu="无";

	var contentstr = fuwu_name+"---"+fuwu_danwei+"---"+fuwu_time+"---"+fuwu_money+"---"+fuwu_beizhu;
	var url = HTTP_UPDATA_DIARY_WORD;
	var json= {
		"diaryid": nowdiary.id.toString(),
		"content":contentstr,
		"qundiarytype":choose_type_text,
		"userid": userid,
		"qunid":qunid,   //1作为科大二手平台
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
			alert("修改成功");
			document.getElementById("fabiao_button").innerText="保存";

			var useridstr =document.getElementById("choose_type").getAttribute("userid");
			var qunid1str =document.getElementById("choose_type").getAttribute("qunid1");
			var qunid2str =document.getElementById("choose_type").getAttribute("qunid2");
			var qunid3str =document.getElementById("choose_type").getAttribute("qunid3");
			window.location.href="mydiary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;

		}else{
			alert("修改失败");
			document.getElementById("fabiao_button").innerText="保存";
		}
	});

}



//发布资源
function changeziyuan()
{
	if(img1upload!="true" || img2upload!="true" || img3upload!="true")
	{
		alert("等待上传文件成功后再发表");
		return;
	}
	var ziyuan_name = document.getElementById("ziyuan_name").value;
	var ziyuan_danwei = document.getElementById("ziyuan_danwei").value;
	var ziyuan_money = document.getElementById("ziyuan_money").value;
	var ziyuan_beizhu = document.getElementById("ziyuan_beizhu").value;


	if(ziyuan_name=="" || ziyuan_money==""||ziyuan_danwei=="")
	{
		alert("请将信息填写完整");
		return;
	}
	if(ziyuan_name.length>14)
	{
		alert("资源名称过长，请重新输入");
		return;
	}
	if(ziyuan_money.length>8)
	{
		alert("价格字段过长，请重新输入价格");
		return;
	}
	if(ziyuan_beizhu=="" || ziyuan_beizhu==null)
		ziyuan_beizhu="无";

	var contentstr = ziyuan_name+"---"+ziyuan_danwei+"---"+ziyuan_money+"---"+ziyuan_beizhu;
	var url = HTTP_UPDATA_DIARY_WORD;
	var json= {
		"diaryid": nowdiary.id.toString(),
		"content":contentstr,
		"qundiarytype":choose_type_text,
		"userid": userid,
		"qunid":qunid,   //1作为科大二手平台
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
			alert("修改成功");
			document.getElementById("fabiao_button").innerText="保存";
			var useridstr =document.getElementById("choose_type").getAttribute("userid");
			var qunid1str =document.getElementById("choose_type").getAttribute("qunid1");
			var qunid2str =document.getElementById("choose_type").getAttribute("qunid2");
			var qunid3str =document.getElementById("choose_type").getAttribute("qunid3");
			window.location.href="mydiary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;

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
			var useridstr =document.getElementById("choose_type").getAttribute("userid");
			var qunid1str =document.getElementById("choose_type").getAttribute("qunid1");
			var qunid2str =document.getElementById("choose_type").getAttribute("qunid2");
			var qunid3str =document.getElementById("choose_type").getAttribute("qunid3");
			window.location.href="mydiary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;
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
			var useridstr =document.getElementById("choose_type").getAttribute("userid");
			var qunid1str =document.getElementById("choose_type").getAttribute("qunid1");
			var qunid2str =document.getElementById("choose_type").getAttribute("qunid2");
			var qunid3str =document.getElementById("choose_type").getAttribute("qunid3");
			window.location.href="mydiary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;
		}else{
			alert("修改失败");
		}
	});
}