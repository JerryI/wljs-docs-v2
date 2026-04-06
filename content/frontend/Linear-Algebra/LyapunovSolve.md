---
title: LyapunovSolve
---

`LyapunovSolve[a,c]` finds a solution x of the matrix Lyapunov equation a.x+x.aᵀ=c.

`LyapunovSolve[a,b,c]` solves a.x+x.bᵀ=c.

`LyapunovSolve[{a,d},c]` solves a.x.dᵀ+d.x.aᵀ=c.

`LyapunovSolve[{a,d},{b,e},c]` solves a.x.eᵀ+d.x.bᵀ=c.

## Examples

Solve a Lyapunov equation:

```wolfram
LyapunovSolve[{{1, 2}, {0, 3}}, {{1, 0}, {0, 1}}]
(* {{1/2, 1/5}, {1/5, 1/6}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LyapunovSolve.html) for more details.