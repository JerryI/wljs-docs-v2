---
title: UpSetDelayed
---

`lhs ^:= rhs` assigns rhs to be the delayed value of lhs, and associates the assignment with symbols that occur at level one in lhs.

## Examples

Delayed upvalue assignment:

```wolfram
Format[myType[x_]] ^:= Style[x, Red, Bold];
myType["hello"]
```

Define behavior for nested pattern:

```wolfram
f[g[x_]] ^:= x + 1;
f[g[5]]
(* 6 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UpSetDelayed.html) for more details.*