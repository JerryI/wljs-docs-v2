---
title: SetDelayed
---

`lhs := rhs` assigns rhs to be the delayed value of lhs. The rhs is maintained unevaluated and evaluated afresh each time lhs appears.

## Examples

Define a delayed rule:

```wolfram
f[x_] := x^2
f[3]
(* 9 *)
```

Compare with immediate assignment:

```wolfram
rand := RandomReal[]
rand (* different each time *)
rand (* different each time *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SetDelayed.html) for more details.