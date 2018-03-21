//登陆界面初始化函数

var nowdiary;
var userme;
var img1path="";
var img2path="";
var img3path="";
//初始化  设置合同可选项
function diary_detail_init()
{
	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary =JSON.parse(diarystr);

	var conttentarr = nowdiary.content.split("---");
	document.getElementById("diary_name").innerText =conttentarr[0];
	document.getElementById("diary_time").innerText = "入手时间："+conttentarr[1];
	document.getElementById("diary_money").innerText ="卖家定价："+conttentarr[2]+"元";
	document.getElementById("diary_time_end").innerText = "出售时间："+conttentarr[3]+"后出售";
	document.getElementById("diary_user_phone").innerText = "手机号码："+nowdiary.user.phone;

	//$('#alldiaryimg').html("");

	if(nowdiary.imgone!=null && nowdiary.imgone!="")
	{
		img1path = nowdiary.imgone;
		var thumbimgpath = img1path.substring(0,img1path.lastIndexOf("/")+1)+"thumb"+img1path.substring(img1path.lastIndexOf("/")+1,img1path.length);
		document.getElementById("diary_detail_pic").src = HTTP_REQUEST+thumbimgpath;
	}else
	{
		document.getElementById("diary_detail_pic").style.display="none";
	}
	if(nowdiary.imgtwo!=null && nowdiary.imgtwo!="") {
		img2path = nowdiary.imgtwo;
		var thumbimgpath = img2path.substring(0,img2path.lastIndexOf("/")+1)+"thumb"+img2path.substring(img2path.lastIndexOf("/")+1,img2path.length);
		document.getElementById("diary_detai2_pic").src = HTTP_REQUEST + thumbimgpath;
	}else
	{
		document.getElementById("diary_detai2_pic").style.display="none";
	}
	if(nowdiary.imgthree!=null && nowdiary.imgthree!="") {
		img3path = nowdiary.imgthree;
		var thumbimgpath = img3path.substring(0,img3path.lastIndexOf("/")+1)+"thumb"+img3path.substring(img3path.lastIndexOf("/")+1,img3path.length);
		document.getElementById("diary_detai3_pic").src = HTTP_REQUEST + thumbimgpath;
	}else
	{
		document.getElementById("diary_detai3_pic").style.display="none";
	}
	document.getElementById("diary_beizhu").innerText = "卖家备注："+conttentarr[4];
	if(nowdiary.state==4)
		document.getElementById("havagodiaryid").innerText="上线";
	else
		document.getElementById("havagodiaryid").innerText="下线";
}


function changea_to_htmlstr(imgpath)
{
	var str="";
	str = str+"<div class=\"ui-block-a\"><div class=\"ui-bar\" style=\"height: auto\"><img src=\""+imgpath+"\" style=\"width: 100%\" onclick=\"goto_img_path(this)\"></div></div>";
	return str;
}



function goto_img1_path(obj)
{
	localStorage["brower_img_path"]=img1path;
	window.location.href=HTTP_REQUEST+"knows/brower_img.html";
}
function goto_img2_path(obj)
{
	localStorage["brower_img_path"]=img2path;
	window.location.href=HTTP_REQUEST+"knows/brower_img.html";
}
function goto_img3_path(obj)
{
	localStorage["brower_img_path"]=img3path;
	window.location.href=HTTP_REQUEST+"knows/brower_img.html";
}
function deldiary()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var url = HTTP_DEL_MOOD;
	var json = {
		"diaryID": nowdiary.id.toString(),
		"userID": userme.id.toString()
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

function change_diary()
{
	window.location.href="change_diary.html";
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