(function($){
    var i=0;
    var button=$(".button");
    var colors=["red","blue","green"];
    button.css('backgroundColor',colors[0]);
    window.setInterval(function() {
i=i==colors.length ? 0:i;
button.animate({backgroundColor:colors[i]},3000);
i++;
    },30)
}
    )(jquery);