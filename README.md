# Temple Food Trucks
In this project, we are going to create a dedicated website that accurately displays information for food
trucks on Temple campus. Most students use google maps to find out information on a truck, but over
half of them are not listed on google maps, nor is the information on them correct. A student has no idea
if the silver halal truck is open longer than the green halal truck. The intended users will be students, staff,
food truck owners, and visitors of Temple campus alike. 

<img width="800" height="450" alt="2026-04-2719-33-13-ezgif com-video-to-gif-converter(1)" src="https://github.com/user-attachments/assets/1a92a827-16e6-45f1-8e50-1a96ed1e8072" />

# Local Development Setup
1. Have Docker & Docker Compose installed
2. Have Git installed
3. Have WSL2 (windows users only)
4. Clone the repo:

    git clone https://github.com/cis3296s26/Temple-Food-Trucks
    cd Temple-Food-Trucks

5. Create a .env file in the root directory of the project
6. Copy and paste the following into the .env file, replace entries as needed
'''
# Environment Variables
    SECRET_KEY=your_local_secret_key_here
    DEBUG=True
    
    # Database
    DATABASE_URL=postgres://user:password@db:5432/foodtruckDB
    
    # Cloudinary (Image Storage, create Cloudinary account and setup the following keys if desired)
    CLOUDINARY_CLOUD_NAME=your_name
    CLOUDINARY_API_KEY=your_key
    CLOUDINARY_API_SECRET=your_secret
        
    # URLs
    FRONTEND_URL=http://localhost:3000
    ALLOWED_HOSTS=localhost,127.0.0.1
    CORS_ALLOWED_ORIGINS=http://localhost:3000
'''
8. Build and start containers by running:

    docker compose up --build

9. Initialize database by running:

    docker compose exec web python manage.py makemigrations
    docker compose exec web python manage.py migrate

10. Create admin account:

    docker compose exec web python manage.py createsuperuser

11. This app uses QR codes and tokens to be able to register, here is the command to run in the root directory to generate a QR code and register token:

    docker compose exec web python makeQR.py

12. Urls to access the app:
    Backend API: localhost:8000/foodtrucks/
    Django admin: localhost:8000/admin/


# FRONT END DEVELOPMENT: 

Next, cd into the frontend directory, run the command:
    
    npm run dev

Visit this url for frontend testing:

    localhost:3000

# Container Commands

To run containers after building, run:
    
    docker compose up -d

To stop containers, run:

    docker compose down

# If you ran a bugged version of the migrations (backend):
1. run 'docker compose down -v' (wipes buggy tables)
2. in backend/app/migrations/, DELETE 0001_initial.py, 0002_*, 0003_*, 
3. Once you run those, then run "git pull origin <working branch>"
4. run 'docker compose up --build -d'
5. IMPORTANT: WAIT 20 SECONDS
6. run: docker compose exec web python manage.py makemigrations
7. run the NEW migrations: docker compose exec web python manage.py migrate
8. create super user: docker compose exec web python manage.py createsuperuser

# If you want to save log data locally
run "docker compose exec web python manage.py dumpdata app --indent 2 > localDataBackup.json"

# If your changes are not updating in the cloud
1. Check what django is speaking to by running

    docker compose exec web python manage.py shell -c "from django.conf import settings; print(settings.DATABASES['default']['HOST'])"

2. if it says 'db', .env and settings.py didn't apply properly

3. make sure your .env file's DATABASE_URL is pointing to the Neon link

4. Make sure settings.py DATABASES points to the .env file's DATABASE_URL

# To create a login JWT token

    docker compose exec web python manage.py shell -c "from django.core.signing import TimestampSigner; print(TimestampSigner(salt='signup-salt').sign(''))"

# To create a QR code
    docker compose exec web python makeQR.py
