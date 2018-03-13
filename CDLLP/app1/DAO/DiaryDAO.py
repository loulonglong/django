from app1.models import Diary
from app1.models import More
from app1.models import Qun
from app1.models import Userqun
from django.db.models import Q

#写日志 有图像
def addDiary(diary):
    diaryid = Diary.objects.create(serial=diary.serial,diarytype=diary.Diarytype,state=diary.state,userid=diary.userid,
                                   qunid=diary.qunid,type=diary.type,content=diary.content,date=diary.date,time=diary.time,
                                   imgone=diary.imgone,imgtwo=diary.imgtwo,imgthree=diary.imgthree,imgfour=diary.imgfour,imgfive=diary.imgfive,imgsix=diary.imgsix,
                                   imgseven=diary.imgseven,imgeight=diary.imgeight,imgnine=diary.imgnine,urlpath=diary.urlpath,urltitle=diary.urltitle,
                                   urlcontent=diary.urlcontent,videourl=diary.videourl,money=diary.money).id

#删除日记
def deleteDiary(id):
    Diary.objects.filter(id=id).delete()

#根据日记ID查询日志
def selectDiary(id):
    diarylist=Diary.objects.filter(id=id)

#根据日记serial查询日志
def selectDiaryforSerial(serial):
    diaryseriallist = Diary.objects.filter(serial=serial)

#根据当天日期查询所有日记条数
def selectdealDiaryfordealid(date,qunid):
    count=Diary.objects.filter(date = date,qunid=qunid).count()

#分页查询所有用户日记
def selectDiarys(date,start,pagesize):
    fenyediarylist=Diary.objects.filter(date_lte=1,date__gte=0)[start:start+pagesize]

#根据用户id查询所有日志条数
def selectDiarynumforuserid(userid):
    count1=Diary.objects.filter(userid=userid).count()

#根据用户id查询该用户的所有日志 按照分页
def selectdiarysforuser(userid,start,pagesize):
    fenyeuserdiarylist=Diary.objects.order_by('-id').filter(userid=userid)[start:start+pagesize]

#根据用户id查询该用户的所有日志
def selectallDiaryforuserid(userid):
    userdiarylist=Diary.objects.filter(userid=userid)

#根据用户id群id查询该用户的所有日志 按照分页
def selectdiarysforuserqun(diary):
    qunuseridlist = Diary.objects.order_by('-id').filter(userid=diary.userid,qunid=diary.qunid)[diary.start:diary.start+diary.pagesize]

#根据用户id群id查询该用户的所有日志
def selectallDiarysforUserqun(userid,qunid):
    uqdiarylist = Diary.objects.filter(userid=userid,qunid=qunid)

#根据用户id群id日志类型查询该用户的所有日志 安照分页
def selectdiarysforuserquntype(diary):
    list = Diary.objects.order_by('-id').filter(userid=diary.userid,qunid=diary.qunid,type=diary.type)[diary.start:diary.start+diary.pagesize]

#根据群id查询所有日志条数
def selectDiarynumforQunid(qunid):
    count = Diary.objects.filter(qunid=qunid).count()

#根据群id查询所有日志 安照分页   按id倒叙查询  尾部是0开始
def selectdiarysforqun(diary):
    list = Diary.objects.order_by('-date','-time').filter(qunid=diary.qunid)[diary.start:diary.start+diary.pagesize]
#需要测试正确性

#根据群id分页查询所有带有图片的日志
def selectimgdiarysforqun(page):
    list = Diary.objects.order_by('-id').filter(Q(qunid=page.qunid)&~Q(imgone=''))[page.start:page.start+page.pagesize]

#根据用户id分页查询所有带有图片的日志
def selectimgDiarysforuser(userid,start,pagesize):
    list = Diary.objects.order_by('-id').filter(Q(userid=userid) & ~Q(imgone=''))[start:start + pagesize]

#根据群id查询和日志类型所有日志 安照分页   按id倒叙查询  尾部是0开始
def selectdiarysforqundiarytype(page):
    list = Diary.objects.order_by('-id').filter(qunid=page.diary.qunid,type=page.diary.type)[page.start:page.start+page.pagesize]

#根据群id查询所有日志
def selectdiarysforqunid(qunid):
    list = Diary.objects.order_by('-id').filter(qunid=qunid)

#查询我的公共平台日志数目
def selectggDiarynumforuserid(userid):
    count = Diary.objects.filter(userid=userid,qunid=0)

#查询我的公共平台日志 安照分页
def selectggDiaryforuser(userid,start,pagesize):
    list = Diary.objects.order_by('-id').filter(userid=userid,qunid=0)[start:start+pagesize]

#查询所有日志数目
def selectallDiarynum():
    count = Diary.objects.all().count()

