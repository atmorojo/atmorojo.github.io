$(document).ready(function() {

    $('.show-comments').on('click', function(){
        var disqus_shortname = 'atmorojo'; // Replace this value with *your* username.

        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = false;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        $(this).fadeOut();
    });

});
