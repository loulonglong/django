//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
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
	document.getElementById("diary_title").innerText = nowdiary.urltitle;
	$(document).attr("title",nowdiary.urltitle);
	document.getElementById("user_name").innerHTML = nowdiary.user.name+"&nbsp; &nbsp; "+nowdiary.date;

	try {
		img1path = nowdiary.imgone;
		var thumbimgpath = img1path.substring(0,img1path.lastIndexOf("/")+1)+"thumb"+img1path.substring(img1path.lastIndexOf("/")+1,img1path.length);
		document.getElementById("diary_detai1_pic").onerror=function(){document.getElementById("diary_detai1_pic").src="images/pan1.png";};
		document.getElementById("diary_detai1_pic").src = HTTP_REQUEST+thumbimgpath;
		var move=gettopleft(nowdiary.imgone,58);
		if(move[0]==1){
			$("#diary_detai1_pic").css("height","100%");
			$("#diary_detai1_pic").css("margin-left",-move[1]+"px");
		}else if(move[0]==-1){
			$("#diary_detai1_pic").css("width","100%");
			$("#diary_detai1_pic").css("margin-top",-move[1]+"px");
		}

	}
	catch (err){
	}

	var conttentarr = nowdiary.content.replace(/\n/g,"<br>");
	document.getElementById("diary_content").innerHTML =conttentarr;
	try{
		var myaudio= document.getElementById('myaudio');
		myaudio.src = nowdiary.urlpath;
		var cidiv = document.getElementById("cidiv");
		setInterval(function(){ //setInterval间歇执行，设置间隔时间
			//$('#cidiv').scrollTop(300);
			if(hasopen==1 && hiddentype==0){
				$('.single-slider').jRange({
					from: 0,
					to: Math.floor(myaudio.duration),
					step: 1,
					width:"100%",
					format: '%s',
					showScale: true
				});
				$('.single-slider').jRange('setValue', Math.floor(myaudio.currentTime));
				cidiv.scrollTop = myaudio.currentTime/myaudio.duration*(cidiv.scrollHeight-370);
				//alert( document.getElementById('myaudio').duration);
			}

		},1000);
	}
	catch (err){}


	openfun();
}


function  gettopleft(imagepath,imgheight)
{
	var thumbimgpath = imagepath.substring(0, imagepath.lastIndexOf("/") + 1) + "thumb" + imagepath.substring(imagepath.lastIndexOf("/") + 1, imagepath.length);
	try {
		var width = parseInt(imagepath.substring(imagepath.indexOf("width") + 5, imagepath.indexOf("_height")));
		var height = parseInt(imagepath.substring(imagepath.indexOf("height") + 6, imagepath.indexOf("_qunid")));

		//计算缩略图宽高  以px为单位
		if (width > height)
		{
			var left = (width*imgheight/height - imgheight)/2;   //高度变成80
			return [1,left];
		}
		else {
			var top = (height*45/width - 45)/2;  //宽度变成80
			return [-1,top];
		}
	}
	catch (err){
		return [0,0];
	}
}


hasopen=0;
function openfun()
{
	var myAuto = document.getElementById('myaudio');
	var openaudio = document.getElementById("openaudio");
	if(hasopen==0){
		openaudio.src="images/zanting.png";
		hasopen=1;
		myAuto.play();
	}else{
		openaudio.src="images/open.png";
		hasopen=0;
		myAuto.pause();
	}

}
function nextfun()
{
}
function prefun()
{

}

function goto_qundiary_path()
{
	window.location.href=HTTP_REQUEST+"secondhand/alldiary.html";
}




function goto_alldiary()
{
	window.location.href="alldiary.jsp?qunid=1000";
}





var hiddentype=0;
var allcomment= new Array();
var allcommentnum=0;
function get_comment()
{
	allcommentnum=0;
	if(hiddentype==0){
		hiddentype=1;
		document.getElementById("commentdiv").style.display="block";
		document.getElementById("allcomment").innerHTML="";
		document.getElementById("diary_content").style.display="none";
	}else{
		hiddentype=0;
		document.getElementById("commentdiv").style.display="none";
		document.getElementById("diary_content").style.display="block";
	}

	allcomment = nowdiary.allComment;
	$.each(allcomment, function(index,value)
	{
		allcomment[allcommentnum] = value;
		allcommentnum++;
	});
	for(var i=0;i<allcomment.length;i++)
	{
		var htmlstr =change_to_comment(allcomment[i],i);
		$('#allcomment').append(htmlstr);
	}
}

function change_to_comment(comment,index)
{
	var str="";
	str = str+"<li data-icon='false'  class='ui-li-static'  style='border: none;border-bottom: solid;border-bottom-width: thin;border-bottom-color: #5a5757;margin-top: 15px;background-color: transparent'>";  // ui-btn-icon-right ui-icon-carat-r
	str = str+ "<p class='wrap'  style='line-height:25px;font-size: 15px;color: #ffffff;font-weight:lighter;text-shadow:none;margin-top: -10px'>"+comment.comment_detail+"</p>";
	try{
		str = str+ "<p style='font-size: 12px;color:#c7c7c7;font-weight:lighter;text-shadow:none;margin-top: -5px'>"+comment.comment_time.substring(0,comment.comment_time.indexOf(" "))+konggestr+comment.user.name+"</p>";
	}
	catch (err){
		str = str+ "<p style='font-size: 12px;color:#c7c7c7;font-weight:lighter;text-shadow:none;margin-top: -5px'>"+comment.comment_time.substring(0,comment.comment_time.indexOf(" "))+konggestr+"游客"+"</p>";
	}
	str = str+"</li>";
	return str;
}


var userid=0;
function addcomment(){
	var diary_comment = document.getElementById("commenttext").value;
	if(diary_comment==""){
		alert("先填写评论内容");
		return;
	}
	try{
		var usermestr = localStorage["luanpeng_user"];
		userme = JSON.parse(usermestr);
		userid = userme.id;
	}catch (err){
		//alert("登陆后方可评论");
		//return;
	}

	var url = HTTP_PINGLUN;
	var json= {
		"diaryid":nowdiary.id.toString(),
		"userid": userid.toString(),
		"content":diary_comment
	};
	document.getElementById("commentbutton").value="评论...";
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			//alert("评论成功");
			document.getElementById("commenttext").value="";
			location.reload();
			//getfromintetnet();
		}else{
			alert("评论失败");
		}
		document.getElementById("commentbutton").value="评论";
	});
}