/**
 * Created by cdl on 18-3-18.
 */

info = {};
picurl1 = "";
picurl2 = "";
picurl3 = "";

function fabiaobb(){
    url = "http://127.0.0.1:8000/diary/adddiaryword"
    info_local = JSON.parse(localStorage["luanpeng_user"]);
    info = {
        fabiao_name:$("#fabiao_name").val(),
        fabiao_rushoushijian:$("#fabiao_rushoushijian").val(),
        fabiao_saletime:$("#fabiao_saletime").val(),
        fabiao_price:$("#fabiao_price").val(),
        fabiao_beizhu:$("#fabiao_beizhu").val()
    }
    jsonstr = {
        userid:info_local["id"],
        content:info,
        img1:picurl1,
        img2:picurl2,
        img3:picurl3
    }
    sendinfo(url,jsonstr,function(returndata){
        window.location.href = "diaryshow.html";
    });
}

function uploadfile1(){
    var formData = new FormData($( "#file1_upload_form" )[0]);
    $.ajax({
        url: "http://127.0.0.1:8000/web/uploadimgfile" ,  /*这是处理文件上传的servlet*/
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (returndata) {
            loca = returndata.lastIndexOf("/");
            //picurl1 = "http://127.0.0.1:8000/"+returndata.substring(0,loca+1)+"thumb"+returndata.substring(loca+1);
            picurl1 = returndata.substring(0,loca+1)+"thumb"+returndata.substring(loca+1);
            $("#pic1_path").attr("src",picurl1);/*这是预览图片用的，自己在文件上传表单外添加*/
        },
        error: function (returndata) {
            alert(returndata.message);
        }
    });
}

function uploadfile2(){
    var formData = new FormData($( "#file2_upload_form" )[0]);
    $.ajax({
        url: "http://127.0.0.1:8000/web/uploadimgfile" ,  /*这是处理文件上传的servlet*/
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (returndata) {
            loca = returndata.lastIndexOf("/");
            //picurl1 = "http://127.0.0.1:8000/"+returndata.substring(0,loca+1)+"thumb"+returndata.substring(loca+1);
            picurl2 = returndata.substring(0,loca+1)+"thumb"+returndata.substring(loca+1);
            $("#pic2_path").attr("src",picurl2);/*这是预览图片用的，自己在文件上传表单外添加*/
        },
        error: function (returndata) {
            alert(returndata.message);
        }
    });
}

function uploadfile3(){
    var formData = new FormData($( "#file3_upload_form" )[0]);
    $.ajax({
        url: "http://127.0.0.1:8000/web/uploadimgfile" ,  /*这是处理文件上传的servlet*/
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (returndata) {
            loca = returndata.lastIndexOf("/");
            //picurl1 = "http://127.0.0.1:8000/"+returndata.substring(0,loca+1)+"thumb"+returndata.substring(loca+1);
            picurl3 = returndata.substring(0,loca+1)+"thumb"+returndata.substring(loca+1);
            $("#pic3_path").attr("src",picurl3);/*这是预览图片用的，自己在文件上传表单外添加*/
        },
        error: function (returndata) {
            alert(returndata.message);
        }
    });
}