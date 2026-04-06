---
title: Element
---

`Element[x, dom]` or `x ∈ dom` asserts that x is an element of the domain dom.

`Element[x, reg]` asserts that x is an element of the region reg.

## Examples

Assert integer domain:

```wolfram
Simplify[Sin[n Pi], Element[n, Integers]]
(* 0 *)
```

Real assumption:

```wolfram
Integrate[1/(1 + x^2), {x, -Infinity, Infinity}, Assumptions -> Element[x, Reals]]
(* Pi *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Element.html) for more details.