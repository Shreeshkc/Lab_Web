import { useState } from 'react'
import Input from './Input'
import { validators } from '../utils/validators'
import styles from './AuthForm.module.css'

export default function RegisterForm({ onSwitch }) {
  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [confirm,  setConfirm]  = useState('')
  const [success,  setSuccess]  = useState(false)
  const [submitError, setSubmitError] = useState('')

  const nameError    = validators.name(name)
  const emailError   = validators.email(email)
  const passError    = validators.password(password)
  const confirmError = validators.confirm(confirm, password)

  function handleSubmit() {
    setSubmitError('')
    if (!name || !email || !password || !confirm) {
      setSubmitError('Please fill in all fields.')
      return
    }
    if (nameError || emailError || passError || confirmError) {
      setSubmitError('Please fix the errors above.')
      return
    }
    setSuccess(true)
    setName(''); setEmail(''); setPassword(''); setConfirm('')
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <div>
      <h2 className={styles.formTitle}>Create account</h2>
      <p  className={styles.formSub}>Fill in the details below to get started.</p>

      <Input
        label="Full Name"
        value={name}
        onChange={setName}
        error={name ? nameError : ''}
        hint="Looks good!"
      />
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
        onChange={(v) => { setPassword(v) }}
        error={password ? passError : ''}
        hint="Strong enough!"
      />
      <Input
        label="Confirm Password"
        type="password"
        value={confirm}
        onChange={setConfirm}
        error={confirm ? confirmError : ''}
        hint="Passwords match!"
      />

      {submitError && <p className={styles.submitError}>{submitError}</p>}

      <button className={styles.btn} onClick={handleSubmit}>
        Create Account
      </button>

      {success && (
        <p className={styles.successMsg}>✓ Account created! You can now log in.</p>
      )}

      <p className={styles.switchText}>
        Already have one?{' '}
        <button className={styles.switchLink} onClick={onSwitch}>
          Login here
        </button>
      </p>
    </div>
  )
}
