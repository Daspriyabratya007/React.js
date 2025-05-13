const SearchBox=()=>{
    return(
        <div>
            <input className="w-80 border border-x-gray-400 rounded-tl-full rounded-bl-full p-2 ml-[14.5rem] my-4" type="text" placeholder="Search"></input>
            <button className=" border border-gray-200 rounded-tr-full rounded-br-full  bg-gray-300 h-11 p-2">🔍</button>
        </div>
    )
}
export default SearchBox;