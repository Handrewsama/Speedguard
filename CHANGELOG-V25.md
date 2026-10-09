# SpeedGuard V25

- Reset of stale radar/route HUD when no fixed radar, average-speed radar, or SCT mobile-surveillance zone is active.
- Separate alert cooldowns per radar ID/type, preventing a fixed radar and average-speed radar from suppressing each other.
- Mobile-zone alert is triggered on entering a detected SCT road zone, not repeatedly on every GPS update; HUD is cleared when the road is no longer confidently matched.
- Road references are only retained when the selected road has probable/confirmed confidence; an untrusted road match no longer keeps the previous SCT zone active.
- Voice alerts use safer iOS Web Speech handling and log playback errors for diagnostics; use the in-app “Provar alerta” button while parked to unlock/test speech.
- Service worker cache/version bumped to V25.

Note: Public Overpass services remain best-effort; map data coverage and actual iOS audio behavior still need on-device testing. Radar and mobile-zone information is indicative, not a guarantee of enforcement locations.
