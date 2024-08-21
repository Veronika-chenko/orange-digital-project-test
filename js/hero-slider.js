(() => {
  new Swiper('.hero-swiper-container', {
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function (_, current, total) {
        return `<span>${getNumber(current)}</span><span>${getNumber(
          total
        )}</span>`;
      },
    },
    slidesPerView: 1,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  function getNumber(num) {
    return num.toString().length === 1 ? '0' + num : num;
  }
})();
