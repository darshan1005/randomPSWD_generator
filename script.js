const pswd = document.getElementById('Password');
const lengths = document.getElementById('lengths');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lowerCase = "abcefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]><//-=";

const allChars = upperCase + lowerCase + number + symbols;

let length = lengths.value;

lengths.addEventListener('change', (e)=>{
    length = e.target.value;
});

function createPSWD() {

    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    pswd.value = password;
}

function copy() {
    var copyText = document.getElementById('Password');

    copyText.select();
    copyText.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(copyText.value);
}
