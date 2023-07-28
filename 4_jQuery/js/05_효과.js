// 1. show, hide, toggle
$('#show').click(function(){
    $('#img').show(5000);
});
$('#hide').click(function(){
    $('#img').hide(5000);
});
$('#toggle').click(function(){
    $('#img').toggle(5000);
});

// 2. fadeIn, fadeOut, fadeToggle
$('#fadeIn').click(function(){
    $('#img').fadeIn(1000);
});
$('#fadeOut').click(function(){
    $('#img').fadeOut(1000);
});
$('#fadeToggle').click(function(){
    $('#img').fadeToggle(1000);
});

$('#img').hover(
    function() {
        $(this).fadeTo(1000, 0.5);
    },
    function() {
        $(this).fadeTo(1000, 1);
    }
)

// 3. slideDown, slideUp, slideToggle
$('.menu').click(function(e){
    const content = $(e.target).next();
    // if(content.css('display') === 'none') {
    //     content.slideDown(500);
    // } else { 
    //     content.sildeUp(500);  
    // }
        // content.slideToggle(500);


    // 컨텐츠 하나만 slideDown 되도록
    $('.contents').slideUp();
    content.slideDown(500);
});