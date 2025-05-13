import SidebarItems from "./SidebarItems.js";
const Sidebar=()=>{
    return(
        <div className="h-60 w-1/5 bg-gray-500">
            <ul>
                <li>
                    Home
                </li>
                <li>
                    News
                </li>
                <li>
                    Sports
                </li>
                <li>
                    Shorts
                </li>
            </ul>
            <SidebarItems/>
        </div>
        
            
            
        
    )
}
export default Sidebar;