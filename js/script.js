(function(){
  //Suppression des boucles 'while' bloquantes (2000ms et 1000ms) et du calcul 'waste'
  window.addEventListener('load', function(){
    const imgs = document.querySelectorAll('.card img');
    imgs.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', ()=> img.classList.add('loaded'));
      }
    });
  });
})();