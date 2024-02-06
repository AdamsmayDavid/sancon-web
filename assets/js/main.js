      $(document).ready(function() {
        setTimeout(function() {
        $('#container').addClass('loaded'); 
        // Once the container has finished, the scroll appears
        if ($('#container').hasClass('loaded')) {
            // It is so that once the container is gone, the entire preloader section is deleted
            $('#preloader').delay(1000).queue(function() {
            $(this).remove();
            });}
        }, 2000);});

    // for navbar
     var nav = document.querySelector('nav');

   window.addEventListener('scroll', function () {
       if(window.pageYOffset > 100) {
          nav.classList.add('bg-primary',  'shadow');

      } else {
           nav.classList.remove('bg-primary', 'shadow');
     }
 });


// var hihi ="10" + + +"10" 
// + "=" + "jeng jeng"

// alert(hihi)

    // function autoRefresh() {
    //     window.location = window.location.href;
    // }
    // setInterval('autoRefresh()', 5000);
    window.location.replace("#");

//carousel
// jQuery('form.wpcf7-form input[type="submit"]').each( function( i, val )
//     {
//             jQuery(this).on("click", function(e) {

//                 var form_id = jQuery(this).closest('.wpcf7').prop('id') ;

//                 setTimeout(function( )
//                 {
//                     $( "#" + form_id + " form.wpcf7-form .nen-wpcf7-submit" ).attr('disabled','disabled');

//                 } , 10 , form_id );
//             });
//     });