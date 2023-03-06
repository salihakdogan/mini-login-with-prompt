function miniLoginWithPrompt() {
    var name = "Salih";
    var password = "Salih123"

    var firstAnswer = prompt("Username");
    var secondAnswer = prompt("Password?");

    if (firstAnswer == name && secondAnswer == password) {
        window.alert("Login successful");
        document.getElementById("btn-login").style.display = "none";
        document.getElementById("btn-logout").style.display = "block";
    } else {
        if (firstAnswer != name && secondAnswer != password) {
            window.alert("Unknown username & password");

        } else {
            if (firstAnswer != name) {
                window.alert("Unknown username");
            }
            if (secondAnswer != password) {
                window.alert("Unknown password");
            }
        }
    }
}

function logout() {
    document.getElementById("btn-login").style.display = "block";
    document.getElementById("btn-logout").style.display = "none";
}