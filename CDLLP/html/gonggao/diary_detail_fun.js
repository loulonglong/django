//登陆界面初始化函数

var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var diaryid;
var userme;
var img1path="";
var img2path="";
var img3path="";
var nowdiary;
var allcomment= new Array();
var somecomment = new Array();
var somecommentnum=0;
var allcommentnum=0;
var pagenum=1;
function getdiaryfromlin()
{
	diaryid = document.getElementById("diary").getAttribute("diaryid");
	var url = HTTP_DIARY_ALL;
	var json = {
		"diaryid": diaryid
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			//alert("查询成功");
			localStorage["luanpeng_nowdiary"] =JSON.stringify(backstr.data);   //获取第几个日志
			diary_detail_init();
		}else{
			alert("收藏失败");
		}
	});
}


//初始化  设置合同可选项
function diary_detail_init()
{
	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary =JSON.parse(diarystr);
	//设置题目
	document.getElementById("diary_content").innerText=nowdiary.content;

/*
	document.getElementById("diary_time").innerHTML=nowdiary.date+konggestr+"评论"+nowdiary.commentnum.toString()+konggestr+"浏览"+nowdiary.tuijiannum.toString();

	if (nowdiary.imgone!=null && nowdiary.imgone!="") {
		img1path = nowdiary.imgone;
		var thumbimgpath1 = nowdiary.imgone.substring(0, nowdiary.imgone.lastIndexOf("/") + 1) + "thumb" + nowdiary.imgone.substring(nowdiary.imgone.lastIndexOf("/") + 1, nowdiary.imgone.length);
		document.getElementById("pic1_path").src = HTTP_REQUEST + thumbimgpath1;
		document.getElementById("pic1_path_yuan").href  = HTTP_REQUEST + nowdiary.imgone;
		document.getElementById("img1_div").style.display="block";
	}
	else
	{
		document.getElementById("img1_div").style.display="none";
	}
	if (nowdiary.imgtwo!=null && nowdiary.imgtwo!="") {
		img2path = nowdiary.imgtwo;
		var thumbimgpath1 = nowdiary.imgtwo.substring(0, nowdiary.imgtwo.lastIndexOf("/") + 1) + "thumb" + nowdiary.imgtwo.substring(nowdiary.imgtwo.lastIndexOf("/") + 1, nowdiary.imgtwo.length);
		document.getElementById("pic2_path").src = HTTP_REQUEST + thumbimgpath1;
		document.getElementById("pic2_path_yuan").href  = HTTP_REQUEST + nowdiary.imgtwo;
		document.getElementById("img2_div").style.display="block";
	}
	else
	{
		document.getElementById("img2_div").style.display="none";
	}
	if (nowdiary.imgthree!=null && nowdiary.imgthree!="")
	{
		img3path = nowdiary.imgthree;
		var thumbimgpath1 = nowdiary.imgthree.substring(0, nowdiary.imgthree.lastIndexOf("/") + 1) + "thumb" + nowdiary.imgthree.substring(nowdiary.imgthree.lastIndexOf("/") + 1, nowdiary.imgthree.length);
		document.getElementById("pic3_path").src = HTTP_REQUEST + thumbimgpath1;
		document.getElementById("pic3_path_yuan").href  = HTTP_REQUEST + nowdiary.imgthree;
		document.getElementById("img3_div").style.display="block";
	}
	else
	{
		document.getElementById("img3_div").style.display="none";
	}
*/
	localStorage["brower_img1_path"]="";
	localStorage["brower_img2_path"]="";
	localStorage["brower_img3_path"]="";
     var str="";
	if(nowdiary.imgone!=null && nowdiary.imgone!="")
	{
		str = str+ "<div class='ui-grid-b' id='alldiaryimg'>";
		localStorage["brower_img1_path"] =nowdiary.imgone;
		str = str+ gettopleft(1,nowdiary.imgone);
		if(nowdiary.imgtwo!=null && nowdiary.imgtwo!="")
		{
			localStorage["brower_img2_path"] =nowdiary.imgtwo;
			str = str+ gettopleft(2,nowdiary.imgtwo);
		}
		if(nowdiary.imgthree!=null && nowdiary.imgthree!="")
		{
			localStorage["brower_img3_path"] =nowdiary.imgthree;
			str = str+ gettopleft(3,nowdiary.imgthree);
		}
		str = str+ "</div>";
	}
	str = str+ "<div>";
	str = str+ "<p  style='color:#a1a8ae;margin-top: 10px'>"+nowdiary.date+konggestr+nowdiary.type+konggestr+"评论"+nowdiary.commentnum.toString()+konggestr+"浏览"+nowdiary.tuijiannum.toString()+"</p>";
	//str = str+ "<p  style='float:right;color:#a1a8ae;margin-top: -25px'>"+"修改"+"</p>";
	try {
		//如果是自己的日志，则可以删除

		var userstr = localStorage["luanpeng_user"];
		userme =  JSON.parse(userstr);
		//alert(diarystr);
		if(nowdiary.user.id.toString()==userme.id.toString())
		{
			//str = str+ "<p class='ui-btn-inline'  onclick='goto_diarydetail_show(this)' diaryindex='"+diaryindex.toString()+"' style='text-align:right;border-width: thin;background-color:#eb3e28;margin-top: -25px;margin-right: 10px;font-weight: lighter;text-shadow: none;color: #fff600'>"+"修改"+"</p>";
			str = str+ "<span onclick='goto_diarychange_show()' style='float:right;border-width:2px;border-style:solid;border-radius:2px;border-color:#f3fda3;padding-right:5px;padding-bottom:2px;padding-top:2px;padding-left:5px;background-color:#eb3e28;margin-left:80%;margin-top: -30px;margin-right: 10px;font-size:12px;font-weight: lighter;text-shadow: none;color: #ebfe4c'>"+"修改"+"</span>";
		}
	}
	catch (e)
	{}
	str = str+ "</div>";
	$('#diary_detail').append(str);

	somecommentnum=0;
	somecomment = nowdiary.allComment;
	diarycomment_init();
}

