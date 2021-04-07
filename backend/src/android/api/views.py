from rest_framework.generics import ListAPIView, CreateAPIView

from android.models import Android
from .serializers import AndroidSerializer


class AndroidListView(ListAPIView):
    queryset = Android.objects.all()
    serializer_class = AndroidSerializer


class AndroidCreateView(CreateAPIView):
    queryset = Android.objects.all()
    serializer_class = AndroidSerializer
