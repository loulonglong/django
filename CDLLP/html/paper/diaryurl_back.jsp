<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="zh-CN">
<head>
 <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>${title}</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
   <style type="text/css">
      img,video{
		  width:100%;
		  
	  }
   </style>
</head>
<body onLoad="biangao()">


<div style="margin-left:3%;width:93%">

 <p style="font-size:25px">${title}</p>
 <span style="color:#999;font-size:15px;margin-top:-10px;margin-bottom:-20px">${paper_time}</span>&nbsp;&nbsp;&nbsp;&nbsp;
 <span style="color:#269abc;font-size:15px;margin-top:-10px;margin-bottom:-20px">${paper_qun}</span><br>
 <br><br>
 ${contentstr}

 <span style="color:#908d8d;font-size:16px;margin-top:-10px;margin-bottom:-20px">阅读&nbsp;&nbsp;${tuijian_num}</span>

</div>
 <br>
<script type="text/javascript">
function biangao(){
	var width1 = window.innerWidth;
    var height =document.getElementByTagName("video").offsetHeight;

    alert(height);
    var width = $("video").width();
    
   
    alert(width);
    var ratio = height/width;
    alert(ratio);
    $("video").width(width1);
    $("video").height(width1*ratio);
}
    
    
</script>  
</body>
</html>