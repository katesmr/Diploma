from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('user/all/', views.show_all_users),
    # path('user/sounds/<int:user_id>/', views.show_user_files),
    # path('user/create/', views.create_new_user),
    # path('user/delete/<int:user_id>/', views.delete_user),
    # path('user/sound/save/<int:user_id>/', views.save_user_file),
    # path('user/sound/remove/<int:user_id>/', views.remove_user_file),
    path('user/sound/upload/<int:user_id>/'),

    # path('test/', views.test),
]





