from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('users/', views.get_all_users),
    # path('users/create/', views.create_new_user),
    # path('users/delete/<int:user_id>/', views.delete_user),
    # path('users/update/<int:user_id>/', views.update_user),
    # path('sounds/', views.show_all_user_sounds),
    # path('sounds/create/<str:sound_name>/', views.save_user_sound),
    # path('sounds/delete/<str:sound_name>/', views.remove_user_sound),
    # path('sounds/<str:sound_name>/', views.upload_user_sound),
    path('sounds/download/<str:sound_name>/', views.download_user_sound),
]





