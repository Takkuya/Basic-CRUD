import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/Main"
import { LoginPage } from "./pages/Login"

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}
