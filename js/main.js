// get logo asterisk to spin - convert this to jquery
var asterisk = document.getElementById('asterisk');
(function(){
  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  }; 
  throttle("scroll", "optimizedScroll");
})();
window.addEventListener('optimizedScroll', function(){  
	asterisk.style.transform = 'rotate(-' + window.pageYOffset + 'deg)';
});


$(document).ready(function() {
	
/*
    // array of fun facts
	var funFacts = {
		0: {
			fact: 'I’m not afraid to use open source fonts.',
			image: 'https://media.giphy.com/media/5nrWPububC3XRg30ir/giphy.gif'
		},
		1: {
			fact: 'I made an Instagram for my dog and I\'m not ashamed => <a href="https://www.instagram.com/rengstagram/" target="_blank">@rengstagram</a>.',
			image: 'https://media.giphy.com/media/ZZf4oUBf0bBvNNmaDF/giphy.gif'
		},
		2: {
			fact: 'My favorite color is #222.',
			image: 'https://media.giphy.com/media/ToMjGpvx0uOlm6H9RqU/giphy.gif'
		},
		3: {
			fact: 'I’m a Virgo so I like it when things are perfect.',
			image: 'https://media.giphy.com/media/AF2BK0kTirsHsbLeqQ/giphy.gif'
		},
		4: {
			fact: 'I\'m a Self Preservation Enneagram Type 3.',
			image: 'https://media.giphy.com/media/7JTpNYu7oYGX98KJkL/giphy.gif'
		},
		5: {
			fact: 'I definitely prefer Sketch (sorry Adobe).',
			image: 'https://media.giphy.com/media/2vrGD7BtskWD8HB5BK/giphy.gif'
		},
		6: {
			fact: 'Google Spreadsheets are my real passion.',
			image: 'https://media.giphy.com/media/QnbnVPVWhzbCE/giphy.gif'
		},
		7: {
			fact: 'I drink my coffee black.',
			image: 'https://media.giphy.com/media/DQ9bqFm7hBTJS/giphy.gif'
		},
		8: {
			fact: 'I\'m vegan for the animals.',
			image: 'https://media.giphy.com/media/bympeqWadSL3G/giphy.gif'
		},
		9: {
			fact: 'My favorite weather is warm thunderstorms.',
			image: 'https://media.giphy.com/media/2wX1ZDx4ddj4zupWAQ/giphy.gif'
		},
		10: {
			fact: 'If I could have any superpower, I\'d slow down time like they do in <a href="https://www.imdb.com/title/tt0157472/" target="_blank">Clockstoppers</a> so I could take more naps/breaks.',
			image: 'https://media.giphy.com/media/HwmDZaI4YEeZ2/giphy.gif'
		},
		11: {
			fact: 'I started learning how to code in 7th grade so I could have a cooler Myspace page than all of my friends.',
			image: 'https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif'
		},
		12: {
			fact: 'I find it odd that some people *don\'t* treat their dogs like children.',
			image: 'https://media.giphy.com/media/2Y7kJKvzLFnNFPqd5u/giphy.gif'
		},
		13: {
			fact: 'I would love to learn sign language one day.',
			image: 'https://media.giphy.com/media/xTiTnDQ4eawSG7WB6o/giphy.gif'
		},
		14: {
			fact: 'I\'m currently re-watching SVU.',
			image: 'https://media.giphy.com/media/3o752fFQRQh0YW4EVi/giphy.gif'
		}
,
		15: {
			fact: 'I\'m currently reading Everything is Figureoutable by Marie Forleo.',
			image: 'https://media.giphy.com/media/UQPdOze3jGzNKjNLuK/giphy.gif'
		}
};	
	
	// pull a random fact and output it on the page
	var factLength = Object.keys(funFacts).length;
	var factIndex = Math.floor(Math.random() * factLength);	
	if (factIndex >= 0) {
		var factP = $('<p>').addClass('comment').html('// conversation starter: ' + funFacts[factIndex].fact);
		var factTooltip = $('<div>').attr('id', 'tooltip');
		factP.append(factTooltip);
		$('#main .col').append(factP);
		// controls tooltip
		factP.on('mouseover', function() {
			factTooltip.html('<img src="' + funFacts[factIndex].image + '">');
		});
		factP.on('mouseout', function() {
			factTooltip.html('');
		});
	}
	*/
	function outputProjects(projects) {	
		
		projects.forEach(function(i) {
			
			var col = $('<div>').addClass('col col-12 col-sm-6 col-lg-4');
			var a = $('<a>').attr('target', '_blank').attr('href', i.url);
			
			var card = $('<div>').addClass('project-card');
			card.attr('style', 'background-image: url("' + i.covers.original + '");');
			
			var cover = $('<div>').addClass('cover d-flex').attr('data-aos', 'fade');
			var info = $('<div>').addClass('info align-self-end');
			
			var fields = $('<p>').addClass('fields').attr('data-aos', 'fade-down').attr('data-aos-duration', '300');
			var title = $('<p>').addClass('title').attr('data-aos', 'fade-down').attr('data-aos-duration', '250');		
			var button = $('<div>').addClass('btn-outline').attr('data-aos', 'fade').attr('data-aos-duration', '250');
			button.attr('style', 'padding: 10px 24px;');
			
			info.append(fields, title, button);
			cover.append(info);
			
			card.append(cover);
			
			a.append(card);
			col.append(a);
			$('section.projects .row').append(col);	
			
			card.on('mouseover', function(e) {
				e.preventDefault();
				cover.attr('style', 'background: linear-gradient(0deg, ' + '#186577 32%' + ', transparent);').attr('data-aos', '');
				fields.text('// ' + i.fields.join(', ')).attr('data-aos', '');
				title.text(i.name).attr('data-aos', '');
				button.addClass('btn-outline').html('View Project').attr('data-aos', '');
				button.attr('style', 'padding: 10px 24px;');
			});
			card.on('mouseout', function() {
				cover.attr('style', 'background: transparent;').attr('data-aos', 'fade');
				fields.text('').attr('data-aos', 'fade-down').attr('data-aos-duration', '300');
				title.text('').attr('data-aos', 'fade-down').attr('data-aos-duration', '250');
				button.removeClass('btn-outline').html('').attr('data-aos', 'fade').attr('data-aos-duration', '250');
				button.attr('style', 'padding: 10px 24px;');
			});
		});	
	};
	
	var projects = [];

	var userID = 'pranjalshikhar';
	var apiKey = 'v8SNqxsyD70hgx1EXIQPjmjiQVe9K7HQ';
	var queryURL = 'https://api.behance.net/v2/users/' + userID + '/projects?api_key=' + apiKey;
	
	$.ajax({
	  url: queryURL,
	  method: "GET",
	  dataType: 'jsonp'
	}).then(function(response) {
		
		// limit number of projects being pulled
		for (var i = 0; i < 18; i++) {
			projects.push(response.projects[i]);
		}
		
		outputProjects(projects);

	}).catch(function(error) {
		
		var message404 = $('<div>').addClass('container m-auto');
		$('.projects .row').append(message404);
		message404.html('<div class="row"><div class="col"><h3>Oops, Behance API isn\'t loading.</h3><p class="lead">Have no fear! You can still view my Portfolio <a href="https://www.behance.net/pranjalshikhar" target="_blank">here</a>.</p></div></div>');
		$('.projects').addClass('error');
		
	});
	
	$('.menu-toggle').on('click', function(event) {
		event.preventDefault();
		
		if ($(this).hasClass('closed')) {
			
			$(this).removeClass('closed');
			$(this).addClass('open');
			$('header').attr('style', 'background: rgba(255,255,255,0.9); z-index: 1;').attr('data-aos', '').attr('data-aos-duration', '50');
			$('ul.nav').attr('style', 'opacity: 1;').attr('data-aos', '').attr('data-aos-duration', '1000');
			
		} else {
			
			$(this).removeClass('open');
			$(this).addClass('closed');
			$('header').attr('style', 'background: rgba(255,255,255,0); z-index: -1;').attr('data-aos', 'fade');
			$('ul.nav').attr('style', 'opacity: 0;').attr('data-aos', 'fade').attr('data-aos-duration', '50');
			
		}
	});
	
	// var linkedInURL = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=771dziejse2pk0&redirect_uri=https://larguar.github.io/&scope=r_fullprofile';
	
/*
	$.ajax({
	  url: linkedInURL,
	  method: "GET"
	}).then(function(response) {
		console.log(response);
	});
*/

	AOS.init();

});