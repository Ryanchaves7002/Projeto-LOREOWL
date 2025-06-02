let selectedRating = 0;

const stars = document.querySelectorAll("#starRating span");

stars.forEach(star => {
  star.addEventListener("mouseover", () => highlightStars(star.dataset.star));
  star.addEventListener("mouseout", resetStars);
  star.addEventListener("click", () => {
    selectedRating = star.dataset.star;
    updateSelectedStars();
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    star.classList.toggle("hover", star.dataset.star <= rating);
  });
}

function resetStars() {
  stars.forEach(star => star.classList.remove("hover"));
}

function updateSelectedStars() {
  stars.forEach(star => {
    star.classList.toggle("selected", star.dataset.star <= selectedRating);
  });
}

function submitReview() {
  const text = document.getElementById("reviewText").value.trim();
  if (!selectedRating || !text) {
    alert("Por favor, selecione uma nota e escreva um comentário.");
    return;
  }

  const reviewsList = document.getElementById("reviewsList");

  const review = document.createElement("div");
  review.classList.add("review");

  const starRow = document.createElement("div");
  starRow.classList.add("stars");

  for (let i = 0; i < selectedRating; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.style.color = "#8e44ad";
    starRow.appendChild(star);
  }

  const textP = document.createElement("p");
  textP.textContent = text;

  const likes = document.createElement("div");
  likes.className = "likes";
  likes.textContent = "Curtir (0)";
  let count = 0;
  likes.onclick = () => {
    count++;
    likes.textContent = `Curtir (${count})`;
  };

  review.appendChild(starRow);
  review.appendChild(textP);
  review.appendChild(likes);

  reviewsList.prepend(review);

  // Reset
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
  updateSelectedStars();
}
