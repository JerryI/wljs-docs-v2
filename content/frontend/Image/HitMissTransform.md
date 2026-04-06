---
title: HitMissTransform
---

`HitMissTransform[image, ker]` gives the hit-or-miss transform of image with respect to the composite structuring element ker.

- `HitMissTransform[image, {ker1, ker2, ...}]` gives the union of the hit-or-miss transforms for all the structuring elements keri.
- `HitMissTransform[image, {ker1, ker2, ...}, t]` treats values above t as foreground.

## Examples

Detect corners:

```wolfram
img = Binarize[ExampleData[{"TestImage", "Shapes"}]];
ker = {{0, 1, -1}, {1, 1, -1}, {-1, -1, -1}};
HitMissTransform[img, ker]
```

Multiple kernels:

```wolfram
HitMissTransform[img, {ker1, ker2, ker3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HitMissTransform.html) for more details.