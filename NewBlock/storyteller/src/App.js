import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import mockSampleData from "./MockData/DummyData.json"
function App() {
  console.log(mockSampleData);
  console.log(mockSampleData.users);
  return (
    <div>
      <h1> This is my First ever React Application</h1>
      {
        // Calling the Cards component
      }
      <div className="cards">
      
      {
        mockSampleData.users.map((item)=>{
          console.log("Hello I'm from MAP: "+item.firstName+" "+item.lastName);
          return <Cards name={`${item.firstName}${item.lastName}`} 
          imgPath={item.image} username={item.username}
          eyecolor={item.eyeColor}
          age={item.age}
          BloodG={item.bloodGroup}
          />
        })
      }
      </div>
      
    </div>
  );
}

export default App;