# 📲 SpeedGuard DGT — Guía de instalación (sin ordenador)

## OPCIÓN A — Más rápida: GitHub Pages + Chrome Android
*(Sin ordenador, solo con el móvil)*

### Paso 1 — Subir a GitHub Pages
1. Abre el navegador en el móvil → ve a **github.com**
2. Crea cuenta gratuita (si no tienes)
3. Pulsa el **+** → "New repository"
   - Nombre: `speedguard`
   - Marca ✅ "Public"
   - Pulsa "Create repository"
4. En el repositorio, pulsa **"uploading an existing file"**
5. Sube los 5 archivos del ZIP descomprimido:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
6. Pulsa "Commit changes"
7. Ve a **Settings → Pages** → Source: "Deploy from branch" → branch: main → carpeta: / (root)
8. Espera 2 min → tu URL será: `https://TU_USUARIO.github.io/speedguard/`

### Paso 2 — Instalar como PWA en Android
1. Abre Chrome en Android
2. Ve a tu URL de GitHub Pages
3. Chrome mostrará un banner "Añadir SpeedGuard a pantalla de inicio"
   - Si no aparece: menú ⋮ → "Añadir a pantalla de inicio"
4. ✅ Se instala como app — icono en tu escritorio

---

## OPCIÓN B — APK real con PWABuilder.com
*(Genera un .apk firmado instalable)*

1. Ve a **pwabuilder.com** desde el móvil
2. Pega la URL de GitHub Pages del paso anterior
3. Pulsa "Start" → espera el análisis
4. En la sección **Android** → pulsa "Generate Package"
5. Descarga el `.apk`
6. En Android: Ajustes → Seguridad → activa "Instalar apps de fuentes desconocidas"
7. Abre el `.apk` descargado → instalar

---

## OPCIÓN C — APK directo con WebIntoApp.com
*(Aún más simple)*

1. Ve a **webintoapp.com**
2. Pega tu URL de GitHub Pages
3. Configura:
   - App name: SpeedGuard DGT
   - Orientation: Portrait
   - Permissions: ✅ Location
4. Pulsa "Build Free" → te mandan el APK por email
5. Instala el `.apk` en tu Android

---

## ⚙️ Configurar la ventana flotante en Android

Para que SpeedGuard se superponga a Google Maps / Waze:

1. Abre **Ajustes del móvil**
2. Ve a **Aplicaciones → SpeedGuard**
3. Pulsa **Permisos**
4. Activa **"Aparecer encima de otras apps"** (o "Display over other apps")
5. Abre SpeedGuard → abre Google Maps / Waze por encima
6. SpeedGuard seguirá visible como ventana flotante

> ⚠️ Nota: La superposición total sobre otras apps requiere el permiso
> `SYSTEM_ALERT_WINDOW` de Android. La PWA instalada lo solicita
> automáticamente en Android 10+. En algunos fabricantes (Xiaomi/MIUI,
> Samsung) hay que activarlo manualmente en los ajustes de la app.

---

## 🗺️ Cómo funciona el GPS + OpenStreetMap

- **GPS**: usa el GPS nativo de tu Android (no necesita internet)
- **Límite de velocidad**: consulta la API de OpenStreetMap (Overpass API)
  - URL: `https://overpass-api.de/api/interpreter`
  - Completamente gratuita, sin registro, sin API key
  - Detecta el `maxspeed` de la vía donde estás en un radio de 50 metros
- Si OSM no tiene datos para esa vía → selecciona el tipo manualmente

---

## ✏️ Editar sanciones

1. Pulsa la pestaña **⚙ EDITAR**
2. Modifica los valores de multa, puntos, rango de exceso
3. Pulsa **💾 GUARDAR** → se guardan en el dispositivo (localStorage)
4. Los enlaces directos a la DGT y al BOE están en la misma pantalla

---

*SpeedGuard v1.0 · Solo uso informativo · RDL 6/2015 + Ley 18/2021*


## V19 – Trànsit
Activa “Retencions” a ⚙ EDITAR. Les alertes poden ser visuals, de veu o ambdues.
