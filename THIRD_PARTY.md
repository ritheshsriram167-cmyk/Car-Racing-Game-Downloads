# Third-party assets and runtime

All five source GLBs were provided by the user. Their embedded glTF metadata declares **CC BY 4.0**. The copies prepared for this game normalize units/orientation, regroup rigid wheel components and preserve source materials. V3 removes 369 coincident faces from a generated track copy; spatial partitioning retains every remaining prepared face. Original road routes and connections are preserved; temporary barricades in the oval corridor are cleared. Original files remain in `cars/` and `map/`.

- **2010 BMW M3 (E92)** — ilvskf. [Original model](https://sketchfab.com/3d-models/2010-bmw-m3-e92-1b61f48d5ebc4d9d94ac5f76ef1aede4). Adaptation: prepared wheel pivots, material grouping, normalized orientation and chassis origin.
- **2026 BMW M3 Touring 24H Shell Helix** — Dave Love SketchFab / Tyler_Dave. [Original model](https://sketchfab.com/3d-models/2026-bmw-m3-touring-24h-shell-helix-6828c91db6a34d1ca6bc204f064e28c1). Adaptation: corrected source scale, prepared rigid wheel hierarchy and chassis origin.
- **BMW M3 E92** — Dave Love SketchFab / Tyler_Dave. [Original model](https://sketchfab.com/3d-models/bmw-m3-e92-f816eaa10c2b4c46aef3118f31beea24). Adaptation: spatially separated disconnected wheel geometry, prepared rigid wheel hierarchy and normalized origin.
- **car for games unity** — Unity (shehab house) / shahabahmed. [Original model](https://sketchfab.com/3d-models/car-for-games-unity-4d9bbde680fe41349d7ad2b4672a720b). Adaptation: normalized orientation and prepared wheel hierarchy; extraneous unmaterialed Icosphere omitted from generated copy.
- **Indianapolis Motor Speedway** — Dave Love SketchFab / Tyler_Dave. [Original model](https://sketchfab.com/3d-models/indianapolis-motor-speedway-63935d209ac14ff495b913669619855a). Adaptation: translated vertical datum by 8m, cleared temporary barricade faces from the existing oval corridor, partitioned visual geometry into spatial chunks, optimized collision surfaces, removed coincident polygons, and added detail shaders, procedural scenery, lamps and boost markings. Road geometry and connections are retained.

[CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/) permits adaptation and redistribution with attribution. The metadata declarations above are preserved in `game/assets/cars.json` and the inspection reports. No external car, texture, environment or sound asset was downloaded for this game.

**Godot Engine 4.5.2** is distributed under the MIT license. The build includes the official engine license and copyright/third-party notices. [Official release](https://godotengine.org/download/archive/4.5.2-stable/). [Godot licensing information](https://godotengine.org/license/).

The game uses installed Windows system fonts when available, with Godot's built-in fallback. No Windows font file is copied or redistributed. Blender is used only to generate local derived assets and is not included in the runtime.

Engine/tire/road/wind/horn/impact/shift/boost audio, the interface, shaders and procedural added scenery were generated specifically for this project.
