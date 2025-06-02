
 document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const userData = localStorage.getItem(email);

    if (!userData) {
        alert("Usuário não encontrado!");
        return;
    }
    const usuario = {
        nome: "João",
        email: "joao@email.com"
      };
      
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    const user = JSON.parse(userData); 
    if (user.password === password) {
        localStorage.setItem("currentUser", user.username);
        alert(`Bem-vindo, ${user.username}!`);
        window.location.href = "./usuario.html";
    } else {
        alert("Senha incorreta!");
    }
});