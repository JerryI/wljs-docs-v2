---
title: Asymptotic
---

`Asymptotic[expr, x -> x0]` gives an asymptotic approximation for expr near x0.

`Asymptotic[expr, {x, x0, n}]` gives an asymptotic approximation for expr near x0 to order n.

## Examples

Asymptotic approximation near infinity:

```wolfram
Asymptotic[Sqrt[1 + 1/x], x -> Infinity]
(* 1 + 1/(2 x) *)
```

With specified order:

```wolfram
Asymptotic[Gamma[x], {x, Infinity, 2}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Asymptotic.html) for more details.