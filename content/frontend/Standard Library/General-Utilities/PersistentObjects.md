---
title: PersistentObjects
---

`PersistentObjects[]` gives all persistent objects in all locations in `$PersistencePath`.

- `PersistentObjects[patt]` gives all persistent objects whose names match the string pattern patt.
- `PersistentObjects[patt, loc]` gives all matching persistent objects in persistence location loc.
- `PersistentObjects[patt, {loc1, ...}]` gives all matching persistent objects in all the loci.

## Examples

```wolfram
PersistentObjects[]
```

```wolfram
PersistentObjects["my*"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PersistentObjects.html) for more details.*