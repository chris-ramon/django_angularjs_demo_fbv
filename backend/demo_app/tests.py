from django.core.urlresolvers import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from demo_app.models import Post


class PostTests(APITestCase):
    def test_post_list(self):
        url = reverse('post_list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_create(self):
        url = reverse('post_list')
        data = {'title': 'new post', 'body': 'awesome post'}
        response = self.client.post(url, data=data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_post_get(self):
        Post.objects.create(**{'title': 'new post', 'body': 'awesome post'})
        url = reverse('post_detail', kwargs={'pk': 1})
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.content, '{"id": 1, "title": "new post", "body": "awesome post"}')

    def test_post_update(self):
        Post.objects.create(**{'title': 'new post', 'body': 'awesome post'})
        url = reverse('post_detail', kwargs={'pk': 1})
        data = {'title': 'new post updated', 'body': 'awesome post updated'}
        response = self.client.put(url, data=data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.content, '{"id": 1, "title": "new post updated", "body": "awesome post updated"}')

    def test_post_delete(self):
        Post.objects.create(**{'title': 'new post', 'body': 'awesome post'})
        url = reverse('post_detail', kwargs={'pk': 1})
        response = self.client.delete(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(Post.objects.filter(pk=1).count() == 0)
