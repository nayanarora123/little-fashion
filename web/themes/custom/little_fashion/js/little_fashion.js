/**
 * @file
 * Little fashion behaviors.
 */
(function (Drupal, $) {

  'use strict';

  Drupal.behaviors.little_fashion = {
    attach: function (context, settings) {
      
      // Preloader      
      if ($(once('preloader', '.preloader', context)).length) {
        $(window).on('load', function () {
          $('.preloader').delay(500).slideUp('slow'); // Adjust the duration as needed
        });
      }

      // Navbar headroom
      if ($(once('navbar', '.navbar', context)).length) {
        $(".navbar").headroom();
      }

      // // Collapse navbar on link click      
      if ($(once('navbar-collapse-click', '.navbar-collapse a', context)).length) {
        $('.navbar-collapse a').click(function () {
          $(".navbar-collapse").collapse('hide');
        });
      }

      // // Slick Slideshow
      if ($(once('slick-slideshow', '.slick-slideshow', context)).length) {
        $('.slick-slideshow').slick({
          autoplay: true,
          infinite: true,
          arrows: false,
          fade: true,
          dots: true
        });
      }

      // // Slick Testimonial
      if ($(once('slick-testimonial', '.slick-testimonial', context)).length) {
        $('.slick-testimonial').slick({
          arrows: false,
          dots: true
        });
      }

    }
  };

})(Drupal, jQuery); 
