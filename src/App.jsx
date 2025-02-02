import { useEffect, useState } from 'react'
import Header from './components/ui/header/Header'
import Character from './components/character/Character'
import Stack from './components/stack/Stack'
import Works from './components/works/Works'
import About from './components/about/About'
import Footer from './components/ui/footer/Footer'
import ScrollUpBtn from './components/ui/ScrollUp'
import './App.css'

function App() {
  const [ scrolled, setScrolled ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
        return;
      }
      setScrolled(false);
    }
    document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Character />
        <Stack />
        <Works />
        <About />
        {scrolled && <ScrollUpBtn />}
      </main>
      <Footer />
    </>
  )
}

export default App
