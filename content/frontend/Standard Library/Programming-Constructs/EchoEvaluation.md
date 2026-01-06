---
title: EchoEvaluation
---

`EchoEvaluation[expr]` prints expr before evaluation, then prints the result after evaluation and returns that result.

`EchoEvaluation[expr, label]` prepends label when printing.

`EchoEvaluation[expr, label1 -> label2]` prepends label1 before evaluation and label2 after.

## Examples

Debug evaluation:

```wolfram
EchoEvaluation[2 + 3]
(* prints: 2 + 3, then: 5 *)
(* returns 5 *)
```

With labels:

```wolfram
EchoEvaluation[Sin[Pi/4], "input" -> "output"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EchoEvaluation.html) for more details.*