import { useState } from 'react'
import Input from './Input'
import { validators } from '../utils/validators'
import styles from './AuthForm.module.css'

export default function LoginForm({ onSwitch }) {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [success,  setSuccess]  = useState(false)
  const [submitError, setSubmitError] = useState('')

  const emailError = validators.email(email)
  const passError  = validators.password(password)

  function handleSubmit() {
    setSubmitError('')
    if (!email || !password) {
      setSubmitError('Please fill in all fields.')
      return
    }
    if (emailError || passError) {
      setSubmitError('Please fix the errors above.')
      return
    }
    setSuccess(true)
    setEmail('')
    setPassword('')
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <div>
      <h2 className={styles.formTitle}>Welcome back</h2>
      <p  className={styles.formSub}>Sign in to your account to continue.</p>

      <Input
        label="Email"
        type="text"
        value={email}
        onChange={setEmail}
        error={email ? emailError : ''}
        hint="Looks good!"
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        error={password ? passError : ''}
        hint="Strong enough!"
      />

      {submitError && <p className={styles.submitError}>{submitError}</p>}

      <button className={styles.btn} onClick={handleSubmit}>
        Login
      </button>

      {success && (
        <p className={styles.successMsg}>✓ Logged in successfully!</p>
      )}

      <p className={styles.switchText}>
        No account?{' '}
        <button className={styles.switchLink} onClick={onSwitch}>
          Register here
        </button>
      </p>
    </div>
  )
}
