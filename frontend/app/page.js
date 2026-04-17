import Image from 'next/image';

import {PageMain} from './components/PageMain';
import TruckCard from './components/TruckCard';

export default function Home() {
  return (
      <PageMain><h1 className = 'text-5xl font-serif'>Temple Food Trucks! </h1>
      <hr className='my-8 border-t border-gray-300'></hr> <h1> <b>TODO: </b>this page should show open trucks, with links to see all the trucks</h1>
      <h1 className = 'text-4xl font-serif'>Popular Trucks</h1>
      <h1 className='text-1xl font-serif'>Rate Your Favorites!!!</h1>
      <hr className="my-8 border-t border-gray-300" />
      <h1 className='text-4xl font-serif' >Halal Trucks</h1>
      <hr className="my-8 border-t border-gray-300" />
      <h1 className='text-4xl font-serif' >Mexican Trucks</h1>
      <hr className="my-8 border-t border-gray-300" />
      <h1 className='text-4xl font-serif'>Breakfast Trucks</h1>
      <hr className="my-8 border-t border-gray-300" />
      <h1 className='text-4xl font-serif'>Drink/Dessert Trucks</h1>
      <hr className="my-8 border-t border-gray-300" />
      <h1 className='text-4xl font-serif'>Cheap Trucks</h1>
      <h1 className='text-1xl font-serif'>These trucks are typically under $10</h1>
    </PageMain>
    );
}
