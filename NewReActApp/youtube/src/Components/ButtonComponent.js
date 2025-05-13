const ButtonComponent=()=>{
    const btnContent=['All','Gaming','Valorant','Music','React','Live','Computer hardware'];
    return(
        <div>
           {btnContent.map((items)=>{
            return(
             <button className="bg-gray-500 h-auto w-auto p-3 rounded-xl mx-3 mx-2 text-white ">{items}</button>
            )
        })}
           
        </div>
    )
}
export default ButtonComponent;