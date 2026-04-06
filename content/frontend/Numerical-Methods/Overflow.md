---
title: Overflow
---

`Overflow[]` represents a number too large to represent explicitly on your computer system.

## Examples

Cause an overflow in machine arithmetic:

```wolfram
10.^1000
(* Overflow[] *)
```

Check for overflow:

```wolfram
MatchQ[Overflow[], Overflow[]]
(* True *)
```

Handle overflow in computations:

```wolfram
Quiet[Check[10.^500, "Overflow detected"]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Overflow.html) for more details.