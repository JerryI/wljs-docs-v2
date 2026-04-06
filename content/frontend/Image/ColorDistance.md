---
title: ColorDistance
---

`ColorDistance[c1, c2]` gives the approximate perceptual distance between color directives c1 and c2.

`ColorDistance[list, c]` gives color distances between elements of list and c.

`ColorDistance[image, c]` gives an image whose pixel values are color distances from pixels to color c.

## Examples

Distance between two colors:

```wolfram
ColorDistance[Red, Orange]
(* 0.344315 *)
```

Distance between Red and Blue:

```wolfram
ColorDistance[Red, Blue]
(* 0.764716 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorDistance.html) for more details.