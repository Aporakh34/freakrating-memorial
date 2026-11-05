# Assets

## Images
- `images/slender.png` — Slender photo
- `images/jumpscare.png` — fallback if death video is missing

## Video
- `video/death.mp4` — fullscreen muted death clip (plays once)

## Notes
- `notes/note-1.png` … `note-8.png`

## Trees
- `models/trees/pine.glb`
- `models/trees/dead.glb`

## Bushes (optional)
- `models/bushes/bush.glb` — otherwise procedural bushes

## Grass (optional)
- `models/grass/grass.glb` — instanced tufts; otherwise procedural blades

## Rocks (optional)
- `models/rocks/rock.glb` — otherwise procedural rocks

## Props (optional)
- `models/props/flashlight.glb` — held flashlight; otherwise procedural prop.
  Auto-scaled and centered, so any export size works.

## Ground (optional)
- `textures/ground.jpg` — tiled dirt/grass; otherwise procedural texture
  Soft hills are generated in code on top of the texture.

## Audio
All optional — missing files fall back to synthesized placeholders.

- `audio/ambience.mp3`, `audio/wind.mp3`, `audio/breath.mp3`
- `audio/footstep.mp3`, `audio/branch-crack.mp3`, `audio/foliage.mp3`
- `audio/heartbeat.mp3`, `audio/slender-near.mp3`, `audio/slender-breath.mp3`
- `audio/paper-rustle.mp3` — plays near uncollected notes
- `audio/thunder.mp3` — paired with lightning flashes
- `audio/stare-scare.mp3` — non-lethal scare when you spot the stalker
- `audio/gasp.mp3` — out of breath after burning all stamina
- `audio/jumpscare.mp3`, `audio/pickupDuring.mp3`, `audio/pickupFinish.mp3`, `audio/win.mp3`
