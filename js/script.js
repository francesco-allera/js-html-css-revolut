// mouseenter on an element pops the dropdown
$('li.with-dropdown').mouseenter(function () {
    $(this).find('.dropdown-menu').addClass('active');
});

// mouseleave on an element hides the dropdown
$('li.with-dropdown').mouseleave(function () {
    $(this).find('.dropdown-menu').removeClass('active');
});

// click on an elements toggles the dropdown
$('li.with-dropdown').click(function () {
    $(this).find('.dropdown-menu').toggleClass('active');
});