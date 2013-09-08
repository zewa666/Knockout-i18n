requirejs.config({
    paths: {
        'knockout': './lib/knockout/knockout-2.3.0',
        'jquery': './lib/jquery/jquery-1.9.1',
    }
});
var app = {};
define(['knockout', 'js/tk_i18n', 'js/testModel'],  function (ko, i18n, testModel) {


    app.backendPath = 'backend/';

    i18n.setLocale("en").then(function() {
        var vm = new testModel();
        ko.applyBindings(vm);
    });

});
