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
                // let test1 = $('[data-input="title"]');
                // let test2 = $tempContent.eq(0).attr('data-form-out-title');
                $('[data-form-input="title"]').html( $tempContent.eq(0).attr('data-form-out-title'));
                $('[data-form-input="sub-title"]').html( $tempContent.eq(0).attr('data-form-out-subtitle'));
                $('.check-form__wrap__control__numb').eq(0).html(1);
            } else {
                $tempContent.removeClass('active');
                $tempContent.eq($temp + 1).addClass('active');
                $('[data-form-input="title"]').html( $tempContent.eq($temp + 1).attr('data-form-out-title'));
                $('[data-form-input="sub-title"]').html( $tempContent.eq($temp + 1).attr('data-form-out-subtitle'));
                $('.check-form__wrap__control__numb').eq(0).html($temp + 2);
            }
        } else if ($direction == 'prev'){
            if($temp <= 0){
                $tempContent.removeClass('active');
                $tempContent.eq($tempContent.length - 1).addClass('active');
                $('[data-form-input="title"]').html( $tempContent.eq($tempContent.length - 1).attr('data-form-out-title'));
                $('[data-form-input="sub-title"]').html( $tempContent.eq($tempContent.length - 1).attr('data-form-out-subtitle'));
                $('.check-form__wrap__control__numb').eq(0).html($tempContent.length);
            } else {
                $tempContent.removeClass('active');
                $tempContent.eq($temp - 1).addClass('active');
                $('[data-form-input="title"]').html( $tempContent.eq($temp - 1).attr('data-form-out-title'));
                $('[data-form-input="sub-title"]').html( $tempContent.eq($temp - 1).attr('data-form-out-subtitle'));
                $('.check-form__wrap__control__numb').eq(0).html($temp);
            }
        }
    }
    ymaps.ready(function () {
        var myMap = new ymaps.Map("ymaps", {
            center: [55.441875, 37.724598],
            zoom: 18
        });
        var myGeoOfice = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.441875, 37.724598], // координаты точки
                balloonContentHeader: 'Метка № 2',
                balloonContentBody: 'Текст балуна № '
            }
        });
        var myGeoRem = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.329472, 37.716639], // координаты точки
                balloonContentHeader: 'Метка № 2',
                balloonContentBody: 'Текст балуна № '
            }
        });
        myMap.geoObjects.add(myGeoOfice);
        myMap.geoObjects.add(myGeoRem);
        $mapTrigger.on('click',function () {
            // mapChange($(this).attr('data-target'));
            $mapTrigger.removeClass('active');
            let value = $(this).attr('data-target');
            $('[data-target=' + value + ']').addClass('active');
            if(value == 'first'){
                myMap.setCenter([55.441875, 37.724598],18);
            } else if(value == 'second'){
                myMap.setCenter([55.329472, 37.716639],18);
            }
            return false;
        })
    });
    // function mapChange(value) {
    //     $mapTrigger.removeClass('active');
    //     $('[data-target=' + value + ']').addClass('active');
    //     if(value == 'first'){
    //         myMap.setCenter([55.441875, 37.724598],18);
    //     } else if(value == 'second'){
    //         myMap.setCenter([55.329472, 37.716639],18);
    //     }
    // }
})