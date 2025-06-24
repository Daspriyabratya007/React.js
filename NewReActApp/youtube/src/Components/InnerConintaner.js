import ButtonComponent from "./ButtonComponent";
import Cards, { CardsHOC } from "./Cards";
import { useEffect, useState } from "react";
import { API_URI_YT } from "../Utils/Constant";
import Shimmer from "./Shimmer";


const InnerConintaner = () => {
  const [ApiData, setApiData] = useState([]);
  useEffect(() => {
    getApiData();
  }, []);
  const getApiData = async ()=> {
    const response = await fetch(API_URI_YT);
    const YoutubeResponce = await response.json();
    setApiData(YoutubeResponce.items);
  };
 if(ApiData.length===0) return<Shimmer/>
  return (
    <div className="h-70 w-4/5 bg-slate-300">
      <ButtonComponent />
      <div className="flex flex-wrap">
      {/* {ApiData.length?<CardsHOC data={ApiData[0]}/>:""} */}
      {ApiData.length && <CardsHOC data={ApiData[0]}/>}
        {ApiData.map((items) => {
          return <Cards data = {items} key={items.id}/>;
        })}
      </div>
    </div>
  );
};
export default InnerConintaner;
