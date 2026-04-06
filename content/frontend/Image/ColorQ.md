---
title: ColorQ
---

`ColorQ[color]` yields True if color is a valid color directive and False otherwise.

## Examples

Check valid colors:

```wolfram
ColorQ[Red]
(* True *)
```

```wolfram
ColorQ[RGBColor[0.5, 0.2, 0.8]]
(* True *)
```

Invalid color:

```wolfram
ColorQ["notacolor"]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorQ.html) for more details.