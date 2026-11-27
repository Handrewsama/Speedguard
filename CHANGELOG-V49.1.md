# SpeedGuard V49.1

## Actualització forçada de la PWA

- Versió visible de la capçalera: **V49.1**.
- Service Worker versionat com `speedguard-sw-v49.1`.
- Registre del Service Worker amb `sw.js?v=49.1` i `updateViaCache: none`.
- La navegació/index.html prioritza sempre xarxa amb `cache: no-store`.
- En activar-se la nova versió, elimina caches antigues `speedguard-*`.
- El Service Worker no es cacheja.
- El `start_url` del manifest incorpora `?v=49.1`.
- S'afegeix un control client de versió per netejar caches antigues quan es detecta un canvi de build.

Aquesta revisió no modifica la lògica funcional de radars, càmera, detecció d'objectes o distàncies de V49.
