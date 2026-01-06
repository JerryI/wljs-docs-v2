---
title: TransformedProcess
---

`TransformedProcess[expr, x ⟼ proc, t]` represents the transformed process of expr where the variable x follows the random process proc and t denotes the time.

- `TransformedProcess[expr, {x1 ⟼ proc1, x2 ⟼ proc2, ...}, t]` represents a transformed process where x1, x2, ... are independent and follow the processes proc1, proc2, ....

## Examples

Square of Wiener process:

```wolfram
TransformedProcess[x^2, x \[Distributed] WienerProcess[], t]
```

Sum of processes:

```wolfram
TransformedProcess[x + y, {x \[Distributed] WienerProcess[], y \[Distributed] PoissonProcess[1]}, t]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransformedProcess.html) for more details.*