//登陆界面初始化函数

var nowdiary;
var userme;
var img1path="";
var img2path="";
var img3path="";
function getfromintetnet()
{
	var diaryid = document.getElementById("diary_name").getAttribute("diaryid");
	if(diaryid!=null && diaryid!="")
	{
		var url = HTTP_DIARY_ALL;
		var json= {
			"diaryid":diaryid
		};
		sendDataByPost(url,json,function(backstr)
		{
			if(backstr.respcode == "0")
			{
				localStorage["luanpeng_nowdiary"]=JSON.stringify(backstr.data);
				diary_detail_init();
			}else{
			}
		});
	}

}
//初始化  设置合同可选项
function diary_detail_init()
{

	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary =JSON.parse(diarystr);

	var conttentarr = nowdiary.content.split("---");
	document.getElementById("diary_name").innerText =conttentarr[0];
	document.getElementById("diary_time").innerText = "入手时间："+conttentarr[1];
	document.getElementById("diary_money").innerText ="卖家定价："+conttentarr[2];
	document.getElementById("diary_time_end").innerText = "出售时间："+conttentarr[3];
	document.getElementById("diary_user_phone").innerText = "手机号码："+nowdiary.user.phone;
	document.getElementById("shoucangnum").innerText = "收藏+"+nowdiary.zannum.toString();
	//$('#alldiaryimg').html("");
	if(nowdiary.imgone!=null && nowdiary.imgone!="")
	{
		img1path = nowdiary.imgone;
		var thumbimgpath = img1path.substring(0,img1path.lastIndexOf("/")+1)+"thumb"+img1path.substring(img1path.lastIndexOf("/")+1,img1path.length);
		var str= "<img src='" +HTTP_REQUEST+thumbimgpath+"'  onclick='goto_img1_path(this)' id='diary_detai1_pic' style='width: 80%;margin-top: 10%;margin-left: 10%;margin-bottom: 10%'>";
		$('#alldiaryimg').append(str);
	}
	if(nowdiary.imgtwo!=null && nowdiary.imgtwo!="")
	{
		img2path = nowdiary.imgtwo;
		var thumbimgpath = img2path.substring(0,img2path.lastIndexOf("/")+1)+"thumb"+img2path.substring(img2path.lastIndexOf("/")+1,img2path.length);
		var str= "<img src='" +HTTP_REQUEST+thumbimgpath+"'  onclick='goto_img2_path(this)' id='diary_detai2_pic' style='width: 80%;margin-top: 10%;margin-left: 10%;margin-bottom: 10%'>";
		$('#alldiaryimg').append(str);
	}
	if(nowdiary.imgthree!=null && nowdiary.imgthree!="")
	{
		img3path = nowdiary.imgthree;
		var thumbimgpath = img3path.substring(0,img3path.lastIndexOf("/")+1)+"thumb"+img3path.substring(img3path.lastIndexOf("/")+1,img3path.length);
		var str= "<img src='" +HTTP_REQUEST+thumbimgpath+"'  onclick='goto_img3_path(this)' id='diary_detai2_pic' style='width: 80%;margin-top: 10%;margin-left: 10%;margin-bottom: 10%'>";
		$('#alldiaryimg').append(str);
	}

	document.getElementById("diary_beizhu").innerText = "卖家备注："+conttentarr[4];

}



function goto_img1_path(obj)
{
	localStorage["brower_img_path"]=img1path;
	window.location.href="brower_img.html";
}
function goto_img2_path(obj)
{
	localStorage["brower_img_path"]=img2path;
	window.location.href="brower_img.html";
}
function goto_img3_path(obj)
{
	localStorage["brower_img_path"]=img3path;
	window.location.href="brower_img.html";
}

function goto_qundiary_path()
{
	window.location.href=HTTP_REQUEST+"secondhand/alldiary.html";
}




function shoucang()
{
	try{
		var userstr = localStorage["luanpeng_user"];
		userme =JSON.parse(userstr);
		var shoucangtext = document.getElementById("shoucangnum").innerText;
		if(shoucangtext.indexOf("取消")>-1)
		{
			delshoucang();
		}
		else
		{
			addshoucang();
		}

	}
	catch (e){
		alert("注册登陆后方可收藏");
	}

}

function addshoucang()
{
	var diaryid=nowdiary.id.toString();
	var url = HTTP_ADD_MORE;
	var json = {
		"deal": "5",
		"userid_source": userme.id.toString(),
		"diaryid_destination": diaryid
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("收藏成功");
			var shounumstr=document.getElementById("shoucangnum").innerText.replace("收藏+","");
			var shounum = 1+ parseInt(shounumstr);
			document.getElementById("shoucangnum").innerText = "取消收藏+"+shounum.toString();
		}else{
			alert("收藏失败");
		}
	});

}


function delshoucang()
{
	var diaryid=nowdiary.id.toString();
	var url = HTTP_DEL_MORE_FOR_MORE;
	var json = {
		"deal": "5",
		"userid_source": userme.id.toString(),
		"diaryid_destination": diaryid
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			//alert("取消收藏成功");
			var shounumstr=document.getElementById("shoucangnum").innerText.replace("取消收藏+","");
			var shounum =  parseInt(shounumstr)-1;
			document.getElementById("shoucangnum").innerText = "收藏+"+shounum.toString();
		}else{
			alert("取消收藏失败");
		}
	});

}