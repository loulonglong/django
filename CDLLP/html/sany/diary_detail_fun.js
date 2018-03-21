//登陆界面初始化函数

var nowdiary;
var userme;
//初始化  设置合同可选项
function diary_detail_init()
{
	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary =JSON.parse(diarystr);
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	if(nowdiary.user.id!=userme.id)
	{
		document.getElementById("deldiaryid").style.visibility="hidden";
	}
	document.getElementById("huikuan_hetonghao").value = nowdiary.qun.ab;
	document.getElementById("huikuan_fukuanfangshi").value = nowdiary.type;
	var conttentarr = nowdiary.content.split("---");
	document.getElementById("huikuan_time").value = conttentarr[0].replace("付款时间：","");
	document.getElementById("huikuan_moeny").value = conttentarr[1].replace("付款金额：","");
	document.getElementById("huikuan_fukuanzhanghu").value = conttentarr[2].replace("付款账户：","");
	document.getElementById("huikuan_shoukuanren").value = conttentarr[3].replace("款项接收人：","");
	document.getElementById("huikuan_shoukuanzhanghu").value = conttentarr[4].replace("收款账户：","");

	$('#alldiaryimg').html("");

	if(nowdiary.imgone!=null && nowdiary.imgone!="")
	{
		var htmlstr =changea_to_htmlstr(nowdiary.imgone);
		$('#alldiaryimg').append(htmlstr);
	}
	if(nowdiary.imgtwo!=null && nowdiary.imgtwo!="")
	{
		var htmlstr =changeb_to_htmlstr(nowdiary.imgtwo);
		$('#alldiaryimg').append(htmlstr);
	}
	if(nowdiary.imgthree!=null && nowdiary.imgthree!="")
	{
		var htmlstr =changec_to_htmlstr(nowdiary.imgthree);
		$('#alldiaryimg').append(htmlstr);
	}
	if(nowdiary.imgfour!=null && nowdiary.imgfour!="")
	{
		var htmlstr =changea_to_htmlstr(nowdiary.imgfour);
		$('#alldiaryimg').append(htmlstr);
	}

}


function changea_to_htmlstr(imgpath)
{
	var str="";
	str = str+"<div class=\"ui-block-a\"><div class=\"ui-bar\" style=\"height: auto\"><img src=\""+imgpath+"\" style=\"width: 100%\" onclick=\"goto_img_path(this)\"></div></div>";
	return str;
}

function changeb_to_htmlstr(imgpath)
{
	var str="";
	str = str+"<div class=\"ui-block-b\"><div class=\"ui-bar\" style=\"height: auto\"><img src=\""+imgpath+"\" style=\"width: 100%\" onclick=\"goto_img_path(this)\"></div></div>";
	return str;
}


function changec_to_htmlstr(imgpath)
{
	var str="";
	str = str+"<div class=\"ui-block-c\"><div class=\"ui-bar\" style=\"height: auto\"><img src=\""+imgpath+"\" style=\"width: 100%\"  onclick=\"goto_img_path(this)\"></div></div>";
	return str;
}

function goto_img_path(obj)
{
	localStorage["brower_img_path"]=obj.src;
	window.location.href="brower_img.html";
}

function deldiary()
{
	var url = HTTP_DEL_MOOD;
	var json = {
		"diaryID": nowdiary.id.toString(),
		"userID": userme.id.toString()
	};
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0"){
			window.location.href="qundiary.html";
		}else{
			alert("删除失败");
		}
	});
}
