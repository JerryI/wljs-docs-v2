---
title: MissingDataRules
---

`MissingDataRules` is an option for `SemanticImport` and related functions that specifies what should be considered "missing" and what to replace it with.

## Examples

```wolfram
SemanticImport["data.csv", MissingDataRules -> {"NA" -> Missing["NotAvailable"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MissingDataRules.html) for more details.*