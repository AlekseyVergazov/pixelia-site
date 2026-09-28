// Pixelia — немного JS. Сайт полностью работает и без него.

// Анимация свайпа идёт, только пока её видно на экране: так телефон не тратит батарею зря.
(function () {
  var demo = document.querySelector(".demo");
  if (!demo || !("IntersectionObserver" in window)) return;

  new IntersectionObserver(function (entries) {
    demo.classList.toggle("is-paused", !entries[0].isIntersecting);
  }).observe(demo);
})();
