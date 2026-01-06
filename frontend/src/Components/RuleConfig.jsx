import React from 'react'

const RuleConfig = () => {
  return (
    <div>
        <form action="submit">
            <label>Email Open Points <input type="text"  /></label>
            <br />
            <label>Page View Points <input type="text"  /></label>
            <br />
            <label>Form Submission Points <input type="text"  /></label>
            <br />
            <label>Demo Request Points <input type="text"  /></label>
            <br />
            <label>Purchase Points <input type="text"  /></label>
            <br />
            <button type='submit'> Configure Rules</button>
        </form>
      
    </div>
  )
}

export default RuleConfig
