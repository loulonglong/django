//登陆界面初始化函数
var ue;
var userme;
var qunnow;
var qunicon="";
//查询详情
function set_qun_inf()
{
	ue = UE.getEditor('editor');
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var qunstr = localStorage["luanpeng_nowqun"];
	qunnow =JSON.parse(qunstr);
	document.getElementById("qun_user_name").value =userme.name ;
	document.getElementById("qun_name").value =qunnow.aname ;
	document.getElementById("qun_gonggao").value =qunnow.gonggao;
   var typestr="";
	if(qunnow.type1!=null && qunnow.type1!="")
		typestr+=qunnow.type1;
	if(qunnow.type2!=null && qunnow.type2!="")
		typestr+=" "+qunnow.type2;
	if(qunnow.type3!=null && qunnow.type3!="")
		typestr+=" "+qunnow.type3;
	if(qunnow.type4!=null && qunnow.type4!="")
		typestr+=" "+qunnow.type4;
	document.getElementById("qun_diary_type").value=typestr;

	if(qunnow.qunicon!=null && qunnow.qunicon!="")
	     $("#pic_path").attr("src",HTTP_REQUEST+qunnow.qunicon);
	var ss=document.getElementById("choose_qun");

    ss[qunnow.quntype].selected="selected";

	if(qunnow.qunurl!=null)
	{
		ue.addListener("ready",function(){
		ue.setContent(qunnow.qunurl);
		});
	}


}
var quntype=0;
function choose_qun(obj) {
	quntype = obj.selectedIndex;
	if (quntype < 0)
	{
		return;
	}
}
//查询详情
function change_inf()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var qunstr = localStorage["luanpeng_nowqun"];
	qunnow =JSON.parse(qunstr);

	var change_name = document.getElementById("qun_name").value;
	var change_gonggao = document.getElementById("qun_gonggao").value;
	var qun_diary_type = document.getElementById("qun_diary_type").value;

	if(qunicon=="")
	{
		qunicon = qunnow.qunicon;
	}
	var url = HTTP_CHANGE_QUN_INF;
	var json = {
		"userid": userme.id.toString(),
		"quntype":quntype.toString(),
		"qunid": qunnow.id.toString(),
		"Aname": change_name,
		"Bname": change_name,
		"AB": change_name,
		"qunicon":qunicon,
		"qunurl":ue.getContent(),
		"gonggao":change_gonggao
			   };
	var typestr =  qun_diary_type.split(" ");
	if(typestr.length>4)
	{
		alert("分类数目不能超过4个");
		return;
	}
	if(typestr.length>0)
		json.type1=typestr[0];
	if(typestr.length>1)
		json.type2=typestr[1];
	if(typestr.length>2)
		json.type3=typestr[2];
	if(typestr.length>3)
		json.type4=typestr[3];


	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			window.location.href="myqunlist.html";
			
		}else{
			alert("查询失败");
		 }
										  });
									  
}
//查询详情
function del_qun()
{
	//读取用户信息  查询呢用户所有日志
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var qunstr = localStorage["luanpeng_nowqun"];
	qunnow =JSON.parse(qunstr);

	var url = HTTP_DEL_QUN;
	var json = {
		"userid": userme.id.toString(),
		"qunid": qunnow.id.toString()
	};

	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			alert("成功解散群组");
			window.location.href="qun.html";

		}else{
			alert("解散失败");
		}
	});

}


//上传文件
function readFile()
{
	var file_path_str = $("#pic_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG'&& suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#pic_path").attr("src","images/huanchong.gif");
	$("#file_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			qunicon = data;
			qunicon =  qunicon.replace(/\"/g,"");
			var thumbimgpath = qunicon.substring(0,qunicon.lastIndexOf("/")+1)+"thumb"+qunicon.substring(qunicon.lastIndexOf("/")+1,qunicon.length);
			$("#pic_path").attr("src",HTTP_REQUEST+thumbimgpath);
			//alert(fabiaoimg1);
			$( "#file_upload_form").resetForm();

		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#pic_path").attr("src","images/add.png");
		}
	});
}