import { useState } from 'react'
import styles from './Input.module.css'

export default function Input({ label, type = 'text', value, onChange, error, hint }) {
  const [touched, setTouched] = useState(false)

  const hasValue = value.length > 0
  const showError = touched && hasValue && error
  const showHint  = touched && hasValue && !error && hint

  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputWrap}>
        <input
          type={type}
          value={value}
          placeholder={`Enter your ${label.toLowerCase()}`}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          className={[
            styles.input,
            touched && hasValue && error  ? styles.inputError : '',
            touched && hasValue && !error ? styles.inputValid : '',
          ].join(' ')}
        />

        {touched && hasValue && (
          <span className={`${styles.icon} ${error ? styles.iconError : styles.iconValid}`}>
            {error ? '✗' : '✓'}
          </span>
        )}
      </div>

      {showError && <p className={`${styles.hint} ${styles.hintError}`}>{error}</p>}
      {showHint  && <p className={`${styles.hint} ${styles.hintOk}`}>{hint}</p>}
    </div>
  )
}
