# DiscreteLyapunovSolve

`DiscreteLyapunovSolve[a, c]` finds the numeric solution x of the discrete matrix equation a.x.a† - x = c.

`DiscreteLyapunovSolve[a, b, c]` solves a.x.b† - x = c.

`DiscreteLyapunovSolve[{a, d}, c]` solves a.x.a† - d.x.d† = c.

`DiscreteLyapunovSolve[{a, d}, {b, e}, c]` solves a.x.b† - d.x.e† = c.

## Examples

Solve discrete Lyapunov equation:

```wolfram
DiscreteLyapunovSolve[{{0.5}}, {{1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteLyapunovSolve.html) for more details.*