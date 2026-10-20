const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");


const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "abcdefghijklmnopqrstuvwxyz" +
  "0123456789" +
  "!@#$%^&*()";

//password length change
lengthInput.addEventListener("input", function () {
  lengthValue.textContent = lengthInput.value;
});

//Generate password
function generatePassword() {
  const length = Number(lengthInput.value);
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

//Generate Button
generateBtn.addEventListener("click", function () {
  const password = generatePassword();
  passwordInput.value=password
  message.textContent=""
});

//copy password
copyBtn.addEventListener("click", function () {
  if (passwordInput.value === "") {
    message.textContent = "Generate Password First";
    return;
  }

  navigator.clipboard.writeText(passwordInput.value);
  message.textContent = "Password Copied";
});