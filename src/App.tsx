import '@/App.scoped.scss'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './modules/login/login'
import Dashboard from './modules/dashboard/dashboard'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
