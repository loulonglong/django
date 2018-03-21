//登陆界面初始化函数
var ue;
var userme;
var qunnow;
var qunicon="";
//查询详情
function set_qun_inf()
{
	//添加群类型
	var allqunuse = document.getElementById("allqunuse");
	allqunuse.innerHTML="";
	allqunuse.options.add(new Option("选择用途",0));  //text和value
	addqunusertype();
	for(var i=0;i<allqunusetype.length;i++)
	{
		allqunuse.options.add(new Option(allqunusetype[i],i+1));  //text和value
	}


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
	if(qunnow.type5!=null && qunnow.type5!="")
		typestr+=" "+qunnow.type5;
	if(qunnow.type6!=null && qunnow.type6!="")
		typestr+=" "+qunnow.type6;
	if(qunnow.type7!=null && qunnow.type7!="")
		typestr+=" "+qunnow.type7;
	if(qunnow.type8!=null && qunnow.type8!="")
		typestr+=" "+qunnow.type8;
	if(qunnow.type9!=null && qunnow.type9!="")
		typestr+=" "+qunnow.type9;
	if(qunnow.type10!=null && qunnow.type10!="")
		typestr+=" "+qunnow.type10;
	if(qunnow.type11!=null && qunnow.type11!="")
		typestr+=" "+qunnow.type11;
	if(qunnow.type12!=null && qunnow.type12!="")
		typestr+=" "+qunnow.type12;
	if(qunnow.type13!=null && qunnow.type13!="")
		typestr+=" "+qunnow.type13;
	if(qunnow.type14!=null && qunnow.type14!="")
		typestr+=" "+qunnow.type14;
	if(qunnow.type15!=null && qunnow.type15!="")
		typestr+=" "+qunnow.type15;
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
	document.getElementById("allqunuse")[qunnow.qunusetype].selected="selected";

}
var quntype=0;
function choose_quntype(obj) {
	quntype = obj.selectedIndex;
	if (quntype < 0)
	{
        quntype=0
		return;
	}
}
var qunusetype=0;
function choose_qunuse(obj) {
	qunusetype = obj.selectedIndex;
	if (qunusetype < 0)
	{
		alert("出错");
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
		"qunusetype":qunusetype.toString(),
		"qunid": qunnow.id.toString(),
		"Aname": change_name,
		"qunicon":qunicon,
		"qunurl":ue.getContent(),
		"gonggao":change_gonggao
	};

	var typestr =  qun_diary_type.split(" ");
	if(typestr.length>15)
	{
		alert("分类数目不能超过15个");
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
	if(typestr.length>4)
		json.type5=typestr[4];
	if(typestr.length>5)
		json.type6=typestr[5];
	if(typestr.length>6)
		json.type7=typestr[6];
	if(typestr.length>7)
		json.type8=typestr[7];
	if(typestr.length>8)
		json.type9=typestr[8];
	if(typestr.length>9)
		json.type10=typestr[9];
	if(typestr.length>10)
		json.type11=typestr[10];
	if(typestr.length>11)
		json.type12=typestr[11];
	if(typestr.length>12)
		json.type13=typestr[12];
	if(typestr.length>13)
		json.type14=typestr[13];
	if(typestr.length>14)
		json.type15=typestr[14];

	console.log(JSON.stringify(json))
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