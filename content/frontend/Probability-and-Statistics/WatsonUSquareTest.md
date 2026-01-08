---
title: WatsonUSquareTest
---

`WatsonUSquareTest[data]` tests whether data is normally distributed using the Watson U² test.

`WatsonUSquareTest[data,dist]` tests whether data is distributed according to dist using the Watson U² test.

`WatsonUSquareTest[data,dist,"property"]` returns the value of "property".

## Examples

Test if data follows a uniform distribution:

```wolfram
WatsonUSquareTest[{0.1, 0.3, 0.5, 0.7, 0.9}, UniformDistribution[]]
```

Get the p-value:

```wolfram
WatsonUSquareTest[RandomReal[1, 100], UniformDistribution[], "PValue"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WatsonUSquareTest.html) for more details.