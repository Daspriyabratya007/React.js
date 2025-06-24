const Cards=({data})=>{
    return(
        <div>
            <img src={data?.snippet?.thumbnails?.medium?.url} alt="Tumnail_image" className=" border-gray-200 mx-2 rounded-tr-2xl rounded-br-2xl rounded-tl-2xl rounded-bl-2xl border-0 p-0"></img>
            <h3 className=" text-wrap mx-6 my-1  w-64">{data?.snippet?.title}</h3>
            <h4 className="mx-6 w-64 text-wrap font-medium">{data.snippet.channelTitle}</h4>
            
        </div>
    )
}
export const CardsHOC =({data})=>{
    return(
        <div className="border border-black"> <Cards  data={data}/> </div>
    )
}
export default Cards;