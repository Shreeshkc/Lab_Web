import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Child1 from './Child1'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Child1 />
 <Child2 data="Hello from App" />
 <Child3 data = 'Hello child3 from App' />  
    </>
  )
}
