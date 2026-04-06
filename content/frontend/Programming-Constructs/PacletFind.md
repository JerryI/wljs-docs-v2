---
title: PacletFind
---

`PacletFind["name"]` gives a list of installed paclets that match "name".

`PacletFind["name" -> "version"]` gives a list of installed paclets that match "name" and "version".

`PacletFind["name", <|prop1 -> val1, prop2 -> val2, ...|>]` gives a list of installed paclets that match "name" and criteria given by the propi -> vali.

## Examples

```wolfram
PacletFind["PacletManager"]
```

```wolfram
PacletFind["*Data*"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PacletFind.html) for more details.