import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Manual from "./pages/Manual"
import Modal_two from "./components/Modal_two"
import Connecting from "./components/Connecting"

function App() {
    return(
        <>

        <BrowserRouter>

        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/manual" element={<Manual/>} /> 
            <Route path="/modal_two" element={<Modal_two/>} /> 
            <Route path="/connecting" element={<Connecting/>} /> 

        </Routes>
        
        </BrowserRouter>
         
      </>
  )
}

export default App
