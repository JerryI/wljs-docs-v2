---
title: TrigFactor
---

`TrigFactor[expr]` factors trigonometric functions in expr.

## Examples

Factor a sum of sines:

```wolfram
TrigFactor[Sin[x] + Sin[y]]
(* 2 Cos[(x - y)/2] Sin[(x + y)/2] *)
```

Factor a difference:

```wolfram
TrigFactor[Cos[x] - Cos[y]]
(* -2 Sin[(x - y)/2] Sin[(x + y)/2] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrigFactor.html) for more details.