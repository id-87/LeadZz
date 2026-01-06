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
        <button><Link to="/leaderboard">Leaderboard</Link></button>
        <button><Link to="/triggerEvents">Trigger Events</Link></button>
        <button><Link to="/configureRules">Configure Rules</Link></button>
        <button><Link to="/logs">Logs</Link></button>
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
