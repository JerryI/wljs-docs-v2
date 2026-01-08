---
title: MatrixLog
---

`MatrixLog[m]` gives the matrix logarithm of a matrix m.

## Examples

Matrix logarithm:

```wolfram
MatrixLog[{{E, 0}, {0, E^2}}]
(* {{1, 0}, {0, 2}} *)
```

Verify with MatrixExp:

```wolfram
MatrixExp[MatrixLog[{{2, 0}, {0, 3}}]]
(* {{2, 0}, {0, 3}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatrixLog.html) for more details.