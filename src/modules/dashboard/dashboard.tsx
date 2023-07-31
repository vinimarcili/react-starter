import { Link } from 'react-router-dom'
import './dashboard.scoped.scss'

const Dashboard = () => {
  return <div className='dashboard'>
    <div className='box'>
      <h5>Bem vindo ao Dashboard</h5>
      <p>
        Essa é o dashboard da aula teste para a Fiap
      </p>
      <Link className='link' to='/'>Voltar</Link>
    </div>
  </div>
}

export default Dashboard