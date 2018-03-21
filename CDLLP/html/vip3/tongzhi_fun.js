//登陆界面初始化函数

var userme;
var allmessage = new Array();
var somemessage = new Array();
var allmessagenum=0;
var somemessagenum=0;
var pagenum=1;
var url;
var json;
function init()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	url = HTTP_QUERY_TONGZHI_TYPE;
	json = {
		"page":pagenum.toString(),
		"messagetype":"3"
	};
	getmessageinf();
}
//查询详情
function getmessageinf()
{
	$('#allmessage').html("");
	$('#allmessage').append(dingbu_to_htmlstr());
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			localStorage["luanpeng_somemessage"] =JSON.stringify(backstr.data);
			//alert("查询通知成功");
			message_init();
		}else{
			alert("查询失败");
		 }
										  });
									  
}

//读取所有日志
function message_init()
{
	somemessagenum=0;
	var allmessagestr = localStorage["luanpeng_somemessage"];
	somemessage=JSON.parse(allmessagestr);
	$.each(somemessage, function(index,value)
	{
		somemessage[somemessagenum] = value;
		allmessage[allmessagenum] = value;
		somemessagenum++;
		allmessagenum++;
	});
	addsomemessage_show();
}


//添加更多日志
function addsomemessage_show()
{
	for(var i=0;i<somemessage.length;i++)
	{
		var htmlstr =change_to_htmlstr(somemessage[i]);
		$('#allmessage').append(htmlstr);
	}
}

function dingbu_to_htmlstr()
{
	var str="";
	str = str+ "<tr>";
	str = str+ "<th width='40' align='center'>消息id</th>";
	str = str+ "<th width='150' align='left'>消息时间</th>";
	str = str+ "<th width='100' align='center'>消息连接</th>";
	str = str+ "<th align='left'>消息简述</th>";
	str = str+ "<th width='100' align='center'>通知类型</th>";
	str = str+ "</tr>";

	return str;

}

function change_to_htmlstr(message)
{

	var str="";
	str = str+ "<tr>";
	str = str+"<td align=\"center\">"+message.id.toString()+"</td>";
	str = str+"<td>"+message.date.toString()+"  "+message.time+"</td>";
	if(message.urlpath==null|| message.urlpath=="")
	    str = str+"<td align=\"center\"><a href='"+message.urlpath+"'>打开</a></td>";
	else
		str = str+"<td align=\"center\"><a href='#'>打开</a></td>";
	str = str+"<td align=\"left\">"+message.urlcontent+"</td>";
	str = str+"<td align=\"center\">"+"系统通知"+"</td>";
	str = str+"</tr>";
	return str;
}



function fanye(dotype)
{
	if(dotype==1)
	{
		pagenum=1;
		json.page = pagenum.toString();
		getmessageinf();
	}
	else if(dotype==2)
	{
		pagenum=pagenum-2;
		if(pagenum<1)
			pagenum=1;
		json.page = pagenum.toString();
		getmessageinf();
	}
	else if(dotype==3)
	{
		json.page = pagenum.toString();
		getmessageinf();

	}

}