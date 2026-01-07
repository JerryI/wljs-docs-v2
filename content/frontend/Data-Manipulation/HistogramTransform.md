---
title: HistogramTransform
---

`HistogramTransform[image]` transforms pixel values of image so that its histogram is nearly flat.

- `HistogramTransform[image, ref]` modifies pixel values of image so that its histogram would have nearly the same distribution as ref.
- `HistogramTransform[image, ref, n]` uses n equally spaced quantiles.
- `HistogramTransform[{x1, x2, ...}, ...]` transforms values xi.

## Examples

Equalize histogram:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
HistogramTransform[img]
```

Match histogram to reference:

```wolfram
ref = ExampleData[{"TestImage", "Mandrill"}];
HistogramTransform[img, ref]
```

Transform numerical data:

```wolfram
HistogramTransform[RandomReal[{0, 1}, 100]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HistogramTransform.html) for more details.*