---
title: FrobeniusSolve
---

`FrobeniusSolve[{a1, ..., an}, b]` gives a list of all solutions of the Frobenius equation a1*x1 + ... + an*xn = b.

- `FrobeniusSolve[{a1, ..., an}, b, m]` gives at most m solutions.

## Examples

Find all ways to make 10 using 3 and 5:

```wolfram
FrobeniusSolve[{3, 5}, 10]
```

Find at most 3 solutions:

```wolfram
FrobeniusSolve[{2, 3, 5}, 15, 3]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FrobeniusSolve.html) for more details.