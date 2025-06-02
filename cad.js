document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("regEmail").value;
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

    
    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }


    if (localStorage.getItem(email)) {
        alert("Usuário já cadastrado!");
        return;
    }

    const user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");
    
    window.location.href = "./loginpage.html";
});