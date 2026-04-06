---
title: MinValue
---

`MinValue[f,x]` gives the minimum value of f with respect to x.

`MinValue[f,{x,y,…}]` gives the exact minimum value of f with respect to x, y, ….

`MinValue[{f,cons},{x,y,…}]` gives the minimum value of f subject to the constraints cons.

`MinValue[…,x∈rdom]` constrains x to be in the region or domain rdom.

`MinValue[…,…,dom]` constrains variables to the domain dom, typically Reals or Integers.

## Examples

Find the minimum value of a function:

```wolfram
MinValue[x^2 + 2x + 1, x]
(* 0 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinValue.html) for more details.