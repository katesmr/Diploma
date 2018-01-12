from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name="index"),
    path("test/", views.test)
    #path("sound/all/", views.get_all_sounds),
    #path("sound/<int:user_id>/", views.get_sound),
    #path("sound/create/", views.create_new_sound),
    #path("sound/save/", views.get_file),
]
