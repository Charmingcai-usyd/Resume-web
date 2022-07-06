from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, Http404, JsonResponse
from django.shortcuts import redirect
from django.urls import reverse
from django.views import View
from django.http import HttpResponseRedirect
from . import models
import datetime  # 先导入时间模块


# Create your views here.

def index(request):
    return render(request, "myapp/index.html")


def project(request):
    return render(request, "myapp/my-project.html")


def award(request):
    return render(request, "myapp/my-award.html")


def more_project(request):
    return render(request, "myapp/more-project.html")


def weixin(request):
    return render(request, "myapp/weixin.html")


def LinkedIn(request):
    return render(request, "myapp/LinkedIn.html")


def comment(request):  # 新需求
    messages = models.Message.objects.all()  # 调用数据库全部信息
    print(messages)  # 输出信息
    return render(request, 'myapp/comment.html', {'messages': messages})
    # 返回页面 comment.html
    # 并传递 message 数据库信息


def save(request):  # 保存数据功能
    username = request.POST.get("username")
    title = request.POST.get("title")
    content = request.POST.get("content")
    publish = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    message = models.Message(title=title, content=content, username=username, publish=publish)
    message.save()
    return HttpResponseRedirect('/comment')  # 返回填写数据 comment-text

def test(request): # 测试页面
    return render(request, "myapp/test.html")
