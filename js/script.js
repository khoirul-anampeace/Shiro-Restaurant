// penggunaan scrolltotop dan memberikan shadow pada navigasi ketika halaman di scroll 
$(function () {
    var shrinkHeader = 100;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('nav').addClass('shrink');
            $('#scrolltop').addClass('show-scroll');
        } else {
            $('nav').removeClass('shrink');
            $('#scrolltop').removeClass('show-scroll');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset;
    }
});

// paginations

function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));

    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth,
            totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages -
        sideWidth + 1, totalPages));

}

$(function () {
    var numberOfItems = $(".menu-content .mouse").length;
    var limitPerPage = 3;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 3;
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".menu-content .mouse").hide().slice((currentPage - 1) * limitPerPagem, currentPage *
            limitPerPage).show();

        $(".pagination li").slice(1, -1).remove();

        getPageList
    }
})