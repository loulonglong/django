//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userid="";
var fabiaoimg1="";
var fabiaoimg2="";
var fabiaoimg3="";
var qunid="";
var qunid1="";
var qunid2="";
var qunid3="";
var qunid4="";
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
		qunid = document.getElementById("choose_type").getAttribute("qunid");
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


function goto_mydiary()
{
	var useridstr =document.getElementById("choose_type").getAttribute("userid");
	var qunidstr =document.getElementById("choose_type").getAttribute("qunid");
	window.location.href="mydiary.jsp?userid="+useridstr+"&qunid="+qunidstr+"&typeindex=1";

}






function fabiaojiaoyi()
{
	fabiaobaobei();
}


//发布宝贝
function fabiaobaobei()
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
			qunid = document.getElementById("choose_type").getAttribute("qunid");
			window.location.href="alldiary.jsp?qunid="+qunid+"&typeindex="+choose_type_text;
			
		}else{
			alert("发布失败");
			document.getElementById("fabiao_button").innerText="发布";
		 }
										  });
									  
}


