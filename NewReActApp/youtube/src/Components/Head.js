import HamBurger from "./HamBurger";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import UserIcon from "./UserIcon";
const Head=()=>{
    return(
        <div className="flex  items-center">
            <HamBurger/>
            <Logo/>
            <SearchBox/>
            <UserIcon/>
        </div>
    )
}
export default Head;