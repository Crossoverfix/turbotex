$(document).ready(function () {
    var $formPrev = $('.check-form__wrap__control__prev');
    var $formNext = $('.check-form__wrap__control__next');
    var $formCard = $('.check-form__wrap__content__card');
    var $mapTrigger = $('[data-target]');
    $formNext.on('click',function () {
        pages('next');
        return false;
    })
    $formPrev.on('click',function () {
        pages('prev');
        return false;
    })
    $formCard.on('click',function () {
        $(this).toggleClass('active');
        return false;
    })
    $mapTrigger.on('click',function () {
        mapChange($(this).attr('data-target'));
        return false;
    })
    function pages($direction) {
        let $temp = 0;
        let $tempContent = $('.check-form__wrap__content');
        for (i = 0 ; i < $tempContent.length; i++){
            if($tempContent.eq(i).hasClass('active')){
                $temp = i;
            }
        }
        if($direction == 'next'){
            if($temp >= $tempContent.length - 1){
                $tempContent.removeClass('active');
                $tempContent.eq(0).addClass('active');
            } else {
                $tempContent.removeClass('active');
                $tempContent.eq($temp + 1).addClass('active');
            }
        } else if ($direction == 'prev'){
            if($temp <= 0){
                $tempContent.removeClass('active');
                $tempContent.eq($tempContent.length - 1).addClass('active');
            } else {
                $tempContent.removeClass('active');
                $tempContent.eq($temp - 1).addClass('active');
            }
        }
    }
    function mapChange(value) {
        $mapTrigger.removeClass('active');
        $('[data-target=' + value + ']').addClass('active');
    }
    ymaps.ready(function () {
        var myMap = new ymaps.Map("ymaps", {
            center: [55.76, 37.64],
            zoom: 10
        });
    });
})