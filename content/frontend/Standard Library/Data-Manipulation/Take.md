---
title: Take
---

`Take[list, n]` gives the first n elements of list.

`Take[list, -n]` gives the last n elements of list.

`Take[list, {m, n}]` gives elements m through n of list.

## Examples

Take the first 3 elements:

```wolfram
Take[{a, b, c, d, e}, 3]
(* {a, b, c} *)
```

Take the last 2 elements:

```wolfram
Take[{a, b, c, d, e}, -2]
(* {d, e} *)
```

Take a range:

```wolfram
Take[{a, b, c, d, e}, {2, 4}]
(* {b, c, d} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Take.html) for more details.*