//跳转到修改日志
function goto_diarychange_show()
{
	window.location.href="change_diary.html";
}

//跳转到图片
function goto_img_show(data)
{
	var imgpath = data.getAttribute('imgpath');
	//window.location.href=imgpath;
	//localStorage["brower_img_path"] =imgpath;   //获取第几个日志
	window.location.href="brower_img.html";
}

function  gettopleft(index,imagepath)
{
	var thumbimgpath = imagepath.substring(0, imagepath.lastIndexOf("/") + 1) + "thumb" + imagepath.substring(imagepath.lastIndexOf("/") + 1, imagepath.length);
	try{
		var width=parseInt(imagepath.substring(imagepath.indexOf("width")+5,imagepath.indexOf("_height")));
		var height=parseInt(imagepath.substring(imagepath.indexOf("height")+6,imagepath.indexOf("_qunid")));
		//计算缩略图宽高  以px为单位
		if(width>height)
		{
			width = 75/height*width;
			height=75;
		}
		else
		{
			height = 75/width*height;
			width=75;
		}

		//设置偏移  div宽为高的1.2倍
		if(width>height*1.2)
		{
			topstr="0";
			leftstr=((width-90)/2).toString();
		}
		else
		{
			leftstr="0";
			topstr=((90/width*height-75)/2).toString();   //宽缩放为90px
		}
	}
	catch (e){
		topstr="0";
		leftstr="0";
	}

	var str="";
	if(index==1)
		str = str+ "<div id='img1_div' class='ui-block-a'   style='height:75px;width:100px;overflow: hidden'>";
	else if(index==2)
		str = str+ "<div id='img1_div' class='ui-block-b'   style='height:75px;width:100px;margin-left: 15px;overflow: hidden'>";
	else if(index==3)
		str = str+ "<div id='img1_div' class='ui-block-c'   style='height:75px;width:100px;margin-left: 15px;overflow: hidden'>";
	else if(index==4)
		str = str+ "<div id='img1_div' class='ui-block-d'   style='height:75px;width:90px;margin-left: 20px;overflow: hidden'>";

	/*		str = str+ "<a href='"+HTTP_REQUEST+diary.imgone+"' imgpath='"+HTTP_REQUEST+diary.imgone+"'  target='_blank' class='swipebox' title='原图'>";
	 str = str+ "<img id='pic1_path' src='"+HTTP_REQUEST+thumbimgpath1+"' style='width: 90%' alt='image'>";
	 str = str+ "</a>";*/
	if(leftstr=="0")
		str = str+ "<img id='pic1_path' src='"+HTTP_REQUEST+thumbimgpath+"' imgpath='"+HTTP_REQUEST+imagepath +"' onclick='goto_img_show(this)'; style='width:100%;margin-top: -"+topstr+"px' alt='image'>";
	else if(topstr=="0")
		str = str+ "<img id='pic1_path' src='"+HTTP_REQUEST+thumbimgpath+"' imgpath='"+HTTP_REQUEST+imagepath +"' onclick='goto_img_show(this)'; style='height:100%;margin-left: -"+leftstr+"px' alt='image'>";

	str = str+ "</div>";
	return str;
}

