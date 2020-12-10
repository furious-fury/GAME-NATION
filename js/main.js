"use strict";

$(window).on("load", function () {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");
});

(function ($) {
  /*------------------
		Navigation
	--------------------*/
  $(".nav-switch").on("click", function (event) {
    $(".main-menu").slideToggle(400);
    event.preventDefault();
  });

  /*------------------
		Background Set
	--------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    mouseDrag: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    autoplay: true,
  });
  var dot = $(".hero-slider .owl-dot");
  dot.each(function () {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this).html("0").append(index);
      $(this).append("<span>.</span>");
    } else {
      $(this).html(index);
      $(this).append("<span>.</span>");
    }
  });

  /*------------------
		News Ticker
	--------------------*/
  $(".news-ticker").marquee({
    duration: 50000,
    //gap in pixels between the tickers
    //gap: 200,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
  });
})(jQuery);

/*------------------
		countdown
  --------------------*/

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}

    var tbody = document.getElementById('row-body')



    const codmRANK = $.getJSON(`data/CODM RANKING.json`, function (data){
      data.map(el => {
    var column1 = document.createElement('td')
    var column2 = document.createElement('td')
    var column3 = document.createElement('td')
    var column4 = document.createElement('td')
    var column5 = document.createElement('td')
    var column6 = document.createElement('td')

     var newtr = document.createElement('tr') 
      tbody.appendChild(newtr).appendChild(column1).innerText = el.ign
      tbody.appendChild(newtr).appendChild(column2).innerText = el.clan
      tbody.appendChild(newtr).appendChild(column3).innerText = el.playerID
      tbody.appendChild(newtr).appendChild(column4).innerText = el.placepoint
      tbody.appendChild(newtr).appendChild(column5).innerText = el.killpoint
      tbody.appendChild(newtr).appendChild(column6).innerText = el.killpoint

      column1.classList.add('column1')
      column2.classList.add('column2')
      column3.classList.add('column3')
      column4.classList.add('column4')
      column5.classList.add('column5')
      column6.classList.add('column6')
        
      });

    });



    $(document).ready(function () {
      if (!$.browser.webkit) {
          $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
      }
  });