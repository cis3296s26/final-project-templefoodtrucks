# Python 3.12 image
FROM python:3.12-slim

# Install GIS libraries
RUN apt-get update && apt-get install -y \
    binutils \
    libproj-dev \
    gdal-bin \
    libgdal-dev \
    python3-gdal \
    postgis \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Python dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# If there is an error when running the server, it might be because of the port :8000
CMD ["python", "manage.py", "runserver", "0.0.0.:8000"]