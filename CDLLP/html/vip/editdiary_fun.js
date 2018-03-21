//登陆界面初始化函数
var ue;
var userme;
var diarynow;
var allqun=new Array();
var img1="";
var img2="";
var img3="";
var img4="";
var img5="";
var img6="";
var img7="";
var img8="";
var img9="";
var imgheight=0;
var imgwidth=0;
//初始化  设置合同可选项
function fabiao_init()
{
	ue = UE.getEditor('editor');

	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	var diarynowstr = localStorage["luanpeng_nowdiary"];
	diarynow =JSON.parse(diarynowstr);
	img1=diarynow.imgone;
	document.getElementById("diary_user").value=userme.name;
	allqun = userme.allQun;

	var allqunname = document.getElementById("allqun");
	allqunname.innerHTML="";
	for(var i=0;i<allqun.length;i++)
	{
		allqunname.options.add(new Option(allqun[i].aname,i));  //text和value

		if(allqun[i].id==diarynow.qun.id)
		{
			allqunname[i].selected="selected";
            //显示日志类型
			choose_qun(allqunname);
			//设置选中日志类型
			var allqundiarytype = document.getElementById("allqundiarytype");
			if(allqun[i].type1==diarynow.type)
				allqundiarytype[0].selected="selected";
			else if(allqun[i].type2==diarynow.type)
				allqundiarytype[1].selected="selected";
			else if(allqun[i].type3==diarynow.type)
				allqundiarytype[2].selected="selected";
			else if(allqun[i].type4==diarynow.type)
				allqundiarytype[3].selected="selected";
			else if(allqun[i].type5==diarynow.type)
				allqundiarytype[4].selected="selected";
			else if(allqun[i].type6==diarynow.type)
				allqundiarytype[5].selected="selected";
			else if(allqun[i].type7==diarynow.type)
				allqundiarytype[6].selected="selected";
			else if(allqun[i].type8==diarynow.type)
				allqundiarytype[7].selected="selected";
			else if(allqun[i].type9==diarynow.type)
				allqundiarytype[8].selected="selected";
			else if(allqun[i].type10==diarynow.type)
				allqundiarytype[9].selected="selected";
			else if(allqun[i].type11==diarynow.type)
				allqundiarytype[10].selected="selected";
			else if(allqun[i].type12==diarynow.type)
				allqundiarytype[11].selected="selected";
			else if(allqun[i].type13==diarynow.type)
				allqundiarytype[12].selected="selected";
			else if(allqun[i].type14==diarynow.type)
				allqundiarytype[13].selected="selected";
		}
	}




	document.getElementById("diary_title").value=diarynow.urltitle;
	document.getElementById("diary_urlpath").value=diarynow.urlpath;

	if(diarynow.imgone!=null && diarynow.imgone!="")
		$("#pic1_path").attr("src",HTTP_REQUEST+diarynow.imgone);
	if(diarynow.qun.qunusetype==11 || diarynow.qun.qunusetype==12)
	{
		try{
			document.getElementById("diary_urlpath").style.display="none";
			document.getElementById("editor").style.display="none";
			img2 = diarynow.imgtwo;
			img3 = diarynow.imgthree;
			img4 = diarynow.imgfour;
			img5 = diarynow.imgfive;
			img6 = diarynow.imgsix;
			img7 = diarynow.imgseven;
			img8 = diarynow.imgeight;
			img9 = diarynow.imgnine;

			if(diarynow.imgtwo!=null && diarynow.imgtwo!="")
				$("#pic2_path").attr("src",HTTP_REQUEST+diarynow.imgtwo);
			if(diarynow.imgthree!=null && diarynow.imgthree!="")
				$("#pic3_path").attr("src",HTTP_REQUEST+diarynow.imgthree);
			if(diarynow.imgfour!=null && diarynow.imgfour!="")
				$("#pic4_path").attr("src",HTTP_REQUEST+diarynow.imgfour);
			if(diarynow.imgfive!=null && diarynow.imgfive!="")
				$("#pic5_path").attr("src",HTTP_REQUEST+diarynow.imgfive);
			if(diarynow.imgsix!=null && diarynow.imgsix!="")
				$("#pic6_path").attr("src",HTTP_REQUEST+diarynow.imgsix);
			if(diarynow.imgseven!=null && diarynow.imgseven!="")
				$("#pic7_path").attr("src",HTTP_REQUEST+diarynow.imgseven);
			if(diarynow.imgeight!=null && diarynow.imgeight!="")
				$("#pic8_path").attr("src",HTTP_REQUEST+diarynow.imgeight);
			if(diarynow.imgnine!=null && diarynow.imgnine!="")
				$("#pic9_path").attr("src",HTTP_REQUEST+diarynow.imgnine);

			var strarr = diarynow.content.split("|=|");
			document.getElementById("text1").value = strarr[0];
			document.getElementById("text2").value = strarr[1];
			document.getElementById("text3").value = strarr[2];
			document.getElementById("text4").value = strarr[3];
			document.getElementById("text5").value = strarr[4];
			document.getElementById("text6").value = strarr[5];
			document.getElementById("text7").value = strarr[6];
			document.getElementById("text8").value = strarr[7];
			document.getElementById("text9").value = strarr[8];

		}
		catch (e){

		}
	}
	else
	{
		document.getElementById("imgtext").style.display="none";
	}



	if(diarynow.urlcontent!=null)
	{
		ue.addListener("ready",function(){
			geturlcontent();

		});

		//getSource();

	}




}


