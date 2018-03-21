//登陆界面初始化函数

var userme;
var alldiary = new Array();
var somediary = new Array();
var somediarynum=0;
var alldiarynum=0;
var nowdiary;

//查询详情
function init()
{
	var diarystr = localStorage["luanpeng_nowdiary"];
	nowdiary=JSON.parse(diarystr);
	document.getElementById("diary_name").innerText=nowdiary.urltitle;
	document.getElementById("diary_time").innerText=nowdiary.date;

	var url =HTTP_GET_URLCONTENT;//
	var json = {
		"diaryid":nowdiary.id.toString()
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){

			$('#diary_urlcontent').append(backstr.data);
			//document.getElementById("getmore").innerText="加载更多...";
		}else{
			//document.getElementById("getmore").innerText="加载更多...";
			//alert("查询失败");
		}
	});
}
