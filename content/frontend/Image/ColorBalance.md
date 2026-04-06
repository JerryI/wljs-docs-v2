---
title: ColorBalance
---

`ColorBalance[image]` adjusts the colors in image to achieve a balance simulating neutral lighting.

`ColorBalance[image, ref]` adjusts colors so the reference color ref is mapped to white.

`ColorBalance[image, ref -> target]` maps the reference color ref to target.

## Examples

Auto-balance an image:

```wolfram
ColorBalance[img]
```

Map a specific color to white:

```wolfram
ColorBalance[img, Yellow]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ColorBalance.html) for more details.