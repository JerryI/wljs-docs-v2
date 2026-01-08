---
title: Quiet
---

`Quiet[expr]` evaluates expr without outputting any messages generated.

`Quiet[expr, {s1::t1, s2::t2, ...}]` quietens only the specified messages.

## Examples

Suppress all messages:

```wolfram
Quiet[1/0]
(* ComplexInfinity *)
```

Suppress specific messages:

```wolfram
Quiet[Log[-1], {Log::argx}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Quiet.html) for more details.