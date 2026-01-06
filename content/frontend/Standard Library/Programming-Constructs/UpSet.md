---
title: UpSet
---

`lhs ^= rhs` assigns rhs to be the value of lhs, and associates the assignment with symbols that occur at level one in lhs.

## Examples

Associate with a symbol in an expression:

```wolfram
Format[myObj[x_]] ^= Row[{"Object: ", x}];
myObj[5]
(* Object: 5 *)
```

Define behavior for a head:

```wolfram
f[g[x_]] ^= x^2;
f[g[3]]
(* 9 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UpSet.html) for more details.*