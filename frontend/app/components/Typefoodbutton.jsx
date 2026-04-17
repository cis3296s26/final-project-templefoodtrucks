export function Typefoodbutton({children, onClick}){
    return(
        <button onClick={onClick} className="text-black px-5 py-2 bg-white rounded-2xl cursor-pointer">
            {children}
        </button>
    )
}