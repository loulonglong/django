from app1.models import Diarydeal
from django.db.models import Q

#添加日志处理
def addDealDiary(diarydeal):
    diarydealid = Diarydeal.objects.create(dealid=diarydeal.dealid,userid=diarydeal.userid,qunid=diarydeal.qunid,diaryid=diarydeal.diaryid,
                                           state=diarydeal.state,date=diarydeal.date,time=diarydeal.time,dealtype=diarydeal.dealtype,parameter1=diarydeal.parameter1,
                                           parameter2=diarydeal.parameter2,parameter3=diarydeal.parameter3,parameter4=diarydeal.parameter4,
                                           parameter5=diarydeal.parameter5,parameter6=diarydeal.parameter6,parameter7=diarydeal.parameter7).id

#删除日记处理
def deleteDealDiary(id):
    Diarydeal.objects.filter(id=id).delete()

#根据dealid删除日记处理
def deleteDealDiaryfordealid(dealid):
    Diarydeal.objects.filter(dealid=dealid)

#根据ID查询日志处理
def selectDealDiary(id):
    diarydeallist = Diarydeal.objects.filter(id=id)

#根据dealID查询日志处理
def selectdealdiaryfordealid(dealid):
    deallist=Diarydeal.objects.filter(dealid = dealid)

#分页根据群id查询处理
def selectdealdiaryforqunid(qunid,start,pagesize):
    fenyeDiarydeallist=Diarydeal.objects.order_by('-id').filter(qunid=qunid)[start:start+pagesize]

#分页根据id查询处理
def selectdealdiaryforuserid(userid,start,pagesize):
    fenyediaryuseridlist=Diarydeal.objects.order_by('-id').filter(userid=userid)[start:start+pagesize]

#更新日记处理
def updateDealDiary(diarydeal):
    Diarydeal.objects.filter(id=diarydeal.id).update(state=diarydeal.state,date=diarydeal.date,time=diarydeal.time,dealtype=diarydeal.dealtype,
                                                     parameter1=diarydeal.parameter1,parameter2=diarydeal.parameter2,parameter3=diarydeal.parameter3,
                                                     parameter4=diarydeal.parameter4,parameter5=diarydeal.parameter5,parameter6=diarydeal.parameter6,
                                                     parameter7=diarydeal.parameter7,parameter8=diarydeal.parameter8,parameter9=diarydeal.parameter9,parameter10=diarydeal.parameter10)

