//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userme;
var qun;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var typeindex="1";
var qunid="";
function getfrominternet()
{
	qunid = document.getElementById("alldiary").getAttribute("qunid");
	var typeindexstr = sessionStorage["luanpeng_typeindex"];
	if(typeindexstr!=null && typeindexstr!="")
		typeindex=typeindexstr;

	getalldiaryinf();
}

function goto_type_html(typeindexstr)
{
	typeindex = typeindexstr.toString();
	sessionStorage["luanpeng_typeindex"] = typeindex;
	pagenum=1;
	document.getElementById("alldiary").innerHTML="";
	alldiary = new Array();
	alldiarynum=0;
	document.getElementById("type1").style.color='black';
	document.getElementById("type2").style.color='black';
	document.getElementById("type3").style.color='black';
	document.getElementById("type4").style.color='black';
	document.getElementById("type5").style.color='black';
	if(typeindex=="1")
		document.getElementById("type1").style.color='green';
	if(typeindex=="2")
		document.getElementById("type2").style.color='green';
	if(typeindex=="3")
		document.getElementById("type3").style.color='green';
	if(typeindex=="4")
		document.getElementById("type4").style.color='green';
	if(typeindex=="5")
		document.getElementById("type5").style.color='green';

	getfrominternet();
	//window.location.href=HTTP_REQUEST+"web/myqundiary?typeindex="+typeindex+"&qunid="+qunid;
}


function datainit()
{
	document.title = qun.aname;
	document.getElementById("load_more").style.display="block";
	var diarytype1 = document.getElementById("type1");
	var diarytype2 = document.getElementById("type2");
	var diarytype3 = document.getElementById("type3");
	var diarytype4 = document.getElementById("type4");
	var diarytype5 = document.getElementById("type5");

	try{
		diarytype1.innerText = qun.type1;
		diarytype2.innerText = qun.type2;
		diarytype3.innerText = qun.type3;
		diarytype4.innerText = qun.type4;
		diarytype5.innerText = qun.type5;
	}
	catch (e){
	}

	try{
		diarytype1.style.color='black';
		diarytype2.style.color='black';
		diarytype3.style.color='black';
		diarytype4.style.color='black';
		diarytype5.style.color='black';
	}
	catch (e){
	}

	try{
		if(typeindex=="" || typeindex=="1")
		{
			diarytype1.style.color="green";
		}
		if(typeindex=="2")
		{
			diarytype2.style.color='green';
		}
		if(typeindex=="3")
		{
			diarytype3.style.color='green';
		}
		if(typeindex=="4")
		{
			diarytype4.style.color='green';
		}
		if(typeindex=="5")
		{
			diarytype5.style.color='green';
		}
	}
	catch (e){
	}

	try{
		if(qun.type5==null|| qun.type5=="")
		{
			diarytype5.style.display="none";
		}
		if(qun.type4==null|| qun.type4=="")
		{
			diarytype4.style.display="none";
		}
		if(qun.type3==null|| qun.type3=="")
		{
			diarytype3.style.display="none";
		}
		if(qun.type2==null|| qun.type2=="")
		{
			diarytype2.style.display="none";
		}
		if(qun.type1=null|| qun.type1=="")
		{
			diarytype1.style.display="none";
		}
	}
	catch (e){
	}




}
//查询详情
function getalldiaryinf()
{
	document.getElementById("load_more_text").innerText = "加载中...";
	var url = HTTP_GET_QUN_DIARY_TYPE;
	var json = {
		"qunid":qunid,
		"typeindex":typeindex,
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
				//alert("查询成功");
				localStorage["luanpeng_somediary"] = JSON.stringify(backstr.data);
				alldiary_init();
				document.getElementById("load_more_text").innerText = "加载更多...";
			}

		}else{
			alert("查询失败");
			document.getElementById("load_more_text").innerText = "加载更多...";
		}
	});

}

//读取所有日志
function alldiary_init()
{
	somediarynum=0;
	var alldiarystr = localStorage["luanpeng_somediary"];
	somediary=JSON.parse(alldiarystr);
	if(alldiarynum==0)
	{
		qun=somediary[0].qun;
		try{
			datainit();
		}
		catch (e)
		{
		}
	}
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



var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{

	var str="";
	str = str+"<li data-icon='false' class='ui-li-has-count ui-first-child  ui-last-child'>";  //
	str = str+"<a diaryindex='"+diaryindex+"' onclick='goto_diarydetail_show(this)' class='ui-btn'>";  // ui-btn-icon-right ui-icon-carat-r
	str = str+ "<p style='font-size: 16px'>"+diary.urltitle+"</p>";
	str = str+ "<p style='color: #a1a8ae'>"+diary.date+konggestr+diary.time+"</p>";
	str = str+"</a></li>";

	return str;
}



