import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NoPage from './pages/NoPage'
import Layout from './pages/Layout'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

export default function App() {
  return (<div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}