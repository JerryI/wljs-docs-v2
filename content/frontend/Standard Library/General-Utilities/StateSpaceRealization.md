---
title: StateSpaceRealization
---

`StateSpaceRealization` is an option to `StateSpaceModel` that specifies its canonical representation.

## Examples

Create a controllable canonical form:
```wolfram
StateSpaceModel[tf, StateSpaceRealization -> "Controllable"]
```

Use observable form:
```wolfram
StateSpaceModel[system, StateSpaceRealization -> "Observable"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StateSpaceRealization.html) for more details.*