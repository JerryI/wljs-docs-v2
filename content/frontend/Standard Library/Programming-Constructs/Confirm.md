---
title: Confirm
---

`Confirm[expr]` confirms that expr is not a failure, otherwise throws an error to the nearest `Enclose`.

## Examples

Use with Enclose:

```wolfram
Enclose[
  x = Confirm[someComputation[]];
  x + 1
]
(* Returns Failure if someComputation fails *)
```

With error info:

```wolfram
Confirm[result, "Computation failed"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Confirm.html) for more details.*