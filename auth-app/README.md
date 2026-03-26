# Auth App — Login & Register Forms

A clean React app with a custom `Input` component, tab-based login/register forms, and live validation.

## Project Structure

```
auth-app/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx               # Entry point
│   ├── App.jsx                # Root component
│   ├── index.css              # Global styles & CSS variables
│   ├── components/
│   │   ├── AuthForm.jsx       # Tab switcher wrapper
│   │   ├── AuthForm.module.css
│   │   ├── LoginForm.jsx      # Login form
│   │   ├── RegisterForm.jsx   # Register form
│   │   ├── Input.jsx          # Reusable custom Input component
│   │   └── Input.module.css
│   └── utils/
│       └── validators.js      # Validation functions
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser.

## Features

- Custom reusable `Input` component with live validation feedback
- Real-time ✓ / ✗ icons on each field
- Errors only show after the user interacts with a field (touched state)
- Tab switching between Login and Register
- Success message on valid submit
- All validators separated in `utils/validators.js` — easy to extend
