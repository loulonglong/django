
from DAO import ChatuserDAO,Chat_MessageDAO,UserDAO,QunDAO
from app1.models import Chat_Message
from app1.models import Chatuser
from util import ResultCode,TimeUtil,fun
from app1.AllBack import Chatuser_back
import json


# 发送聊天文字
def addchatmessage(request):
    result={}
    message = Chat_Message()
    if request.method == "POST":
        content = request.POST.get("content", None)  # 读取post数据，None为默认值
        receive_id = request.POST.get("receive_id", None)  # 读取post数据，None为默认值
        send_id = request.POST.get("send_id", None)  # 读取post数据，None为默认值
        messagetype = request.POST.get("messagetype", None)  # 读取post数据，None为默认值
        contenttype = request.POST.get("contenttype", None)  # 读取post数据，None为默认值
        abid = request.POST.get("abid", None)  # 读取post数据，None为默认值
    if request.method == "GET":
        content = request.GET.get("content", None)  # 读取post数据，None为默认值
        receive_id = request.GET.get("receive_id", None)  # 读取post数据，None为默认值
        send_id = request.GET.get("send_id", None)  # 读取post数据，None为默认值
        messagetype = request.GET.get("messagetype", None)  # 读取post数据，None为默认值
        contenttype = request.GET.get("contenttype", None)  # 读取post数据，None为默认值
        abid = request.GET.get("abid", None)  # 读取post数据，None为默认值

    print("增加聊天(仅文字)接口参数：发送用户id:" + send_id + "内容:" + content+"接收者:"+receive_id+"abid"+abid)

    # 如果abid=0，则表明之前不存在聊天关系或不知道之前存在的聊天关系  在pc端就不知道abid
    if(abid==None or "_" not in abid):
        # 查询一遍是否存在聊天关系   只用查询接收端就好，因为一端有两段都有
        mychatuser = Chatuser.objects.create(send_id=send_id,receive_id=receive_id)
        mychatuser = ChatuserDAO.querychatuserexist(mychatuser);
        if(mychatuser==None):
            message.abid = str(send_id)+"_"+str(receive_id);
            # 在发送端添加主动发送的群聊关系
            mychatuser = Chatuser.objects.create();
            mychatuser.usertype = ResultCode.CHATUSER_TYPE_SEND  #主动发送的用户
            mychatuser.state = ResultCode.CHATUSER_OLD  #设置聊天关系为已读
            mychatuser.send_id = receive_id
            mychatuser.receive_id = send_id   #用户查询聊天对象是根据receiveid查询的
            mychatuser.date = TimeUtil.getCurrentDate()
            mychatuser.time = TimeUtil.getCurrentTime()
            mychatuser.content = content
            mychatuser.abid = str(send_id)+"_"+str(receive_id)
            ChatuserDAO.addchatuser(mychatuser)
            #在接收端添加被动接收的群聊关系
            mychatuser = Chatuser.objects.create();
            mychatuser.usertype = ResultCode.CHATUSER_TYPE_RECEIVE
            mychatuser.state = ResultCode.CHATUSER_NEW #设置聊天关系为有新信息
            mychatuser.send_id = send_id
            mychatuser.receive_id = receive_id
            mychatuser.date = TimeUtil.getCurrentDate()
            mychatuser.time = TimeUtil.getCurrentTime()
            mychatuser.content = content
            mychatuser.abid = str(send_id) + "_" + str(receive_id)
            ChatuserDAO.addchatuser(mychatuser);

        #如果存在这个关系群
        else:
            message.abid = mychatuser.abid #设置message的abid
            #设置接收端聊天关系信息
            mychatuser.state = ResultCode.CHATUSER_NEW  #设置聊天关系为没有信息
            mychatuser.date = TimeUtil.getCurrentDate()
            mychatuser.time = TimeUtil.getCurrentTime()
            mychatuser.content = content
            ChatuserDAO.updatachatuserforuser(mychatuser);
            #设置接收端聊天关系信息
            mychatuser.send_id = receive_id
            mychatuser.receive_id = send_id
            mychatuser = ChatuserDAO.querychatuserexist(mychatuser)
            if(mychatuser!=None):
                mychatuser.state = ResultCode.CHATUSER_OLD
                mychatuser.date = TimeUtil.getCurrentDate()
                mychatuser.sime = TimeUtil.getCurrentTime()
                mychatuser.content = content
                ChatuserDAO.updatachatuserforuser(mychatuser)
    else:
        message.abid = abid#设置message的abid
        mychatuser =Chatuser.objects.create()
        mychatuser.send_id = send_id
        mychatuser.receive_id = receive_id
        arrStrings= abid.split("_");
        #如果abid的前面是接收者id，表明聊天关系是接收者主动发送引起的
        if(arrStrings[0].equals(str(receive_id))):
            mychatuser.usertype = ResultCode.CHATUSER_TYPE_SEND
        else:
            mychatuser.usertype = ResultCode.CHATUSER_TYPE_RECEIVE
        mychatuser = ChatuserDAO.querychatuserexist(mychatuser)

        if(mychatuser==None):
            result['data']=''
            result["respcode"]= ResultCode.FAIL
            result["errorcode"]= ""
            result["message"] =  "对方已删除好友关系"
            return result

        #设置接收端聊天关系信息
        mychatuser.state = ResultCode.CHATUSER_NEW  #设置聊天关系为没有信息
        mychatuser.date = TimeUtil.getCurrentDate()
        mychatuser.time = TimeUtil.getCurrentTime()
        mychatuser.content = content
        ChatuserDAO.updatachatuserforuser(mychatuser);

        #sendid用户在查询的时候是看receiveid的，所以要反过来写。
        mychatuser.send_id = receive_id
        mychatuser.receive_id = send_id
        mychatuser = ChatuserDAO.querychatuserexist(mychatuser)
        if(mychatuser!=None):
            mychatuser.state = ResultCode.CHATUSER_OLD
            mychatuser.date = TimeUtil.getCurrentDate()
            mychatuser.time = TimeUtil.getCurrentTime()
            mychatuser.content = content
            ChatuserDAO.updatachatuserforuser(mychatuser)


    #添加聊天信息
    message.messagetype = messagetype
    message.contenttype = contenttype
    message.send_id = send_id
    message.content = content
    message.receive_id = receive_id
    message.time = TimeUtil.getCurrentTime()
    message.date = TimeUtil.getCurrentDate()
    Chat_MessageDAO.addMessage(message)

    result["data"] = "0"
    result["respcode"] = ResultCode.SUCCESS
    result["errorcode"] = ""
    result["message"] = "成功"
    '''
    #通知接收者
    try:
        if(messagetype==ResultCode.MESSAGE_TYPE_SIXIN):
            user=UserDAO.getUserInfoId(receive_id);
            if(user.push_channelId !=None & user.push_channelId()!=''):
                message_back = fun.chatmessage2back(message);
                jsonobject = json.loads(message_back);
                print(str(jsonobject));
                #push.AndroidPushMsgToSingleDevicemain(user.getPush_channelId(), "您有新的私信", content, ResultCode.PUSH_NEW_SIXIN,object.toString());
    except Exception as e:
        print(e)
    '''
    return result



