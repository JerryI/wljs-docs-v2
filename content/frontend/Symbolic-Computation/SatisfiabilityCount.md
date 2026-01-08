---
title: SatisfiabilityCount
---

`SatisfiabilityCount[bf]` counts the number of possible combinations of variable values that yield `True` when supplied as arguments to the Boolean function bf.

- `SatisfiabilityCount[expr, {a1, a2, ...}]` counts the number of possible combinations of the ai that make the Boolean expression expr be true.

This function counts the satisfying assignments of a Boolean formula.

## Examples

```wolfram
SatisfiabilityCount[a || b]
```

```wolfram
SatisfiabilityCount[a && b && c, {a, b, c}]
```

```wolfram
SatisfiabilityCount[(a || b) && (!a || c), {a, b, c}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SatisfiabilityCount.html) for more details.