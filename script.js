const passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_";

const allCharacters = uppercase + lowercase + numbers + symbols;

function generatePassword(){
  passwordBox.value = "";
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while(password.length < length){
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
}

function copyPassword(){
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard: " + passwordBox.value);
  passwordBox.value = "";

}

function submitPassword(){
  if(passwordBox.value){
    const masked = "*".repeat(passwordBox.value.length);
    alert("Password submitted: " + masked);
    passwordBox.value = "";
  } else {
    alert("Please generate a password before submitting.");
  }
}

