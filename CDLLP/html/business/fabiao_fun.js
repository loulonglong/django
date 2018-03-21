//登陆界面初始化函数

var userid="";
var fabiaoimg1="";
var fabiaoimg2="";
var fabiaoimg3="";
var qunid="";
var qunid1="";
var qunid2="";
var qunid3="";

//初始化  设置合同可选项
function fabiao_init()
{
	setimg();
	try{
		userid = document.getElementById("choose_type").getAttribute("userid");
		if(userid==null||userid=="" || userid=="null")
		{
			alert("查找不到用户");
			window.opener=null;
			window.close();
		}
		document.getElementById("img2_div").style.visibility="hidden";
		document.getElementById("img3_div").style.visibility="hidden";
		qunid = document.getElementById("choose_type").getAttribute("qunid1");
		if(qunid==null||qunid==""|| qunid=="null")
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
	var typeyuansu = document.getElementById("choose_type");
	choose_type_fun(typeyuansu);
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


function goto_mydiary()
{
	var useridstr =document.getElementById("choose_type").getAttribute("userid");
	var qunid1str =document.getElementById("choose_type").getAttribute("qunid1");
	var qunid2str =document.getElementById("choose_type").getAttribute("qunid2");
	var qunid3str =document.getElementById("choose_type").getAttribute("qunid3");
	window.location.href="mydiary.jsp?userid="+useridstr+"&qunid1="+qunid1str+"&qunid2="+qunid2str+"&qunid3="+qunid3str;

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
	/*var file_path_str = $("#pic2_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG'&& suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}*/
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
	/*var file_path_str = $("#pic3_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG'&& suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}*/
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



function fabiaojiaoyi()
{
	if(choose_qun_index==0)
		fabiaobaobei();
	if(choose_qun_index==1)
		fabiaofuwu();
	if(choose_qun_index==2)
		fabiaoziyuan();
}


//发布宝贝
function fabiaobaobei()
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
	var url = HTTP_WRITE_DIARY_WORD;
	var json= {
		"content":contentstr,
		"qundiarytype":choose_type_text,
		"userid": userid,
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
			alert("发布成功，出售成功后记得及时处理交易");
			document.getElementById("fabiao_button").innerText="发布";
			qunid1 = document.getElementById("choose_type").getAttribute("qunid1");
			qunid2 = document.getElementById("choose_type").getAttribute("qunid2");
			qunid3 = document.getElementById("choose_type").getAttribute("qunid3");
			window.location.href="alldiary1.jsp?qunid1="+qunid1+"&qunid2="+qunid2+"&qunid3="+qunid3;
			
		}else{
			alert("发布失败");
			document.getElementById("fabiao_button").innerText="发布";
		 }
										  });
									  
}



//发布服务
function fabiaofuwu()
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
	var url = HTTP_WRITE_DIARY_WORD;
	var json= {
		"content":contentstr,
		"qundiarytype":choose_type_text,
		"userid": userid.toString(),
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
			alert("发布成功，出售成功后记得及时处理交易");
			document.getElementById("fabiao_button").innerText="发布";

			qunid1 = document.getElementById("choose_type").getAttribute("qunid1");
			qunid2 = document.getElementById("choose_type").getAttribute("qunid2");
			qunid3 = document.getElementById("choose_type").getAttribute("qunid3");
			window.location.href="alldiary2.jsp?qunid1="+qunid1+"&qunid2="+qunid2+"&qunid3="+qunid3;

		}else{
			alert("发布失败");
			document.getElementById("fabiao_button").innerText="发布";
		}
	});

}



//发布资源
function fabiaoziyuan()
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


	if(ziyuan_name=="" || ziyuan_money=="" || ziyuan_danwei=="")
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
	var url = HTTP_WRITE_DIARY_WORD;
	var json= {
		"content":contentstr,
		"qundiarytype":choose_type_text,
		"userid": userid.toString(),
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
			alert("发布成功，出售成功后记得及时处理交易");
			document.getElementById("fabiao_button").innerText="发布";
			qunid1 = document.getElementById("choose_type").getAttribute("qunid1");
			qunid2 = document.getElementById("choose_type").getAttribute("qunid2");
			qunid3 = document.getElementById("choose_type").getAttribute("qunid3");
			window.location.href="alldiary3.jsp?qunid1="+qunid1+"&qunid2="+qunid2+"&qunid3="+qunid3;

		}else{
			alert("发布失败");
			document.getElementById("fabiao_button").innerText="发布";
		}
	});

}