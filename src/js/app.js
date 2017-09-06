jQuery(document).ready(function ($) {
	$.getJSON('https://api.github.com/search/repositories?q=bootstrap-sass&sort=stars&order=desc')
		.then(function(data) {
			var html = '';
			data.items.forEach(function(item){
				html += '<p>' + item.name + '</p>';
			});
			$('#app').html(html);
		});
	console.log('DOM Ready');
});