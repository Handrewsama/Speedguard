# SpeedGuard V38

- Fixed missing mobile-zone alert text that could throw an exception during proximity checks and prevent subsequent automatic radar alerts.
- Added explicit Catalan and Spanish visual/voice warnings for possible mobile speed-check zones.
- Wrapped mobile-zone processing in error isolation so a zone/UI issue cannot interrupt fixed and average radar proximity checks.
- Added trip diagnostics when speech synthesis reports an error.
- Updated service-worker cache version to V38.

Validation: JavaScript syntax and ZIP integrity checked. Not tested on a real iPhone or during driving.
