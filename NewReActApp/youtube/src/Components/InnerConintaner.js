import ButtonComponent from "./ButtonComponent";
import Cards from "./Cards";
import { useEffect, useState } from 'react';

const InnerConintaner =()=>{
    const[ApiData,setApiData]=useState([]);
     useEffect(()=>{
            fetchData();
        },[]);
        const fetchData=async()=>{
           const response = await fetch ("API_URL");
           const YoutubeResponce = await response.json(); 
           setApiData(YoutubeResponce.items);
        }
    

    return(
        <div className="h-70 w-4/5 bg-slate-300">
             <ButtonComponent/>
             <div className="flex flex-wrap">
               
              {
                ApiData.map((items)=>{
                return(
                     <Cards/>
                )
                })
              }
             </div>
            
           
            
            
        </div>
    )
}
export default InnerConintaner;