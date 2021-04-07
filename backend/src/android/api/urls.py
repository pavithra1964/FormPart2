from django.urls import path

from .views import AndroidListView, AndroidCreateView

urlpatterns = [
    path('', AndroidListView.as_view()),
    path('create/', AndroidCreateView.as_view())
]
