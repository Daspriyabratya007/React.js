import './App.css';
import Counter from './Components/Counter';
import Cardrows from './Components/Cardrows';
import Accordion from './Components/Accordian';
import Hamburger from './Components/Hamburger';
 function App(){
return (
    <div>
      <h1> This is my First ever React Application</h1>
      <Counter/>
      <Hamburger/>
      <Accordion/>
      <Cardrows/>
      </div>
  );
}

export default App;