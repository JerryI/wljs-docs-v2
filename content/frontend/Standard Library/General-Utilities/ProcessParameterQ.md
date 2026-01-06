---
title: ProcessParameterQ
---

`ProcessParameterQ[proc]` yields `True` if proc is a valid random process, and yields `False` otherwise.

This function validates whether a given object represents a properly defined random process.

## Examples

```wolfram
ProcessParameterQ[WienerProcess[]]
```

```wolfram
ProcessParameterQ[PoissonProcess[3]]
```

```wolfram
ProcessParameterQ[x + y]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProcessParameterQ.html) for more details.*