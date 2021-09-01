// Entering with the mouse on an item => add a child class
$('li.with-dropdown').mouseenter(function () {
   $(this).find('.dropdown-menu').addClass('active');
});

// Leaving with the mouse on an item => remove a child class
$('li.with-dropdown').mouseleave(function () {
   $(this).find('.dropdown-menu').removeClass('active');
});

// When click on an item => toggle a child class
$('li.with-dropdown').click(function () {
   $(this).find('.dropdown-menu').toggleClass('active');
});