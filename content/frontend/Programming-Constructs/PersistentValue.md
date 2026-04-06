---
title: PersistentValue
---

`PersistentValue["name"]` represents the persistent value associated with the key "name".

- `PersistentValue["name", loc]` represents the persistent value associated with name stored in persistence location loc.
- `PersistentValue["name", {loc1, ...}]` represents the persistent value associated with name at the first of the locations loci at which it occurs.

## Examples

```wolfram
PersistentValue["mykey"] = 42
```

```wolfram
PersistentValue["mykey"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PersistentValue.html) for more details.