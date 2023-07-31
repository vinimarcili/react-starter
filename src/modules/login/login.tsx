import InputComponent from '@/shared/components/input/input.component'
import './login.scoped.scss'
import ButtonComponent from '@/shared/components/button/button.component'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  return <div className='login'>
    <div className='box'>
      <h4>
        Login
      </h4>
      <form onSubmit={onSubmit}>
        <InputComponent
          name='email'
          id='email'
          value={email}
          onChange={(v) => setEmail(v)}
          onValidate={(v) => setValidEmail(v)}
          label='E-mail'
          type='email'
          placeholder='email@teste.com'
        />
        <ButtonComponent
          type='submit'
          disabled={!validEmail || !email}
          color='pink'
          loading={loading}
        >
          Login
        </ButtonComponent>
      </form>
    </div>
  </div>
}

export default LoginPage