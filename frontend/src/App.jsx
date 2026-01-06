import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Router,Routes,Route,Link} from 'react-router-dom'
import LeaderBoard from './Components/LeaderBoard'
import RuleConfig from './Components/RuleConfig'
import RealTimeScores from './Components/RealTimeScores'
import EventIngestion from './Components/EventIngestion'



function App() {

  return (
    <>
    <BrowserRouter>
      <h1>Welcome to LeadZz</h1>

      <nav>
        <Link to="/leaderboard"><button>Leaderboard</button></Link>
        <Link to="/triggerEvents"><button>Trigger Events</button></Link>
       <Link to="/configureRules"><button>Configure Rules</button></Link>
        <Link to="/logs"><button>Logs</button></Link>
      </nav>

      <Routes>
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/triggerEvents" element={<EventIngestion />} />
        <Route path="/configureRules" element={<RuleConfig />} />
        <Route path="/logs" element={<RealTimeScores />} />
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
