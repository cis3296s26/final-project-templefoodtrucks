import ColorChange from "./ColorChange";

export default function SignUpDesign(){
    return(
        <>
        <div className="flex justify-center relative m-4">
            <div className="absolute top-0 left-0">
                <ColorChange/>
            </div>
                <div className="relative bg-blue-500 w-200 h-150 rounded-4xl p-12 shadow-2xl shadow-cyan-500"> {/*Relative allows the circle to be hidden behind the blue box */}
                    <h1 className="font-[Georgia] font-bold text-4xl">Sign Up</h1>
                    <div className="flex flex-wrap justify-center m-2 p-5 gap-7">
                        <div className="bg-white w-120 h-10 rounded-4xl">
                            <input placeholder="Full Name" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <div className="bg-white w-120 h-10 rounded-4xl">
                            <input type="email" placeholder="Email Address" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <div className="bg-white w-120 h-10 rounded-4xl">
                            <input type="password" placeholder="Password" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <div className="bg-white w-120 h-10 rounded-4xl">
                            <input type="password" placeholder="Confirm Password" required className="text-black focus:outline-none flex p-2 w-full"></input>
                        </div>

                        <div className="bg-black w-120 h-15 m-4 p-2 rounded-4xl overflow-hidden">
                            <button className="text-white flex justify-center p-1 w-full hover:bg-white hover:text-black">
                                <p className="font-bold text-3xl">Sign Up</p>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}