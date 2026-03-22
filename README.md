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
1. 
 - Have Docker Desktop installed
 - Have Git installed

2. Build and start the containers by running:
    "docker compose up --build -d"

3. Sync database by running:
    "docker compose exec web python manage.py migrate

4. Create an admin account by running:
    "docker compose exec web python manage.py createsuperuser"

5. Open "http://localhost:8000/admin/" on a web browser

To start the project: docker compose up -d
To stop it: docker compose down
To add a library: add it to backend/requirements.txt and run docker compose up --build

If you change a model, run the following commands:
    "docker compose exec web python manage.py makemigrations"
    "docker compose exec web python manage.py migrate"