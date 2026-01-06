---
title: PacletFindRemote
---

`PacletFindRemote["name"]` gives a list of paclets that match "name" available on known paclet sites.

- `PacletFindRemote["name" -> "version"]` gives a list of paclets that match "name" and "version" available on known paclet sites.
- `PacletFindRemote["name", <|prop1 -> val1, prop2 -> val2, ...|>]` gives a list of paclets that match "name" and criteria given by the propi->vali available on known paclet sites.

This function searches remote paclet repositories for available packages.

## Examples

```wolfram
PacletFindRemote["ResourceFunctions"]
```

```wolfram
PacletFindRemote["*Graph*"]
```

```wolfram
PacletFindRemote["ServiceConnection_*"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletFindRemote.html) for more details.*