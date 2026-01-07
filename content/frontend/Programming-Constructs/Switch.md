---
title: Switch
---

`Switch[expr, form1, value1, form2, value2, ...]` evaluates expr, then returns the value corresponding to the first matching form.

## Examples

Switch on value:

```wolfram
Switch["b",
  "a", 1,
  "b", 2,
  "c", 3
]
(* 2 *)
```

With default:

```wolfram
Switch[5,
  1, "one",
  2, "two",
  _, "other"
]
(* "other" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Switch.html) for more details.*