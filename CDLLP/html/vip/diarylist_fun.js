//登陆界面初始化函数

var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var pagenum=1;
var allqun=new Array();
var url;
var json;
function init()
{
	url = HTTP_ALL_QUNDIARY_FORUSER;
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	allqun = userme.allQun;
	json = {
		"userid":userme.id.toString(),
		"page":pagenum.toString()
	};
	getmydiaryinf();
}
//查询我的日志
function getmydiaryinf()
{
	$('#alldiary').html("");
	$('#alldiary').append(ziduan_to_htmlstr());
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			if(backstr.data==null || backstr.data=="")
			{
				alert("没有更多了");
			}
			else {
				localStorage["luanpeng_somediary"] =JSON.stringify(backstr.data);
				//alert("查询成功");
				qundiary_init();
			}

		}else{
			alert(backstr.message);
		}
	});

}



//读取所有日志
function qundiary_init()
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
function goto_edit_show(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	localStorage["luanpeng_nowdiary"] =JSON.stringify(alldiary[diaryindex]);   //获取第几个日志
	window.open("editdiary.html","_blank");
}

//跳转到群组用户
function del_diary(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	var diarynow = alldiary[diaryindex];   //获取第几个日志

	var url = HTTP_DEL_MOOD;
	var json = {
		"userID": userme.id.toString(),
		"diaryID":diarynow.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("删除成功");
			window.location.reload;
			//window.location.href="mydiarylist.html";

		}else{
			alert(backstr.message);
		}
	});


}

function ziduan_to_htmlstr()
{
	var str="";
	str = str+ "<tr>";
	str = str+"<th width='22' align='center'><input name='chkall' type='checkbox' id='chkall' onclick='selectcheckbox()' value='check'></th>";
	str = str+"<th width='40' align='center'>文章id</th>";
	str = str+"<th align='left'>标题</th>";
	str = str+"<th width='40' align='center'>分类</th>";
	str = str+"<th width='80' align='center'>类型</th>";
	str = str+"<th width='120' align='center'>群组</th>";
	str = str+"<th width='80' align='center'>时间</th>";
	str = str+"<th width='40' align='center'>收藏</th>";
	str = str+"<th width='40' align='center'>赞赏</th>";
	str = str+"<th width='40' align='center'>推荐</th>";
	str = str+"<th width='40' align='center'>评论</th>";
	str = str+"<th width='80' align='center'>操作</th>";
	str = str+"</tr>";
	return str;
}

var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{
	var str="";
	str = str+ "<tr>";
	str = str+"<td align='center'><input type='checkbox' name='checkbox[]' value='"+diary.id.toString()+"' /></td>";
	str = str+"<td align='center'>"+diary.id.toString()+"</td>";
	if(diary.urltitle!=null)
		str = str+"<td align='left'>"+diary.urltitle.toString()+"</td>";
	else{
		if(diary.content!=null)
			str = str+"<td align='left'>"+diary.content.toString()+"</td>";
		else
			str = str+"<td align='left'>"+"无题"+"</td>";
	}


	var typestr="文字";
	if(diary.diarytype==1)
		typestr= "图文";
	if(diary.diarytype==2)
		typestr= "视频";
	if(diary.diarytype==3)
		typestr= "网页";
	if(typestr=="网页")
	{
		if(diary.urlpath!=null && diary.urlpath!="")
			str = str+"<td align='center'> <a href='"+diary.urlpath+"'   target='_blank'>"+typestr+"</a></td>";
		else
			str = str+"<td align='center'> <a href='"+HTTP_REQUEST+"web/getdiaryurl?diaryid="+diary.id.toString()+"'   target='_blank'>"+typestr+"</a></td>";
	}
	else
		str = str+"<td align='center'>"+typestr+"</td>";

	if (diary.type != null)
		str = str + "<td align='center'>" + diary.type + "</td>";
	else
		str = str + "<td align='center'>" + "" + "</td>";

	if (diary.qun != null && diary.qun.aname != null)
		str = str + "<td align='center'>" + diary.qun.aname + "</td>";
	else
		str = str + "<td align='center'>" + "" + "</td>";

	str = str+"<td align='center'>"+diary.date+"</td>";

	str = str+"<td align='center'>"+diary.shoucangnum.toString()+"</td>";
	str = str+"<td align='center'>"+diary.zannum.toString()+"</td>";
	str = str+"<td align='center'>"+diary.tuijiannum.toString()+"</td>";
	str = str+"<td align='center'>"+diary.commentnum.toString()+"</td>";

	if(diary.user.id==userme.id || diary.qun.userid==userme.id)
	     str = str+"<td align='center'> <a href='#' diaryindex='"+diaryindex.toString()+"' onclick='goto_edit_show(this)'>编辑</a> | <a href='#' diaryindex='"+diaryindex.toString()+"' onclick='del_diary(this)'>删除</a> </td>";
	else
		str = str+"<td align='center'> <a href='#'>无法操作</a> </td>";
	str = str+"</tr>";

	return str;
}

var filter_text="";
var filter_index=0;
function choose_filter_type(obj)
{
	filter_index = obj.selectedIndex;
	filter_text = obj.options[filter_index].text;
	var allqunname = document.getElementById("filter_item");
	allqunname.innerHTML="";
	//如果按群组搜索
	if(filter_index==1)
	{
		for(var i=0;i<allqun.length;i++)
		{
			allqunname.options.add(new Option(allqun[i].aname,i));  //text和value
		}
		if(allqun.length>0)
			choose_qun = allqun[0];
	}
	else if(filter_index==2)
	{
		for(var i=0;i<allqun.length;i++)
		{
			allqunname.options.add(new Option(allqun[i].aname,i));  //text和value
		}
		if(allqun.length>0)
			choose_qun = allqun[0];
		document.getElementById("keystr").placeholder = "输入日志类型后筛选";
	}


}

var choose_qun;
//选择日志类型
function choose_qun_type(obj)
{
	var choosequnindex = obj.selectedIndex;
	choose_qun = allqun[choosequnindex];
}

function filter_fun()
{
	if(filter_index==1)
	{
		pagenum=1;
		url=HTTP_GET_QUN_DIARY;
		json = {
			"userid":userme.id.toString(),
			"qunid":choose_qun.id.toString(),
			"page":pagenum.toString()
		};
		getmydiaryinf();
	}
	if(filter_index==2)
	{
		var typestr=document.getElementById("keystr").value;
		if(typestr=="")
		{
			alert("先输入日志类型");
			return;
		}
		pagenum=1;
		url=HTTP_GET_QUN_DIARY_TYPE;
		json = {
			"userid":userme.id.toString(),
			"type":typestr,
			"qunid":choose_qun.id.toString(),
			"page":pagenum.toString()
		};
		getmydiaryinf();
	}
}

function fanye(dotype)
{
	if(dotype==1)
	{
		pagenum=1;
		json.page = pagenum.toString();
		getmydiaryinf();
	}
	else if(dotype==2)
	{
		pagenum=pagenum-2;
		if(pagenum<1)
			pagenum=1;
		json.page = pagenum.toString();
		getmydiaryinf();
	}
	else if(dotype==3)
	{
		json.page = pagenum.toString();
		getmydiaryinf();

	}

}


function selectcheckbox()
{
	var checkall=document.getElementById("chkall");
	if(checkall.checked)
	{
		var controls=document.getElementsByName("checkbox[]");
		for(var i=0;i<controls.length;i++)
		{
			controls[i].checked=true;
		}
	}
	else{
		var controls=document.getElementsByName("checkbox[]");
		for(var i=0;i<controls.length;i++)
		{
			controls[i].checked=false;
		}

	}

}