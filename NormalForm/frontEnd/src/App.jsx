import {Routes, Route} from "react-router-dom"
import './App.css'
import Form from './components/Form.jsx'

const App = () => {

  return (
    <div>
      <Routes>

        <Route path='/' element={<Form />} />

      </Routes>
    </div>
  )
}

export default App;
