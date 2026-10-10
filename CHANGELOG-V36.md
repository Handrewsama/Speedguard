# SpeedGuard V36

## Correccions d'àudio i direcció dels radars

- Prepara SpeechSynthesis durant el gest explícit d'activar el mode de conducció, una limitació important de Safari/iOS per a la veu automàtica.
- Les alertes automàtiques ja no cancel·len missatges que estiguin parlant; es redueixen repeticions idèntiques consecutives.
- El control de direcció dels radars de tram compara el rumb del vehicle amb el sentit del tram segons l'extrem més proper.
- Es descarten radars que quedin clarament darrere del vehicle quan hi ha rumb GPS fiable.
- Es llegeixen les etiquetes de direcció de càmeres d'OSM quan estan disponibles.
- Actualitzada la memòria cau i el service worker.

Nota: les dades públiques d'OSM no sempre indiquen el sentit/carril d'un radar fix. En aquests casos, no es pot garantir un filtratge perfecte de calçades oposades només amb la ubicació del punt.
