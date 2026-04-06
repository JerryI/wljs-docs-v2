---
title: GuidedFilter
---

`GuidedFilter[image, guide, r, ε]` filters *image* using the guide image *guide* over range-*r* neighborhoods with pixel-value regularizer *ε*.

- `GuidedFilter[image, r, ε]` filters *image* so as to reduce noise, using *image* as the guide.

## Examples

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
GuidedFilter[img, 5, 0.01]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GuidedFilter.html) for more details.