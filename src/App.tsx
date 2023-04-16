import '@/App.scoped.scss'
import './App.scss'
import logo from './logo.svg'
import { useTranslation } from 'react-i18next'

const App = () => {
  const [t] = useTranslation()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('start')}
        </p>
        {process.env.REACT_APP_ENV_NAME}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
