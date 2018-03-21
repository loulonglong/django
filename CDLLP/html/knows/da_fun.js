//登陆界面初始化函数

var userme;
var nowdiary;
var qunid="";
//初始化  设置合同可选项
function fabiao_init()
{
		var diarystr = localStorage["luanpeng_nowdiary"];
		nowdiary =JSON.parse(diarystr);
        document.getElementById("diary_title").innerText=nowdiary.urltitle;
}


//发布宝贝
function fabiaobb()
{
	if(confirm("发布后不可修改，您已确认无误？"))
	{
	}
	else
	{
		return;
	}
	var diary_comment = document.getElementById("diary_comment").value;

	var url = HTTP_PINGLUN;
	var json= {
		"diaryid":nowdiary.id.toString(),
		"userid": "0",
        "content":diary_comment
			   };
	document.getElementById("fabiao_button").innerText="回答中...";
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			//alert("回答成功");
			document.getElementById("fabiao_button").innerText="回答";
			window.location.href=HTTP_REQUEST+"knows/diary_detail.jsp?diaryid="+nowdiary.id.toString();
			
		}else{
			alert("回答失败");
			document.getElementById("fabiao_button").innerText="回答";
		 }
										  });
									  
}
