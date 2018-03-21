//登陆界面初始化函数

var userme;
var alluser = new Array();
var someuser = new Array();
var someusernum=0;
var allusernum=0;

var url;
var json;
var pagenum=1;
function init()
{

        //读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);

	url = HTTP_GET_ALLQUNUSER;
	json = {
		"page":pagenum.toString(),
		"userid":userme.id.toString()
	};
        getqunuserinf();

}

//查询详情
function getqunuserinf()
{
	
	$('#alluser').html("");
	$('#alluser').append(ziduan_to_htmlstr());
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			{
                                pagenum++;
				localStorage["luanpeng_someuser"] =JSON.stringify(backstr.data);
				//alert("查询成功");
				qunuser_init();
			}


		}else{
			alert("查询失败");
		}
	});

}
var qun;
function getonequnuserinf()
{
	pagenum++;
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	document.title=qun.aname;
	var url = HTTP_GET_QUN_USER;
	var json = {
		"qunid":qun.id.toString(),
		"page":pagenum.toString(),
		"userid":userme.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			if(backstr.data==null || backstr.data=="")
			{
				document.getElementById("load_more").style.display="none";
			}
			else
			{
				localStorage["luanpeng_someuser"] =JSON.stringify(backstr.data);
				//alert("查询成功");
				qunuser_init();
			}


		}else{
			alert("查询失败");
		}
	});

}
//读取所有日志
function qunuser_init()
{
	someusernum=0;
	var alluserstr = localStorage["luanpeng_someuser"];
	var someuserobj=JSON.parse(alluserstr);
	$.each(someuserobj, function(index,value)
	{
		someuser[someusernum] = value;
		alluser[allusernum] = value;
		someusernum++;
		allusernum++;
	});
	addsomeuser_show();
}


//更新部分用户
function addsomeuser_show()
{
	for(var i=0;i<someusernum;i++)
	{
		var htmlstr =change_to_htmlstr(someuser[i],allusernum-someusernum+i);
		$('#alluser').append(htmlstr);
	}
	showrqcode();

}
function showrqcode()
{
	var str1=HTTP_REQUEST+"web/loginjoinqun?qunid="+qun.id.toString();
	/*	$("#qrcode").qrcode({
	 render: "table",
	 width: 150,
	 height:150,
	 text: str1
	 });*/
	$('#qrcode').qrcode(str1);
}

//跳转到日志详情
function goto_userdetail_show(data)
{
	var userindex = parseInt(data.getAttribute('userindex'));
	localStorage["luanpeng_nowuser"] =JSON.stringify(alluser[userindex]);   //获取第几个日志
	window.location.href="userrqcode.html";
}


function ziduan_to_htmlstr()
{
	var str="";
	str = str+ "<tr>";
	str = str+"<th width='22' align='center'><input name='chkall' type='checkbox' id='chkall' onclick='selectcheckbox()' value='check'></th>";
	str = str+"<th width='40' align='center'>用户id</th>";
        str = str+"<th width='120' align='center'>头像</th>";
 	str = str+"<th width='80' align='center'>身份</th>";
	str = str+"<th align='center'>用户名称</th>";
	str = str+"<th width='80' align='center'>用户手机</th>";
	str = str+"<th width='80' align='center'>用户邮箱</th>";
	str = str+"<th width='40' align='center'>收藏数目</th>";
	str = str+"<th width='40' align='center'>点赞数目</th>";
	str = str+"<th width='40' align='center'>推荐数目</th>";
	str = str+"<th width='40' align='center'>评论数目</th>";
	str = str+"<th width='80' align='center'>操作</th>";
	str = str+"</tr>";
	return str;
}

function change_to_htmlstr(user,userindex)
{

	var usericon=HTTP_REQUEST+"houtai/images/someone_head.png";
	if(user.image!=null && user.image!="")
	{
		if(user.image.indexOf("upload")>0) {
			usericon = user.image;
			var thumbimgpath = usericon.substring(0, usericon.lastIndexOf("/") + 1) + "thumb" + usericon.substring(usericon.lastIndexOf("/") + 1, usericon.length);
			usericon = HTTP_REQUEST + thumbimgpath;
		}
		else {
			usericon=HTTP_REQUEST+user.image;
		}
	}

	var str="";
	str = str+ "<tr>";
	str = str+"<td align=\"center\"><input type=\"checkbox\" name=\"checkbox[]\" "+"value=\""+user.id.toString()+"\" /></td>";
	str = str+"<td align=\"center\">"+user.id.toString()+"</td>";
	str = str+"<td><img width=\"120px\" src=\""+usericon+"\"></td>";

	var statestr="未审核";
	if(user.state==1)
		statestr= "创建者";
	if(user.state==2)
		statestr= "管理员";
	if(user.state==3)
		statestr= "会员";
	if(user.state==4)
		statestr= "未审核用户";
	if(user.state==5)
		statestr= "审核不通过";
	str = str+"<td align=\"center\">"+statestr+"</td>";

	str = str+"<td align=\"center\">"+user.name+"</td>";

	str = str+"<td align=\"center\">"+user.phone+"</td>";
	str = str+"<td align=\"center\">"+user.email+"</td>";

	str = str+"<td align=\"center\">"+user.shoucangnum.toString()+"</td>";
	str = str+"<td align=\"center\">"+user.zannum.toString()+"</td>";
	str = str+"<td align=\"center\">"+user.tuijiannum.toString()+"</td>";
	str = str+"<td align=\"center\">"+user.commentnum.toString()+"</td>";

	str = str+"</tr>";

	return str;

}



function daochuonequn()
{
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	var url =HTTP_WEB_ONEQUNVCARD ;
	var json = {
		"qunid":qun.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
				if(backstr.respcode == "0"){
					window.location.href=HTTP_REQUEST+backstr.data.toString();
				}else{
					alert("导出失败");
		}
	});
}


function tuichuqun()
{
	var qunstr = localStorage["luanpeng_nowqun"];
	qun =JSON.parse(qunstr);
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var url =HTTP_DEL_QUN_USER ;
	var json = {
		"qunid":qun.id.toString(),
		"userid":userme.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			window.location.href="qunuser.html";
		}else{
			alert("退出失败");
		}
	});
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



function fanye(dotype)
{
	if(dotype==1)
	{
		pagenum=1;
		json.page = pagenum.toString();
		getqunuserinf();
	}
	else if(dotype==2)
	{
		pagenum=pagenum-2;
		if(pagenum<1)
			pagenum=1;
		json.page = pagenum.toString();
		getqunuserinf();
	}
	else if(dotype==3)
	{
		json.page = pagenum.toString();
		getqunuserinf();

	}

}