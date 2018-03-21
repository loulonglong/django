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
	allqun = userme.allQun;
	url = HTTP_GET_QUN_USERQUNUSE;
	json = {
		"userid": userme.id.toString(),
		"qunusetype":"3",
		"page":pagenum.toString()
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
function goto_edit_show(data)
{
	var qunindex = parseInt(data.getAttribute('qunindex'));
	localStorage["luanpeng_nowqun"] =JSON.stringify(allqun[qunindex]);   //获取第几个日志
	window.location.href="editqun.html";
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
	str = str+"<th width='40' align='center'>栏目id</th>";
        str = str+"<th width='120' align='center'>头像</th>";
        str = str+"<th width='40' align='center'>状态</th>";
        str = str+"<th width='40' align='center'>创建者</th>";
        str = str+"<th width='120' align='center'>栏目类型</th>";
        str = str+"<th width='80' align='center'>栏目用途</th>";
	str = str+"<th align='center'>栏目名称</th>";
	str = str+"<th width='80' align='center'>网站地址</th>";
	str = str+"<th width='80' align='center'>收藏数目</th>";
	str = str+"<th width='80' align='center'>点赞数目</th>";
	str = str+"<th width='80' align='center'>推荐数目</th>";
	str = str+"<th width='80' align='center'>评论数目</th>";
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
	var statestr = "用户文章不需要审核";
	if(qun.quntype==1)
		 statestr = "用户需要审核";
	if(qun.quntype==2)
		statestr = "文章需要审核";
	if(qun.quntype==3)
		statestr = "用户文章需要审核";
	str = str+"<td align=\"center\">"+statestr+"</td>";
       var usestr = "二手平台";
	if(qun.qunusetype==1)
		 usestr = "二手平台";
	if(qun.qunusetype==2)
		usestr = "名片夹";
	if(qun.qunusetype==3)
		usestr = "精品专栏";
       str = str+"<td align=\"center\">"+usestr+"</td>";
	str = str+"<td align=\"center\">"+qun.aname+"</td>";
	str = str+"	<td align=\"center\"> <a href='"+HTTP_REQUEST+"qun/getqunurl?qunid="+qun.id.toString()+"' target=\"_blank\"> 打开</a></td></td>";
	str = str+"<td align=\"center\">"+qun.shoucangnum.toString()+"</td>";
	str = str+"<td align=\"center\">"+qun.zannum.toString()+"</td>";
	str = str+"<td align=\"center\">"+qun.tuijiannum.toString()+"</td>";
	str = str+"<td align=\"center\">"+qun.commentnum.toString()+"</td>";
	str = str+"<td align=\"center\"> <a href='#' qunindex=\""+qunindex.toString()+"\" onclick='goto_edit_show(this)'>编辑</a> </td>";
	str = str+"</tr>";

	return str;
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
