import {
    Truck
} from 'lucide-react'

export default function TruckAnimation({ className }){
    return(
        <>
        <div className='relative animate-pulse pointer-events-none'>
            <Truck color='white' className={`absolute w-25 h-80 top-115 left-2 ${className}`}></Truck>    {/*if you want stand alone bounce animation in tailwind -->  animate-[bounce_1.5s_ease-in-out_infinite] */}
        </div>
        {/* <div className='relative'>
            <p className='absolute top-65 left-90 animate-[ping_4.5s_cubic-bezier(0.4,0,0.2,1)_infinite]'>Temple Food Truck</p>
        </div> */}
        </>
    )
}
