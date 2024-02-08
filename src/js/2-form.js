const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const email = form.email.value.trim();
  const message = form.message.value.trim();
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

  if (form.email.value && form.message.value) {
    console.log(readFormData(form));
  } else {
    alert(`Please fill in both fields of the form`);
  }

  localStorage.clear();
  form.reset();
});
