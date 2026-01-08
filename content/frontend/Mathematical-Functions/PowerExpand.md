---
title: PowerExpand
---

`PowerExpand[expr]` expands all powers of products and powers.

`PowerExpand[expr, {x1, x2, ...}]` expands only with respect to the variables xi.

## Examples

Expand a power of a product:

```wolfram
PowerExpand[(a b)^n]
(* a^n b^n *)
```

Expand a logarithm:

```wolfram
PowerExpand[Log[x y]]
(* Log[x] + Log[y] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PowerExpand.html) for more details.