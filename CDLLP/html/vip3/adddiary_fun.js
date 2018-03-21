//登陆界面初始化函数
var ue;
var userme;
var allqun=new Array();
var choose_qun_diarytype="";
var choose_qun_index=0;
//初始化  设置合同可选项
function fabiao_init()
{
	ue = UE.getEditor('editor');

	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	document.getElementById("diary_user").value=userme.name;
	allqun = userme.allQun;

	var allqunname = document.getElementById("allqun");
	allqunname.innerHTML="";
	for(var i=0;i<allqun.length;i++)
	{
		if(allqun[i].qunusetype==3)
		{
			allqunname.options.add(new Option(allqun[i].aname,i));  //text和value
			choose_qun_index = i;
		}

	}
	//allqunname.change();
	allqunname[0].selected="selected";
	choose_qun(allqunname);
}

function setcontentshow(obj)
{
	var urlpathstr = obj.value;
	if(urlpathstr=="")
	{
		document.getElementById("editor").style.display="inline";
	}
	else {
		document.getElementById("editor").style.display="none";
	}
}


var fabiaoimg="";
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
			fabiaoimg = data;
			fabiaoimg =  fabiaoimg.replace(/\"/g,"");
			var thumbimgpath = fabiaoimg.substring(0,fabiaoimg.lastIndexOf("/")+1)+"thumb"+fabiaoimg.substring(fabiaoimg.lastIndexOf("/")+1,fabiaoimg.length);
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

//选择群组
function choose_qun(obj)
{

	choose_qun_index = obj.options[obj.selectedIndex].value;
	var allqundiarytype = document.getElementById("allqundiarytype");
	allqundiarytype.innerHTML="";

	if(allqun[choose_qun_index].type1!=null && allqun[choose_qun_index].type1!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type1,0));  //text和value
	}
	if(allqun[choose_qun_index].type2!=null && allqun[choose_qun_index].type2!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type2,1));  //text和value
	}
	if(allqun[choose_qun_index].type3!=null && allqun[choose_qun_index].type3!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type3,2));  //text和value
	}
	if(allqun[choose_qun_index].type4!=null && allqun[choose_qun_index].type4!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type4,3));  //text和value
	}


}

//选择日志类型
function choose_quntype(obj)
{
	choose_qun_diarytype = obj.options[obj.selectedIndex].text;
}

//发布宝贝

function fabiaodiary()
{
	var allqundiarytype = document.getElementById("allqundiarytype");
	choose_qun_diarytype = allqundiarytype.options[allqundiarytype.selectedIndex].text;
	var diary_title = document.getElementById("diary_title").value;
	var diary_content = ue.getContent();
	var diary_urlpath = document.getElementById("diary_urlpath").value;
	if(diary_title=="" || choose_qun_diarytype=="")
	{
		alert("请将信息填写完整");
		return;
	}
	if(diary_content=="" && diary_urlpath=="")
	{
		alert("请填写文章连接或编辑文章");
		return;
	}

	var url = HTTP_WRITE_DIARY_URL;
	var json = {
		"urltitle":diary_title,
		"urlcontent":diary_content,
		"urlpath":diary_urlpath,
		"qundiarytype":choose_qun_diarytype,
		"userid": userme.id.toString(),
		"qunid":allqun[choose_qun_index].id.toString(),
        "state":"0",
		"img1":fabiaoimg
			   };
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			alert("发布成功");
			window.location.href="mydiarylist.html";
			
		}else{
			alert("发布失败");
		 }
										  });
									  
}
