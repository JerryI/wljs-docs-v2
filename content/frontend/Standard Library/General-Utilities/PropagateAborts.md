---
title: PropagateAborts
---

`PropagateAborts` is an option to `CheckAbort` to control whether a handled abort propagates to the enclosing function.

## Examples

Handle abort without propagating:

```wolfram
CheckAbort[Abort[]; Print["after"], Print["aborted"], 
  PropagateAborts -> False]
```

Propagate the abort:

```wolfram
CheckAbort[Abort[]; Print["after"], Print["aborted"], 
  PropagateAborts -> True]
```

Default behavior (propagates):

```wolfram
CheckAbort[Abort[], "caught"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PropagateAborts.html) for more details.*