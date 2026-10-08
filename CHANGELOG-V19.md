# SpeedGuard V19

## Canvis
- HUD superior de radar ampliat: tipus de radar, distància i límit amb tipografia més gran.
- Brúixola de radar ampliada amb fletxa molt més gran i N/E/S/W més visibles.
- Consulta de via/velocitat OSM millorada: retorna geometria i selecciona la via més propera, prioritzant vies amb `maxspeed`.
- Actualització de la via i límit aproximadament cada 2,5 segons mentre hi ha GPS.
- Fallback de límits per classe de via a Espanya quan OSM no aporta `maxspeed` explícit.
- Radar de tram automàtic: si el conductor entra a mig tram, el progrés inicial es calcula des del punt d'entrada i no obliga a recórrer de nou la part anterior.
- Radar de tram completat: l'ID queda bloquejat temporalment per evitar que es reactivi immediatament.
- Reset complet de l'estat automàtic després de finalitzar un radar de tram.
- El detector ja no abandona la comprovació de radars fixos simplement perquè hi hagi un radar de tram a prop.
- Versió del Service Worker actualitzada a V19.
