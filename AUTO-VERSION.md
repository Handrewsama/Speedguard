# Versió automàtica a cada deployment

S'ha afegit `.github/workflows/auto-version.yml`. Cada vegada que es fa un `push` a la branca `main`, GitHub Actions actualitza l'etiqueta superior de l'app a `V25 · B<número>` i canvia el nom de la memòria cau del Service Worker, utilitzant també el hash curt del commit. El workflow desa aquests canvis en un commit automàtic; com que GitHub Pages publica des de la branca `main`, la pàgina es torna a desplegar amb la nova versió.

## Requisits
- El repositori ha de publicar GitHub Pages des de la branca `main` (no des d'un workflow de Pages separat).
- A GitHub: **Settings → Actions → General → Workflow permissions**, cal permetre que els workflows escriguin al repositori (**Read and write permissions**).
- Cal pujar també la carpeta `.github/workflows/auto-version.yml` al repositori, conservant la ruta `.github/workflows/auto-version.yml` a l'arrel. La resta dels fitxers de l'app van a l'arrel com fins ara.

El primer push que afegeix aquest workflow pot provocar un segon deployment automàtic quan es desa el commit amb el número de build. Els commits posteriors fets pel bot no tornen a executar el workflow, perquè GitHub no activa workflows `push` addicionals per commits creats amb `GITHUB_TOKEN`.
