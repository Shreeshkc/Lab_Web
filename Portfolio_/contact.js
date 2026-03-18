// ─── Char counter ───
const messageInput = document.getElementById('message');
const charCount    = document.getElementById('charCount');
if (messageInput) {
  messageInput.addEventListener('input', () => {
    const len = messageInput.value.length;
    charCount.textContent = `${len} / 500`;
    if (len > 500) charCount.style.color = '#f35';
    else charCount.style.color = '';
  });
}

// ─── Form validation & submit ───
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}
function clearError(id) {
  const el = document.getElementById(id);
  if (el) el.textContent = '';
}
function markField(inputId, hasError) {
  const el = document.getElementById(inputId);
  if (el) el.classList.toggle('error', hasError);
}

function validateForm() {
  let valid = true;

  // Name
  const name = document.getElementById('name').value.trim();
  if (!name) { showError('nameError', 'Please enter your name.'); markField('name', true); valid = false; }
  else { clearError('nameError'); markField('name', false); }

  // Email
  const email = document.getElementById('email').value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) { showError('emailError', 'Please enter your email.'); markField('email', true); valid = false; }
  else if (!emailRe.test(email)) { showError('emailError', 'Please enter a valid email.'); markField('email', true); valid = false; }
  else { clearError('emailError'); markField('email', false); }

  // Subject
  const subject = document.getElementById('subject').value.trim();
  if (!subject) { showError('subjectError', 'Please enter a subject.'); markField('subject', true); valid = false; }
  else { clearError('subjectError'); markField('subject', false); }

  // Message
  const message = document.getElementById('message').value.trim();
  if (!message) { showError('messageError', 'Please write a message.'); markField('message', true); valid = false; }
  else if (message.length > 500) { showError('messageError', 'Message must be under 500 characters.'); markField('message', true); valid = false; }
  else { clearError('messageError'); markField('message', false); }

  return valid;
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate sending
    submitBtn.classList.add('loading');
    submitBtn.querySelector('.submit-text').textContent = 'Sending…';

    setTimeout(() => {
      submitBtn.style.display = 'none';
      formSuccess.classList.add('show');
      form.reset();
      if (charCount) charCount.textContent = '0 / 500';
    }, 1600);
  });

  // Live clear errors on input
  ['name', 'email', 'subject', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => {
      clearError(id + 'Error');
      markField(id, false);
    });
  });
}
