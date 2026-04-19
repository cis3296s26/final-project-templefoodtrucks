import TruckCarousel from "../../components/TruckCarousel";
import { PageMain } from "../../components/PageMain";

import {
  MapPin,
  Clock,
  LucideCircleDollarSign,
  Phone,
  ForkKnife,
  StarIcon,
} from "lucide-react";

export default async function TruckDetailPage({ params }) {
  const { truckDetail } = await params;

  // Fetch the truck details from the backend API
  const baseUrl = process.env.NEXT_PUBLIC_DJANGO_URL || 'http://localhost:8000';
  
  const res = await fetch(`${baseUrl}/foodtrucks/${truckDetail}/`, {
    cache: 'no-store'
  });

  const truck = await res.json();


  if (!truck) {
    return (
      <PageMain>
        <h1 className="text-5xl font-semibold">Food Truck Not Found</h1>
        <hr className="my-10 text-gray-500 w-full"></hr>
        <p className="text-2xl">The food truck does not exist.</p>
      </PageMain>
    );
  }

  const listItems = [
    { icon: MapPin, label: "test" },
    { icon: Clock, label: `${truck.openingTime.slice(0, 5)} - ${truck.closingTime.slice(0, 5)}` },    
    { icon: LucideCircleDollarSign, label: truck.priceRange },    
    { icon: Phone, label: "test" },
    { icon: ForkKnife, label: truck.foodType },    
    { icon: StarIcon, label: "test" },
  ];

  const iconSize = 48;
  const iconColor = "black";

  return (
 <PageMain>
      <h1 className="text-5xl font-semibold">{truck.name}</h1>
      <hr className="my-10 text-gray-500 w-full"></hr>
      <div className="flex flex-row items-center justify-around">
        <h2 className="w-2/3 text-2xl leading-relaxed">
          Welcome to {truck.name}! We specialize in {truck.foodType}. 
          Currently we are {truck.status === 'OPEN' ? 'open for business!' : 'closed.'}
        </h2>
      {/* The Dynamic Image Container */}
        <div className="w-3/12 h-auto border-2 border-black rounded-xl overflow-hidden shadow-lg">
          {truck.image ? (
            <img
              className="w-full h-full object-cover"
              src={truck.image}
              alt={truck.name}
            />
          ) : (
            <div className="bg-amber-800 w-full h-64 flex items-center justify-center text-white italic">
              No Image Available
            </div>
          )}
        </div>
      </div>
      
      <hr className="my-10 text-gray-500 w-full"></hr>
      
      <div className="flex gap-10">
        <div className="flex-1 min-w-0 overflow-hidden rounded-3xl border-2 border-black">
          <TruckCarousel images={truck.gallery_images}/>
        </div>

        <ul className="basis-1/3 flex flex-col justify-start">
          {listItems.map(({ icon: Icon, label }, i) => (
            <li key={i} className="flex items-center gap-6 mb-8 text-4xl">
              <Icon size={iconSize} color={iconColor} className="flex-shrink-0" />
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageMain>
  );
}
