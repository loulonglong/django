﻿//登陆界面初始化函数

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
	url=HTTP_DIARY_USER_QUNUSE;
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	allqun = userme.allQun;
	json = {
		"userid":userme.id.toString(),
		"qunusetype":"1",
		"page":pagenum.toString()
	};
	getmydiaryinf();
}
//查询我的日志
function getmydiaryinf()
{
	$('#alldiary').html("");
	$('#alldiary').append(ziduan_to_htmlstr());
	//alert(JSON.stringify(json));
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum = pagenum+1;
			localStorage["luanpeng_somediary"] =JSON.stringify(backstr.data);
			//alert("查询成功");
			qundiary_init();

		}else{
			alert("查询失败");
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

//更新全部日志
function addalldiary_show()
{
	$('#alldiary').html("");
	for(var i=0;i<alldiarynum;i++)
	{
		var htmlstr =change_to_htmlstr(alldiary[i],i);
		$('#alldiary').append(htmlstr);
	}
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
	window.location.href="editdiary.html";
}

//跳转到群组用户
function del_diary(data)
{
	var diaryindex = parseInt(data.getAttribute('diaryindex'));
	var diarynow = alldiary[diaryindex];   //获取第几个日志
    alert("即将删除文章"+diarynow.id.toString());
	var url = HTTP_DEL_MOOD;
	var json = {
		"userID": userme.id.toString(),
		"diaryID":diarynow.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			window.location.href="mydiarylist.html";

		}else{
			alert("删除失败");
		}
	});


}

function ziduan_to_htmlstr()
{
	var str="";
	str = str+ "<tr>";
	str = str+"<th width='22' align='center'><input name='chkall' type='checkbox' id='chkall' onclick='selectcheckbox()' value='check'></th>";
	str = str+"<th width='40' align='center'>宝贝id</th>";
	str = str+"<th width='120' align='left'>名称</th>";
	str = str+"<th width='40' align='center'>价格</th>";
	str = str+"<th width='150' align='center'>交易市场</th>";
	str = str+"<th width='80' align='center'>入手时间</th>";
	str = str+"<th width='80' align='center'>出售时间</th>";
	str = str+"<th width='80' align='center'>手机号码</th>";
	str = str+"<th width='40' align='center'>类型</th>";
	str = str+"<th  align='left'>备注</th>";
	str = str+"<th width='40' align='center'>收藏</th>";
	str = str+"<th width='80' align='center'>操作</th>";
	str = str+"</tr>";
	return str;
}

var nowmonth="";
function change_to_htmlstr(diary,diaryindex)
{

	var str="";
	var contentstr = diary.content;
	var contentarr = contentstr.split("---");
	str = str+ "<tr>";
	str = str+"<td align='center'><input type='checkbox' name='checkbox[]' value='"+diary.id.toString()+"' /></td>";
	str = str+"<td align='center'>"+diary.id.toString()+"</td>";
	str = str+"<td align='left'>"+contentarr[0]+"</td>";
	str = str+"<td align='center'>"+contentarr[2]+"</td>";
	str = str+"<td align='center'>"+diary.qun.aname+"</td>";
	str = str+"<td align='center'>"+contentarr[1]+"</td>";
	str = str+"<td align='center'>"+contentarr[3]+"</td>";
	str = str+"<td align='center'>"+diary.user.phone+"</td>";
	if(diary.state==4)
		str = str+ "<td align='center'>"+"已售"+"</td>";
	else if(diary.imgone==null || diary.imgone=="")
		str = str+ "<td align='center'>"+"无图"+"</td>";
	else
		str = str+ "<td align='center'>"+"有图"+"</td>";
	if(contentarr.length>4)
	   str = str+"<td align='left'>"+contentarr[4]+"</td>";
	else
		str = str+"<td align='left'>"+""+"</td>";
	str = str+"<td align='center'>"+diary.zannum.toString()+"</td>";
	str = str+"<td align='center'> <a href='#' diaryindex='"+diaryindex.toString()+"' onclick='del_diary(this)'>删除</a> </td>";
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
			if(allqun[i].qunusetype==1)
			    allqunname.options.add(new Option(allqun[i].aname,i));  //text和value
		}
		if(allqun.length>0)
		   choose_qun = allqun[0];
	}
	else if(filter_index==2)
	{
		for(var i=0;i<allqun.length;i++)
		{
			if(allqun[i].qunusetype==1)
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
	var choosequnindex = obj.options[obj.selectedIndex].value;
	choose_qun = allqun[choosequnindex];
}

function filter_fun()
{
	if(filter_index==1)
	{
		pagenum=1;
        url=HTTP_ALL_DIARY_FORUSERQUN;
		json = {
			"duserid":userme.id.toString(),
			"suserid":userme.id.toString(),
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
		getmydiaryinf();
	}
	if(dotype==2)
	{
		pagenum=pagenum-2;
		if(pagenum<1)
			pagenum=1;
		getmydiaryinf();
	}
	if(dotype==3)
	{
		json.page=pagenum.toString();
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