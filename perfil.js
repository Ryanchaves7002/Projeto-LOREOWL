const modal = document.getElementById("userModal");
const closeModalBtn = document.getElementById("closeModal");
const fileInput = document.getElementById("modalFileInput");
const modalProfileImg = document.getElementById("modalProfileImg");
const currentUser2 = localStorage.getItem("currentUser") || "Visitante";
const email = localStorage.getItem("modalUserEmail") || localStorage.getItem("currentUser");
const password = localStorage.getItem("modalUserPassword") || "******";


document.getElementById("modalUserName").textContent = currentUser2;
document.getElementById("modalUserEmail").textContent = email;
document.getElementById("modalUserPassword").textContent = "******";


const userData = localStorage.getItem(email);
if (userData) {
    const user = JSON.parse(userData);
    if (user.profileImage && modalProfileImg) {
        modalProfileImg.src = user.profileImage;
    }
}

document.querySelector("#profileIcon i").addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            modalProfileImg.src = e.target.result;

            const currentEmail = email;
            if (currentEmail) {
                const user = JSON.parse(localStorage.getItem(currentEmail));
                if (user) {
                    user.profileImage = e.target.result;
                    localStorage.setItem(currentEmail, JSON.stringify(user));
                }
            }
        };
        reader.readAsDataURL(file);
    }
});
const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", () => {
    const passwordSpan = document.getElementById("modalUserPassword");
    if (passwordSpan.textContent === "******") {
        passwordSpan.textContent = password;
        togglePassword.textContent = "Ocultar";
    } else {
        passwordSpan.textContent = "******";
        togglePassword.textContent = "Mostrar";
    }
});
