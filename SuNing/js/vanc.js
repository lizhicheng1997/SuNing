$(function() {
	$("#a1").mouseover(function() {
		$(".nav-a").stop().slideDown(300);
	}).mouseout(function() {
		$(".nav-a").stop().slideUp(300);
	});

	$("#a2").mouseover(function() {
		$(".nav-a2").stop().slideDown(300);
	}).mouseout(function() {
		$(".nav-a2").stop().slideUp(300);
	});

	$("#a3").mouseover(function() {
		$(".nav-a3").stop().slideDown(300);
	}).mouseout(function() {
		$(".nav-a3").stop().slideUp(300);
	});

	$("#a4").mouseover(function() {
		$(".nav-a4").stop().slideDown(300);
	}).mouseout(function() {
		$(".nav-a4").stop().slideUp(300);
	});

	$("#a5").mouseover(function() {
		$(".nav-a5").stop().slideDown(300);
	}).mouseout(function() {
		$(".nav-a5").stop().slideUp(300);
	});

	$("#a6").mouseover(function() {
		$(".nav-a6").stop().slideDown(300);
	}).mouseout(function() {
		$(".nav-a6").stop().slideUp(300);
	});

	$("#a7").mouseover(function() {
		$(".nav-a7").stop().slideDown(300);
	}).mouseout(function() {
		$(".nav-a7").stop().slideUp(300);
	});

	$("#a8").mouseover(function() {
		$(".nav-a8").stop().slideDown(300);
	}).mouseout(function() {
		$(".nav-a8").stop().slideUp(300);
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		var items = $("#main").find(".item");
		var menu = $("#menu");
		var top = $(document).scrollTop();
		var currentId = ""; //滚动条现在所在位置的item id
		items.each(function() {
			var m = $(this);
			//注意：m.offset().top代表每一个item的顶部位置
			if(top > m.offset().top - 300) {
				currentId = "#" + m.attr("id");
			} else {
				return false;
			}			
		});

		var currentLink = menu.find(".current");
		if(currentId && currentLink.attr("href") != currentId) {
			currentLink.removeClass("current");
			menu.find("[href='" + currentId + "']").addClass("current");
		}
	});
	
});