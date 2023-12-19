let emailPhoneValid = false;
let nameFieldValid = false;

const emailButton = document.getElementById("email_btn");
const phoneButton = document.getElementById("phone_btn");
const emailPhoneField = document.getElementById("email_phone_field");
const nameField = document.getElementById("name");
const sendButton = document.getElementById("send_btn");


emailButton.addEventListener("click", function() {
  if (emailButton.checked) {
    emailPhoneField.setAttribute("type", "email");
    emailPhoneField.setAttribute("placeholder", "* E-mail");
  }
  isFormValid();
})

phoneButton.addEventListener("click", function(){
  if (phoneButton.checked) {
    emailPhoneField.setAttribute("type", "tel");
    emailPhoneField.setAttribute("placeholder", "* Номер Вашего телефона");
  }
  isFormValid();
})

emailPhoneField.addEventListener("change", function() {
  if (emailPhoneField.validity.valid) {
    if (!emailPhoneField.validity.valueMissing) {
      emailPhoneValid = true;
    } else emailPhoneValid = false;
  } else emailPhoneValid = false;
  isFormValid();
});
nameField.addEventListener("change", function() {
  if (!nameField.validity.valueMissing) {
    nameFieldValid = true;
  } else nameFieldValid = false;
  isFormValid();
})

function isFormValid () {
  if (emailPhoneValid && nameFieldValid) {
    sendButton.disabled = false;
  } else sendButton.disabled = true;
}