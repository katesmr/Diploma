from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name='main_page'),
    path('user/', views.check_user_active),
    path('sounds/', views.get_all_user_sounds),
    path('sounds/create/<str:sound_name>/', views.save_user_sound),
    path('sounds/delete/<str:sound_name>/', views.remove_user_sound),
    path('sounds/<str:sound_name>/', views.load_user_sound),
    path('sounds/download/<str:sound_name>/', views.load_user_sound),
    path('projects/', views.get_all_user_projects),
    path('projects/<str:project_name>/', views.get_user_project),
    path('projects/create/<str:project_name>/', views.save_user_project),
    path('projects/delete/<str:project_name>/', views.delete_user_project),
    path('projects/update/<str:project_name>/', views.update_user_project),
]
