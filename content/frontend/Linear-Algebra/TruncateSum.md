---
title: TruncateSum
---

`TruncateSum[sexpr,n]` truncates each Sum in sexpr to have at most n terms.

`TruncateSum[sexpr,{m,n,…}]` truncates each multiple Sum in sexpr using the iterative specification {m,n,…}.

## Examples

Truncate an infinite sum to 5 terms:

```wolfram
TruncateSum[Sum[1/n^2, {n, 1, Infinity}], 5]
(* Sum[1/n^2, {n, 1, 5}] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TruncateSum.html) for more details.