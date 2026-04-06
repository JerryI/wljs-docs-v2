---
title: ListZTransform
---

`ListZTransform[list, z]` gives the Z transform of list as a function of z.

- `ListZTransform[list, z, k]` places the first element of list at integer time k on the infinite time axis.
- `ListZTransform[list, {z1, z2, ...}, {k1, k2, ...}]` gives the multidimensional Z transform.

## Examples

```wolfram
ListZTransform[{1, 2, 3, 4}, z]
```

```wolfram
ListZTransform[{a, b, c}, z, 0]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListZTransform.html) for more details.