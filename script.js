document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  let index = 0;

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });

    const pages = document.querySelectorAll('.img-cardapio');
  let current = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.style.zIndex = (pages.length - i); // ordem inversa
      if (i < index) {
        page.classList.add('turn');
      } else {
        page.classList.remove('turn');
      }
    });
  }

  document.querySelector('.flip-next').addEventListener('click', () => {
    if (current < pages.length) {
      current++;
      showPage(current);
    }
  });

  document.querySelector('.flip-prev').addEventListener('click', () => {
    if (current > 0) {
      current--;
      showPage(current);
    }
  });

  // inicia mostrando a primeira página
  showPage(current);
});

document.addEventListener("DOMContentLoaded", () => {

});
