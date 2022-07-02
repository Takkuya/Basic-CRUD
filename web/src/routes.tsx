import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/Main"
import { LoginPage } from "./pages/Login"
import { SignupPage } from "./pages/SignUp"
import { ProfilePage } from "./pages/Profile"
import { Header } from "./components/Header"

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}
