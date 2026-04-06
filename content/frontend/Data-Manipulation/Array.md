---
title: Array
---

`Array[f, n]` generates a list of length n, with elements f[i].

`Array[f, n, r]` generates a list using the index origin r.

`Array[f, {n1, n2, ...}]` generates an n1×n2×... array of nested lists, with elements f[i1, i2, ...].

## Examples

Generate a simple array:

```wolfram
Array[f, 4]
(* {f[1], f[2], f[3], f[4]} *)
```

Generate a 2×3 matrix:

```wolfram
Array[a, {2, 3}]
(* {{a[1,1], a[1,2], a[1,3]}, {a[2,1], a[2,2], a[2,3]}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Array.html) for more details.