---
title: Off
---

`Off[symbol::tag]` switches off a message permanently so it is no longer printed.

## Examples

Turn off a specific message:

```wolfram
Off[General::spell1]
(* Spelling warnings disabled *)
```

Turn off all messages from a symbol:

```wolfram
Off[Power::infy]
1/0
(* ComplexInfinity - no message *)
```

Turn back on with On:

```wolfram
On[General::spell1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Off.html) for more details.*