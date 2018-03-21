//登陆界面初始化函数
var konggestr="&nbsp; &nbsp; &nbsp; &nbsp; ";
var userid="";
var qunid="";
var background_music=[
	["纯音乐版","chunyinyueban"],["蝶恋花","dielianhua"],["钢琴版","gangqinban"],["功夫","gongfu"],["朗诵音乐","langsongyinyue"],
	["士兵突击","shibingtuji"], ["天空之城","tiangongzhicheng"],["演讲朗诵","yanjianglangsong"],["夜空的寂静","yekongdejimo"],
	["英雄本色","yingxiongbense"],["雨的印记","yudeyinji"]
];
//初始化  设置合同可选项
function fabiao_init()
{
	try{
		userid = document.getElementById("fabiao").getAttribute("userid");
		if(userid==null||userid=="" || userid=="null")
		{
			alert("查找不到用户");
			window.opener=null;
			window.close();
		}
		qunid = document.getElementById("fabiao").getAttribute("qunid");
		if(qunid==null||qunid==""|| qunid=="null")
		{
			alert("查找不到平台");
			window.opener=null;
			window.close();
		}
	}
	catch (e)
	{
		alert("登陆注册后方可发布");
		window.opener=null;
		window.close();
	}

	//添加可选背景音乐
	for(var i=0;i<background_music.length;i++){
		$("#background_music").append("<option value='"+background_music[i][1]+"'>"+background_music[i][0]+"</option>");
	}
	//设置按住录音
	$('#luyin').on('touchstart', function(event){
		event.preventDefault();
		START = new Date().getTime();
		$('#luyin').attr("src","images/zanting.png");

		recordTimer = setTimeout(function(){
			wx.startRecord({
				success: function(){
					localStorage.rainAllowRecord = 'true';
				},
				cancel: function () {
					alert('用户拒绝授权录音');
				}
			});
		},300);
	});
 //松手结束录音
	$('#luyin').on('touchend', function(event){
		event.preventDefault();
		END = new Date().getTime();
		$('#luyin').attr("src","images/open.png");
		if((END - START) < 300){
			END = 0;
			START = 0;
			//小于300ms，不录音
			clearTimeout(recordTimer);
		}else{
			wx.stopRecord({
				success: function (res) {
					voice.localId = res.localId;
					uploadVoice();
				},
				fail: function (res) {
					alert(JSON.stringify(res));
				}
			});
		}
	});

}
//上传录音
function uploadVoice(){
	//调用微信的上传录音接口把本地录音先上传到微信的服务器
	//不过，微信只保留3天，而我们需要长期保存，我们需要把资源从微信服务器下载到自己的服务器
	wx.uploadVoice({
		localId: voice.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
		isShowProgressTips: 1, // 默认为1，显示进度提示
		success: function (res) {
			//把录音在微信服务器上的id（res.serverId）发送到自己的服务器供下载。
			$.ajax({
				url: '后端处理上传录音的接口',
				type: 'post',
				data: JSON.stringify(res),
				dataType: "json",
				success: function (data) {
					alert('文件已经保存到七牛的服务器');//这回，我使用七牛存储
				},
				error: function (xhr, errorType, error) {
					console.log(error);
				}
			});
		}
	});
}

function choose_background_music_fun(){
	if($("#background_music ").get(0).selectedIndex!=0)
	{
		var path =HTTP_REQUEST+ "read/background_music/"+$("#background_music").find("option:selected").val()+".mp3";
		$("#myaudio").attr("src",path);
		//var myaudio= document.getElementById('myaudio');
		//myaudio.src = path;
		myaudio.play();
	}

}





videofile="";
//上传文件
function readFile1()
{
	document.getElementById("video_text").innerText="上传中...";
	var file_path_str = $("#video_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'mp3')
	{
		alert("仅支持mp3格式文件");
		return;
	}
	$("#file1_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_VIDEO,  //HTTP_WEB_UPLOAD_VIDEO,
		success: function(data){
			document.getElementById("video_text").innerText="上传成功";
			videofile=data.replace(/\"/g,"");
		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
		}
	});
}

//发布宝贝
function fabiao()
{
	if(videofile=="" || diary_icon=="")
	{
		alert("请先上传图片和音频");
		return;
	}
	var diary_title = document.getElementById("diary_title").value;
   var diary_content = document.getElementById("diary_content").value;

	var url = HTTP_WRITE_DIARY_WORD;
	var json= {
		"content":diary_content,
		"urltitle":diary_title,
		"urlpath":videofile,
		"userid": userid,
		"qunid":qunid,   //1作为科大二手平台
        "state":"0",
		"img1":diary_icon,
			   };
	document.getElementById("fabiao").innerText="发布中";
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			//alert("发布成功");
			document.getElementById("fabiao").innerText="发布";
			qunid = document.getElementById("fabiao").getAttribute("qunid");
			window.location.href="alldiary.jsp?qunid="+qunid;
			
		}else{
			alert("发布失败");
			document.getElementById("fabiao").innerText="发布";
		 }
										  });
									  
}


