let t=1;$(window).scroll((function(){$("#counter").each((function(){$(this).offset().top<$(window).scrollTop()+550&&t<2&&($(".number").addClass("viz"),$("div").each((function(){let n=1,e=$(this).data("num"),o=2e3/e,i=$(this),l=setInterval((function(){n<=e?i.html(n):(t+=1,clearInterval(l)),n++}),o)})))}))}));
//# sourceMappingURL=index.3ae66062.js.map
