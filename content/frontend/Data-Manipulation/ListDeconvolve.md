---
title: ListDeconvolve
---

`ListDeconvolve[ker, list]` gives a deconvolution of list using kernel ker.

## Examples

```wolfram
ListDeconvolve[{1, 2, 1}, {1, 4, 8, 10, 8, 4, 1}]
```

```wolfram
ker = {1, 2, 1};
data = ListConvolve[ker, {1, 0, 0, 0, 1}];
ListDeconvolve[ker, data]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListDeconvolve.html) for more details.