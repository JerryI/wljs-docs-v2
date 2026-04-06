---
title: MorphologicalBinarize
---

`MorphologicalBinarize[image, {t1, t2}]` creates a binary image from image by replacing all values above the upper threshold t2 with 1, also including pixels with intensities above the lower threshold t1 that are connected to the foreground.

- `MorphologicalBinarize[image, t]` uses t as the upper threshold, automatically choosing a suitable value for the lower threshold.
- `MorphologicalBinarize[image]` chooses the lower and upper threshold automatically.

## Examples

Binarize an image with automatic thresholds:

```wolfram
MorphologicalBinarize[ExampleData[{"TestImage", "Lena"}]]
```

Use a specific upper threshold:

```wolfram
MorphologicalBinarize[ExampleData[{"TestImage", "Mandrill"}], 0.5]
```

Specify both thresholds:

```wolfram
MorphologicalBinarize[ExampleData[{"TestImage", "Peppers"}], {0.3, 0.7}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MorphologicalBinarize.html) for more details.