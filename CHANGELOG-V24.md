# SpeedGuard V24 — correcció de la inicialització GPS

- La posició GPS i les coordenades es mostren sempre que el navegador lliura coordenades vàlides, encara que la precisió sigui baixa.
- La precisió GPS només limita les consultes de carretera/radars, no l'actualització de la posició.
- Els errors de la brúixola, el HUD i el radar de tram queden aïllats perquè no interrompin l'actualització GPS.
- S'evita crear diversos `watchPosition` actius en reiniciar el GPS.
- S'amplia el temps d'espera del GPS a 20 segons i s'actualitza el Service Worker a V24.