def selectalldiary(page):
    print()
#查询所有日志 安照分页,这里不会写
'''<!-- 查询所有日志 安照分页 -->
	<select id="selectallDiary" parameterType="com.lp.app.entity.PageForId" resultType="com.lp.app.entity.Diary">
		{call getallDiary(#{Qunid, jdbcType=INTEGER}, #{userid, jdbcType=VARCHAR}, #{QunDiarytype, jdbcType=INTEGER},
		#{filtertype, jdbcType=INTEGER},#{field, jdbcType=INTEGER},#{keystr1, jdbcType=INTEGER},#{keystr2, jdbcType=INTEGER},
		 #{start, jdbcType=INTEGER}, #{pageSize, jdbcType=INTEGER})}
	</select>
'''

#查询指定类型日志 安照分页
def selectalldiarysfordiarytype(page):
    list = Diary.objects.order_by('-id').filter(type=page.type)[page.start:page.start+page.pagesize]

#搜索日志  分页
def sousuodiary(page):
    list = Diary.objects.order_by('-id').filter(content__contains=page.keystr1)[page.start:page.start+page.pagesize]

#搜索用户日志  分页
def sousuouserdiary(page):
    list = Diary.objects.order_by('-id').filter(content__contains=page.keystr1,userid=page.userid)[page.start:page.start + page.pagesize]

#搜索群日志  分页
def sousuoqundiaryforcontent(page):
    list = Diary.objects.order_by('-id').filter(content__contains=page.keystr1, qunid=page.qunid)[page.start:page.start + page.pagesize]

#搜索群日志  分页
def sousuoqundiaryfortitle(page):
    list = Diary.objects.order_by('-id').filter(urltitle_contains=page.keystr1,qunid=page.qunid)[page.start:page.start+page.pagesize]

def selectfilterdiary(page):
    print()
'''
<!-- 筛选查询日志-->
	<select id="selectfilterDiary" parameterType="com.lp.app.entity.PageForId" resultType="com.lp.app.entity.Diary">
		{call filter_Diary(#{filter1, jdbcType=INTEGER}, #{filter2, jdbcType=VARCHAR}, #{filter3, jdbcType=INTEGER},
		 #{start, jdbcType=INTEGER}, #{pageSize, jdbcType=INTEGER})} 
	</select>
'''

#查询关注的用户  群的日志 安照分页
def selectguanzhudiary(page):
    list1 = More.objects.filter(userid_source=page.more.userid_source,deal=page.more.deal).values('qunid_destination')
    list = Diary.objects.order_by('-id').filter(diarytype_in=(0,1,2,3),qunid_in=list1)[page.start:page.start+page.pagesize]

#根据用户id  群用途类型查询日志
def selectdiarysforuserqunuse(page):
    list1 = Qun.objects.filter(userid=page.userid, qunusetype=page.qunusetype).values('id')
    list = Diary.objects.order_by('-id').filter(qunid_in=list1)[page.start:page.start + page.pagesize]

#查询用户所有群下所有日志
def queryallqundiary(page):
    list1 = Userqun.objects.filter(userid=page.userid).values('Qunid')
    list = Diary.objects.order_by('-id').filter(qunid_in=list1)[page.start:page.start + page.pagesize]

#更新日记
def updatediary(diary):
    Diary.objects.filter(id=diary.id).update(serial=diary.serial,Diarytype=diary.diarytype,state=diary.state,content=diary.content,time=diary.time,
                                              date=diary.date,imgone=diary.imgone,imgtwo=diary.imgtwo,imgthree=diary.imgthree,imgfour=diary.imgfour,
                                              imgfive=diary.imgfive,imgsix=diary.imgsix,imgseven=diary.imgseven,imgeight=diary.imgeight,imgnine=diary.imgnine,
                                              urlpath=diary.urlpath,urltitle=diary.urltitle,urlcontent=diary.urlcontent,videourl=diary.videourl,
                                              money=diary.money,commentnum=diary.commentnum,shoucangnum=diary.shoucangnum,zannum=diary.zannum,tuijiannum=diary.tuijiannum,
                                              Qunid=diary.Qunid,type=diary.type)

#更新日记id
def updatediaryid(id):
    diary1 = Diary.objects.get(id=id)
    Diary.objects.filter(id=id).delete()
    if diary1:
       addDiary(diary1)

#解散群组时更改日志信息
def updatediaryforqunid(diary):
    Diary.objects.filter(qunid=diary.qunid).update(state=diary.state,qunid=0,type=diary.type)

#退出或踢出用户时更改日志状态
def updatediaryforqunuser(diary):
    Diary.objects.filter(qunid=diary.qunid,userid=diary.userid).update(state=diary.state,qunid=0,type=diary.type)
