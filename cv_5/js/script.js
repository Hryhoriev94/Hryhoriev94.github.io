



$("#centralModalSuccess").on('show.bs.modal');


 
$(function() {
$(window).scroll(function() {
if($(this).scrollTop() >= 500) {
$('#UP').fadeIn();
} else {
$('#UP').fadeOut();
}
});
$('#UP').click(function() {
$('body,html').animate({scrollTop:0},800);
 
});
 
});




var imgHead = [
            'img/0.jpg',
            'img/1.png',
            'img/2.png'
        ], i=1;
    function csaHead(){
        if(i > (imgHead.length-1)){
            $('#intro').animate({'opacity':'0.7'},1000,function(){
                i=1;
                $('#intro').css({'background':'url('+imgHead[0]+') center / cover no-repeat #fff'});
            });
            $('#intro').animate({'opacity':'1'},1000);
        }else{
            $('#intro').animate({'opacity':'0.7'},1000,function(){
                $('#intro').css({'background':'url('+imgHead[i]+') center / cover no-repeat #fff'});
                i++;
            });
            $('#intro').animate({'opacity':'1'},1000);
        }
    }
    var intervalCsaHead = setInterval(csaHead,10000);
