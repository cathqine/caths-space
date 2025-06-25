import './App.css'
import NavBar from './components/NavBar'
import PersonalProjects from './pages/PersonalProjects'

function App() {
  return (
    <>
      <NavBar />
      <div className='main'>
        <PersonalProjects />
      </div>
    </>
  )
}

export default App
