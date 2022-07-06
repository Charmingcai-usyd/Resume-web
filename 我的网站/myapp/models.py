from django.db import models


class Message(models.Model):
    objects = None
    username = models.CharField(max_length=256)
    title = models.CharField(max_length=512)
    content = models.TextField(max_length=256)
    publish = models.DateTimeField()

    # 定义默认输出格式 重写object
    def __str__(self):
        tpl = '<Message:[username={username}, title={title}, content={content}, publish={publish}] '
        return tpl.format(username=self.username, title=self.title, content=self.content, publish=self.publish)

    # 自定义对应的表名，默认表名：myapp_Message
    class Meta:
        db_table = "myapp_Message"
