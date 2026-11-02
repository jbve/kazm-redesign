/*
  GEGEVENS VAN DE KAZM-WEBSITE
  ============================
  Hier pas je alles aan wat regelmatig verandert.

  Zo werkt het:
  - Verander alleen de tekst TUSSEN de aanhalingstekens "…".
  - Laat de aanhalingstekens, komma's en haakjes staan.
  - Klik daarna op "Commit changes". Na 1 à 2 minuten staat het online.
  - Laat je een veld leeg (""), dan toont de site de standaardtekst.
*/

window.KAZM = {

  // ---- Algemeen -------------------------------------------------------
  ledenaantal: "±120",

  // ---- Prijzen --------------------------------------------------------
  prijzen: {
    jaar:            "2025",      // jaar waarop de kampprijzen slaan
    kampEenWeek:     "€650",
    kampTweeWeken:   "€1.200",
    lidmaatschap:    "",          // bv. "€250"  (leeg = [PRIJS])
    initiatievlucht: ""           // bv. "€60"   (leeg = [PRIJS])
  },

  // ---- Zweefkamp ------------------------------------------------------
  kamp: {
    week1:          "maandag 12 t.e.m. vrijdag 16 juli 2027",
    week2:          "maandag 19 t.e.m. vrijdag 23 juli 2027",
    inschrijvingen: "Inschrijvingen starten in 2027."
  },

  // ---- Contactgegevens op de pagina ------------------------------------
  // Let op: wat hier staat, is voor iedereen zichtbaar (ook voor spambots).
  // Gebruik bij voorkeur een clubadres, bv. info@kazm.be.
  contact: {
    email:    "",                 // leeg = [E-MAIL]
    telefoon: ""                  // leeg = [TELEFOON]
  },

  // ---- Waar het infoformulier naartoe gaat ----------------------------
  // - Een Formspree-link, bv. "https://formspree.io/f/abcd1234" (aanbevolen:
  //   dan staat er geen e-mailadres in de site), of
  // - een e-mailadres (werkt via FormSubmit, maar is zichtbaar voor bots), of
  // - leeg laten: dan gaat het naar het huidige adres.
  formulier: "",

  // ---- Vliegkalender --------------------------------------------------
  // Eén regel per activiteit. Kopieer een regel om er een toe te voegen,
  // verwijder een regel om ze weg te halen.
  kalender: [
    { wanneer: "Najaar en winter 2026–2027", activiteit: "Theoriecursus voor leerling-piloten" },
    { wanneer: "Winter 2026–2027",           activiteit: "Winterwerk" },
    { wanneer: "Eind winter 2027",           activiteit: "Bouw van de nieuwe hangar" },
    { wanneer: "12 t.e.m. 16 juli 2027",     activiteit: "Zweefkamp – week 1" },
    { wanneer: "19 t.e.m. 23 juli 2027",     activiteit: "Zweefkamp – week 2" },
  ]

};
