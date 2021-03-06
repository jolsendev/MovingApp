
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr+', '+cityStr;

    $greeting.text("So you want to live at "+address+"?");
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location='+address+'';
    $body.append('<img class="bgimg" src="'+streetviewUrl+'">');
    // YOUR CODE GOES HERE!
    //47396d0d5b384154b450128d3b5873e3
    return false;
};

$('#form-container').submit(loadData);
