import { useState } from "react"
import Register from "./components/Register"
import Login from "./components/Login"
import Chat from "./components/Chat"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Chat />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
