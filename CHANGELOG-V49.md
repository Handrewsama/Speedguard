# SpeedGuard V49

## Correccions principals

### 1. Radars fora de Catalunya
- Afegit un feed GeoJSON estatal de radars publicats com a font principal.
- Mantingut OpenStreetMap/Overpass com a font complementària i de fallback.
- La càrrega de radars ja no depèn exclusivament d'una consulta local d'OSM.
- Memòria cau de radars reduïda a 6 h i validació per posició.

### 2. Radar de tram
- Millorada la lectura de trams a partir de geometria real.
- El progrés es calcula sobre la geometria del tram i no amb una distància recta entre inici i final.
- Es comprova que el vehicle estigui realment sobre el tram abans d'iniciar-lo automàticament.
- Millorada la comprovació de sentit de circulació.

### 3. Límit de velocitat i tipus de via
- Prioritat per `maxspeed`, `maxspeed:forward`, `maxspeed:backward` i altres etiquetes OSM explícites.
- Fallback per tipus de via segons la normativa general espanyola.
- Quan no hi ha una dada fiable, la confiança queda marcada com a baixa en lloc de tractar el valor com una dada confirmada.
- La memòria cau de cartografia passa de 7 dies a 30 minuts i continua sent dependent de la posició.

### 4. Zona de possible radar mòbil + radar de tram
- La línia de visualització passa a tenir dues capes independents.
- El radar de tram i la zona de possible radar mòbil poden aparèixer simultàniament sense tapar-se.

### 5. Radar fix
- Eliminat l'avís repetitiu cada 25 segons.
- Ara l'avís es produeix en entrar a la zona del radar.
- S'aplica histèresi: només es torna a armar després d'haver sortit clarament de la zona.
- Afegit un so curt i discret, independent de la locució de veu.

### 6. Service Worker
- Actualitzat a V49 per evitar que GitHub Pages/iOS mantinguin la versió anterior en memòria cau.

## Base
Aquesta versió parteix del paquet funcional V48 proporcionat per l'usuari. Es conserven la càmera, detecció COCO-SSD, distàncies configurables, alertes, navegació lateral i la resta de funcionalitats existents.
