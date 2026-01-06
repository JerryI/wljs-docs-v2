---
title: ImageDemosaic
---

`ImageDemosaic[image, cfa]` reconstructs a color image using the specified color filter array cfa.

- `ImageDemosaic[image, {"cfa", {row, col}}]` aligns the pattern with the {row, col} pixel of image.

## Examples

```wolfram
ImageDemosaic[rawImage, "Bayer"]
```

```wolfram
ImageDemosaic[image, {"RGGB", {1, 1}}]
```

```wolfram
ImageDemosaic[sensorData, "GRBG"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageDemosaic.html) for more details.*