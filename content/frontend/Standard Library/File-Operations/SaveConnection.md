---
title: SaveConnection
---

`SaveConnection` is an option for `ServiceConnect` that determines whether the connection should be saved in the authenticated user's account.

## Examples

Connect and save credentials:
```wolfram
ServiceConnect["Twitter", SaveConnection -> True]
```

Connect without saving:
```wolfram
ServiceConnect["Gmail", SaveConnection -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SaveConnection.html) for more details.*