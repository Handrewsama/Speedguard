# SpeedGuard V29

- Mode de conducció simplificat: amaga la targeta de sancions i manté els elements essencials.
- Indicador explícit de confiança de la via: confirmada, probable o no confirmada.
- Si la informació de carretera queda obsoleta durant més de 3 minuts, es marca com a no confirmada i es retira el límit com a dada verificada.
- Registre local d’incidències del trajecte: GPS imprecís, canvis de confiança de la via, actualitzacions de cartografia/radars i zones mòbils.
- El resum del trajecte inclou durada, distància disponible, última precisió GPS i incidències tècniques; es conserva a l’historial local.
- Service Worker/cache actualitzats a V29.

Validació: comprovació estàtica de sintaxi i integritat del ZIP; no és una prova real en iPhone.
