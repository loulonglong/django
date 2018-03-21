//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var diarytypeindex="1";
var qun;
function  gonggaoinit()
{
	/*//设置滚轮自动加载
	$(window).scroll(
		function() {
			var scrollTop = $(this).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(this).height();
			if (scrollTop + windowHeight == scrollHeight) {
// 此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
				getalldiaryinf();
			}
		});*/

	try {
		var userstr = localStorage["luanpeng_user"];
		userme =  JSON.parse(userstr);
		var fabiaobutton = document.getElementById("fabiaobutton");
		fabiaobutton.src= "images/fabiao.png";
	}
	catch (e)
	{

	}

		getalldiaryinf();
}

//查询详情
function getalldiaryinf()
{

	document.getElementById("getmore").innerText="加载中...";
	var qunstr = document.getElementById("alldiary").getAttribute("qunid");
	if(qunstr==null || qunstr=="")
	{
		alert("查询不到平台");
		return;
	}
	localStorage["luanpeng_qunid"]=qunstr;

	//var url =HTTP_GET_QUN_DIARY_TYPE;//   HTTP_ALL_DIARYS
	var url = HTTP_GET_QUN_DIARY;
	var json = {
		"qunid":qunstr,
		"typeindex":diarytypeindex,
		"page":pagenum.toString()
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				document.getElementById("load_more").style.display="none";
			}
			else {
				localStorage["luanpeng_somediary"] = JSON.stringify(backstr.data);
				//alert("查询成功");
				qundiary_init();
			}
			document.getElementById("getmore").innerText="点击加载更多";
		}else{
			document.getElementById("getmore").innerText="点击加载更多";
			//alert("查询失败");
		}
	});
}


function goto_type_html(typeindexstr)
{
   if(typeindexstr==diarytypeindex)
   {
	   return;
   }

	diarytypeindex =typeindexstr;
	sessionStorage["luanpeng_typeindex"] = diarytypeindex;
	$('#alldiary').html("");
	pagenum=1;
	document.getElementById("load_more").style.display="block";
	settypetextcolor(diarytypeindex);
	alldiarynum=0;
	alldiary=new Array();
	//缓存数据
	sessionStorage["luanpeng_somealldiary"] ="";
	//记录加载数据页数
	sessionStorage["luanpeng_pagenum"] ="1";
	sessionStorage["luanpeng_weizhi"]="0";

	getalldiaryinf();

}



function settypetextcolor(typeindexstr)
{
    try{
        document.getElementById("type1").style.color="#ababab"; //'green'
		document.getElementById("type2").style.color="#ababab"; //'green'
		document.getElementById("type3").style.color="#ababab"; //'green'
		document.getElementById("type4").style.color="#ababab"; //'green'

		if(typeindexstr=="1")
			document.getElementById("type1").style.color="green"; //'green'
		if(typeindexstr=="2")
			document.getElementById("type2").style.color="green"; //'green'
		if(typeindexstr=="3")
			document.getElementById("type3").style.color="green"; //'green'
		if(typeindexstr=="4")
			document.getElementById("type4").style.color="green"; //'green'
	}
	catch (e)
	{

	}


}

function settypeshow()
{

	if(qun.type1==null || qun.type1=="")
	{
		 document.getElementById("t1").style.display="none";
	}
	else
	{
		document.getElementById("type1").innerText = qun.type1;
	}
	if(qun.type2==null || qun.type2=="")
	{
		document.getElementById("t2").style.display="none";
	}
	else
	{
		document.getElementById("type2").innerText = qun.type2;
	}

	if(qun.type3==null || qun.type3=="")
	{
		document.getElementById("t3").style.display="none";
	}
	else
	{
		document.getElementById("type3").innerText = qun.type3;
	}

	if(qun.type4==null || qun.type4=="")
	{
		document.getElementById("t4").style.display="none";
	}
	else
	{
		document.getElementById("type4").innerText = qun.type4;
	}
	settypetextcolor(diarytypeindex);
}

//读取所有日志
function qundiary_init()
{
	somediarynum=0;
	var alldiarystr = localStorage["luanpeng_somediary"];
	somediary=JSON.parse(alldiarystr);
	//设置顶部啦显示
	if(alldiarynum==0)
	{
       qun = somediary[0].qun;
       localStorage["luanpeng_qunnow"] = JSON.stringify(qun);
		//settypeshow();
	}
	$.each(somediary, function(index,value)
	{
		somediary[somediarynum] = value;
		alldiary[alldiarynum] = value;
		somediarynum++;
		alldiarynum++;
	});
	addsomediary_show();

	//缓存数据
	sessionStorage["luanpeng_somealldiary"] =JSON.stringify(alldiary);
	//记录加载数据页数
	sessionStorage["luanpeng_pagenum"] =pagenum.toString();

}


//添加更多日志
function addsomediary_show()
{
	for(var i=0;i<somediary.length;i++)
	{
		var htmlstr =change_to_htmlstr(somediary[i],alldiarynum-somediarynum+i);
		$('#alldiary').append(htmlstr);
	}
}