function geturlcontent()
{
	var url=HTTP_GET_DIARYCONTENT;
	var json = {
		"diaryid":diarynow.id.toString()
	};
	sendDataByPost(url,json,function(backstr){
		if(backstr.respcode == "0"){
			ue.setContent(backstr.data);

		}else{
			alert(backstr.message);
		}
	});
}

//远程获取网页源代码
//用于创建XMLHttpRequest对象
function createXmlHttp()
{
//根据window.XMLHttpRequest对象是否存在使用不同的创建方式
	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest(); //FireFox、Opera等浏览器支持的创建方式
	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");//IE浏览器支持的创建方式
	}
}
//直接通过XMLHttpRequest对象获取远程网页源代码
function getSource()
{

	var url = HTTP_REQUEST + diarynow.urlcontent
//地址为空时提示用户输入
	if (url == "") {
		alert("请输入网页地址。");
		return;
	}

	createXmlHttp(); //创建XMLHttpRequest对象
	xmlHttp.onreadystatechange = writeSource; //设置回调函数
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}
//将远程网页源代码写入页面文字区域
function writeSource() {
	if (xmlHttp.readyState == 4) {
		ue.addListener("ready",function(){
			ue.setContent(xmlHttp.responseText);
		});
	}
}

//上传文件
function readFile(index)
{
	var pic_file;
	var pic_path;
	var file_upload_form;
	switch(index)
	{
		case 1:
			pic_file = document.getElementById("pic1_file");
			pic_path = document.getElementById("pic1_path");
			file_upload_form = document.getElementById("file1_upload_form");
			break;
		case 2:
			pic_file = document.getElementById("pic2_file");
			pic_path = document.getElementById("pic2_path");
			file_upload_form = document.getElementById("file2_upload_form");
			break;
		case 3:
			pic_file = document.getElementById("pic3_file");
			pic_path = document.getElementById("pic3_path");
			file_upload_form = document.getElementById("file3_upload_form");
			break;
		case 4:
			pic_file = document.getElementById("pic4_file");
			pic_path = document.getElementById("pic4_path");
			file_upload_form = document.getElementById("file4_upload_form");
			break;
		case 5:
			pic_file = document.getElementById("pic5_file");
			pic_path = document.getElementById("pic5_path");
			file_upload_form = document.getElementById("file5_upload_form");
			break;
		case 6:
			pic_file = document.getElementById("pic6_file");
			pic_path = document.getElementById("pic6_path");
			file_upload_form = document.getElementById("file6_upload_form");
			break;
		case 7:
			pic_file = document.getElementById("pic7_file");
			pic_path = document.getElementById("pic7_path");
			file_upload_form = document.getElementById("file7_upload_form");
			break;
		case 8:
			pic_file = document.getElementById("pic8_file");
			pic_path = document.getElementById("pic8_path");
			file_upload_form = document.getElementById("file8_upload_form");
			break;
		case 9:
			pic_file = document.getElementById("pic9_file");
			pic_path = document.getElementById("pic9_path");
			file_upload_form = document.getElementById("file9_upload_form");
			break;

	}
	var file_path_str=pic_file.value;
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png' && suffix != 'PNG'&& suffix != 'JPG')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}


	//查看缩略图图片是否符合文件规格
	if(index==1)
	{
		var MyTest = pic_file.files[0];
		var reader = new FileReader();
		reader.readAsDataURL(MyTest);
		reader.onload = function(theFile) {


			var image = new Image();
			image.src = theFile.target.result;
			image.onload = function() {

				var bili = this.width*1.0/this.height;
				var bili1 = 0;
				if(imgheight!=0 && imgwidth!=0)
				{
					bili1 = imgwidth/imgheight;
				}
				if(bili<(bili1*1.2) && bili>(bili1/1.2) || bili1==0)
				{
					pic_path.src = "images/huanchong.gif";  //"images/huanchong.gif"   pic_file
					var ajaxoption={
						type: 'post',
						url: HTTP_WEB_UPLOAD_IMG,
						success: function(data)
						{
							var img = data;
							img =  img.replace(/\"/g,"");
						    img1 = img;

							var thumbimgpath = img.substring(0,img.lastIndexOf("/")+1)+"thumb"+img.substring(img.lastIndexOf("/")+1,img.length);
							pic_path.src = HTTP_REQUEST+thumbimgpath;
							//	$("#pic_path").attr("src",HTTP_REQUEST+thumbimgpath);
							file_upload_form.resetForm();
							$(this).resetForm();

						},
						error: function(XmlHttpRequest, textStatus, errorThrown){
							alert( "error");
							pic_path.src = "images/add.png";
							//$("#pic_path").attr("src","images/add.png");
						}
					};
					$('#file1_upload_form').ajaxSubmit(ajaxoption);


				}
				else
				{
					alert("图片比例不协调，请按照规定尺寸上传");
					pic_path.src = "images/someone_head.png";
					img1="";
				}

			};
		};
	}
	else
	{
		pic_path.src = "images/huanchong.gif";  //"images/huanchong.gif"   pic_file
		var ajaxoption={
			type: 'post',
			url: HTTP_WEB_UPLOAD_IMG,
			success: function(data)
			{
				var img = data;
				img =  img.replace(/\"/g,"");
				switch(index) {
					case 1:
						img1 = img;
						break;
					case 2:
						img2 = img;
						break;
					case 3:
						img3 = img;
						break;
					case 4:
						img4 = img;
						break;
					case 5:
						img5 = img;
						break;
					case 6:
						img6 = img;
						break;
					case 7:
						img7 = img;
						break;
					case 8:
						img8 = img;
						break;
					case 9:
						img9 = img;
						break;
				}

				var thumbimgpath = img.substring(0,img.lastIndexOf("/")+1)+"thumb"+img.substring(img.lastIndexOf("/")+1,img.length);
				pic_path.src = HTTP_REQUEST+thumbimgpath;
				//	$("#pic_path").attr("src",HTTP_REQUEST+thumbimgpath);
				file_upload_form.resetForm();
				$(this).resetForm();

			},
			error: function(XmlHttpRequest, textStatus, errorThrown){
				alert( "error");
				pic_path.src = "images/add.png";
				//$("#pic_path").attr("src","images/add.png");
			}
		};
		switch(index) {
			case 1:
				$('#file1_upload_form').ajaxSubmit(ajaxoption);
				break;
			case 2:
				$('#file2_upload_form').ajaxSubmit(ajaxoption);
				break;
			case 3:
				$('#file3_upload_form').ajaxSubmit(ajaxoption);
				break;
			case 4:
				$('#file4_upload_form').ajaxSubmit(ajaxoption);
				break;
			case 5:
				$('#file5_upload_form').ajaxSubmit(ajaxoption);
				break;
			case 6:
				$('#file6_upload_form').ajaxSubmit(ajaxoption);
				break;
			case 7:
				$('#file7_upload_form').ajaxSubmit(ajaxoption);
				break;
			case 8:
				$('#file8_upload_form').ajaxSubmit(ajaxoption);
				break;
			case 9:
				$('#file9_upload_form').ajaxSubmit(ajaxoption);
				break;
		}

	}


}

var choose_qun_diarytype="";
var choose_qun_index=0;
//选择群组
function choose_qun(obj)
{
	choose_qun_index = obj.selectedIndex;
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
	if(allqun[choose_qun_index].type5!=null && allqun[choose_qun_index].type5!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type5,4));  //text和value
	}
	if(allqun[choose_qun_index].type6!=null && allqun[choose_qun_index].type6!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type6,5));  //text和value
	}
	if(allqun[choose_qun_index].type7!=null && allqun[choose_qun_index].type7!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type7,6));  //text和value
	}
	if(allqun[choose_qun_index].type8!=null && allqun[choose_qun_index].type8!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type8,7));  //text和value
	}
	if(allqun[choose_qun_index].type9!=null && allqun[choose_qun_index].type9!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type9,8));  //text和value
	}
	if(allqun[choose_qun_index].type10!=null && allqun[choose_qun_index].type10!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type10,9));  //text和value
	}
	if(allqun[choose_qun_index].type11!=null && allqun[choose_qun_index].type11!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type11,10));  //text和value
	}
	if(allqun[choose_qun_index].type12!=null && allqun[choose_qun_index].type12!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type12,11));  //text和value
	}
	if(allqun[choose_qun_index].type13!=null && allqun[choose_qun_index].type13!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type13,12));  //text和value
	}
	if(allqun[choose_qun_index].type14!=null && allqun[choose_qun_index].type14!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type14,13));  //text和value
	}
	if(allqun[choose_qun_index].type15!=null && allqun[choose_qun_index].type15!="")
	{
		allqundiarytype.options.add(new Option(allqun[choose_qun_index].type15,14));  //text和value
	}
	var diary_urlpath = document.getElementById("diary_urlpath");
	diary_urlpath.style.display="none";

	var editor = document.getElementById("editor");
	editor.style.display="none";

	var imgtext = document.getElementById("imgtext");
	imgtext.style.display="none";

	//alert(allqun[choose_qun_index].qunusetype.toString());
	//如果是图文连接或者图文轮播，则编辑界面是不同的
	if(allqun[choose_qun_index].qunusetype==12 || allqun[choose_qun_index].qunusetype==11)
	{
		imgtext.style.display = "block";
	}
	else
	{
		diary_urlpath.style.display = "block";
		editor.style.display = "block";
	}

	var usetype = allqun[choose_qun_index].qunusetype;
	//缩略图的要求
	if(usetype==3)
	{
		document.getElementById("img1size").innerText = "宽630像素、高400像素";
		imgheight = 400;
		imgwidth = 630;
	}
	if(usetype==4 || usetype==7 || usetype==9 || usetype==10 || usetype==11 || usetype==12)
	{
		document.getElementById("img1size").innerText = "宽100像素、高100像素";
		imgheight = 100;
		imgwidth = 100;
	}
	if(usetype==5 || usetype==6)
	{
		document.getElementById("img1td").style.display = "none";
	}
	if(usetype==8)
	{
		document.getElementById("img1size").innerText = "宽420像素、高250像素";
		imgheight = 420;
		imgwidth = 250;
	}

	if(usetype==13)
	{
		document.getElementById("img1size").innerText = "";
	}

}

