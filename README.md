
## Django Next JS(App router)

This repo is created for people who wanna use NextJS 14 with (App router).
NextJS 14 can call Django backend including session authentication

### Clone Repo
```bash
# clone repo
git clone https://github.com/Ekaluk52003/Django_NextJs_app_router.git
```
### Start Django
```bash
# Cd to backend
cd backend
# create venv
py -m venv myenv
# create venv
myenv\Scripts\activate
# install python package
pip install -r requirements.txt
# Start Django server
py manage.py runserver
# Don't forget to create user so to test login
py manage.py createsuperuser
```
### Start NextJs
```bash
# Cd to nextjs
cd nextjs
npm i
npm run dev
```

### Start Django
