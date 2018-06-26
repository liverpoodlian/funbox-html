import './scss/main.scss';
const $ = window.jQuery;

$(function() {
	$('.goods__buy, .goods__card').on('click', function() {
		if($(this).closest('.goods__item').hasClass('goods__item--disabled'))
			return;
		$(this).closest('.goods__item').addClass('no-hover').toggleClass('goods__item--selected');
	});

	$('.goods__card').on('mouseleave', function() {
		if($(this).closest('.goods__item').hasClass('no-hover'))
			$(this).closest('.goods__item').removeClass('no-hover');
	});
});