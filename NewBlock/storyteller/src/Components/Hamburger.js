import { useState } from "react"
import SidepanneOne from "./SidepannelOne";
import SidepannelTwo from "./SidePannelTwo";
import images from "../assets/image.png";
const Hamburger=()=>{
    const[open,setOpen]=useState(false);

    const handleToggle = () => {
       
        setOpen(!open);
      }
     return(
        <div className="Hamburger">
            <div className="Hamburger-Heddeer" onClick={handleToggle}>
            <div className="image" >
            <img src={images}></img>
            </div>
            </div>
        {open?<SidepanneOne/>:<SidepannelTwo/>}
        </div>
     ) 
}
export default Hamburger;