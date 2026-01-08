---
title: PersistentSymbol
---

`PersistentSymbol["name"]` represents the persistent symbol associated with the key "name".

- `PersistentSymbol["name", loc]` represents the persistent symbol associated with name stored in persistence location loc.
- `PersistentSymbol["name", {loc1, ...}]` represents the persistent symbol associated with name at the first of the locations loci at which it occurs.

## Examples

```wolfram
PersistentSymbol["myValue"] = 42
```

```wolfram
PersistentSymbol["myValue"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PersistentSymbol.html) for more details.