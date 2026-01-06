---
title: LocalSymbol
---

`LocalSymbol["name"]` represents a symbol whose value is persistently stored in the local file system.

`LocalSymbol[obj]` represents a persistent symbol corresponding to the local object obj.

## Examples

Store a value persistently:

```wolfram
LocalSymbol["mydata"] = {1, 2, 3}
(* {1, 2, 3} *)
```

Retrieve the value:

```wolfram
LocalSymbol["mydata"]
(* {1, 2, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalSymbol.html) for more details.*