---
title: Assert
---

`Assert[test]` represents the assertion that test is `True`. If assertions are enabled and test is not `True`, an assertion failure is generated.

## Examples

Basic assertion:

```wolfram
Assert[1 + 1 == 2]
(* Null - passes silently *)
```

Failing assertion:

```wolfram
Assert[1 + 1 == 3]
(* Assertion failure message if assertions enabled *)
```

With tag:

```wolfram
Assert[x > 0, "PositiveCheck"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Assert.html) for more details.*