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
	var url = HTTP_QUERY_AllSIXIN;
	var json = {
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
    str = str+"<li  data-icon=\"false\"><a href=\"#\" class=\"ui-btn ui-btn-icon-right ui-icon-carat-r\">";   //class="ui-first-child"   加在li里面
	str = str+ "<h2>消息发送人："+message.send_user.name+"</h2>";
	str = str+ "<p class=\"ui-li-aside\">"+message.date+" "+message.time+"</p>";
	str = str+ "<p>"+message.content+"</p>";
	str = str+"</a></li>";
	return str;
}

