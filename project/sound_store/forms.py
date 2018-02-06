from django import forms
from allauth.account.forms import LoginForm


class SocialNetworkLoginForm(LoginForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['password'].widget = forms.PasswordInput()

