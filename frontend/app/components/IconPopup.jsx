export default function IconPopup({value}){
    return(
        <div>
            <div className="text-2/12 font-serif p-6">
                <p><em> {/* this is the place for the actual address*/}
                    {value}
                </em></p> 
            </div>
        </div>
    )
}