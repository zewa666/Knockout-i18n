<?php

  $locale = $_GET['locale'];

  $localeEN = array(
    'appTitle' => "Knockout Translation Module",
    'submit' => 'Submit',
    'car' => 'Car',
    'beer' => "Beer",
    'amount' => "Amount",
    'msgSwitchLanguageInfo' => 'Click on the flags to switch the language',
    'msgTotalAmount' => 'You have a total amount of {0} items'
  );

  $localeDE = array(
    'appTitle' => "Knockout Übersetzungsmodul",
    'submit' => 'Abschicken',
    'car' => 'Auto',
    'beer' => "Bier",
    'amount' => "Menge",
    'msgSwitchLanguageInfo' => 'Klicke auf die Flaggen um die Sprache zu wechseln',
    'msgTotalAmount' => 'Die Gesamtmenge beträgt {0} Gegenstände'
  );

  $selectedLocale = null;
  switch($locale) {
    case "en":
      $selectedLocale = $localeEN;
      break;
    case "de":
      $selectedLocale = $localeDE;
      break;
    default:
      $selectedLocale = $localeEN;
  }

  echo json_encode($selectedLocale);

