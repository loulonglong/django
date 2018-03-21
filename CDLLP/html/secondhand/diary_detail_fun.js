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
		document.getElementById("diary_money").innerText ="卖家定价："+conttentarr[2];
		document.getElementById("diary_time_end").innerText = "出售时间："+conttentarr[3];
		document.getElementById("diary_user_phone").innerText = "手机号码："+nowdiary.user.phone;
		if(nowdiary.ideal==5)
		    document.getElementById("shoucangnum").innerText = "取消收藏+"+nowdiary.zannum.toString();
		else
			document.getElementById("shoucangnum").innerText = "收藏+"+nowdiary.zannum.toString();
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
		if(nowdiary.imgtwo!=null && nowdiary.imgtwo!="")
		{
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