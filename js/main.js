$(function(){


    $('.header_btn').on('click', function(){
    $('.rightside-menu').slideToggle();
    });

    $('.rightside-menu_close').on('click', function () {
      $('.rightside-menu').slideToggle('.rightside-menu--active');
  });
    

  });

  $(function(){


    $('.menu-burger').on('click', function(){
    $('.menu_list-burger').slideToggle();
    });

   
    

  });


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 

  });


  var swiper = new Swiper(".mySwipers", {
    slidesPerView: 7,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
   
  });

  var swiper = new Swiper(".mySwiperr", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }


  $(function(){
  $('.menu-burger').click(function(){
  $(this).toggleClass('add')
  });
  });
