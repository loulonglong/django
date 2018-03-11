from app1.models import Comment
from django.db.models import Q

#增加一条评论
def addComment(comment):
    commentid = Comment.objects.create(diaryid=comment.diaryid,comment_user_id=comment.comment_user_id,comment_detail=comment.comment_detail,
                                    comment_time=comment.comment_time).id

#通过 日志id查询对应的
def queryCommentByDiaryId(diaryid):
    userlist = Comment.objects.order_by('-id').filter(diaryid=diaryid)

#通过 日志id查询对应的
def queryCommentnumByDiaryId(diaryid):
    count = Comment.objects.filter(diaryid=diaryid).count()

#通过 日志id查询对应的
def queryCommentlisetByDiaryId(diaryid,start,pagesize):
    fenyecomment = Comment.objects.order_by('-id').filter(diaryid=diaryid)[start:start+pagesize]

#通过评论id查询对应的评论
def queryCommentById(id):
    commentlist=Comment.objects.filter(id = id)

#修改评论
def updateComment(comment):
    Comment.objects.filter(id = comment.id).update(comment.comment_detail,comment.comment_time,comment.zannum,comment.badnum)

#删除评论
def delComment(id):
    Comment.objects.filter(id=id).delete()
