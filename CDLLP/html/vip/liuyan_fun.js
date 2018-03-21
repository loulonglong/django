//登陆界面初始化函数

var userme;
var allmessage = new Array();;
var somemessage = new Array();
var allmessagenum=0;
var pagenum=0;
//查询详情
function getmessageinf()
{
	pagenum++;
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var url = HTTP_QUERY_AllLIUYAN;
	var json = {
		"messagetype":"2",
				"receive_id": userme.id.toString(),
		        "page":pagenum.toString()
			   };
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			localStorage["luanpeng_somemessage"] =JSON.stringify(backstr.data);
			//alert("查询私信成功");
			message_init();
		}else{
			alert("查询失败");
		 }
										  });
									  
}

//读取所有日志
function message_init()
{
    var allmessagestr = localStorage["luanpeng_somemessage"];
	somemessage=JSON.parse(allmessagestr);
	$.each(somemessage, function(index,value)
	{
		allmessage[allmessagenum] = value;
		allmessagenum++;
	});
	addallmessage_show();
}

//更新全部日志
function addallmessage_show()
{
	$('#allmessage').html("");
	for(var i=0;i<allmessagenum;i++)
	{
		var htmlstr =change_to_htmlstr(allmessage[i]);
		$('#allmessage').append(htmlstr);
	}
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


function change_to_htmlstr(message)
{

	var str="";
	str = str+ "<tr>";
	str = str+"<td align=\"center\">"+message.id.toString()+"</td>";
	str = str+"<td>"+message.date.toString()+"  "+message.time+"</td>";
	str = str+"<td align=\"center\">"+message.send_user.name+"</td>";
	str = str+"<td align=\"left\">"+message.content+"</td>";
	str = str+"<td align=\"center\">"+"留言"+"</td>";
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