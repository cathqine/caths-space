import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div >
      </BrowserRouter>
    </>
  )
}

export default App