function goto_img1_path(obj)
{
	localStorage["brower_img_path"]=img1path;
	window.location.href=HTTP_REQUEST+"gonggao/brower_img.html";
}
function goto_img2_path(obj)
{
	localStorage["brower_img_path"]=img2path;
	window.location.href=HTTP_REQUEST+"gonggao/brower_img.html";
}
function goto_img3_path(obj)
{
	localStorage["brower_img_path"]=img3path;
	window.location.href=HTTP_REQUEST+"gonggao/brower_img.html";
}


function  jsoncomment()
{
	somecommentnum=0;
	var allcommentstr = localStorage["luanpeng_somecomment"];
	somecomment=JSON.parse(allcommentstr);
	diarycomment_init();
}

//读取所有日志
function diarycomment_init()
{
	$.each(somecomment, function(index,value)
	{
		somecomment[somecommentnum] = value;
		allcomment[allcommentnum] = value;
		somecommentnum++;
		allcommentnum++;
	});
	addsomecomment_show();

}



//添加更多日志
function addsomecomment_show()
{
	for(var i=0;i<somecomment.length;i++)
	{
		var htmlstr =change_to_htmlstr(somecomment[i],allcommentnum-somecommentnum+i);
		$('#allcomment').append(htmlstr);
	}
}

//跳转到日志详情
function comment_zan_no(state)
{
	var weizhi = document.body.scrollTop;
	sessionStorage["luanpeng_weizhi"] = weizhi.toString();
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	//window.location.href="diary_detail.html";
	window.location.href=HTTP_REQUEST+"konws/diary_detail.jsp?diaryid="+alldiary[diaryindex].id.toString();

}


function change_to_htmlstr(comment,index)
{
	var str="";
	str = str+"<li data-icon='false'  style='border: none;border-bottom: solid;border-bottom-width: thin;border-bottom-color: #e3e2e2;margin-top: 1px;background-color: #ffffff' class='ui-li-static'>";  // ui-btn-icon-right ui-icon-carat-r
	str = str+ "<p class='wrap'  style='font-size: 15px'>"+comment.comment_detail+"</p>";
	str = str+ "<div class='ui-btn-inline' style='border: none'>";
	str = str+ "<p style='color:#a1a8ae'>"+comment.comment_time.substring(0,comment.comment_time.indexOf(" "))+konggestr+(index+1).toString()+"楼</p>";
	str = str+ "</div>";
/*	str = str+ "<div class='ui-btn-inline' style='border: none;margin-left: 35%'>";
	str = str+ "<span style='margin-right: 20px;border-width:0px;border-style:solid;line-height:1.6em;font-size: 15px'>赞"+comment.zannum.toString()+"</span>";
	str = str+ "<span style='border-width:0px;border-style:solid;line-height:1.6em;font-size: 15px'>赞"+comment.badnum.toString()+"</span>";
	str = str+"</div>";*/
	str = str+"</li>";

	return str;
}


function da_fun()
{
	window.location.href="comment.html";

}

function shoucang()
{
	try{
		var userstr = localStorage["luanpeng_user"];
		userme =JSON.parse(userstr);
		diaryid = document.getElementById("diary_name").getAttribute("diaryid");

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
				document.getElementById("shoucangnum").innerText = "收藏+"+shounum.toString();
			}else{
				alert("收藏失败");
			}
		});

	}
	catch (e){
		alert("注册登陆后方可收藏");
	}

}
