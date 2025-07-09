
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = form.querySelector('input[name="email"]');
const textarea = form.querySelector("textarea");


let formData = {
  email: "",
  message: "",
};


fillForm();

email.addEventListener("input", onEmailInput);
textarea.addEventListener("input", onTextareaInput);


function onEmailInput(event) {
  formData.email = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onTextareaInput(event) {
  formData.message = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  const parsedData = JSON.parse(savedData);
  formData = parsedData;

  if (parsedData.email) {
    email.value = parsedData.email;
  }
  if (parsedData.message) {
    textarea.value = parsedData.message;
  }
}

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {
    email: "",
    message: "",
  };
}
