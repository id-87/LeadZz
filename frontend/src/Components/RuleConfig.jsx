import React from 'react'
import { useState } from 'react'

const RuleConfig = () => {
  const [emailOpen,setEmailOpen]=useState()
  const [pageView,setPageView]=useState()
  const [formSubmission,setFormSubmission]=useState()
  const [demoRequests,setDemoRequests]=useState()
  const [purchasePoints,setPurchasePoints]=useState()
  return (
    <div>
        <form action="submit">
            <label>Email Open Points <input type="text" value={emailOpen} onChange={(e)=>setEmailOpen(e.target.value)}  /></label>
            <br />
            <label>Page View Points <input type="text"  value={pageView} onChange={(e)=>setPageView(e.target.value)} /></label>
            <br />
            <label>Form Submission Points <input type="text" value={formSubmission} onChange={(e)=>setFormSubmission(e.target.value)} /></label>
            <br />
            <label>Demo Request Points <input type="text" value={demoRequests} onChange={(e)=>setDemoRequests(e.target.value)} /></label>
            <br />
            <label>Purchase Points <input type="text" value={purchasePoints} onChange={(e)=>setPurchasePoints(e.target.value)}  /></label>
            <br />
            <button type='submit'> Configure Rules</button>
        </form>
      
    </div>
  )
}

export default RuleConfig
