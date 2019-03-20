document.body.className = 'fade';
setTimeout(function(){
    document.body.className = 'appear';
}, 0);

 $(document).ready(function(){
    $("#navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});
