//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userme;
var qun;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var type="";
var qunid="";
function init() {
	load();
	//设置滚轮自动加载
	/*$(window).scroll(
		function() {
			var scrollTop = $(this).scrollTop();
			var scrollHeight = $(document).height();
			var windowHeight = $(this).height();
			if (scrollTop + windowHeight == scrollHeight) {
// 此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
				getalldiaryinf();
			}
		});*/
	datainit();
}
function datainit()
{
	pagenum=1;
	document.getElementById("load_more").style.display="block";
	qunid = document.getElementById("qunheader").getAttribute("qunid");
	document.getElementById("alldiary").innerHTML="";
	var typeindex = document.getElementById("alldiary").getAttribute("typeindex");
	var diarytype1 = document.getElementById("type1");
	var diarytype2 = document.getElementById("type2");
	var diarytype3 = document.getElementById("type3");
	var diarytype4 = document.getElementById("type4");
	diarytype1.style.color='black';
	diarytype2.style.color='black';
	diarytype3.style.color='black';
	diarytype4.style.color='black';

	if(typeindex=="" || typeindex=="1")
	{
		type=diarytype1.innerText;
		diarytype1.style.color='green';
	}
	if(typeindex=="2")
	{
		type=diarytype2.innerText;
		diarytype2.style.color='green';
	}
	if(typeindex=="3")
	{
		type=diarytype3.innerText;
		diarytype3.style.color='green';
	}
	if(typeindex=="4")
	{
		type=diarytype4.innerText;
		diarytype4.style.color='green';
	}
	getalldiaryinf();
}
//查询详情
function getalldiaryinf()
{

	var url = HTTP_GET_QUN_DIARY_TYPE;
	var json = {
		"qunid":qunid,
		"type":type,
		"page":pagenum.toString()
	};
	document.getElementById("load_more_text").innerText="加载中...";
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				document.getElementById("load_more").style.display="none";
			}
			else {

				//alert("查询成功");
				localStorage["luanpeng_somediary"] = JSON.stringify(backstr.data);
				alldiary_init();
			}
			document.getElementById("load_more_text").innerText="加载更多...";

		}else{
			alert("查询失败");
			document.getElementById("load_more_text").innerText="加载更多...";
		}
	});

}

//读取所有日志
function alldiary_init()
{
	somediarynum=0;
	var alldiarystr = localStorage["luanpeng_somediary"];
	somediary=JSON.parse(alldiarystr);
	$.each(somediary, function(index,value)
	{
		somediary[somediarynum] = value;
		alldiary[alldiarynum] = value;
		somediarynum++;
		alldiarynum++;
	});
	addsomediary_show();
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
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
    var urlpath = alldiary[diaryindex].urlpath;
	if(urlpath=="" || urlpath==null)
	{
		window.location.href=HTTP_REQUEST+"web/getdiaryurl?diaryid="+alldiary[diaryindex].id.toString();
	}
	else
	   window.location.href=alldiary[diaryindex].urlpath;

}

function goto_type_html(typeindex)
{
	var qunid = document.getElementById("qunheader").getAttribute("qunid");
	document.getElementById("alldiary").setAttribute("typeindex",typeindex);
	datainit();
	//window.location.href=HTTP_REQUEST+"web/myqundiary?typeindex="+typeindex+"&qunid="+qunid;
}


var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	str = str+"<li data-icon='false' class='ui-li-has-count ui-li-has-thumb ui-first-child  ui-last-child'>";  //
	str = str+"<a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show(this)' class='ui-btn'>";  // ui-btn-icon-right ui-icon-carat-r
	if(diary.imgone!=null && diary.imgone!="")
	{
		/*var imgpath = diary.imgone;
		 var thumbimgpath = imgpath.substring(0,imgpath.lastIndexOf("/")+1)+"thumb"+imgpath.substring(imgpath.lastIndexOf("/")+1,imgpath.length);
		 imgpath = HTTP_REQUEST+thumbimgpath;
		 str = str+ "<img src='"+imgpath+"' style='height: 80px;width:120px' >";*/
		str=str+gettopleft(diary.imgone);
	}
	else
	{
		str = str+ "<img  class='ui-li-thumb' src='images/tubiao100.png' style='height: 80px;width:80px' >";
	}

	str = str+ "<p style='font-size: 16px;margin-right: -30px'>"+diary.urltitle+"</p>";
	str = str+ "<p style='color: #a1a8ae'>"+diary.date+konggestr+diary.time+"</p>";
	str = str+"</a></li>";

	return str;
}

