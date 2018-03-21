//登陆界面初始化函数

var userme;
var fabiaoimg1="";
var fabiaoimg2="";
var fabiaoimg3="";
//初始化  设置合同可选项
function fabiao_init()
{
	var userstr = localStorage["luanpeng_user"];
	userme =JSON.parse(userstr);
	$('#fabiao_ab').html("");

	$.each(userme.allQun, function(index,value)
	{
		var htmstr =  "<option value=\""+index+"\">"+value.ab+"</option>";
		$('#fabiao_ab').append(htmstr);
	});
	$('#fabiao_ab').selectedIndex = 0;
}


//上传文件
function readFile1()
{
	var file_path_str = $("#pic1_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png')
	{
		alert("你选择的不是图片,请选择图片！");
		return;
	}
	$("#pic1_path").attr("src","images/huanchong.gif");
	$("#file1_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			fabiaoimg1 = data;
			fabiaoimg1 =  fabiaoimg1.replace(/\"/g,"");
			$("#pic1_path").attr("src",HTTP_REQUEST+fabiaoimg1);
			//alert(fabiaoimg1);
			//$( "#file_upload_form").resetForm();
		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#pic1_path").attr("src","images/add.png");
		}
	});
}
//上传文件
function readFile2()
{
	var file_path_str = $("#pic2_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png')
	{
		alert("你选择的不是图片,请选择图片！");
		var obj = document.getElementById('pic_file');
		obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
		//obj.select(); document.selection.clear(); 好像这种方法也可以清空 input file 的value值，不过我没测试
		return;
	}
	$("#pic2_path").attr("src","images/huanchong.gif");
	$("#file2_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			fabiaoimg2 = data;
			fabiaoimg2 = fabiaoimg2.replace(/\"/g,"");
			$("#pic2_path").attr("src",HTTP_REQUEST+fabiaoimg2);
			//alert(fabiaoimg2);
			//$( "#file_upload_form").resetForm();
		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#pic2_path").attr("src","images/add.png");
		}
	});
}
//上传文件
function readFile3()
{
	var file_path_str = $("#pic3_file").val();
	strs = file_path_str.split('.');
	var suffix = strs [strs.length - 1];
	if (suffix != 'jpg' && suffix != 'gif' && suffix != 'jpeg' && suffix != 'png')
	{
		alert("你选择的不是图片,请选择图片！");
		var obj = document.getElementById('pic_file');
		obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
		//obj.select(); document.selection.clear(); 好像这种方法也可以清空 input file 的value值，不过我没测试
		return;
	}
	$("#pic3_path").attr("src","images/huanchong.gif");
	$("#file3_upload_form").ajaxSubmit({
		type: 'post',
		url: HTTP_WEB_UPLOAD_IMG,
		success: function(data){
			fabiaoimg3 = data;
			fabiaoimg3 = fabiaoimg3.replace(/\"/g,"");
			$("#pic3_path").attr("src",HTTP_REQUEST+fabiaoimg3);
			//alert(fabiao_pic_path);
			//$( "#file_upload_form").resetForm();
		},
		error: function(XmlHttpRequest, textStatus, errorThrown){
			alert( "error");
			$("#pic3_path").attr("src","images/add.png");
		}
	});
}

var fabiaoqun=null;
var qundiarytype = "电汇";
//选择了发表群组
function choose_qun(obj) {
	var qunindex = obj.selectedIndex;
	if (qunindex < 0)
		return;
	fabiaoqun = userme.allQun[parseInt(qunindex)];
}

//选择付款方式
function choose_quntype1(obj)
{
	qundiarytype = obj.options[obj.selectedIndex].value;
}

//发表汇款

function fabiaohuikuan()
{
	//读取用户信息  查询呢用户所有日志
   var huikuan_time = document.getElementById("huikuan_time").value;
	huikuan_time = huikuan_time.toString().replace("-","/");
	huikuan_time = huikuan_time.toString().replace("-","/");
	var huikuan_money = document.getElementById("huikuan_money").value;
	var huikuan_fukuanzhanghu = document.getElementById("huikuan_fukuanzhanghu").value;
	if(huikuan_fukuanzhanghu=="")
	{
		huikuan_fukuanzhanghu="无";
	}
	var huikuan_shoukuanren = document.getElementById("huikuan_shoukuanren").value;
	if(huikuan_shoukuanren=="")
	{
		huikuan_shoukuanren="无";
	}
	var huikuan_shoukuanzhanghu = document.getElementById("huikuan_shoukuanzhanghu").value;
	if(huikuan_shoukuanzhanghu=="")
	{
		huikuan_shoukuanzhanghu="无";
	}
	var contentstr = "付款时间："+huikuan_time+"---付款金额："+huikuan_money+"---付款账户："+huikuan_fukuanzhanghu+"---款项接收人："+huikuan_shoukuanren+"---收款账户："+huikuan_shoukuanzhanghu+"---备注："

	if(fabiaoqun==null)
	{
		alert("请先选择合同");
		return;
	}

	if(huikuan_time=="" || huikuan_money=="")
	{
		alert("请将信息填写完整");
		return;
	}

	var url = HTTP_WRITE_DIARY_WORD;
	var json = {
		"content":contentstr,
		"qundiarytype":qundiarytype,
		"userid": userme.id.toString(),
		"qunid":fabiaoqun.id.toString(),
        "state":"0",
		"img1":fabiaoimg1,
		"img2":fabiaoimg2,
		"img3":fabiaoimg3
			   };
	sendDataByPost(url,json,function(backstr)
	{
		if(backstr.respcode == "0")
		{
			alert("发表成功");
			window.location.href="qundiary.html";
			
		}else{
			alert("发表失败");
		 }
										  });
									  
}
