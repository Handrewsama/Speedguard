# SpeedGuard Mobile V2 — Driving UI

- Added a dedicated driving mode focused on speed and limit visibility.
- Secondary GPS/manual/OSM controls collapse when driving mode is active.
- Added compact driving status indicator.
- Speed display scales much larger on phones.
- Limit badge and excess value are enlarged for glanceability.
- Preserved existing sanction engine, halo, editor, OSM and GPS behavior.
- Bumped Service Worker cache to `speedguard-mobile-v2` to prevent stale UI after deployment.
- Driving mode preference is persisted in localStorage.
