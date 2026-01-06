# Distribute

`Distribute[f[x1, x2, ...]]` distributes f over `Plus` appearing in any xi.

`Distribute[expr, g]` distributes over g.

`Distribute[expr, g, f]` performs distribution only if the head is f.

## Examples

Distribute multiplication over addition:

```wolfram
Distribute[f[a + b, c + d]]
(* f[a, c] + f[a, d] + f[b, c] + f[b, d] *)
```

Distribute over a custom head:

```wolfram
Distribute[f[g[a, b], g[c, d]], g]
(* g[f[a, c], f[a, d], f[b, c], f[b, d]] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Distribute.html) for more details.*