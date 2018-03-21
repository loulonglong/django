//登陆界面初始化函数
var ue;
var userme;
//初始化  设置合同可选项
function creatqun_init()
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
	document.getElementById("qun_user_name").value=userme.name;

}
var quntype=0;
function choose_qun(obj) {
	quntype = obj.selectedIndex;
	if (quntype < 0)
	{
		alert("出错");
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

var qunimg="";
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
			qunimg = data;
			qunimg =  qunimg.replace(/\"/g,"");
			var thumbimgpath = qunimg.substring(0,qunimg.lastIndexOf("/")+1)+"thumb"+qunimg.substring(qunimg.lastIndexOf("/")+1,qunimg.length);
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
//创建群组
function creatqun_fun()
{
	var qun_name = document.getElementById("qun_name").value;
	var qun_diary_type = document.getElementById("qun_diary_type").value;
        var qun_gonggao = document.getElementById("qun_gonggao").value;

	if(qun_name=="")
	{
		alert("请将信息填写完整");
		return;
	}
  /* 	if(qunimg=="")
	{
		alert("请设置名片组头像");
		return;
	}*/
	if(quntype<0)
	{
		alert("您需要选择群组类型");
		return;
	}
	document.getElementById("creatqun_button").value="正在创建";

	var url = HTTP_ADD_QUN;
	var json = {
		"userid":userme.id.toString(),
		"quntype":quntype.toString(),
         "qunusetype":qunusetype.toString(),
		"Aname": qun_name,
		"Bname": qun_name,
		"AB": qun_name,
		"state":"0",
        "gonggao":qun_gonggao,
		"qunurl":ue.getContent(),
		"qunicon":qunimg
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




	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			//alert("创建名片组成功");
			window.location.href="myqunlist.html";
			
		}else{
			alert("发布失败");
			document.getElementById("creatqun_button").value="创建";
		 }
										  });
									  
}
