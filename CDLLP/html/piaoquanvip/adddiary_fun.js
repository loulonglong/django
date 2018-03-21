//登陆界面初始化函数
var ue;
var userme;
var imgheight=0;
var imgwidth=0;
//初始化  设置合同可选项
function fabiao_init()
{
	ue = UE.getEditor('editor');
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	document.getElementById("diary_user").value=userme.name;
	$("#diary_user").val(userme.name);
}


//发布宝贝
function fabiaodiary()
{
	var diary_title = $("#diary_title").val();
	var diary_content = ue.getContent();
	var diary_urlpath = $("#diary_urlpath").val();
	console.log(diary_title,diary_content,diary_urlpath)
	var url = HTTP_WRITE_DIARY_URL;
	var json = {
		"urltitle":diary_title,
		"urlcontent":diary_content,
		"urlpath":diary_urlpath,
		"userid": userme.id.toString(),
		"qunid":'998',
        "state":"0"
	};


	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			alert("发布成功");
			window.location.href="diarylist.html";
			
		}else{
			alert("发布失败");
		 }
										  });
									  
}

//根据用户是否输入连接来确定是否显示富媒体编辑器
function setcontentshow(obj)
{
	var urlpathstr = obj.value;
	if(urlpathstr=="")
	{
		document.getElementById("editor").style.display="inline";
	}
	else {
		document.getElementById("editor").style.display="none";
	}
}