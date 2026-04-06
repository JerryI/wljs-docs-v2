---
title: Opening
---

`Opening[image, ker]` gives the morphological opening of image with respect to the structuring element ker.

`Opening[image, r]` gives the opening with respect to a range-r square.

`Opening[data, ...]` applies opening to an array of data.

## Examples

Apply morphological opening to an image:

```wolfram
Opening[image, 2]
```

Opening with a disk structuring element:

```wolfram
Opening[image, DiskMatrix[3]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Opening.html) for more details.