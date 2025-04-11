import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import DummyData from "./MockData/DummyData.json"
function App() {
  console.log(DummyData);
  console.log(DummyData.users);
  return (
   
    <div>
       <div class ="My Line">
      <h1> This is my First ever React Application</h1>
      {
        // Calling the Cards component
      }
      </div>
      {/* <hr></hr> */}
      
      <div className="cards">
      
      {
        DummyData.users!=0?
        DummyData.users.map((item)=>{
          console.log("Hello I'm from MAP: "+item.firstName+" "+item.lastName);
          return <Cards data = {item}/>
        }):<h1 class="NoData">Mo user Details found at this Moment</h1>
      }
      </div>
      
    </div>
  );
}

export default App;