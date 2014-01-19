# CRUD Demo app

Simple demo app how to integrate Django + AngularJS using Django Rest Framework
and function based views.

### Running backend
``` bash
git clone git@github.com:chris-ramon/django_angularjs_demo_fbv.git

cd django_angularjs_demo_fbv/backend/
virtualenv demo_app
source demo_app/bin/activate
pip install -r requirements.txt
./manage.py runserver

```

### Running frontend
``` bash
cd django_angularjs_demo_fbv/frontend/
npm install
bower install
grunt serve

```
