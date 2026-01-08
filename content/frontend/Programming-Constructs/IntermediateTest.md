---
title: IntermediateTest
---

`IntermediateTest[input]` creates an intermediate test to determine whether input evaluates to `True`.

- `IntermediateTest[input, expected]` tests whether input evaluates to expected.
- `IntermediateTest[input, expected, messages]` creates a test expecting the specified message names.

## Examples

```wolfram
IntermediateTest[1 + 1 == 2]
```

```wolfram
IntermediateTest[Sqrt[4], 2]
```

```wolfram
IntermediateTest[1/0, ComplexInfinity, {Power::infy}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntermediateTest.html) for more details.