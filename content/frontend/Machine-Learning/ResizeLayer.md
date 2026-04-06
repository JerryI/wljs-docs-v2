---
title: ResizeLayer
---

`ResizeLayer[{d}]` represents a layer performing one-dimensional resizing of a two-dimensional array.

`ResizeLayer[{d1, …, dn}]` represents a layer performing n-dimensional resizing of a (n+1)-dimensional array.

## Examples

Create a resize layer for image scaling:

```wolfram
ResizeLayer[{64, 64}]
```

Apply a resize layer to an image:

```wolfram
layer = ResizeLayer[{32, 32}];
layer[RandomImage[1, {100, 100}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ResizeLayer.html) for more details.