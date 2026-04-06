---
title: KroneckerDelta
---

`KroneckerDelta[n1, n2, ...]` gives the Kronecker delta δ_{n1 n2 ...}, equal to 1 if all the n_i are equal, and 0 otherwise.

## Examples

Equal arguments:

```wolfram
KroneckerDelta[3, 3]
(* 1 *)
```

Unequal arguments:

```wolfram
KroneckerDelta[1, 2]
(* 0 *)
```

Multiple arguments:

```wolfram
KroneckerDelta[5, 5, 5]
(* 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KroneckerDelta.html) for more details.