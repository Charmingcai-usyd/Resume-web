from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"), #首页
    path('project', views.project, name="project"), #项目介绍
    path('award', views.award, name="award"),  # 奖项展示
    path('comment', views.comment, name="comment"),  # 留言栏
    path('save', views.save, name="save"),  # 保存
    path('more_project', views.more_project, name="more_project"),  # 更多项目照片
    path('test', views.test, name="test"),  # 测试
    path('weixin', views.weixin, name="weixin"),  # 微信
    path('LinkedIn', views.LinkedIn, name="LinkedIn"),  # 领英
]