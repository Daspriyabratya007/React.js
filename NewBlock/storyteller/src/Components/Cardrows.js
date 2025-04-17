import Cards from './Cards';
import { useEffect, useState } from 'react';
import Simmer from './Simmer';
const Cardrows=()=>{
    const[mockSampleApiData,setMockSampleApiData]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        try{
        const collection= await fetch ("https://dummyjson.com/users");
        const data =await collection.json();
        setMockSampleApiData(data);
        }
        catch(err){
            console.log(err);
        }
    }
   
    if(mockSampleApiData===null)return <Simmer/>
return(
    <div className="cards">
      
      {
        mockSampleApiData.users.length?
        mockSampleApiData.users.map((item)=>{
          // console.log("Hello I'm from MAP: "+item.firstName+" "+item.lastName);     
          return <Cards key={item.id}data = {item}/>
        }):<h1 className="NoData">Mo user Details found at this Moment</h1>
      }
      </div>
)
}
export  default Cardrows;