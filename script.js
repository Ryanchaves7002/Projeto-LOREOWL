
function openBookPage(title, author, price, img) {
    window.location.href = `livro.html?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(img)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    if (localStorage.getItem('user')) {
        logoutBtn.style.display = 'inline';
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('user');
            window.location.reload();
        });
    }
});

// Login Simples (para loginpage.html)
function login() {
    const user = document.getElementById('username').value;
    localStorage.setItem('user', user);
    window.location.href = 'index.html';
}
