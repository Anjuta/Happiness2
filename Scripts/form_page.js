$(function() {
    function form_page() {
        screen_width = screen.width;
        if (screen_width < 1024) {
            page_width = 783;
            logo_width = 180;
        } else if (screen_width >= 1024 && screen_width < 1280) {
            page_width = 1000;
            logo_width = 230;
        } else if (screen_width >= 1280 && screen_width < 1366) {
            page_width = 1081;
            logo_width = 215;
        } else if (screen_width >= 1366 && screen_width < 1600) {
            page_width = 1081;
            logo_width = 229;
        } else {
            page_width = 1420;
            logo_width = 260;
        }

        img_left = (page_width - logo_width) / 2;

//        console.log($('#phone').css('width'))

        $('#page').css('width', page_width + 'px');
        $('#logo').css('width', logo_width + 'px');
        $('#logo_href').css('left', img_left + 'px');

        header_height = parseInt($('#logo').css('height'));
//        inset_width = img_left - 30;
        inset_width = parseInt(img_left / 3) - 3;
        a_font_size = parseInt(header_height / 9.85) + 1;
        a_padding_top = parseInt(header_height / 19.2);
        a_padding_bottom = parseInt(1.5 * a_padding_top);
        a_services_height = parseInt(header_height / 3.5);
        a_home_height =  parseInt(header_height / 2.4);//a_services_height; //
        a_news_height = parseInt(header_height / 6.4);
        address_right = parseInt(img_left * 0.17)
        address_top = parseInt(header_height * 0.16/*0.1*/)
        phone_left = parseInt(img_left * 0.21/*0.27*/)
        phone_top = address_top + parseInt(a_font_size * 0.6)
        $('#menu_left a, #menu_right a').css({
            'width': inset_width + 'px',
            'font-size': a_font_size + 'px',
            'padding': a_padding_top + 'px' + ' 0px '+ a_padding_bottom + 'px'
        });

        $('#services, #contacts').css({
            'height': a_services_height + 'px',
            'top': header_height - a_services_height - a_padding_bottom - a_padding_top + 7 + 'px'
        });
        $('#home, #about_us').css({
            'height': a_home_height + 'px',
            'top': header_height - a_home_height - a_padding_bottom - a_padding_top + 7 + 'px'
        });
        $('#news, #reviews').css({
            'height': a_news_height + 'px',
            'top': header_height - a_news_height - a_padding_bottom - a_padding_top + 7 + 'px'
        });

        $('#address, #phone').css({
            'font-size': a_font_size + 'px'
        })
        $('#address').css({
            'right': address_right + 'px',
            'top': address_top + 'px'
        })
        $('#phone').css({
            'left': phone_left + 'px',
            'top':  phone_top + 'px',
            'font-size': parseInt(a_font_size*1.2) + 'px'
        })

        $('#content').css({
            'top': header_height + 'px',
            'width': page_width - 12 + 'px'
        })
    }

    form_page();

    // Make map
    ymaps.ready(init);

    function init () {
        myMap = new ymaps.Map('map', {
            center:[56.822266, 60.621277],
            zoom:17
        });
        myMap.controls
            // Кнопка изменения масштаба.
            .add('zoomControl', { left: 5, top: 5 })
            // Список типов карты
            .add('typeSelector')
            // Стандартный набор кнопок
            .add('mapTools', { left: 35, top: 5 });
        // Добавляю метку
        myPlacemark = new ymaps.Placemark([56.822266, 60.621277], {
            balloonContentHeader: "РК Счастье Есть",
            balloonContentBody: "Вход"
//            balloonContentFooter: "Подвал",
//            hintContent: "Хинт метки"
        }, {
//            preset: 'twirl#darkorangeStretchyIcon',
//            content: 'вход'
            preset: 'twirl#darkorangeDotIcon'
        });
        myMap.geoObjects.add(myPlacemark);
    }
});
