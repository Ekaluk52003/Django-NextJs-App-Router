
## Django Next JS(App router)

This repo is created for people who wanna use NextJS 14 with (App router).
NextJS 14 can call Django backend including session authentication

### Clone Repo
```bash
# clone repo
git clone https://github.com/Ekaluk52003/Django_NextJs_app_router.git
cd Django_NextJs_app_router
```
### Start Django
```bash
# Cd to backend
cd backend
# create venv
py -m venv myenv
# Activate myenv
myenv\Scripts\activate
# install python package
pip install -r requirements.txt
# Make migration for SQlite
py manage.py makemigrations
# Don't forget to create user so to test login
py manage.py createsuperuser
# Start Django server
py manage.py runserver

```
### Start NextJs
```bash
# Cd to nextjs
cd nextjs
npm i
npm run dev
```

### Feature

