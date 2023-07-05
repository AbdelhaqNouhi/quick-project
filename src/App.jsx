import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Form from "./view/form"
import ErrorPage from "./components/ErrorPage"

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
