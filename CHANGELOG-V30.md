# SpeedGuard V30 — Recuperació automàtica de radars

- Afegit el botó **RECUPERAR RADARS** per netejar estats visuals obsolets i recalcular la proximitat sense esborrar dades del trajecte.
- Afegit un watchdog que, quan l'app és visible i el GPS continua actualitzant-se, torna a executar els càlculs si la comprovació de radars sembla encallada.
- Els diagnòstics registren les recuperacions i els períodes sense actualitzacions GPS.
- La recuperació no esborra la base de radars, l'historial ni l'estat d'un radar de tram actiu.
- Service Worker i recursos de memòria cau actualitzats a V30.

La pàgina web no pot garantir que iOS mantingui el GPS actiu en segon pla. Cal validar el comportament real en un iPhone.
