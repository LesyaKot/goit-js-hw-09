const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const email = form.email.value;
  const message = form.message.value;
  return { email, message };
}

form.addEventListener('input', event => {
  event.preventDefault();
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(storageKey, jsonData);
});

const rawData = localStorage.getItem(storageKey);
if (rawData) {
  const data = JSON.parse(rawData);
  form.email.value = data.email;
  form.message.value = data.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(readFormData(form));

  localStorage.clear();
  form.reset();
});
