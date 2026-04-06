---
title: NestWhileList
---

`NestWhileList[f, expr, test]` generates a list of results from applying f repeatedly until test fails.

`NestWhileList[f, expr, test, m, max]` applies f at most max times.

## Examples

Divide by 2 while even:

```wolfram
NestWhileList[#/2 &, 64, EvenQ]
(* {64, 32, 16, 8, 4, 2, 1} *)
```

Collatz sequence:

```wolfram
NestWhileList[If[EvenQ[#], #/2, 3# + 1] &, 7, # != 1 &]
(* {7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NestWhileList.html) for more details.