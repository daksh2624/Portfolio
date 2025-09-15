import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Marvel from './components/Marvel'
import Friends from './components/Friends'
import Food from './components/Food'
import Connect from './components/Connect'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-x-auto overflow-y-hidden horizontal-scroll">
        <div className="flex flex-nowrap h-full">
          <Home />
          <Marvel />
          <Friends />
          <Food />
          <Connect />
        </div>
      </div>
    </div>
  )
}

export default App
