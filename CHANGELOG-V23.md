# SpeedGuard V23 — caché local de carreteres i radars

- Les carreteres consultades a OpenStreetMap es desen localment per cel·la GPS i es reutilitzen durant 7 dies.
- La consulta de carretera amplia el radi a 150 m per donar una cobertura útil a la cel·la local. La posició i el rumb continuen recalculant-se amb el GPS en temps real.
- Les dades de radars fixos i de tram es desen localment i es reutilitzen durant 24 h dins d’una cobertura aproximada de 4 km del centre consultat.
- Si no hi ha connexió, es poden mostrar dades locals antigues fins a 7 dies per als radars, amb avís visual que no són recents.
- S’actualitza la versió del Service Worker per evitar que l’iPhone mantingui els fitxers anteriors.

Nota: les dades guardades són una còpia de les dades cartogràfiques d’OpenStreetMap disponibles en el moment de la consulta; no són una garantia de límit vigent ni de presència de radar.
