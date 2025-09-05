document.addEventListener('DOMContentLoaded', function() {
  const imgs = [
    document.getElementById('voando-cabecalho'),
    document.getElementById('olhando-rodape')
  ];
  imgs.forEach(function(img) {
    if (img) {
      img.addEventListener('mouseenter', function() {
        img.classList.add('balanca');
      });
      img.addEventListener('animationend', function() {
        img.classList.remove('balanca');
      });
    }
  });
});