#发送群聊文字
def addqunchatmessage(request):
    result={};
    message = Chat_Message()
    if request.method == "POST":
        content = request.POST.get("content", None)  # 读取post数据，None为默认值
        qunid = request.POST.get("qunid", None)  # 读取post数据，None为默认值
        messagetype = request.POST.get("messagetype", None)  # 读取post数据，None为默认值
        contenttype = request.POST.get("contenttype", None)  # 读取post数据，None为默认值
        send_id = request.POST.get("send_id", None)  # 读取post数据，None为默认值
    if request.method == "GET":
        content = request.GET.get("content", None)  # 读取post数据，None为默认值
        qunid = request.GET.get("qunid", None)  # 读取post数据，None为默认值
        messagetype = request.GET.get("messagetype", None)  # 读取post数据，None为默认值
        contenttype = request.GET.get("contenttype", None)  # 读取post数据，None为默认值
        send_id = request.GET.get("send_id", None)  # 读取post数据，None为默认值

        print("增加群聊(仅文字)接口参数：发送用户id:" + send_id + "内容:" + content+"接收群:"+qunid)

        #查询一遍是否存在聊天关系  此关系在进群时就存在
        chatuser = Chatuser()
        chatuser.send_id = qunid
        chatuser.receive_id = send_id
        chatuser.usertype = ResultCode.CHATUSER_TYPE_QUN
        chatuser = ChatuserDAO.querychatqunexist(chatuser)
    if(chatuser==None):
        message.abid = str(qunid)
        #在发送端添加主动发送的群聊关系
        chatuser = Chatuser()
        chatuser.usertype = ResultCode.CHATUSER_TYPE_QUN #群聊用户
        chatuser.state = ResultCode.CHATUSER_OLD #设置聊天关系为已读
        chatuser.send_id = qunid
        chatuser.receive_id = send_id   #用户查询聊天对象是根据receiveid查询的，所以讲接收端设置为自己
        chatuser.date = TimeUtil.getCurrentDate()
        chatuser.time = TimeUtil.getCurrentTime()
        chatuser.content = content
        chatuser.abid = str(qunid)
        ChatuserDAO.addchatuser(chatuser)

    #如果存在这个关系群
    else:
        message.abid = chatuser.abid() #设置message的abid
        #设置发送端群聊关系信息
        chatuser.state = ResultCode.CHATUSER_OLD  #设置聊天关系为没有新信息
        chatuser.date = TimeUtil.getCurrentDate()
        chatuser.time = TimeUtil.getCurrentTime()
        chatuser.content = content
        ChatuserDAO.updatachatuserforid(chatuser)

        #设置所有接收收端群聊关心信息
        chatuser.state = ResultCode.CHATUSER_NEW
        ChatuserDAO.updatachatuserforabid(chatuser)


    #添加聊天信息
    message.messagetype = messagetype
    message.contenttype = contenttype
    message.send_id = send_id
    message.content = content
    message.receive_id = qunid
    message.time = TimeUtil.getCurrentTime()
    message.date = TimeUtil.getCurrentDate()
    ChatuserDAO.addMessage(message)

    #通知接收者
    try:
        result["data"]= "0"
        result["respcode"]=ResultCode.SUCCESS
        result["errorcode"]=""
        result["message"]= "成功"
        '''
       if(messagetype==ResultCode.MESSAGE_TYPE_SIXIN)
        {
            User user=userService.getUserInfoId(receive_id);
            if(user.getPush_channelId()!=null && !user.getPush_channelId().equals(""))
            push.AndroidPushMsgToSingleDevicemain(user.getPush_channelId(), "您有新的私信", content, ResultCode.PUSH_NEW_SIXIN);
        }
       '''
    except Exception as e:
        print(e)
        result["data"]= "0"
        result["respcode"]= ResultCode.FAIL
        result["errorcode"]= ResultCode.FAIL
        result["message"]= "失败"

	return result


