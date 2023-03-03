import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { merge } from 'lodash-es'

function App() {
  const [value, setValue] = useState({
    a: {
      b: {
        c: 1,
        d: 0,
      },
      c: 2,
    },
  })

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          onClick={() =>
            setValue(prevValue =>
              merge({}, prevValue, {
                a: { b: { c: prevValue.a.b.c + 1 } },
              }),
            )
          }
        >
          count is {value.a.b.c}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