function  gettopleft(imagepath)
{
	var thumbimgpath = imagepath.substring(0, imagepath.lastIndexOf("/") + 1) + "thumb" + imagepath.substring(imagepath.lastIndexOf("/") + 1, imagepath.length);
	try {
		var width = parseInt(imagepath.substring(imagepath.indexOf("width") + 5, imagepath.indexOf("_height")));
		var height = parseInt(imagepath.substring(imagepath.indexOf("height") + 6, imagepath.indexOf("_qunid")));
		if(width==0 || height==0 || isNaN(width) ||  isNaN(height))
		{
			var str = "";
			str = str+ "<img  class='ui-li-thumb' src='"+HTTP_REQUEST + thumbimgpath +"' style='height: 70px;width:70px;margin-top: 7px;margin-left: 7px' >";
			return str;
		}
		var str = "";
		str = str + "<div class='ui-li-thumb' style='height:70px;width:70px;margin-top: 7px;margin-left: 7px;overflow: hidden'>";

		//计算缩略图宽高  以px为单位
		if (width > height)
		{
			var leftstr = (width*70/height - 70)/2;   //高度变成80
			//alert("宽度"+width.toString()+"==="+"高度"+height.toString()+"===左偏移"+leftstr);
			str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "' style='height: 100%;margin-left: -" + leftstr.toString() + "px' >";
		}
		else {
				var topstr = (height*70/width - 70)/2;  //宽度变成80
				//alert("宽度"+width.toString()+"==="+"高度"+height.toString()+"===上偏移"+topstr);
				str = str + "<img  src='" + HTTP_REQUEST + thumbimgpath + "' style='width: 100%;margin-top: -" + topstr.toString() + "px' >";
		}
		str = str+ "</div>";
		return str;
	}
	catch (err){
		//不进行移位
		var str = "";
		str = str+ "<img  class='ui-li-thumb' src='"+HTTP_REQUEST + thumbimgpath +"' style='height: 70px;width:70px;margin-top: 7px;margin-left: 7px' >";
		return str;
	}

}


function load()
{
	//img_content是图片  textbg图片下阴影   text阴影中文字
var t = n = 0; count = $(".img_content a").size();
var st=0;
var play = ".play";
var playText = ".play .text";
var playNum = ".play .num a";
var playConcent = ".play .img_content a";
$(playConcent + ":not(:first)").hide();
$(playText).html($(playConcent + ":first").find("img").attr("alt"));
$(playNum + ":first").addClass("on");
$(playNum).click(function() {
	var i = $(this).text() - 1;
	n = i;
	if (i >= count) return;
	$(playText).html($(playConcent).eq(i).find("img").attr('alt'));
	// $(playText).unbind().click(function(){window.open($(playConcent).eq(i).attr('href'), "_blank")})
	$(playConcent).filter(":visible").hide().parent().children().eq(i).fadeIn("fast");
	$(this).removeClass("on").siblings().removeClass("on");
	$(this).removeClass("on2").siblings().removeClass("on2");
	$(this).addClass("on").siblings().addClass("on2");

});
/*
 $(playConcent).click(function(){
 var i;
 if(n==0){
 i=1;
 n=1;
 }else{
 i=n+1;
 n++;
 }
 //alert(i);
 //alert(n);
 if(i>=count){
 i=0;
 n=0;
 }
 $(playText).html($(playConcent).eq(i).find("img").attr('alt'));
 //$(playText).unbind().click(function(){window.open($(playConcent).eq(i).attr('href'), "_blank")})
 $(playConcent).filter(":visible").hide().parent().children().eq(i).fadeIn(1200);
 $(".num a").eq(n).removeClass("on").siblings().removeClass("on");
 $(".num a").eq(n).removeClass("on2").siblings().removeClass("on2");
 $(".num a").eq(n).addClass("on").siblings().addClass("on2");
 })
 */
t = setInterval(function()
{
	if(st==1){
		n = n <= (count - 1) ? --n :5;
	}else{
		n = n >= (count - 1) ? 0 : ++n;
	}
	$(".num a").eq(n).trigger('click');
},4000);   //这里是轮播周期
$(playConcent).bind("swiperight",function(){clearInterval(t)},function(){
	var i;
	st=0;
	if(n==0){
		i=1;
		n=1;
	}else{
		i=n+1;
		n++;
	}
	//alert(i);
	//alert(n);
	if(i>=count){
		i=0;
		n=0;
	}
	$(playText).html($(playConcent).eq(i).find("img").attr('alt'));
	//$(playText).unbind().click(function(){window.open($(playConcent).eq(i).attr('href'), "_blank")})
	$(playConcent).filter(":visible").hide().parent().children().eq(i).fadeIn(1200);
	$(".num a").eq(n).removeClass("on").siblings().removeClass("on");
	$(".num a").eq(n).removeClass("on2").siblings().removeClass("on2");
	$(".num a").eq(n).addClass("on").siblings().addClass("on2");
})
$(playConcent).bind("swipeleft",function(){clearInterval(t)},function(){

	var i;
	st=1;
	if(n==0){
		i=5;
		n=5;
	}else{
		i=n-1;
		n--;
	}
	$(playText).html($(playConcent).eq(i).find("img").attr('alt'));
	//$(playText).unbind().click(function(){window.open($(playConcent).eq(i).attr('href'), "_blank")})
	$(playConcent).filter(":visible").hide().parent().children().eq(i).fadeIn(1200);
	$(".num a").eq(n).removeClass("on").siblings().removeClass("on");
	$(".num a").eq(n).removeClass("on2").siblings().removeClass("on2");
	$(".num a").eq(n).addClass("on").siblings().addClass("on2");
})


$(play).hover(function(){clearInterval(t)}, function(){t = setInterval(function(){
	if(st==1){
		n = n <= (count - 1) ? --n :5;
	}else{
		n = n >= (count - 1) ? 0 : ++n;
	}
	$(".num a").eq(n).trigger('click');
}, 4000);});  //这里是轮播周期

}
