//insta feed
$(document).ready(function () {
    var userFeed = new Instafeed({
        get: 'user'
        , userId: '4741714911'
        , limit: 12
        , resolution: 'standard_resolution'
        , accessToken: '4741714911.1677ed0.1e3cc902ae3b4f2f93518e442cac6fca'
        , sortBy: 'most-recent'
        , template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
        , after: function () {
            // disable button if no more results to load
            if (!this.hasNext()) {
                btnInstafeedLoad.setAttribute('disabled', 'disabled');
            }
        }
    , });
    userFeed.run();
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image'
        , delegate: 'a'
        , gallery: {
            enabled: true
        }
    });
    //insta feed ends
    var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
    btnInstafeedLoad.addEventListener("click", function () {
        userFeed.next()
    });
});
//col-lg-3 col-md-6 col-sm-6 col-xs-12