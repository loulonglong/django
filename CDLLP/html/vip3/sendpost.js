// JavaScript Document  //post发送消息
function sendDataByPost(url,data,callback)
{
	$.ajax({
		url : url,
		type : "post",
		dataType : "json",
		contentType: "application/x-www-form-urlencoded",
		 //contentType: "application/json;charset=UTF-8",
		data : data,
		success : callback,
		error : function (data) {
                  alert("发送数据失败");
					}
		  })
}


function goanother(urlpath)
{
	window.location.href=urlpath;
}
function DrawImage(ImgD,width_s,height_s){
	var width_s=100;
	var height_s=100;

	var image=new Image();
	image.src=ImgD.src;
	if(image.width>0 && image.height>0){
		flag=true;
		if(image.width/image.height>=width_s/height_s){
			if(image.width>width_s){
				ImgD.width=width_s;
				ImgD.height=(image.height*width_s)/image.width;
			}else{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
		else{
			if(image.height>height_s){
				ImgD.height=height_s;
				ImgD.width=(image.width*height_s)/image.height;
			}else{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
	}
	/*else{
	 ImgD.src="";
	 ImgD.alt=""
	 }*/
}

/**
 * 从 file 域获取 本地图片 url
 */
function getFileUrl(sourceId) {
	var url;
	if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
		url = document.getElementById(sourceId).value;
	} else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	} else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	}
	return url;
}

/**
 * 将本地图片 显示到浏览器上
 */
function preImg(sourceId, targetId) {
	var url = getFileUrl(sourceId);
	var imgPre = document.getElementById(targetId);
	imgPre.src = url;
}

	var HTTP_HEAD="http://";
    //var HTTP_IP="127.0.0.1:80";
// var HTTP_IP="192.168.137.1:80";
 var HTTP_IP="www.525heart.com";
//	var HTTP_IP="192.168.8.101:80";
	var HTTP_CONTEXT="/";
	var HTTP_REQUEST=HTTP_HEAD+HTTP_IP+HTTP_CONTEXT;
	
	

    //用户注册界面的页面
    var HTTP_WEB_REGISTER_URL = HTTP_REQUEST+"register/index.html"
    //用户注册接入的页面
    var HTTP_WEB_LOGIN_URL = HTTP_REQUEST+"login/index.html"



	
	
	
	
    //百度富媒体上传文件
	var HTTP_UPLOAD=HTTP_REQUEST+"paper/jsp/controller.jsp";
	
	//mvc上传文件
	var HTTP_WEB_UPLOAD_IMG=HTTP_REQUEST+"web/uploadimgfile";
     //mvc上传文件
      var HTTP_WEB_UPLOAD_VIDEO=HTTP_REQUEST+"web/uploadvideofile";
	//web发表日志
	var HTTP_WEB_ADD_DIARY_URL=HTTP_REQUEST+"web/adddiaryurl";
	
	//web查询群下信息和日志的界面
	var HTTP_WEB_SEL_QUN_DIARY = HTTP_REQUEST+"web/lookqun.do";
	
	//web查日志详情
	var HTTP_WEB_SEL_DIARY_DETAL = HTTP_REQUEST+"web/lookdiary.do";
	
	//用户协议
	var HTTP_AGREEMENT=HTTP_REQUEST+"agreement.jsp";
	
	//用户注册
	var HTTP_REGISTER=HTTP_REQUEST+"user/userRegist.do";
	
	//验证码
	var HTTP_VCODE=HTTP_REQUEST+"jiekou/vcode";
	//找回密码
	var HTTP_FINDPASSWORD=HTTP_REQUEST+"jiekou/getpassword";
	//用户登录
	var HTTP_LOGIN=HTTP_REQUEST+"user/userLogin.do";
	//修改用户图像
	var HTTP_UPDATE_USERICON=HTTP_REQUEST+"user/updateUserIcon.do";
	//修改用户信息
	var HTTP_UPDATE_USERINF=HTTP_REQUEST+"user/updateuserinf";
    //查询用户所有图片
    var HTTP_GET_USERIMG=HTTP_REQUEST+"user/getuserallimg";
   //查询群所有图片
    var HTTP_GET_QUNIMG=HTTP_REQUEST+"qun/getqunallimg";
	//修改用户在群中状态
	var HTTP_UPDATE_USERQUNSTATE=HTTP_REQUEST+"user/updateuserstate";
	//修改用户密码
	var HTTP_UPDATE_USERPWD=HTTP_REQUEST+"user/updateUserPwd.do";
    //查询用户所处的群的用户
    var HTTP_GET_ALLQUNUSER =HTTP_REQUEST+"user/getallqunuser.do";
	//查询群用户
	var HTTP_GET_QUN_USER=HTTP_REQUEST+"qun/getqunuser.do";
	//查询群日志
	var HTTP_GET_QUN_DIARY=HTTP_REQUEST+"qun/getqundiary.do";
//查询群日志 根据日志类型
var HTTP_GET_QUN_DIARY_TYPE=HTTP_REQUEST+"qun/getqundiaryfortype.do";
	//删除指定群用户
	var HTTP_DEL_QUN_USER=HTTP_REQUEST+"qun/delqunuser.do";
	//提交建议
	var HTTP_SUMBIT_FEEDBACK=HTTP_REQUEST+"feedback/add.do";
	//写心情 支持图片
	var HTTP_WRITE_DIARY_IMG=HTTP_REQUEST+"diary/adddiaryimg.do";
	//写心情 仅文字
	var HTTP_WRITE_DIARY_WORD=HTTP_REQUEST+"diary/adddiaryword.do";
	//写心情 连接
	var HTTP_WRITE_DIARY_URL=HTTP_REQUEST+"diary/adddiaryurl.do";
	//写心情 视频
	var HTTP_WRITE_DIARY_VIDEO=HTTP_REQUEST+"diary/adddiaryvideo.do";
	//修改日志 支持图片
	var HTTP_UPDATA_DIARY_IMG=HTTP_REQUEST+"diary/updatadiaryimg.do";
	//修改日志不支持图片
	var HTTP_UPDATA_DIARY_WORD=HTTP_REQUEST+"diary/updatediaryword.do";
	//删除心情
	var HTTP_DEL_MOOD=HTTP_REQUEST+"diary/deleteDiary.do";
	//修改日志状态
	var HTTP_CHANGE_MOOD_STATE=HTTP_REQUEST+"diary/updatediarystate.do";
	//获取当天所有公众心情
	var HTTP_ALL_DIARYS=HTTP_REQUEST+"diary/allDiarys.do";
	//根据id查看指定id相关心情
	var HTTP_ALL_DIARY_FORUSERID=HTTP_REQUEST+"diary/alluserdiarys.do";
    //根据id查看指定id相关心情
    var HTTP_ALL_DIARY_FORUSERQUN=HTTP_REQUEST+"diary/alluserqundiarys.do";
    //查询指定用户的所有群下的日志
    var HTTP_ALL_QUNDIARY_FORUSER=HTTP_REQUEST+"diary/queryallqundiary.do";
	//各种分类的日志
	var HTTP_ALL_DIF_DIARY=HTTP_REQUEST+"diary/getdifdiary.do";
	//关注的用户的日志
	var HTTP_ALL_GUANZHU_DIARY=HTTP_REQUEST+"diary/getguanzhudiary.do";
	//各种分类的用户
	var HTTP_ALL_DIF_USER=HTTP_REQUEST+"user/getdifuser.do";
	//各种分类的群组
	var HTTP_ALL_DIF_QUN=HTTP_REQUEST+"qun/getdifqun.do";
   //分页查询指定用户指定群用途类型的日志
   var HTTP_DIARY_USER_QUNUSE=HTTP_REQUEST+"qun/getdiaryforuserqunuse" ;
	//根据用户id查看所在群的所有日志  分页显示
	var HTTP_ALL_QUN_DIARY_FORUSERID=HTTP_REQUEST+"diary/allmyqundiarys.do";
   //根据用户id查看所在群的所有日志  分页显示 三一重工
   var HTTP_ALL_QUN_DIARY_FORUSERID1=HTTP_REQUEST+"diary/allmyqundiarys1.do";
	//根据日志
	var HTTP_SHARE_DIARRY=HTTP_REQUEST+"web/sharediary";
	//根据用户
	var HTTP_SHARE_USER=HTTP_REQUEST+"web/shareuser";
	//根据群
	var HTTP_SHARE_QUN=HTTP_REQUEST+"web/sharequn";
	//根据app
	var HTTP_SHARE_APP=HTTP_REQUEST+"web/shareapp";
	//对心情发表评论
	var HTTP_PINGLUN=HTTP_REQUEST+"comment/add.do";
	//根据ID 获取个人资料
	var HTTP_GET_USERINFO=HTTP_REQUEST+"user/getUserInfoId.do";
	//添加消息(私信、留言、通知)  仅文字
	var HTTP_SEND_MESSAGE_WORD=HTTP_REQUEST+"message/addmessageword.do";
	//添加消息(私信、留言、通知)  图片
	var HTTP_SEND_MESSAGE_IMG=HTTP_REQUEST+"message/addmessageimage.do";
	//添加消息(私信、留言、通知)  连接
	var HTTP_SEND_MESSAGE_URL=HTTP_REQUEST+"message/addmessageurl.do";
	//添加消息(私信、留言、通知)  视频
	var HTTP_SEND_MESSAGE_VIDEO=HTTP_REQUEST+"message/addmessagevideo.do";
	//查询私信
	var HTTP_QUERY_AllSIXIN=HTTP_REQUEST+"chat/queryAllsixin.do";
	//查询和某人之间的私信
	var HTTP_QUERY_AllSIXIN_HE=HTTP_REQUEST+"chat/queryAllsixinwithhe.do";
	//查询指定用户的所有留言
	var HTTP_QUERY_AllLIUYAN=HTTP_REQUEST+"message/queryAllliuyan.do";
	//查询所有通知
	var HTTP_QUERY_AllTONGZHI=HTTP_REQUEST+"tongzhi/queryAlltongzhi.do";
//查询指定类型的所有通知
var HTTP_QUERY_TONGZHI_TYPE=HTTP_REQUEST+"tongzhi/querytongzhifortype.do";
	//版本更新
	var HTTP_VERSION_UPDATE=HTTP_REQUEST+"version/update.do";
	//根据省市区县名称查询群组列表
	var HTTP_GET_QUN_ANAME=HTTP_REQUEST+"qun/getquninfoAname.do";
	//根据省市区县名称查询群组列表
	var HTTP_GET_QUN_BNAME=HTTP_REQUEST+"qun/getquninfoBname.do";
	//根据省市区县名称AB关系查询群组
	var HTTP_GET_QUN_AB=HTTP_REQUEST+"qun/getquninfoAB.do";
	//创建群组
	var HTTP_ADD_QUN=HTTP_REQUEST+"qun/addqun.do";
	//修改群组信息
	var HTTP_CHANGE_QUN_INF=HTTP_REQUEST+"qun/changequninf.do";
	//加入群组
	var HTTP_JOIN_QUN=HTTP_REQUEST+"qun/joinqun.do";
	//查询用户群组
	var HTTP_GET_QUN=HTTP_REQUEST+"qun/getquninfouserid.do";
	//退出和解散群组
	var HTTP_DEL_QUN=HTTP_REQUEST+"qun/delqun.do";
	//更换群组
	var HTTP_UPDATA_QUN=HTTP_REQUEST+"qun/updataqun.do";
	//根据省市查询群组列表
	var HTTP_GET_QUN_ADDRESS=HTTP_REQUEST+"qun/getquninfoaddress.do";
	//根据ID查询群组
	var HTTP_GET_QUN_ID=HTTP_REQUEST+"qun/getquninfoid.do";
     //查询用户群组
     var HTTP_GET_QUN_USERQUNUSE=HTTP_REQUEST+"qun/getqunforuserqunuse.do";
    //查询用户群组
    var HTTP_GET_QUN_QUNUSE=HTTP_REQUEST+"qun/getqunforqunuse.do";
	//添加更多处理
	var HTTP_ADD_MORE=HTTP_REQUEST+"more/adddeal.do";
	//修改处理
	var HTTP_CHANGE_MORE=HTTP_REQUEST+"more/changedeal.do";
	//删除处理
	var HTTP_DEL_MORE=HTTP_REQUEST+"more/deldeal.do";
	//根据ID查询处理
	var HTTP_GET_MORE_ID=HTTP_REQUEST+"more/getdealinfid.do";
	//根据源用户ID和目的日志ID查询是否有内容
	var HTTP_GET_MORE_IT=HTTP_REQUEST+"more/getdealinfit.do";
	//根据源用户ID和目的用户ID查询是否有内容
	var HTTP_GET_MORE_HE=HTTP_REQUEST+"more/getdealinfhe.do";
	//根据源用户ID和目的群ID查询是否有内容
	var HTTP_GET_MORE_QUN=HTTP_REQUEST+"more/getdealinfqun.do";
	//根据more  查询more
	var HTTP_GET_MORE_MORE=HTTP_REQUEST+"more/getmorelistinfmore.do";
	


