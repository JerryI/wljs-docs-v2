---
title: PersistenceTime
---

`PersistenceTime` is an option for various functions that specifies when a persistent value should be treated as expired.

## Examples

```wolfram
PersistentValue["mykey", PersistenceTime -> Quantity[1, "Hours"]]
```

```wolfram
Options[PersistentValue, PersistenceTime]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PersistenceTime.html) for more details.*