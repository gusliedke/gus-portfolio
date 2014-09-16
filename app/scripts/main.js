// burger menu animation

var Menu = {
	el: {
		ham: $('.menu'),
		menuTop: $('.menu-top'),
		menuMiddle: $('.menu-middle'),
		menuBottom: $('.menu-bottom'),
		mainNav: $('#main-nav')
	},

	init: function() {
		Menu.bindUIactions();
	},

	bindUIactions: function() {
		Menu.el.ham
		    .on(
		      'click',
		    function(event) {
		    Menu.activateMenu(event);
		    event.preventDefault();
		}
		);
	},

	activateMenu: function() {
		Menu.el.menuTop.toggleClass('menu-top-click');
		Menu.el.menuMiddle.toggleClass('menu-middle-click');
		Menu.el.menuBottom.toggleClass('menu-bottom-click');
		Menu.el.mainNav.toggleClass('active');
	}
};

Menu.init();

// $(function(){
// 	$('#twitter .tweet').twittie({
// 	    dateFormat: '%b. %d, %Y',
// 	    template: '{{tweet}} <div class="date">{{date}}</div>',
// 	    count: 3
// 	});
// });

$(function(){
	$("img.lazy").lazyload({
    	container: $("#contain")
	});
});

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('.top').hide();
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height  > 100) {
        $('.top').show();
    }
    else {
    	$('.top').hide();
    }
});

