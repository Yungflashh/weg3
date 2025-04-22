import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Manual from "./pages/Manual"

function App() {
    return(
        <>

        <BrowserRouter>

        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/manual" element={<Manual/>} /> 

        </Routes>
        
        </BrowserRouter>
         
      </>
  )
}

export default App
