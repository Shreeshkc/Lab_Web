export const validators = {
  name: (v) =>
    v.trim().length < 2 ? 'Name must be at least 2 characters.' : '',

  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
      ? ''
      : 'Please enter a valid email address.',

  password: (v) =>
    v.length < 6 ? 'Password must be at least 6 characters.' : '',

  confirm: (v, password) =>
    v !== password ? 'Passwords do not match.' : '',
}
