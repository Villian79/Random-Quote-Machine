$(document).ready(function(){
    $('button').on('click', function(){
        var mycallback= data => data;

        $.ajax(init)
         .done(requestHandler)
         .fail(errorHandler);
    });
});

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
    $('#quote').html(data[0].content);
    $('#author').text(data[0].title);
}

var errorHandler = err => console.log(`There was a problem while executing your JSONP request...`);
