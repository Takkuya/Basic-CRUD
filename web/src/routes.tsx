import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { MainPage } from "./pages/Main"
import { LoginPage } from "./pages/Login"
import { SignupPage } from "./pages/SignUp"
import { ProfilePage } from "./pages/Profile"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { AuthContextProvider } from "./context/auth"

export function MainRoutes() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="flex flex-col h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </div>
      </AuthContextProvider>
    </Router>
  )
}
