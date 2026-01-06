---
title: ParallelArray
---

`ParallelArray[f,n]` generates in parallel a list of length n, with elements f[i], evaluated.

`ParallelArray[f,{n1,n2,...}]` generates in parallel an n1×n2×... array of nested lists, with elements f[i1,i2,...].

`ParallelArray[f,{n1,n2,...},{r1,r2,...}]` generates in parallel a list using the index origins ri (default 1).

`ParallelArray[f,dims,origin,h]` uses head h, rather than List, for each level of the array.

## Examples

Generate a list in parallel:

```wolfram
ParallelArray[f, 5]
(* {f[1], f[2], f[3], f[4], f[5]} *)
```

Generate a 2D array:

```wolfram
ParallelArray[Plus, {3, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParallelArray.html) for more details.*