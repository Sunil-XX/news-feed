// Search Filter
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".news-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();
    card.style.display = title.includes(query) || desc.includes(query)
      ? "block"
      : "none";
  });
});

// Refresh Animation
document.getElementById("refreshBtn").addEventListener("click", () => {
  document.querySelectorAll(".news-card").forEach(card => {
    card.classList.remove("fade-in");
    void card.offsetWidth; // trigger reflow
    card.classList.add("fade-in");
  });
});
