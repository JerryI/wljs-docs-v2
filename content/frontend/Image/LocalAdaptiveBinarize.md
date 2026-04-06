---
title: LocalAdaptiveBinarize
---

`LocalAdaptiveBinarize[image, r]` creates a binary image from image by replacing values above the mean of the range-r neighborhood with 1 and others with 0.

- `LocalAdaptiveBinarize[image, r, {α, β, γ}]` replaces values above α μ + β σ + γ with 1 and others with 0, where μ and σ are the local mean and standard deviation.

## Examples

```wolfram
LocalAdaptiveBinarize[ExampleData[{"TestImage", "Lena"}], 10]
```

```wolfram
LocalAdaptiveBinarize[img, 5, {1, -0.2, 0}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalAdaptiveBinarize.html) for more details.