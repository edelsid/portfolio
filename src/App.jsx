import Header from './components/ui/header/Header'
import Character from './components/character/Character'
import Stack from './components/stack/Stack'
import Works from './components/works/Works'
import About from './components/about/About'
import Footer from './components/ui/footer/Footer'
import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const size = document.body.getBoundingClientRect();
    document.documentElement.style.setProperty("--doc-height", `${size.height}px`);
    document.documentElement.style.setProperty("--doc-width", `${size.width}px`);
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        <Character />
        <Stack />
        <Works />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
