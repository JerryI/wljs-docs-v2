# Operate

`Operate[p, f[x, y, ...]]` gives `p[f][x, y, ...]`, applying `p` to the head of the expression.

## Examples

Apply function to head:

```wolfram
Operate[g, f[x, y]]
(* g[f][x, y] *)

Operate[Print, Sin[x]]
(* Print[Sin][x] *)

(* At level 2 *)
Operate[h, f[g[x]], 2]
(* f[h[g]][x] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Operate.html) for more details.*