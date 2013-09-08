define(['knockout', 'js/tk_i18n'],  function (ko, i18n) {
  var TestViewModel = function() {
    var self = this;

    self.amountCar = ko.observable(1)
    self.amountBeer = ko.observable(10);

    self.languages = ko.observableArray([
      { 'name': 'German', 'locale': 'de', 'img': 'img/flag_germany.png'},
      { 'name': 'English', 'locale': 'en', 'img': 'img/flag_usa.png'},
    ]);

    self.executeClick = function() {
      var msg = i18n.locale().amount + " " + i18n.locale().car + ": " + self.amountCar() + "\n" +
                i18n.locale().amount + " " + i18n.locale().beer + ": " + self.amountBeer();
      alert(msg);
    }

    self.switchLanguage = function(flag) {
      i18n.setLocale(flag.locale);
    }
  }

  return TestViewModel;
});
