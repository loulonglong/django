//登陆界面初始化函数
function brower_img_init(){

    var brower_img1_path =localStorage["brower_img1_path"];
	var brower_img2_path =localStorage["brower_img2_path"];
	var brower_img3_path =localStorage["brower_img3_path"];

	if(brower_img1_path!="" && brower_img1_path!=null)
	{
		$('#allimg').append("<img style='width: 100%' src='"+brower_img1_path+"'> <br> <br>");
	}

	if(brower_img2_path!="" && brower_img2_path!=null)
	{
		$('#allimg').append("<img style='width: 100%' src='"+brower_img2_path+"'> <br> <br>");
	}
	if(brower_img3_path!="" && brower_img3_path!=null)
	{
		$('#allimg').append("<img style='width: 100%' src='"+brower_img3_path+"'>");
	}

};

