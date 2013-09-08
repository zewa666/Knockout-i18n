Knockout-i18n
=======================

This is a custom binding and module providing i18n support for KnockoutJS.
The idea is to collect in advance all the translation options from a backend (this example uses a simple PHP file), and
use Knockout features to bind translations to elements or directly to code.
All translations are provided as a big JSON object, therefore usage is quite simple (see example)

The provided example also implements a simple language switcher, which builds on the update method feature of custom bindings.
Bindingname is declared as tk_i18n to ensure no clash with other possible bindings.

Usage
-----

Please inspect the whole example to get an idea how it works.
For a kickstart you should do following

- edit the file backend/Locales.php to provide your locales and translations
- set the current locale by calling the setLocale method, providing the locale as parameter
- for data-binds use the following binding
```javascript
   /* simple translation no extras */
	"tk_i18n: 'YOUR TRANSLATION KEY'"

	/* prefix and sufix added */
	"tk_i18n: { text: 'YOUR TRANSLATION KEY', prefix: 'YOUR PREFIX', sufix: 'YOUR SUFIX' }"
```
- for usage via code
```javascript
  // obtain reference of the i18n module either in define or by require
  var i18n = require('js/tk_i18n');

  // access the locale translation holder and choose your key
  i18n.locale().YOURKEY
```
Dependencies
------------

- jQuery
- Knockout
- RequireJS


New Features Log
----------------

- Added support for C# like string.format(), so you can now create translations with templates
```javascript

  // See in example in testModel.js
  i18n.locale().msgTotalAmount.format(self.amountCar() + self.amountBeer());
```
