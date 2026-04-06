---
title: FindSequenceFunction
---

`FindSequenceFunction[{a1, a2, a3, ...}]` attempts to find a simple function that yields the sequence an when given successive integer arguments.

`FindSequenceFunction[list, n]` gives the function applied to n.

## Examples

Find a sequence formula:

```wolfram
FindSequenceFunction[{1, 4, 9, 16, 25}]
(* #1^2 & *)
```

Apply to n:

```wolfram
FindSequenceFunction[{1, 1, 2, 3, 5, 8}, n]
(* Fibonacci[n] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindSequenceFunction.html) for more details.