---
title: ArrayPad
---

`ArrayPad[array, m]` gives an array with m zeros of padding on every side.

`ArrayPad[array, m, padding]` uses the specified padding.

`ArrayPad[array, {m, n}]` pads with m elements at the beginning and n at the end.

## Examples

Pad a list with zeros:

```wolfram
ArrayPad[{1, 2, 3}, 2]
(* {0, 0, 1, 2, 3, 0, 0} *)
```

Pad with a specific value:

```wolfram
ArrayPad[{1, 2, 3}, 1, x]
(* {x, 1, 2, 3, x} *)
```

Asymmetric padding:

```wolfram
ArrayPad[{1, 2, 3}, {1, 3}]
(* {0, 1, 2, 3, 0, 0, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayPad.html) for more details.*