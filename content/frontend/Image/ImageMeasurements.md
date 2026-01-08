---
title: ImageMeasurements
---

`ImageMeasurements[image, "prop"]` returns the value of property "prop" for the entire image.

`ImageMeasurements[image, "prop", format]` returns values in the specified output format.

## Examples

Get mean intensity:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageMeasurements[img, "Mean"]
(* 0.435 *)
```

Multiple properties:

```wolfram
ImageMeasurements[img, {"Mean", "StandardDeviation", "Max"}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageMeasurements.html) for more details.