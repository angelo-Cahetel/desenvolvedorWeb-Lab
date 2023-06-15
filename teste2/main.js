function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // verificando as credenciais
    if (username === "usuario" && password === "senha") {
        window.location.href = "teste2/prova.html";
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.")
    }
}