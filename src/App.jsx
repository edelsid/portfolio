import Header from './components/ui/header/Header'
import Character from './components/character/Character'
import Stack from './components/stack/Stack'
import Works from './components/works/Works'
import About from './components/about/About'
import Footer from './components/ui/footer/Footer'
import './App.css'

function App() {

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
