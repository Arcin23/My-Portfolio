import { useState } from 'react'
import styles  from './App.module.css';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Hero } from './Components/Hero/Hero';
import { Experience } from './Components/Experience/Experience';
import { Contact } from './Components/Contact/Contact';
import { Projects } from './Components/Projects/Projects';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.app}>
          <Navbar/>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
    )
}
export default App;
