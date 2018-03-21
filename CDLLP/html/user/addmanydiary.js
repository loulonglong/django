
var somediary = new Array();
var somediarynum=0;
var qunid="";




var diaryindex=0;
//登陆函数
function adddiary()
{
	qunid = document.getElementById("qunidinput").value;
	if(document.getElementById("login_button").innerText=="登陆")
		alert("插入日志到"+qunid);
	document.getElementById("login_button").innerText="添加中...";



	var url = HTTP_WRITE_DIARY_WORD;
	var json = {
		"userid":"392",
		"qunid": qunid,
		"state":"0",
		"qundiarytype":somediary[diaryindex].type,
		"content":somediary[diaryindex].content,
		"img1":somediary[diaryindex].imgone,
		"img2":somediary[diaryindex].imgtwo,
		"img3":somediary[diaryindex].imgthree
			   };
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0"){
			diaryindex++;
			alert("成功"+diaryindex.toString());
			adddiary();
		}else{
			alert(backstr.message);
			document.getElementById("login_button").innerText="登陆";
		 }
	 });

}

//忘记密码
function init()
{
		var url = HTTP_ALL_DIARY_FORUSERQUN;
		var json = {
			"qunid":"0",
			"suserid":"392",
			"duserid":"392",
			"page":"1"
			};
		sendDataByPost(url,json,function(backstr){
			if(backstr.respcode == "0")
			{
				localStorage["luanpeng_somediary"] =JSON.stringify(backstr.data);
				somediarynum=0;
				var alldiarystr = localStorage["luanpeng_somediary"];
				somediary=JSON.parse(alldiarystr);
				$.each(somediary, function(index,value)
				{
					somediary[somediarynum] = value;
					somediarynum++;
				});
				alert("查询成功"+somediarynum.toString());
			}else{
				alert("访问错误");
			 }
		});
							  
}

