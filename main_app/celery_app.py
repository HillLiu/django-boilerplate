import os
from celery import Celery
from django.conf import settings

app = Celery('main_app')
app.config_from_object('django.conf:settings')
app.config_from_object('main_app.celeryconfig')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))
