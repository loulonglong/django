//登陆界面初始化函数
function register_init(){
	var urlpath = HTTP_REQUEST+"/read/codetoregister";
	var urlencode = encodeURI(urlpath);
	window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b5557f84c686b7d&redirect_uri="+urlencode+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
}

