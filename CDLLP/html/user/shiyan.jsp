<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>注册</title>
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no">
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body >


    <script type="text/javascript">

    alert("1111111");
            var timestamp = $("#timestamp").val();//时间戳
            var nonceStr = $("#noncestr").val();//随机串
            var signature = $("#signature").val();//签名
    alert("qqqqqqq")
            wx.config({
                debug : true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId : 'wxd7405be4ce0ad554', // 必填，公众号的唯一标识
                timestamp : timestamp, // 必填，生成签名的时间戳
                nonceStr : nonceStr, // 必填，生成签名的随机串
                signature : signature,// 必填，签名，见附录1
                jsApiList : [ 'scanQRCode','onMenuShareAppMessage','onMenuShareTimeline' ]
               // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

            wx.ready(function(){
             alert("22222");
                // wx.hideOptionMenu();
                wx.onMenuShareTimeline({
                    title: '这是一个测试的标题--程高伟的博客',
                    link: 'http://blog.csdn.net/frankcheng5143',
                    imgUrl: 'http://avatar.csdn.net/E/B/6/1_frankcheng5143.jpg',
                    success: function () {
                        // 用户确认分享后执行的回调函数
                         alert('分享到朋友圈成功');
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                         alert('你没有分享到朋友圈');
                    }
                });

                wx.onMenuShareAppMessage({
                      title: '这是一个测试的标题--百度',
                      desc: '这个是要分享内容的一些描述--百度一下，你就知道',
                      link: 'http://www.baidu.com',
                      imgUrl: 'https://www.baidu.com/img/bd_logo1.png',
                      trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                      },
                      success: function (res) {
                          alert('分享给朋友成功');
                      },
                      cancel: function (res) {
                        alert('你没有分享给朋友');
                      },
                      fail: function (res) {
                        alert('分享失败');
                      }
                    });
            });

</script>
</body>
</html>




