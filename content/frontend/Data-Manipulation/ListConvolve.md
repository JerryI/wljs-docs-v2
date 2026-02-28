---
title: ListConvolve
---

`ListConvolve[ker, list]` gives a convolution of list using kernel ker.

## Examples

```wolfram
ListConvolve[{1, 2, 1}, {1, 4, 8, 10, 8, 4, 1}]
```

```wolfram
ker = {1, 2, 1};
data = ListConvolve[ker, {1, 0, 0, 0, 1}];
data
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListConvolve.html) for more details.

## 2D example

```wolfram
ker2 = {{1, 2, 1}, {2, 4, 2}, {1, 2, 1}};
data2 = {{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 1, 0}, {0, 0, 0, 1}};
ListConvolve[ker2, data2]
```

## Padding and alignment

The third argument controls alignment and cyclic behavior, while explicit padding is supplied as the fourth argument. For example, `ListConvolve[ker, list, k]` makes a cyclic convolution aligning the `k`-th element of `ker` with each element of `list`, and `ListConvolve[ker, list, {kL, kR}]` specifies left/right alignment.

To pad the input at each end use a padding argument `p` (a single value) or a list of padding values. For example, padding with zeros:

```wolfram
ListConvolve[{1, 2, 1}, {1, 0, 0, 0, 1}, {2, 2}, 0]
```

Or supply a list of padding values that will be repeated cyclically:

```wolfram
ListConvolve[{1, 2, 1}, {1, 0, 0, 0, 1}, {2, 2}, {a, b}]
```

See the Wolfram Language reference for additional forms (generalized convolutions and level specifications).
