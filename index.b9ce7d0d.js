!function(){var n=1;$(window).scroll((function(){$("#counter").each((function(){$(this).offset().top<$(window).scrollTop()+400&&n<2&&($(".number").addClass("viz"),$("div").each((function(){var t=1,o=$(this).data("num"),i=2e3/o,a=$(this),c=setInterval((function(){t<=o?a.html(t):(n+=1,clearInterval(c)),t++}),i)})))}))}))}();
//# sourceMappingURL=index.b9ce7d0d.js.map
