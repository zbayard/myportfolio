import '../App.css';
import Bio from './Bio.js';
import TechList from './TechList.js';
import ProjectList from './ProjectList.js';
import Links from './Links.js';
import Contact from './Contact.js';


function App() {
  return (
    <div className="App">
      
      <h1>App</h1>
      <Bio/>
      <TechList/>
      <ProjectList/>
      <Links/>
      <Contact/>

    </div>
  );
}

export default App;
