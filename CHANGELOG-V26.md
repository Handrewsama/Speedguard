# SpeedGuard V26 — controls manuals de manteniment

- Afegits botons per forçar l'actualització de radars, refrescar la cartografia/límit de velocitat d'OpenStreetMap i reiniciar la connexió d'ubicació GPS.
- Les consultes manuals de radars i cartografia ignoren la memòria cau local per intentar obtenir dades noves de la xarxa.
- El control GPS reinicia `watchPosition` amb alta precisió i demana una ubicació immediata amb `maximumAge: 0`.
- S'afegeix una zona d'estat per mostrar el resultat o els errors de cada acció.
- La precisió del GPS continua depenent del maquinari, dels serveis d'ubicació i de les condicions de recepció; les dades mòbils no substitueixen el senyal GNSS.
