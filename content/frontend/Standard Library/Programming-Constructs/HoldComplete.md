---
title: HoldComplete
---

`HoldComplete[expr]` shields expr completely from the standard Wolfram Language evaluation process, preventing even upvalues associated with expr from being used.

## Examples

Prevent evaluation completely:

```wolfram
HoldComplete[1 + 1]
(* HoldComplete[1 + 1] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HoldComplete.html) for more details.*