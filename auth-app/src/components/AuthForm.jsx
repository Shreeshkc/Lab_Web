import { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import styles from './AuthForm.module.css'

export default function AuthForm() {
  const [tab, setTab] = useState('login') // 'login' | 'register'

  return (
    <div className={styles.page}>
      <div className={styles.card}>

        {/* Logo / Brand */}
        <div className={styles.brand}>Portfolio</div>

        {/* Tab switcher */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'login' ? styles.tabActive : ''}`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={`${styles.tab} ${tab === 'register' ? styles.tabActive : ''}`}
            onClick={() => setTab('register')}
          >
            Register
          </button>
        </div>

        {/* Active form */}
        {tab === 'login'
          ? <LoginForm    onSwitch={() => setTab('register')} />
          : <RegisterForm onSwitch={() => setTab('login')} />
        }

      </div>
    </div>
  )
}
