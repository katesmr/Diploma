from django.test import TestCase
from sound_store.models import Users


class UsersTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        Users.objects.create(name='test name', email='test email')

    def test_name(self):
        user = Users.objects.get(id=1)
        field = user._meta.get_field('name').verbose_name
        self.assertEquals(field, 'name')

    def test_email(self):
        user = Users.objects.get(id=1)
        # sound_store.Users.email - metadata of the field email
        field = user._meta.get_field('email').verbose_name
        self.assertEquals(field, 'email')

    def test_name_max_length(self):
        user = Users.objects.get(id=1)
        max_length = user._meta.get_field('name').max_length
        self.assertEquals(max_length, 128)

    def test_email_max_length(self):
        user = Users.objects.get(id=1)
        max_length = user._meta.get_field('email').max_length
        self.assertEquals(max_length, 128)
