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

var errorHandler = err => console.log("There was a problem with your request to the server...");


window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs"));
