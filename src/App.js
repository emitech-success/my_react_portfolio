
import './App.css';
import { About } from './portfolioContainer/AboutMe/About';
import { Contact } from './portfolioContainer/ContactMe/Contact';
import { Footer } from './portfolioContainer/Footer/Footer';
import { Home } from './portfolioContainer/Home/Home';
import { Navbar } from './portfolioContainer/Navbar/Navbar';
import { Stack } from './portfolioContainer/Stack/Stack';
import { WorkExperience } from './portfolioContainer/WorkExperience/WorkExperience';


function App() {
  return (    
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <WorkExperience />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