//跳转到日志详情
function goto_diarydetail_show(data)
{

	var weizhi = document.body.scrollTop;
	sessionStorage["luanpeng_weizhi"] = weizhi.toString();
	sessionStorage["luanpeng_typeindex"] = diarytypeindex;
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	//window.location.href="change_diary.html";
	window.location.href=HTTP_REQUEST+"gonggao/diary_detail.jsp?diaryid="+alldiary[diaryindex].id.toString();
	return false;
}


//跳转到日志详情
function goto_diarychange_show(data)
{
	var weizhi = document.body.scrollTop;
	sessionStorage["luanpeng_weizhi"] = weizhi.toString();
	sessionStorage["luanpeng_typeindex"] = diarytypeindex;
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	window.location.href="change_diary.html";
	//window.location.href=HTTP_REQUEST+"gonggao/diary_detail.jsp?diaryid="+alldiary[diaryindex].id.toString();
}


//跳转到日志详情
function goto_img_show(data)
{
	var imgpath = data.getAttribute('imgpath');
	window.location.href=imgpath;
	event.stopPropagation();
	//localStorage["brower_img_path"] =imgpath;   //获取第几个日志
	//window.location.href="brower_img.html";

}


var topstr="0";
var leftstr="0";
function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	str = str+"<li diaryindex='"+diaryindex.toString()+"' onclick='goto_diarydetail_show(this)' class='ui-li-has-count ui-first-child  ui-last-child' style='margin-top:5px;padding-top: 10px;padding-bottom:5px;padding-left:15px;padding-right:15px;background-color: #ffffff'; data-icon='false'>";  // ui-btn-icon-right ui-icon-carat-r
	str = str+ "<p  class='wrap' style='font-size: 16px;font-weight:lighter;margin-top:0px;color: #000000'>"+diary.content.replace(/\n/g,"<br/>")+"</p>";


	if(diary.imgone!=null && diary.imgone!="")
	{
		str = str+ "<div class='ui-grid-b' id='alldiaryimg'>";
		str = str+ gettopleft(1,diary.imgone);
		if(diary.imgtwo!=null && diary.imgtwo!="")
		{
			str = str+ gettopleft(2,diary.imgtwo);
		}
		if(diary.imgthree!=null && diary.imgthree!="")
		{
			str = str+ gettopleft(3,diary.imgthree);
		}
		str = str+ "</div>";
	}
	str = str+ "<div>";
	str = str+ "<p  style='color:#a1a8ae;margin-top: 10px'>"+diary.date+konggestr+diary.type+konggestr+"评论"+diary.commentnum.toString()+konggestr+"浏览"+diary.tuijiannum.toString()+"</p>";
	//str = str+ "<p  style='float:right;color:#a1a8ae;margin-top: -25px'>"+"修改"+"</p>";
	try {
		//如果是自己的日志，则可以删除
		if(diary.user.id.toString()==userme.id.toString())
		{
			//str = str+ "<p class='ui-btn-inline'  onclick='goto_diarydetail_show(this)' diaryindex='"+diaryindex.toString()+"' style='text-align:right;border-width: thin;background-color:#eb3e28;margin-top: -25px;margin-right: 10px;font-weight: lighter;text-shadow: none;color: #fff600'>"+"修改"+"</p>";
			str = str+ "<span onclick='goto_diarychange_show(this)' diaryindex='"+diaryindex.toString()+"' style='float:right;border-width:2px;border-style:solid;border-radius:2px;border-color:#f3fda3;padding-right:5px;padding-bottom:2px;padding-top:2px;padding-left:5px;background-color:#eb3e28;margin-left:80%;margin-top: -30px;margin-right: 10px;font-size:12px;font-weight: lighter;text-shadow: none;color: #ebfe4c'>"+"修改"+"</span>";
		}
	}
	catch (e)
	{}
	str = str+ "</div>";

	str = str+"</li>";
/*	//添加弹窗代码
	str = str+ "<div data-role='popup' id='pop'>"
	str = str+ "<a href='#' data-rel='back' class='ui-btn ui-btn-a ui-icon-delete ui-btn-icon-notext ui-corner-all ui-shadow ui-btn-right'>关闭</a>"
	str = str+ "<img src='"+HTTP_REQUEST+diary.imgone+"' style='max-height: 800px'>"
	/!*str = str+ "<p>这是一个弹出窗口</p>";*!/
	str = str+ "</div>"*/
	return str;
}


function gotofabiao()
{
	sessionStorage["luanpeng_somealldiary"]="";
	if(localStorage["luanpeng_user"]==null || localStorage["luanpeng_user"]=="")
		window.location.href=HTTP_REQUEST+"gonggao/login.html";
	else
		window.location.href=HTTP_REQUEST+"gonggao/fabiao.html";
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
			leftstr=((width-100)/2).toString();
		}
		else
		{
			leftstr="0";
			topstr=((100/width*height-75)/2).toString();   //宽缩放为90px
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