# SpeedGuard V22 — brúixola i GPS

- Brúixola de cap a cap, sense marges laterals, amb només N/E/S/O i rumb en graus.
- Indicadors gràfics discrets per a radar fix i radar de tram, situats segons l’angle relatiu.
- Indicador separat de possible vigilància mòbil SCT; representa un tram oficial de vigilància, no un radar mòbil confirmat ni una ubicació exacta.
- Corregit l’ordre d’actualització del GPS: ara es desen primer les coordenades noves i després es recalculen els radars i la brúixola.
- El rumb GPS del vehicle es prioritza quan hi ha moviment; a baixa velocitat s’utilitza la brúixola del dispositiu com a aproximació.
- La consulta de carreteres es bloqueja quan la precisió GPS és molt baixa i descarta respostes d’OpenStreetMap que arriben tard després d’un desplaçament significatiu.
- Millorada la distància punt-carretera amb projecció local en metres i la comparació de direcció perquè no penalitzi una geometria de carretera digitalitzada en sentit contrari.
- Service worker i caché actualitzats a V22.

Nota: la velocitat i el límit de la via depenen del senyal GPS, de les dades OSM i de la disponibilitat de l’API. Els indicadors de radar no garanteixen la presència d’un dispositiu.
