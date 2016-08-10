(function ($) {

    $.fn.visible = function (partial, hidden) {

        var $t = $(this).eq(0),
            t = $t.get(0),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom,
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

})(jQuery);


// Scrolling Functions
$(window).scroll(function (event) {
    function padNum(num) {
        if (num < 10) {
            return "" + num;
        }
        return num;
    }

    var first = 4; // Count up to 25x for first
    var second = 23; // Count up to 4x for second
    var third = 8;
    function countStuffUp(points, selector, duration) { //Animate count
        $({
            countNumber: $(selector).text()
        }).animate({
            countNumber: points
        }, {
            duration: duration,
            easing: 'linear',
            step: function () {
                $(selector).text(padNum(parseInt(this.countNumber)));
            },
            complete: function () {
                $(selector).text(points);
            }
        });
    }

    // Output to div
    $(".first-count").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            countStuffUp(first, '.first-count', 1000);
        }
    });

    // Output to div
    $(".second-count").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            countStuffUp(second, '.second-count', 1000);
        }
    });

        $(".third-count").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            countStuffUp(third, '.third-count', 1000);
        }
    });

});