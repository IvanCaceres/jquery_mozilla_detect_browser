//<![CDATA[ 
$(window).load(function(){
console.log($.browser);

if ($.browser.mozilla) {
    $('head').append('<link rel="stylesheet" href="firefox.css">');
}


});//]]>  