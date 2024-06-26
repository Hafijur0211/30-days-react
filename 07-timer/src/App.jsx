import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [time, setTime] = useState(10)

  useEffect(()=>{
    if(time>0){
      const timer = setTimeout(()=> setTime(time-1), 1000)
      return ()=>clearTimeout(timer)
    }
  }, [time])
  return (
    <div>
      Time Left : {time} second
    </div>
  )
}

export default App
