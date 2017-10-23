function navItemClickHandler () {
    var $nav_item = $(this);
    var $r_nav_content = $nav_item.parent();

    if (!$r_nav_content.hasClass('open')) {
        navItemOpen.call(this);
    } else {
        navItemClose.call(this);
    }
}

function navItemOpen () {
    var $nav_item = $(this);
    var $r_nav_content = $nav_item.parent();
    $r_nav_content.siblings('.open').find('.nav_item').each(function () {
        navItemClose.call(this);
    });
    $r_nav_content.addClass('open');
    $nav_item.next().slideDown(400, function () {
        $nav_item.find('.nav_item_text').text("Click to close");
    });
}

function navItemClose () {
    var $nav_item = $(this);
    $nav_item.next().slideUp(400, function () {
        $nav_item.find('.nav_item_text').text("Click to open");
        $nav_item.parent().removeClass('open');
    });
}

$(".nav_item").click(navItemClickHandler);