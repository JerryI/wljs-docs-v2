---
title: Check
---

`Check[expr, failexpr]` evaluates expr, returning the result unless messages were generated, in which case it returns failexpr.

## Examples

Catch errors:

```wolfram
Check[1/0, "Error occurred"]
(* "Error occurred" *)
```

Successful evaluation:

```wolfram
Check[1 + 1, "Error"]
(* 2 *)
```

Check for specific messages:

```wolfram
Check[Log[-1], "Invalid", {Log::argx}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Check.html) for more details.