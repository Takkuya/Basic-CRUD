import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/Main"
import { LoginPage } from "./pages/Login"
import { SignupPage } from "./pages/SignUp"

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
}
