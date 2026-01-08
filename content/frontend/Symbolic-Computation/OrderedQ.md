---
title: OrderedQ
---

`OrderedQ[h[e1, e2, …]]` gives `True` if the ei are in canonical order, and `False` otherwise.

`OrderedQ[h[e1, e2, …], p]` uses the ordering function p.

## Examples

Check canonical order:

```wolfram
OrderedQ[{a, b, c}]
(* True *)
```

Not in order:

```wolfram
OrderedQ[{c, a, b}]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OrderedQ.html) for more details.