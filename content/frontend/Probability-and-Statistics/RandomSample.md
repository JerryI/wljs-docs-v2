---
title: RandomSample
---

`RandomSample[{e1, e2, ...}, n]` gives a pseudorandom sample of n elements (without replacement).

`RandomSample[{e1, e2, ...}]` gives a pseudorandom permutation of the elements.

## Examples

Random sample without replacement:

```wolfram
RandomSample[{1, 2, 3, 4, 5}, 3]
(* {3, 5, 1} *)
```

Random permutation:

```wolfram
RandomSample[{a, b, c, d}]
(* {c, a, d, b} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomSample.html) for more details.