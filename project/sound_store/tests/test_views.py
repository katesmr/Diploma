from django.test import TestCase
from sound_store.models import Users
from sound_store.views import show_all_users


class ShowAllUsersTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create 13 authors for pagination tests
        count = 6
        for number in range(count):
            Users.objects.create(name='test{}'.format(number), email='email{}'.format(number))

    """def test_view_url_exists(self):
        response = self.client.get('/user/all/')
        self.assertEqual(response.status_code, 200)"""
