/* Filtro por categoria + "Ver mais" */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = [...document.querySelectorAll(".p-card")];

  // Estado inicial: mostrar 4
  let visible = 4;
  const loadMoreBtn = document.getElementById("loadMore");

  function applyFilter(category) {
    // reseta visíveis ao trocar filtro
    visible = 4;

    cards.forEach(card => {
      const match = category === "all" || card.dataset.category === category;
      card.dataset.match = match ? "1" : "0";
    });

    showCards();
  }

  function showCards() {
    const matching = cards.filter(c => c.dataset.match !== "0");

    matching.forEach((card, i) => {
      card.style.display = i < visible ? "block" : "none";
    });

    // esconder não correspondentes
    cards.filter(c => c.dataset.match === "0").forEach(c => (c.style.display = "none"));

    // controle do botão
    if (visible >= matching.length) {
      if (loadMoreBtn) loadMoreBtn.style.display = "none";
    } else {
      if (loadMoreBtn) loadMoreBtn.style.display = "inline-block";
    }
  }

  // botões
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });

  // ver mais
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      visible += 3;
      showCards();
    });
  }

  // inicial
  cards.forEach(c => (c.dataset.match = "1"));
  showCards();
});
