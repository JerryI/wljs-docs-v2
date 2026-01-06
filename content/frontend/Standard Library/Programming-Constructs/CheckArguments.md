---
title: CheckArguments
---

`CheckArguments[f[args], n]` gives True if args consists of exactly n positional arguments followed by valid options for f, and False otherwise.

`CheckArguments[f[args], {min, max}]` requires the number of positional arguments to be between min and max.

## Examples

Check for exactly 2 arguments:

```wolfram
CheckArguments[myFunc[a, b], 2]
(* True *)
```

Check argument count range:

```wolfram
CheckArguments[myFunc[a, b, c], {1, 3}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CheckArguments.html) for more details.*