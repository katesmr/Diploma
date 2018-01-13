from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('user/all/', views.show_all_users),
    path('user/sounds/<int:user_id>/', views.show_all_user_file),
    path('user/create/', views.create_new_user),
    path('user/sound/save/<int:user_id>/', views.save_user_file),

    path('test/', views.test),
]





