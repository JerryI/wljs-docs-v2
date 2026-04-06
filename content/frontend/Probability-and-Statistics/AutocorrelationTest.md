---
title: AutocorrelationTest
---

`AutocorrelationTest[data]` tests whether the data is autocorrelated.

`AutocorrelationTest[data,k]` tests whether the data is autocorrelated up to lag k.

`AutocorrelationTest[data,k,"property"]` returns the value of "property" for a given model.

## Examples

Test for autocorrelation in data:

```wolfram
data = RandomReal[1, 100];
AutocorrelationTest[data]
```

Get the p-value:

```wolfram
AutocorrelationTest[data, 5, "PValue"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AutocorrelationTest.html) for more details.