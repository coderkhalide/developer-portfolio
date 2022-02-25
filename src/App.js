import Loader from './components/Loader'
import Nav from './components/Nav';
import Masthead from './components/Masthead';
import About from './components/About';
import Scrollbar from './components/Scrollbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { useState, useEffect } from 'react';

function App() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <Nav {...resumeData?.main} />
      <div id="pagepiling">
        <Masthead {...resumeData?.main} />
        <About {...resumeData?.about} />
        <Experience />
        <Skills />
        <Projects />
        <Partners />
        <Testimonials />
        <News />
        <Contact />
      </div>
      <Scrollbar />
    </>
  );
}

export default App;
