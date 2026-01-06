---
title: ConfirmQuiet
---

`ConfirmQuiet[expr]` confirms that no messages are generated during the evaluation of expr, otherwise quieting them and throwing an error to the nearest surrounding Enclose.

`ConfirmQuiet[expr, s::t]` tests only for the specified message.

`ConfirmQuiet[expr, {s1::t1, s2::t2, ...}]` tests only for the specified list of messages.

## Examples

Confirm no messages are generated:

```wolfram
Enclose[ConfirmQuiet[1/0]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConfirmQuiet.html) for more details.*