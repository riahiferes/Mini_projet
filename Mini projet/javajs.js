function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementsByName('email')[0].value;
    var nameRegex = /^[A-Za-z]+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@(esprit\.tn|gmail\.com)$/;

    if (!nameRegex.test(name)) {
        alert('Veuillez saisir un nom valide (lettres uniquement).');
        return false; 
    }
    if (!emailRegex.test(email)) {
        alert('Veuillez saisir une adresse email valide se terminant par @esprit.tn ou @gmail.com.');
        return false; 
    }

    return true; 
}
var submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', function (event) {
    if (!validateForm()) {
        event.preventDefault(); 
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });
});

Gmail
