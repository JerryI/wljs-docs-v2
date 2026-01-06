---
title: FindGeneratingFunction
---

`FindGeneratingFunction[{a0,a1,…},x]` attempts to find a simple generating function in x whose nth series coefficient is an.

`FindGeneratingFunction[{{n0,a0},{n1,a1},…},x]` attempts to find a simple generating function whose nith series coefficient is ai. 

## Examples

```wolfram
(* Find generating function for Fibonacci numbers *)
FindGeneratingFunction[{1, 1, 2, 3, 5, 8, 13}, x]

(* Find generating function for factorial *)
FindGeneratingFunction[{1, 1, 2, 6, 24, 120}, x]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindGeneratingFunction.html) for more details.*