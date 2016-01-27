// [Author] Christopher Kwai-Pun
// [Description] Expands thumbnail into embed
// [Created] 2016/01/25
(function () {
    'use strict';

    var $link = $('.yt-lockup-dismissable');
    var $menu = $('.thumb-menu');

    var i = 0;
    var clicked = false;

    for (var key in $link){
        if ($link.hasOwnProperty(key)){
            var $container = $('<a href="#video'+key+'" class="btn btn-link" data-toggle="collapse">Expand</a> \
            <div id="video'+key+'" class="collapse"></div>');
            $container.bind("click",function(){
                openVideo($(this.previousElementSibling),$(this));
            });
            $($link[key]).append($container);
        }
    }

    function openVideo(elem,player){
        var centerPosition = {top: (player.offset().top + 25), left: ($(document).width() / 4)};
        var videoLink = elem.find('.yt-uix-sessionlink.spf-link');
        var embedUrl = 'https://www.youtube.com/embed/' + (videoLink.attr('href')).substring(9) + '?autoplay=1';
        var embed = '<iframe class="embed-frame" type="text/html" width="640" height="390" src="'+ embedUrl +'"frameborder="0" allowfullscreen/>';
        if (clicked){
            clicked = false;
            player[0].style.height = '20px';
            player.empty();
            player.append('Expand');
        } else{
            clicked = true;
            player[0].style.height = '400px';
            player.append(embed);
            $(player.children()[0]).offset(centerPosition);
        }
    }
})();
