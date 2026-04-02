# Temple Food Trucks
In this project, we are going to create a dedicated website that accurately displays information for food
trucks on Temple campus. Most students use google maps to find out information on a truck, but over
half of them are not listed on google maps, nor is the information on them correct. A student has no idea
if the silver halal truck is open longer than the green halal truck. The intended users will be students, staff,
food truck owners, and visitors of Temple campus alike. 

![This is a screenshot.](images.png)
# How to run
Provide here instructions on how to use your application.   
- Download the latest binary from the Release section on the right on GitHub.  
- On the command line uncompress using
```
tar -xzf  
```
- On the command line run with
```
./hello
```
- You will see Hello World! on your terminal. 

# How to contribute
Follow this project board to know the latest status of the project: [http://...]([http://...])  

### How to build
- Use this github repository: ... 
- Specify what branch to use for a more stable release or for cutting edge development.  
- Use InteliJ 11
- Specify additional library to download if needed 
- What file and target to compile and run. 
- What is expected to happen when the app start. 

# Backend Developer Setup
1. Have Docker Desktop installed

2. Build and start the containers by running (if doesn't work use: docker compose restart web):
    "docker compose up --build -d"

3. Sync database by running:
    "docker compose exec web python manage.py migrate"

4. Create an admin account by running:
    "docker compose exec web python manage.py createsuperuser"

5. Open "http://localhost:8000/admin/" on a web browser

To start the project: "docker compose up -d"

To stop it: "docker compose down'"

To add a library: add it to backend/requirements.txt and run docker compose up --build

If you change a model, run the following commands:
    "docker compose exec web python manage.py makemigrations" and 
    "docker compose exec web python manage.py migrate"

If you get "Problem loading page" error in your browser, run "docker compose restart web" 

For Linux users getting "Problem Loading page" 
"docker compose down"
"docker network prune -f"
"docker compose up -d"

# If you ran a bugged version of the migrations (backend):
1. run 'docker compose down -v' (wipes buggy tables)
2. in backend/app/migrations/, DELETE 0001_initial.py (if you haven't pulled from the working branch)
3. Once you run those, then run "git pull origin backend"
4. run 'docker compose up -d'
5. IMPORTANT: WAIT 20 SECONDS
6. run the NEW migrations: docker compose exec web python manage.py migrate
7. create super user: docker compose exec web python manage.py createsuperuser

# If you want to save log data locally
run "docker compose exec web python manage.py dumpdata app --indent 2 > localDataBackup.json"

# If your changes are not updating in the cloud
1. Check what django is speaking to by running
docker compose exec web python manage.py shell -c "from django.conf import settings; print(settings.DATABASES['default']['HOST'])"

2. if it says 'db', .env and settings.py didn't apply properly

3. 