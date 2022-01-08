alert('hello')

var site = {
    'loading': function() {
        setTimeout(function() {
            var page = document.getElementsByTagName('html')[0];
            var head = document.getElementsByTagName('head')[0];

            var script = document.createElement('script');
            script.src = '../js/app.js';
            head.appendChild(script);
        }, 5000);
    }
};

site.loading();