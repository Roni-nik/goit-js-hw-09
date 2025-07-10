
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");



let formData = {
  email: "",
  message: "",
};


fillForm();


form.addEventListener("input", onFeedbeckInput);

function onFeedbeckInput(event) {
    const fieldName = event.target.name;       
    const fieldValue = event.target.value;
  
    formData[fieldName] = fieldValue.trim();   
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }



  function fillForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;
  
    const parsedData = JSON.parse(savedData);
  
    if (parsedData.email) {
      form.elements.email.value = parsedData.email;
      formData.email = parsedData.email;
    }
    if (parsedData.message) {
      form.elements.message.value = parsedData.message;
      formData.message = parsedData.message;
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
  formData.email = "";
  formData.message = "";

}
