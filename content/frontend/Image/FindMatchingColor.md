---
title: FindMatchingColor
---

`FindMatchingColor[image,color]` returns a color similar to the color that is present in image.

- `FindMatchingColor[image,{color1,color2,…}]` returns a list of colors matching each colori.
- `FindMatchingColor[{image1,image2,…},{color1,color2,…}]` returns lists of matching colors for all imagei.

## Examples

```wolfram
(* Find a matching red color in an image *)
FindMatchingColor[photo, Red]

(* Find matches for multiple colors *)
FindMatchingColor[photo, {Red, Blue, Green}]

(* Use with images for color palette extraction *)
colors = FindMatchingColor[image, DominantColors[image]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMatchingColor.html) for more details.