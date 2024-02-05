    
    $(document).ready(function() {
        setTimeout(function() {
        $('#container').addClass('loaded');
        // Once the container has finished, the scroll appears
        if ($('#container').hasClass('loaded')) {
            // It is so that once the container is gone, the entire preloader section is deleted
            $('#preloader').delay(600).queue(function() {
            $(this).remove();
            });}
        }, 2000);});

    // for navbar
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        if(window.pageYOffset > 100) {
            nav.classList.add('bg-primary', 'shadow');

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

