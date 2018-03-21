//登陆界面初始化函数

var userme;
var allqun = new Array();
var url;
var json;
var pagenum=1;
function init()
{

        //读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	url = HTTP_GET_ALLQUN;
	json = {
		"page": pagenum.toString()
	};
        getquninf();

}
//查询详情
function getquninf()
{
    $('#allqun').html("");
	$('#allqun').append(ziduan_to_htmlstr());
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			localStorage["luanpeng_allqun"] =JSON.stringify(backstr.data);
			//alert("群组查询成功");
			addallqun_show();

		}else{
			alert("查询失败");
		}
	});
}


//布局所有群组
function addallqun_show()
{
	var allqunstr = localStorage["luanpeng_allqun"];
	allqun =JSON.parse(allqunstr);
	for(var i=0;i<allqun.length;i++)
	{
		var htmlstr =change_to_htmlstr(allqun[i],i);
		$('#allqun').append(htmlstr);

	}
}



//跳转到群组用户
function del_qun(data)
{
	var qunindex = parseInt(data.getAttribute('qunindex'));
	var qunnow = allqun[qunindex];   //获取第几个日志

	var url = HTTP_DEL_QUN;
	var json = {
		"userid": userme.id.toString(),
		"qunid":qunnow.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			localStorage["luanpeng_user"] =JSON.stringify(backstr.data)
			window.location.href="myqunlist.html";

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
	str = str+"<th width='40' align='center'>群组id</th>";
        str = str+"<th width='120' align='center'>头像</th>";
        str = str+"<th width='40' align='center'>状态</th>";
        str = str+"<th width='40' align='center'>创建者</th>";
        str = str+"<th width='120' align='center'>群组类型</th>";
	str = str+"<th width='80' align='center'>群组用途</th>";
	str = str+"<th align='center'>群组名称</th>";
	str = str+"<th width='80' align='center'>网站地址</th>";
	str = str+"<th width='40' align='center'>收藏</th>";
	str = str+"<th width='40' align='center'>点赞</th>";
	str = str+"<th width='40' align='center'>推荐</th>";
	str = str+"<th width='40' align='center'>评论</th>";
	str = str+"<th width='80' align='center'>操作</th>";
	str = str+"</tr>";
	return str;
}



function change_to_htmlstr(qun,qunindex)
{
	var qunicon=HTTP_REQUEST+"houtai/images/someone_head.png";
	if(qun.qunicon!=null && qun.qunicon!="")
	{
		if(qun.qunicon.indexOf("upload")>0) {
			qunicon = qun.qunicon;
			var thumbimgpath = qunicon.substring(0, qunicon.lastIndexOf("/") + 1) + "thumb" + qunicon.substring(qunicon.lastIndexOf("/") + 1, qunicon.length);
			qunicon = HTTP_REQUEST + thumbimgpath;
		}
		else {
			qunicon=HTTP_REQUEST+qun.qunicon;
		}
	}

	var str="";
	str = str+ "<tr>";
	str = str+"<td align=\"center\"><input type=\"checkbox\" name=\"checkbox[]\" "+"value=\""+qun.id.toString()+"\" /></td>";
	str = str+"<td align=\"center\">"+qun.id.toString()+"</td>";
	str = str+"<td><img width=\"120px\" src=\""+qunicon+"\"></td>";
	str = str+"<td align=\"center\">未审核</td>";
	str = str+"<td align=\"center\">"+userme.name+"</td>";
	var statestr = "用户日志不需要审核";
	if(qun.quntype==1)
		 statestr = "用户需要审核";
	if(qun.quntype==2)
		statestr = "日志需要审核";
	if(qun.quntype==3)
		statestr = "用户日志需要审核";
	str = str+"<td align=\"center\">"+statestr+"</td>";

	var qunusetype = "精品专栏";
	addqunusertype();
	try{
		if(qun.qunusetype>0)
			qunusetype =allqunusetype[qun.qunusetype-1];
	}
	catch (e){

	}

	str = str+"<td align=\"center\">"+qunusetype+"</td>";
	str = str+"<td align=\"center\">"+qun.aname+"</td>";
	str = str+"	<td align=\"center\"> <a href='"+HTTP_REQUEST+"qun/getqunurl?qunid="+qun.id.toString()+"'> 打开</a></td></td>";
	str = str+"<td align=\"center\">"+qun.shoucangnum.toString()+"</td>";
	str = str+"<td align=\"center\">"+qun.zannum.toString()+"</td>";
	str = str+"<td align=\"center\">"+qun.tuijiannum.toString()+"</td>";
	str = str+"<td align=\"center\">"+qun.commentnum.toString()+"</td>";
	str = str+"<td align=\"center\"> <a href='#' qunindex=\""+qunindex.toString()+"\" onclick='del_qun(this)'>退出</a> </td>";
	str = str+"</tr>";

	return str;
}



var filter_text="";
var filter_index=0;
function choose_filter_type(obj)
{
	filter_index = obj.selectedIndex;
	filter_text = obj.options[filter_index].text;
	var allfilteritem = document.getElementById("filter_item");
	allfilteritem.innerHTML="";
	//如果按群用途搜索
	if(filter_index==1)
	{
		allfilteritem.options.add(new Option("请选择",0));  //text和value
		for(var i=0;i<allqunusetype.length;i++)
		{
			allfilteritem.options.add(new Option(allqunusetype[i],i+1));  //text和value
		}
	}
	else if(filter_index==2)
	{
		allfilteritem.options.add(new Option("用户日志不需要审核",0));  //text和value
		allfilteritem.options.add(new Option("用户需要审核",1));  //text和value
		allfilteritem.options.add(new Option("日志需要审核",2));  //text和value
		allfilteritem.options.add(new Option("用户日志均需要审核",3));  //text和value
	}

}

var filter_item_index=1;
//选择日志类型
function choose_qun_type(obj)
{
	filter_item_index = obj.selectedIndex;
}

function filter_fun()
{

	if(filter_index==1)
	{
		pagenum=1;
		url = HTTP_GET_QUN_QUNUSE;
		json = {
			"qunusetype":filter_item_index.toString(),
			"page":pagenum.toString()
		};
		getquninf();
	}
	if(filter_index==2)
	{
		pagenum=1;
		url=HTTP_GET_QUN_DIARY_TYPE;
		json = {
			"userid":userme.id.toString(),
			"type":typestr,
			"qunid":choose_qun.id.toString(),
			"page":pagenum.toString()
		};
		getquninf();
	}
}

function fanye(dotype)
{
	if(dotype==1)
	{
		pagenum=1;
		json.page = pagenum.toString();
		getquninf();
	}
	else if(dotype==2)
	{
		pagenum=pagenum-2;
		if(pagenum<1)
			pagenum=1;
		json.page = pagenum.toString();
		getquninf();
	}
	else if(dotype==3)
	{
		json.page = pagenum.toString();
		getquninf();

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


