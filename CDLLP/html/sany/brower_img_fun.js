//登陆界面初始化函数
function brower_img_init(){
	//$("#login_register").attr("href",HTTP_WEB_REGISTER_URL);

    var brower_ima_path =localStorage["brower_img_path"];
	//读取cookie
	if(brower_ima_path!="")
	{
		document.getElementById("brower_img_path").src = brower_ima_path;
	}

};