//选择日志类型
function choose_quntype(obj)
{
	choose_qun_diarytype = obj.options[obj.selectedIndex].text;
}

//发布宝贝

function changediary()
{
	var allqundiarytype = document.getElementById("allqundiarytype");
	choose_qun_diarytype = allqundiarytype.options[allqundiarytype.selectedIndex].text;

	var diary_title = document.getElementById("diary_title").value;
	var diary_content = ue.getContent();
	var diary_urlpath = document.getElementById("diary_urlpath").value;


	var url = HTTP_UPDATA_DIARY_WORD;
	var json = {
		"diaryid":diarynow.id.toString(),
		"urltitle":diary_title,
		"urlcontent":diary_content,
		"urlpath":diary_urlpath,
		"qundiarytype":choose_qun_diarytype,
		"userid": userme.id.toString(),
		"qunid":allqun[choose_qun_index].id.toString(),
		"state":"0",
		"img1":img1
	};
	if(allqun[choose_qun_index].qunusetype==12 || allqun[choose_qun_index].qunusetype==11)
	{
		var content = document.getElementById("text1").value;
		content =content +"|=|"+ document.getElementById("text2").value;
		content =content +"|=|"+ document.getElementById("text3").value;
		content =content +"|=|"+ document.getElementById("text4").value;
		content =content +"|=|"+ document.getElementById("text5").value;
		content =content +"|=|"+ document.getElementById("text6").value;
		content =content +"|=|"+ document.getElementById("text7").value;
		content =content +"|=|"+ document.getElementById("text8").value;
		content =content +"|=|"+ document.getElementById("text9").value;

		json = {
			"diaryid":diarynow.id.toString(),
			"urltitle":diary_title,
			"content":content,
			"qundiarytype":choose_qun_diarytype,
			"userid": userme.id.toString(),
			"qunid":allqun[choose_qun_index].id.toString(),
			"state":"0",
			"img1":img1,
			"img2":img2,
			"img3":img3,
			"img4":img4,
			"img5":img5,
			"img6":img6,
			"img7":img7,
			"img8":img8,
			"img9":img9
		};
	}
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			alert("修改成功");
			window.location.href="mydiarylist.html";
			
		}else{
			alert("发布失败");
		 }
										  });
									  
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