#查询所有聊天用户
def queryAllchatuser(request):
    #第一层的结果集
    result={}
    allchatuser_back=[]
    chatuser_back = Chatuser_back()
    chatuser = Chatuser()
    if request.method == "POST":
        receive_id = request.POST.get("receive_id", None)  # 读取post数据，None为默认值
    if request.method == "GET":
        receive_id = request.GET.get("receive_id", None)  # 读取post数据，None为默认值
    print("查询所有聊天用户接口参数：接收者ID"+receive_id)


    try:
        allchatuser=ChatuserDAO.queryallchatuser(receive_id)

        if(allchatuser!=None & len(allchatuser)>0):
            userreceive=fun.user2else_back(UserDAO.getUserInfoId(receive_id))
            for chatuser in allchatuser:
                print("查询到总数为"+len(allchatuser))
                if(chatuser.state!=ResultCode.CHATUSER_HIDE):  #如果不隐藏该关系的话
                    chatuser_back=fun.chatuser2back(chatuser)
                    #如果是私信
                    if(chatuser_back.usertype==ResultCode.CHATUSER_TYPE_SEND or chatuser_back.usertype()==ResultCode.CHATUSER_TYPE_RECEIVE):
                        usertemp= UserDAO.getUserInfoId(chatuser_back.send_id())
                        chatuser_back.send_user = fun.user2else_back(usertemp)
                        chatuser_back.receive_user = userreceive
                        allchatuser_back.add(chatuser_back)
                        #如果是群聊
                    if(chatuser_back.usertype==ResultCode.CHATUSER_TYPE_QUN):
                        quntemp= QunDAO.getqunInfoqunid(chatuser_back.send_id)
                        chatuser_back.qun = quntemp
                        chatuser_back.receive_user = userreceive
                        allchatuser_back.add(chatuser_back)


        result["message"]= "查询成功"
		result["data"]= allchatuser_back
		result["errorcode"]= ""
		result["respcode"]= ResultCode.SUCCESS
		print("查询成功数目"+allchatuser_back.size()

    except Exception as e:
    e.printStackTrace();
			result.put("message", "查询失败");
			result.put("data", "");
			result.put("errorcode", ResultCode.FAIL);
			result.put("respcode", ResultCode.FAIL);
			System.out.println("查询失败");
		}
		return result;

	}