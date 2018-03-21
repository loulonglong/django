//登陆界面初始化函数

var userid;
var fabiaoimg1="";
var fabiaoimg2="";
var fabiaoimg3="";
var qunid;
var typeindex="1";
var nowdiary;
//初始化  设置合同可选项
function change_init()
{
	setimg();
	//读取用户
	userid =document.getElementById("choose_type").getAttribute("userid");
	qunid =document.getElementById("choose_type").getAttribute("qunid");
	typeindex =document.getElementById("choose_type").getAttribute("typeindex");

	//先隐藏两个图片
	document.getElementById("img2_div").style.visibility="hidden";
	document.getElementById("img3_div").style.visibility="hidden";

   //读取日志
	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary =JSON.parse(diarystr);

	var conttentarr = nowdiary.content.split("---");
	//设置选中出售还是求购
	if(conttentarr[0].indexOf("求购")>-1)
	{
		document.getElementById("qun_type").options[1].selected="selected";
		$('#qun_type').selectmenu('refresh');
		choose_diary_fun(document.getElementById("qun_type"));
		conttentarr[0] = conttentarr[0].replace("求购:","");
	}
	document.getElementById("secondhand_name").value =conttentarr[0];
	document.getElementById("secondhand_time").value = conttentarr[1];
	document.getElementById("secondhand_time_end").value =conttentarr[3];
	document.getElementById("secondhand_money").value = conttentarr[2];
	document.getElementById("secondhand_beizhu").value = conttentarr[4];

	document.getElementById("choose_type").options[parseInt(typeindex)-1].selected="selected";
	$('#choose_type').selectmenu('refresh');
	choose_type_fun(document.getElementById("choose_type"));




	if(nowdiary.imgone!=null && nowdiary.imgone!="")
	{
		fabiaoimg1 = nowdiary.imgone;
		var thumbimgpath = fabiaoimg1.substring(0,fabiaoimg1.lastIndexOf("/")+1)+"thumb"+fabiaoimg1.substring(fabiaoimg1.lastIndexOf("/")+1,fabiaoimg1.length);
		document.getElementById("pic1_path").src = HTTP_REQUEST+thumbimgpath;
		document.getElementById("img2_div").style.visibility="visible";
	}

	if(nowdiary.imgtwo!=null && nowdiary.imgtwo!="") {
		fabiaoimg2 = nowdiary.imgtwo;
		var thumbimgpath = fabiaoimg2.substring(0,fabiaoimg2.lastIndexOf("/")+1)+"thumb"+fabiaoimg2.substring(fabiaoimg2.lastIndexOf("/")+1,fabiaoimg2.length);
		document.getElementById("pic2_path").src = HTTP_REQUEST + thumbimgpath;
		document.getElementById("img3_div").style.visibility="visible";
	}

	if(nowdiary.imgthree!=null && nowdiary.imgthree!="") {
		fabiaoimg3 = nowdiary.imgthree;
		var thumbimgpath = fabiaoimg3.substring(0,fabiaoimg3.lastIndexOf("/")+1)+"thumb"+fabiaoimg3.substring(fabiaoimg3.lastIndexOf("/")+1,fabiaoimg3.length);
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

var choose_type_text="1";

function choose_type_fun(obj)
{
	choose_type_text = (obj.selectedIndex+1).toString();
}


var chushou="0";
function choose_diary_fun(obj)
{
	chushou = obj.selectedIndex.toString();
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
		changebaobei();
}


//发布宝贝
function changebaobei()
{

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
	if(chushou=="1")
	{
		secondhand_name = "求购:"+secondhand_name;
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
		"img1":fabiaoimg1,
		"img2":fabiaoimg2,
		"img3":fabiaoimg3
			   };
	document.getElementById("fabiao_button").innerText="修改中";
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			alert("修改成功");
			document.getElementById("fabiao_button").innerText="保存";
			window.location.href="mydiary.jsp?userid="+userid+"&qunid="+qunid+"&typeindex="+choose_type_text;


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
			window.location.href="mydiary.jsp?userid="+userid+"&qunid="+qunid+"&typeindex="+typeindex;
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
			window.location.href="mydiary.jsp?userid="+userid+"&qunid="+qunid+"&typeindex="+typeindex;
		}else{
			alert("修改失败");
		}
	});
}