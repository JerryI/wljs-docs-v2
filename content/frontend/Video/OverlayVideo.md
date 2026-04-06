---
title: OverlayVideo
---

`OverlayVideo[background, o]` gives the result of overlaying o onto a background video or image background.

- `OverlayVideo[background, {o1, o2, ...}]` gives the result of overlaying o1, o2, ....
- `OverlayVideo[background, {interval1 -> o1, ...}]` overlays each oi during the time interval intervali.

## Examples

Overlay an image on a video:
```wolfram
OverlayVideo[video, logo]
```

Overlay during a specific time interval:
```wolfram
OverlayVideo[video, {{Quantity[2, "Seconds"], Quantity[5, "Seconds"]} -> watermark}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OverlayVideo.html) for more details.