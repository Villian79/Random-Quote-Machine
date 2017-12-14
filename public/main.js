$(document).ready(function(){
    //Getting data from the API
    $('.quoterequest').on('click', function(){
		getQuote();
    });

	//Sending message via TWITTER
	$('.share-quote').on('click', function(){
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent($('#quote').text() + ' --' + $('#author').text()));
	});
});

var getQuote = function(){
		var quote;
		var author;
        var mycallback= data => data;
        $.ajax(init)
         .done(requestHandler)
         .fail(errorHandler);
}

var init = {
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
            jsonp: 'jsonp',
            crossDomain: true,
            dataType: 'jsonp',
            jsonpCallback: 'mycallback',
            cache: false
        }

var requestHandler = function(data){
    console.log(data);
	quote = data[0].content;
	author = data[0].title;
    $('#quote').html(quote);
    $('#author').text(author);
}

var errorHandler = err => console.log("There was a problem with your request to the server...");
