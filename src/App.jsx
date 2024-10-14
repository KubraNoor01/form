import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [DataForm, setDataForm] = useState({
  name:'',
  email:'',
  password:'',
  lng:[],
opt:'',

 })

  return (
    <>
      
        { /* <div> `<a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div class="inputfileds">
        <input type="text" placeholder='kubra khan' />
        <input type="email" name="" id="" placeholder='cae@gmail.com'/>
        <input type="password" name="" id="" />
      </div>

<div class="opt">
<select name="" id="">
        <option value="Select" name="opt">Select</option>
          <option value="Lahore" name="opt">Lahore</option>
          <option value="isbd" name="opt">Islamabad</option>
          <option value="Karachi" name="opt">Karachi</option>
          <option value="Multan" name="opt">Multan</option>
</select>
</div>


<div class="checkbox">
<label htmlFor="">languages</label>
<input type="checkbox" id="JS" name="lng" />
<input type="checkbox" id="Python" name="lng" />
<input type="checkbox" id="C++" name="lng" />
</div>
 <button type="button" >Submit</button>


    </>
  )
}

export default App
