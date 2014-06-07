$(function() {
    function form_contacts() {
        page_width = parseInt($('#content').css('width'));
        map_area_width = parseInt(page_width * 0.65);
        map_margin = parseInt(map_area_width * 0.014);
        map_width = map_area_width - map_margin * 2 - 10;// -10 is for border
        map_height = parseInt(map_width * 0.70);
//        text_contact_area_width = page_width - map_area_width;
        text_contact_margin = map_margin * 2;
        text_contact_width = page_width - map_area_width - text_contact_margin ;
        simp_font_size = parseInt(text_contact_width / 10);
        $('#text_contact').css({
            'width': text_contact_width,
            'margin': text_contact_margin + 'px 0px ' + text_contact_margin + 'px ' + text_contact_margin + 'px',
//            'font-size': simp_font_size + 'px'
        });
        $('#map').css({
            'width': map_width + 'px',
            'height': map_height + 'px',
            'margin': map_margin + 'px'
        });
//        $('#contact_title').css({
//            'font-size': simp_font_size*2 + 'px'
//        });
//        $('#text_contact b').css({
//            'font-size': parseInt(simp_font_size*1.5) + 'px'
//        })
    }

    form_contacts();
});