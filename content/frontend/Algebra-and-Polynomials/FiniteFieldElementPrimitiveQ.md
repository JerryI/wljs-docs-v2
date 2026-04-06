---
title: FiniteFieldElementPrimitiveQ
---

`FiniteFieldElementPrimitiveQ[a]` tests whether a is a primitive element of its ambient field.

## Examples

Test if an element is primitive:

```wolfram
ff = FiniteField[2, 3];
a = ff["PrimitiveElement"];
FiniteFieldElementPrimitiveQ[a]
```

Test another element:

```wolfram
FiniteFieldElementPrimitiveQ[a^2]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FiniteFieldElementPrimitiveQ.html) for more details.