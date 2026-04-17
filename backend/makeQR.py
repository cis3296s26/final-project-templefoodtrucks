import os
import django
import sys
from django.core.signing import TimestampSigner
import qrcode

# Debug statement
print(f"CWD: {os.getcwd()}", flush=True)

sys.path.append(os.getcwd())

# Django environment to access environment variables
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Function that generates the QR code for truck owners
def generate_owner_qr():
    # Used a try catch block because this wasn't working on Linux for some reason
    try: 
        print(f"Inside try block now.", flush=True)
        # Setup Django
        django.setup()
        
        signer = TimestampSigner()
        token = signer.sign('')
        
        # Construct URL for frontend
        signup_url = f"http://localhost:3000/signup?token={token}"

        # Generate QR code
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        # Add the url to the QR code
        qr.add_data(signup_url)
        qr.make(fit=True)

        # Make the image
        img = qr.make_image(fill_color="black", back_color="white")
        img.save("owner_signup_qr.png")
        
        print(f"QR Code successfully generated for: {signup_url}", flush=True)
        print("Saved as: owner_signup_qr.png", flush=True)
    except Exception as e:
        print(f"Error with QR generation: {e}", flush=True)

if __name__ == "__main__":
    generate_owner_qr()