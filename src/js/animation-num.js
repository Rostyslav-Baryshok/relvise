let time = 2,
  cc = 1;
$(window).scroll(function () {
  $('#counter').each(function () {
    let cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 550) {
      if (cc < 2) {
        $('.number').addClass('viz');
        $('div').each(function () {
          let i = 1,
            num = $(this).data('num'),
            step = (1000 * time) / num,
            that = $(this),
            int = setInterval(function () {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 1;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});
