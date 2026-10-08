# SpeedGuard DGT V14

## Actualització i caché
- Nou Service Worker `speedguard-sw-v14`.
- Elimina automàticament les cachés antigues de SpeedGuard (V1-V13).
- `index.html` funciona amb estratègia **network-first** per evitar quedar bloquejat en una versió antiga.
- Registre del Service Worker amb `updateViaCache: none` i comprovació d'actualització.
- Recarrega automàtica una sola vegada quan el nou Service Worker pren el control.
- Les peticions Overpass continuen sent sempre de xarxa per evitar dades de radars obsoletes.
- Manté totes les funcionalitats de V13: radar HUD, brúixola, radar de tram, calibratge, alertes configurables i halo.

**Objectiu principal de V14: solucionar que GitHub Pages/Safari continuï mostrant V10.**
