//登陆界面初始化函数

var pagenum=1;
var allimg = new Array();
var someimg = new Array();
var someimgnum=0;
var allimgnum=0;
var pagenum=1;
//查询详情
function getpuseric()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);

	var url = HTTP_GET_USERIMG;
	var json = {
		"userid": userme.id.toString(),
		"page": pagenum.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			pagenum++;
			//alert("查询成功");
			localStorage["luanpeng_allimg"] =JSON.stringify(backstr.data);

			userimg_init();

		}else{
			alert("查询失败");
		}
	});

}



//读取所有日志
function userimg_init()
{
	someimgnum=0;
	var allpicstr = localStorage["luanpeng_allimg"];
	someimg=JSON.parse(allpicstr);
	$.each(someimg, function(index,value)
	{
		someimg[someimgnum] = value;
		allimg[allimgnum] = value;
		someimgnum++;
		allimgnum++;
	});
	addsomeimg_show();
}

//更新全部日志
function addallimg_show()
{
	$('#allimg').html("");
	for(var i=0;i<allimgnum;i++)
	{
		var htmlstr =change_to_htmlstr(allimg[i],i);
		$('#allimg').append(htmlstr);
	}
}


//添加更多日志
function addsomeimg_show()
{
	for(var i=0;i<someimg.length;i++)
	{
		var htmlstr =change_to_htmlstr(someimg[i]);
		$('#allimg').append(htmlstr);
	}
}



function change_to_htmlstr(imgurl)
{

	var imgurlpath =HTTP_REQUEST+imgurl;
	var thumb = imgurl.substring(0,imgurl.lastIndexOf("/")+1)+"thumb"+imgurl.substring(imgurl.lastIndexOf("/")+1,imgurl.length);
	thumb = HTTP_REQUEST+thumb;
	var str="";
	str = str+ "<div class='col-md-3 agile-gallery-grid'>";
	str = str+"<div class='agile-gallery'>";
	str = str+"<a href='"+imgurlpath+"' class='lsb-preview' data-lsb-group='header'>";
	str = str+"<img src='"+thumb+"' alt='' />";

	str = str+"<div class='agileits-caption'>";
	str = str+"<h4>用户图片</h4>";
	str = str+"<p>进查询用户日志中的图片</p>";
	str = str+"</div>";
	str = str+"</a>";
	str = str+"</div>";
	str = str+"</div>";

	return str;
}

