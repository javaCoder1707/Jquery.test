jQuery(function(){
// data-id data() $= *= 
    $('#second').css({'color':'aqua'});
    let id = $('.rgr').data('name');
$('h2[title!="test-word"]').css({'color':'red'});
///////even
// $('ul li:odd)').css({'color':'blue'});


//////// empty parent has
$('h2:contains("Hello")').css({'color':'red'})
$('ul li:has(\'span\')').css({'color':'red'})
////////dblclick mouseenter mouseleave
$('button').on('click',function(){
    // alert('1')
});
/////keypress keydown keyup
$('input[name="name"]').keyup(function(){
  let value = $(this).val();
  $('input[name="submit"]').val(value); 
});
 //////
$('form').show(5000).delay(5000).hide(10000);

////
$('#gg').animate({'width':'80px'}, 5000);
///
//  alert( $('input[name="submit"]').attr('value'))
///
$(window).resize(function(){
    let width = $(this).width();
    let height = $(this).height();
    console.log(width,height);
});

$(window).scroll(function(){
    let width = $(this).width();
    let height = $(this).height();
    console.log(width,height);
});
////////addClass removeClass toggleClass


/////text html
$('button').on('click',function(){
  $('.text').text('zbzzbzbzbz')
});


///append prepend

$('ul').append('<li>dssi</li>');
///empty remove after


////wrap unwrap

///slider
$('.slider').slick({
    infinite:true,
    slidesToShow:3,
    slidesToScroll:1
});

$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // alert(nextSlide);
  });

});